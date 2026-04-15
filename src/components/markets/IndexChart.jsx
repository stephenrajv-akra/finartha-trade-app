import { useEffect, useRef, useState } from 'react';
import { createChart, LineSeries, ColorType } from 'lightweight-charts';
import YeildCurves from './Yeild-Curves';
import NewFlowChart from './NetFlow-Chart';
import MarketOverviewChart from './Market-Overview-Chart';
import { stocks } from '../../utils/placeholder-data';
const TABS = ['Index Chart', 'Yield Curves', 'Net Inflow', 'Market Overview'];

// Generate realistic intraday percentage-change data for each series
function generateData(baseOffset, volatility, points = 80) {
  const data = [];
  const startDate = new Date('2024-01-02');
  let value = baseOffset;
  for (let i = 0; i < points; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    // skip weekends
    if (d.getDay() === 0 || d.getDay() === 6) continue;
    value += (Math.random() - 0.48) * volatility;
    data.push({
      time: d.toISOString().split('T')[0],
      value: parseFloat(value.toFixed(4)),
    });
  }
  return data;
}

// Get line color for a stock ID
function getLineColorFromStockId(stockId) { 
  const colorMap = {
    'dow': '#ef4444',      // red
    'sp500': '#10b981',    // green
    'nasdaq1': '#f59e0b',  // amber
    'nasdaq2': '#ec4899',  // pink
    'nasdaq3': '#8b5cf6',  // violet 
    'nasdaq4': '#14b8a6',  // teal
  }; 
  return colorMap[stockId] || '#000000';
}

// Map stock ID to series index
function getSeriesIndexFromStockId(stockId) {
  const indexMap = {
    'dow': 0,
    'sp500': 1,
    'nasdaq1': 2,
    'nasdaq2': 3,
    'nasdaq3': 4,
    'nasdaq4': 5,
  };
  return indexMap[stockId] ?? -1;
}

const seriesConfigs = [
  { color: '#ef4444', lineWidth: 2, data: generateData(0, 0.18) },        // red - Dow Jones
  { color: '#10b981', lineWidth: 2, data: generateData(-0.3, 0.16) },     // amber - NASDAQ 1
  { color: '#f59e0b', lineWidth: 2, data: generateData(0.1, 0.14) },      // green - S&P 500
  { color: '#ec4899', lineWidth: 2, data: generateData(0.2, 0.15) },      // pink - NASDAQ 2
  { color: '#8b5cf6', lineWidth: 2, data: generateData(-0.1, 0.17) },     // violet - NASDAQ 3
  { color: '#14b8a6', lineWidth: 2, data: generateData(0.15, 0.13) },     // teal - NASDAQ 4
];

export default function IndexChart() {
  const [activeTab, setActiveTab] = useState('Index Chart');
  const [selectedStock, setSelectedStock] = useState('dow');
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);
  const seriesRefs = useRef([]);

  useEffect(() => {
    if (!chartContainerRef.current || activeTab !== 'Index Chart') return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: { type: ColorType.Solid, color: 'rgba(0, 0, 0, 0)' },
        textColor: '#9ca3af',
        fontSize: 11,
        fontFamily: 'Inter, sans-serif',
      },
      grid: {
        vertLines: { color: '#f3f4f6' },
        horzLines: { color: '#f3f4f6' },
      },
      rightPriceScale: {
        borderVisible: false,
        scaleMargins: { top: 0.1, bottom: 0.1 },
        ticksVisible: true,
        formatPrice: (price) => `${price.toFixed(2)}%`,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        fixLeftEdge: false,
        fixRightEdge: false,
      },
      crosshair: {
        mode: 1,
        vertLine: { color: '#d1d5db', width: 1, style: 3 },
        horzLine: { color: '#d1d5db', width: 1, style: 3 },
      },
      handleScroll: true,
      handleScale: true,
    });

    seriesRefs.current = seriesConfigs.map(({ color, lineWidth, data }) => {
      const series = chart.addSeries(LineSeries, {
        color,
        lineWidth,
        priceLineVisible: false,
        lastValueVisible: false,
        crosshairMarkerVisible: true,
        crosshairMarkerRadius: 4,
      });
      series.setData(data);
      return series;
    });

    chart.timeScale().fitContent();
    chartRef.current = chart;

    // ── Custom tooltip on crosshair move ──
    chart.subscribeCrosshairMove((param) => {
      const tooltip = tooltipRef.current;
      if (!tooltip) return;

      if (!param || !param.time || !param.point ||
        param.point.x < 0 || param.point.y < 0) {
        tooltip.style.display = 'none';
        return;
      }

      const containerRect = chartContainerRef.current.getBoundingClientRect();
      const values = seriesRefs.current.map((s, i) => {
        const d = param.seriesData.get(s);
        return { color: seriesConfigs[i].color, value: d?.value ?? null };
      });

      const labels = ['Dow Jones', 'S&P 500', 'NASDAQ', 'NASDAQ', 'NASDAQ Composite', 'NASDAQ 100'];
      const date = typeof param.time === 'string'
        ? param.time
        : new Date(param.time * 1000).toISOString().split('T')[0];

      tooltip.innerHTML = `
        <div style="font-size:10px;font-weight:600;color:#374151;margin-bottom:5px;border-bottom:1px solid #f3f4f6;padding-bottom:4px">${date}</div>
        ${values.map((v, i) => `
          <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
            <span style="width:8px;height:8px;border-radius:50%;background:${v.color};flex-shrink:0"></span>
            <span style="font-size:10px;color:#6b7280;flex:1">${labels[i]}</span>
            <span style="font-size:10px;font-weight:600;color:#111827">${v.value !== null ? v.value.toFixed(2) + '%' : '—'}</span>
          </div>
        `).join('')}
      `;

      tooltip.style.display = 'block';

      const tooltipWidth = 160;
      const tooltipHeight = tooltip.offsetHeight;
      let left = param.point.x + 12;
      let top = param.point.y - tooltipHeight / 2;

      if (left + tooltipWidth > containerRect.width) {
        left = param.point.x - tooltipWidth - 12;
      }
      top = Math.max(4, Math.min(top, containerRect.height - tooltipHeight - 4));

      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    });

    const resizeObserver = new ResizeObserver(() => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
        });
      }
    });
    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [activeTab]);

  // Update selected stock's line highlighting
  useEffect(() => {
    if (!chartRef.current || !seriesRefs.current.length) return;
    const selectedIndex = getSeriesIndexFromStockId(selectedStock);
    seriesRefs.current.forEach((series, idx) => {
      series.applyOptions({
        lineWidth: idx === selectedIndex ? 2 : 0.5,
      });
    });
  }, [selectedStock, activeTab]); 

  return (
    <div className="flex flex-col h-full overflow-hidden">

      {/* ── Tab Bar ── */}
      <div className="flex items-center border-b border-gray-200 shrink-0 bg-[#f7f7f7]">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs lg:text-sm font-medium border-r border-[#C8B9D8] rounded-tr-lg transition-all whitespace-nowrap ${activeTab === tab
              ? 'bg-white text-black'
              : 'text-gray-600 border-b-transparent hover:text-gray-900'
              }`}
          >
            {tab}
          </button>
        ))}
        {/* Menu icon */}
        <div className="ml-auto pr-3 text-gray-400 cursor-pointer hover:text-gray-600">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </div>

      {activeTab === 'Index Chart' && (
        <div className="flex flex-1 overflow-hidden">
          {/* Left – stock list */}
          <div className="w-full max-w-[170px] max-h-[350px] hide-scrollbar shrink-0 flex flex-col gap-2 overflow-y-auto border-r border-gray-100 p-2">
            {stocks.map((s) => {
              const isSelected = selectedStock === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedStock(s.id)}
                  className={`w-full text-left px-3 py-3 border bg-[#EDE8F280] rounded-lg transition-all ${isSelected
                    ? 'border-[#AE6DA2]'
                    : 'border-transparent'
                    }`}
                  style={{ borderColor: `${isSelected ? getLineColorFromStockId(s.id) : 'transparent'}` }}
                >
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: getLineColorFromStockId(s.id) }} />
                    <span className="text-xs font-medium text-black">{s.name}</span>
                  </div>
                  <div className={`text-sm font-bold pl-3 text-black`}>
                    {s.price}
                  </div>
                  <div className={`text-xs pl-3 font-medium mt-0.5 ${s.positive ? 'text-[#17B667]' : 'text-[#EC4D5C]'}`}>
                    {s.change} &nbsp; {s.pct}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right – chart */}
          <div
            className="flex-1 overflow-hidden relative"
            ref={chartContainerRef}
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.08))'
            }}
          >
            {/* Custom tooltip */}
            <div
              ref={tooltipRef}
              style={{
                display: 'none',
                position: 'absolute',
                zIndex: 10,
                pointerEvents: 'none',
                background: '#fff',
                border: '1px solid #E0E0E4',
                borderRadius: '6px',
                padding: '8px 10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                minWidth: '160px',
              }}
            />
          </div>
        </div>
      )}
      {activeTab === 'Yield Curves' && (
        <div className="flex flex-1 overflow-hidden">
          <YeildCurves />
        </div>
      )}
      {activeTab === 'Net Inflow' && (
        <div className="flex flex-1 overflow-hidden">
          <NewFlowChart />
        </div>
      )}
      {activeTab === 'Market Overview' && (
        <div className="flex flex-1 overflow-hidden">
          <MarketOverviewChart />
        </div>
      )}
    </div>
  );
}
