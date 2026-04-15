import { useState, useEffect, useRef, useCallback } from 'react';
import * as echarts from 'echarts';
import { BUBBLE_DATA, INDUSTRY_CHANGE_DATA } from '../../utils/placeholder-data';
import { ChartNoAxesColumnDecreasing, ChartNoAxesGantt , ChevronDown } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────────
 *  DUMMY DATA — Replace with API calls during backend integration.
 *
 *  Expected API response shape:
 *  {
 *    name: string,         // Industry or company name
 *    pe: number,           // PE percentile (x-axis, 0–100)
 *    pb: number,           // PB percentile (y-axis, 0–100)
 *    size: number,         // Market cap or weight (bubble size)
 *    highlighted: boolean, // Whether this bubble is "active" / selected
 *  }
 *
 *  Filters:
 *    metric   — PE/PB, EV/EBITDA, etc.   (dropdown)
 *    timeframe — 1Y, 5Y, 10Y             (tab buttons)
 *
 *  To integrate:
 *    Replace `BUBBLE_DATA[metric][timeframe]` with:
 *      fetch(`/api/industry-chart?metric=${metric}&tf=${timeframe}`)
 * ────────────────────────────────────────────────────────────────────────────── */

const METRIC_OPTIONS = [...Object.keys(BUBBLE_DATA), '% Change'];
const TIMEFRAME_OPTIONS = ['1Y', '5Y', '10Y'];
const CHANGE_PERIOD_OPTIONS = ['1 Day', '5 Days', '1 Mon', '2 Mon']; 

/* ══════════════════════════════════════════════════════════════════════════════
 *  MAIN COMPONENT
 * ══════════════════════════════════════════════════════════════════════════════ */
export default function IndustryChart({ onMetricChange, initialMetric = 'PE/PB' }) {
  const [metric, setMetric] = useState(initialMetric);
  const [timeframe, setTimeframe] = useState('1Y');
  const [viewMode, setViewMode] = useState('chart'); // 'chart' | 'list'
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [changePeriod, setChangePeriod] = useState('1 Day');

  const handleMetricChange = (newMetric) => {
    setMetric(newMetric);
    onMetricChange?.(newMetric);
  };

  const chartContainerRef = useRef(null);
  const chartInstance = useRef(null);

  /* ── Get current data based on filters ── */
  const getData = useCallback(() => {
    return BUBBLE_DATA[metric]?.[timeframe] || [];
  }, [metric, timeframe]);

  /* ── Axis label for the selected metric ── */
  const xLabel = metric === 'PE/PB' ? 'PE%' : 'EV%';
  const yLabel = metric === 'PE/PB' ? 'PB%' : 'EBITDA%';

  /* ── Init ECharts ── */
  useEffect(() => {
    if (!chartContainerRef.current) return;
    const container = chartContainerRef.current;

    if (!chartInstance.current) {
      chartInstance.current = echarts.init(container);
    }

    const observer = new ResizeObserver(() => {
      chartInstance.current?.resize();
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ── Update chart when data changes ── */
  useEffect(() => {
    if (!chartInstance.current) return;

    const data = getData();

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          const d = params.data;
          return `<b>${d[3]}</b><br/>${xLabel}: ${d[0]}%<br/>${yLabel}: ${d[1]}%`;
        },
        backgroundColor: '#fff',
        borderColor: '#E0E0E4',
        borderWidth: 1,
        textStyle: { fontSize: 11, color: '#333' },
      },
      grid: {
        left: 40,
        right: 16,
        top: 12,
        bottom: 32,
        containLabel: false,
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 20,
        name: xLabel,
        nameLocation: 'end',
        nameGap: 4,
        nameTextStyle: { fontSize: 9, color: '#9ca3af', padding: [0, 0, 0, 0] },
        axisLabel: {
          formatter: '{value}%',
          fontSize: 9,
          color: '#9ca3af',
        },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          lineStyle: { color: '#f3f4f6', type: 'dashed' },
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 20,
        name: yLabel,
        nameLocation: 'end',
        nameGap: 8,
        nameTextStyle: { fontSize: 9, color: '#9ca3af' },
        axisLabel: {
          formatter: '{value}%',
          fontSize: 9,
          color: '#9ca3af',
        },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          lineStyle: { color: '#f3f4f6', type: 'dashed' },
        },
      },
      series: [
        {
          type: 'scatter',
          symbolSize: (val) => val[2],
          data: data.map((item) => [
            item.pe,
            item.pb,
            item.size,
            item.name,
            item.highlighted,
          ]),
          itemStyle: {
            color: (params) => {
              return params.data[4]
                ? '#5B3A8C'
                : 'rgba(155, 114, 200, 0.35)';
            },
            borderWidth: 0,
          },
          animationDuration: 600,
          animationEasing: 'cubicOut',
        },
      ],
    };

    chartInstance.current.setOption(option, true);
    chartInstance.current.resize();
  }, [getData, xLabel, yLabel]);

  /* ── Cleanup on unmount ── */
  useEffect(() => {
    return () => {
      chartInstance.current?.dispose();
      chartInstance.current = null;
    };
  }, []);

  /* ── Trigger resize when switching to chart view ── */
  useEffect(() => {
    if (viewMode === 'chart') {
      requestAnimationFrame(() => {
        chartInstance.current?.resize();
      });
    }
  }, [viewMode]);

  return (
    <div className="flex flex-col h-full w-full min-w-0 overflow-hidden">
      {/* ── Tab header ── */}
      <div className="flex items-center border-b border-[#E0E0E4] bg-[#f7f7f7] shrink-0">
        <div className="px-4 py-2 text-xs font-medium bg-white text-black border-r border-[#E0E0E4] rounded-tr-lg">
          Industry
        </div>
      </div>

      {/* ── Controls bar ── */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 shrink-0 bg-white">
        {/* Metric dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 border border-gray-200 rounded px-2 py-1 text-xs text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            {metric}
            <ChevronDown size={14} />
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-md z-10 min-w-[100px]">
              {METRIC_OPTIONS.map((opt) => (
                <div
                  key={opt}
                  onClick={() => { handleMetricChange(opt); setDropdownOpen(false); }}
                  className={`px-3 py-1.5 text-xs cursor-pointer transition-colors ${metric === opt
                      ? 'bg-[#EDE8F2] text-[#724A9A] font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Timeframe buttons */}
        {metric !== '% Change' && (
        <div className="tab-wrapper border border-[#EDE8F2] rounded m-0 p-0">  
        {TIMEFRAME_OPTIONS.map((t) => (
          <button
            key={t}
            onClick={() => setTimeframe(t)}
            className={`text-xs px-4 py-1 rounded font-medium transition-colors outline-none border-0 ${timeframe === t
                ? 'bg-[#EDE8F2] text-[#4F1D81]' 
                : 'text-black'
              }`} 
          > 
            {t}
          </button>
        ))}
        </div>
        )}

        {/* View mode toggles */}
        {metric !== '% Change' && (
        <div className="ml-auto flex items-center gap-1.5">
          <button
            onClick={() => setViewMode('list')}
            className={`p-1 rounded transition-colors ${viewMode === 'list' ? 'bg-[#724A9A] text-white' : 'bg-[#EDE8F2]'}`}
          >
            <ChartNoAxesGantt size={14} />
          </button>
          <button
            onClick={() => setViewMode('chart')}
            className={`p-1 rounded transition-colors ${viewMode === 'chart' ? 'bg-[#724A9A] text-white' : 'bg-[#EDE8F2]'}`}
          >
            <ChartNoAxesColumnDecreasing size={14} /> 
          </button>
        </div>
        )}
      </div>

      {/* ── Chart / List view — chart container always mounted ── */}
      <div className="flex-1 min-h-0 min-w-0 overflow-hidden" ref={chartContainerRef} style={{ display: viewMode === 'chart' && metric !== '% Change' ? 'block' : 'none' }} />

      {viewMode === 'list' && metric !== '% Change' && (
        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-xs">
            <thead className="bg-[#EDE8F2] sticky top-0">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-black">Industry</th>
                <th className="px-3 py-2 text-right font-medium text-black">{xLabel}</th>
                <th className="px-3 py-2 text-right font-medium text-black">{yLabel}</th>
                <th className="px-3 py-2 text-right font-medium text-black">Size</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {getData().map((item) => (
                <tr key={item.name} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-2 text-gray-700 font-normal flex items-center gap-1.5">
                    <span
                      className="inline-block w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: item.highlighted ? '#5B3A8C' : 'rgba(155, 114, 200, 0.35)' }}
                    />
                    {item.name}
                  </td>
                  <td className="px-3 py-2 text-right text-gray-600">{item.pe}%</td>
                  <td className="px-3 py-2 text-right text-gray-600">{item.pb}%</td>
                  <td className="px-3 py-2 text-right text-gray-600">{item.size}</td>
                </tr>
              ))} 
            </tbody> 
          </table>
        </div>
      )}

      {/* ── % Change view: left period sidebar + scrolling cards ── */}
      {metric === '% Change' && (
        <div className="flex-1 flex min-h-0 min-w-0 overflow-hidden bg-white">
          {/* Left – period selector */}
          <div className="left-sec shrink-0 w-[100px] border-r border-gray-100 py-2 flex flex-col">
            {CHANGE_PERIOD_OPTIONS.map((p) => (
              <button
                key={p} 
                onClick={() => setChangePeriod(p)}
                className={`px-3 py-2 mx-2 text-xs text-center transition-colors ${
                  changePeriod === p
                    ? 'text-[#38155C] font-medium rounded bg-[#EDE8F2]'
                    : 'text-[#616161] font-normal'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          {/* Right – scrolling cards */}
          <div className="flex-1 min-w-0 overflow-x-auto  overflow-y-hidden p-3">
            <div className="flex gap-3 h-full"> 
              {INDUSTRY_CHANGE_DATA.map((item, idx) => (
                <div key={idx} className="min-w-[180px] w-[180px] bg-white rounded-lg p-4 flex flex-col gap-2 shrink-0" style={{boxShadow: '0 8px 12px 0 rgba(72, 26, 117, 0.12)'}}>
                  <h3 className="text-sm text-black font-normal">{item.industry}</h3>
                  <span className={`text-sm font-medium ${item.change >= 0 ? 'text-[#37E790]' : 'text-[#EC4D5C]'}`}>
                    {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}%
                  </span> 
                  {/* Progress bar */}
                  <div className="flex h-[3px] rounded-full overflow-hidden">
                    <div className="rounded-l-full" style={{ width: '35%', background: 'linear-gradient(90deg, #EC4D5C 64.6%, #FFF 100%)' }} />
                    <div style={{ width: '10%', background: '#9EA1A8' }} />
                    <div className="rounded-r-full" style={{ width: '55%', background: 'linear-gradient(90deg, #FFF 0%, #37E790 35.4%)' }} />
                  </div>
                  {/* Stocks */}  
                  <div className="flex flex-col gap-1.5 mt-1">
                    {item.stocks.map((stock) => (
                      <div key={stock.symbol} className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 font-normal">{stock.symbol}</span>
                        <span className={`font-normal ${stock.change >= 0 ? 'text-[#37E790]' : 'text-[#EC4D5C]'}`}>
                          {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
                        </span> 
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
