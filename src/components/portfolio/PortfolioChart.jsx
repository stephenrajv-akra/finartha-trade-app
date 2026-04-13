import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { PORTFOLIO_CHART_DATA } from '../../utils/placeholder-data';

const TIME_RANGES = ['1M', '6M', '1Y', '3Y', '5Y', 'ALL'];

export default function PortfolioChart() { 
  const chartRef = useRef(null);
  const instanceRef = useRef(null);
  const [activeRange, setActiveRange] = useState('ALL');

  // Init chart once
  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current, null, { renderer: 'canvas' });
    instanceRef.current = chart;
    const ro = new ResizeObserver(() => chart.resize());
    ro.observe(chartRef.current);
    return () => { ro.disconnect(); chart.dispose(); };
  }, []);

  // Update data when range changes
  useEffect(() => {
    const chart = instanceRef.current;
    if (!chart) return;
    const { labels, current, invested } = PORTFOLIO_CHART_DATA[activeRange];

    chart.setOption({
      animation: true,
      animationDuration: 400,
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: [8, 12],
        textStyle: { color: '#374151', fontSize: 11 },
        formatter: (params) => {
          const label = params[0]?.axisValue ?? '';
          return `<div style="font-weight:600;margin-bottom:4px;font-size:10px;color:#6b7280">${label}</div>` +
            params.map(p =>
              `<div style="display:flex;align-items:center;gap:6px;font-size:11px">
                <span style="width:8px;height:8px;border-radius:50%;background:${p.color};display:inline-block"></span>
                <span style="flex:1;color:#374151">${p.seriesName}</span>
                <span style="font-weight:700;color:#111827">$${Number(p.value).toLocaleString()}</span>
              </div>`
            ).join('');
        },
      },
      legend: { show: false },
      grid: { top: 10, right: 24, bottom: 28, left: 24 },
      xAxis: {
        type: 'category',
        data: labels,
        boundaryGap: false,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          color: '#9ca3af',
          fontSize: 9,
          interval: Math.floor(labels.length / 6),
          hideOverlap: true,
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: (v) => Math.max(0, v.min - 200),
        max: (v) => v.max + 200,
      },
      series: [
        {
          name: 'Current',
          type: 'line',
          data: current,
          smooth: 0.5,
          symbol: 'circle',
          symbolSize: 6,
          showSymbol: true,
          lineStyle: { color: '#f59e0b', width: 2.5 },
          itemStyle: { color: '#f59e0b', borderColor: '#fff', borderWidth: 2 },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(245,158,11,0.12)' },
              { offset: 1, color: 'rgba(245,158,11,0)' },
            ]),
          },
        },
        {
          name: 'Invested',
          type: 'line',
          data: invested,
          smooth: 0.5,
          symbol: 'circle',
          symbolSize: 6,
          showSymbol: true,
          lineStyle: { color: '#7c6fc4', width: 2.5 },
          itemStyle: { color: '#7c6fc4', borderColor: '#fff', borderWidth: 2 },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(124,111,196,0.10)' },
              { offset: 1, color: 'rgba(124,111,196,0)' },
            ]),
          },
        },
      ],
    }, true);
  }, [activeRange]);

  return (
    <div
      className="flex flex-col h-full overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff 60%, #fffdf4 100%)' }}
    >
      {/* ── Header ── */}
      <div className="px-5 pt-4 pb-1 shrink-0">
        <h2 className="text-[#242424] text-xl font-normal mb-1">Portfolio Analysis</h2>
        <p className="text-[#616161] text-sm font-normal">All data is computed as of previous trading day</p>
      </div>

      {/* ── Legend ── */}
      <div className="flex items-start justify-between px-5 pb-1 shrink-0">
        <div className="flex items-start flex-col gap-1">
            <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 block rounded-full bg-[#CD8F3D] mt-0.5" />
                <p className="text-[#7F7F7F] text-base font-normal">Current</p>
            </div>
            <p className="text-[#242424] text-base font-bold leading-normal">$1,000,00.00</p>
        </div>
        <div className="flex items-start flex-col gap-1"> 
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 block rounded-full bg-[#724A9A] mt-0.5" />
            <p className="text-[#7F7F7F] text-base font-normal">Invested</p>
          </div>
          <p className="text-[#242424] text-base font-bold leading-normal">$5,000,00.00</p>
        </div>
      </div>

      {/* ── Chart ── */}
      <div className="flex-1 min-h-0" ref={chartRef} />

      {/* ── Time Range Pills ── */}
      <div className="flex items-center justify-center gap-1 py-3 shrink-0">
        {TIME_RANGES.map((r) => (
          <button
            key={r}
            onClick={() => setActiveRange(r)}
            className={`px-2 py-1 text-xxs border border-[#EDE8F2] font-medium rounded transition-all ${
              activeRange === r
                ? 'bg-[#AE97C5] text-white'
                : 'text-black' 
            }`}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}
