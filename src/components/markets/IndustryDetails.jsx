import { useEffect, useRef, useState } from 'react';
import { createChart, LineSeries, ColorType } from 'lightweight-charts';

const lineData = [
  { time: '2025-04-11', value: 62.31 },
  { time: '2025-05-01', value: 60.5 },
  { time: '2025-06-01', value: 58.2 },
  { time: '2025-07-01', value: 56.8 },
  { time: '2025-08-01', value: 55.0 },
  { time: '2025-09-01', value: 53.4 },
  { time: '2025-10-01', value: 51.0 },
  { time: '2025-11-01', value: 49.2 },
  { time: '2025-12-01', value: 47.5 },
  { time: '2026-01-01', value: 44.1 },
  { time: '2026-02-01', value: 40.8 },
  { time: '2026-03-01', value: 38.5 },
  { time: '2026-04-02', value: 37.39 },
];

export default function IndustryDetails() {
  const [mainTab, setMainTab] = useState('Details');
  const [subTab, setSubTab] = useState('PE History');
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#9ca3af',
        fontSize: 10,
        fontFamily: 'Inter, sans-serif',
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { color: '#f3f4f6' },
      },
      rightPriceScale: {
        borderVisible: false,
        scaleMargins: { top: 0.15, bottom: 0.1 },
      },
      timeScale: {
        borderVisible: false,
        timeVisible: false,
      },
      crosshair: {
        mode: 1,
        vertLine: { color: '#d1d5db', width: 1, style: 3 },
        horzLine: { color: '#d1d5db', width: 1, style: 3 },
      },
      handleScroll: false,
      handleScale: false,
    });

    const series = chart.addSeries(LineSeries, {
      color: '#ef4444',
      lineWidth: 1.5,
      priceLineVisible: false,
      lastValueVisible: false,
      crosshairMarkerVisible: false,
    });
    series.setData(lineData);
    chart.timeScale().fitContent();
    chartRef.current = chart;

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
  }, []);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Main tabs */}
      <div className="flex items-center border-b border-gray-200 bg-[#f7f7f7] shrink-0">
        {['Details', 'Related Stocks'].map((tab) => (
          <button
            key={tab}
            onClick={() => setMainTab(tab)}
            className={`px-4 py-2 text-xs font-medium border-r border-[#C8B9D8] rounded-tr-lg transition-all whitespace-nowrap ${
              mainTab === tab ? 'bg-white text-black' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
        <div className="ml-auto pr-3 text-gray-400 cursor-pointer hover:text-gray-600">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </div>

      {mainTab === 'Details' ? (
        <>
          {/* Sub controls */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 shrink-0 bg-white">
            {/* 1Y dropdown */}
            <div className="flex items-center gap-1 border border-gray-200 rounded px-2 py-0.5 cursor-pointer text-xs text-gray-700 font-medium">
              1Y
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            {/* Sub tabs with sliding indicator */}
            <div className="relative flex">
              <div
                className="absolute bottom-0 left-0 h-px bg-[#724A9A] transition-all duration-300 ease-out"
                style={{
                  width: `${(1 / 2) * 100}%`,
                  transform: `translateX(${['PE History', 'PB History'].indexOf(subTab) * 100}%)`
                }}
              />
              {['PE History', 'PB History'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSubTab(tab)}
                  className={`px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                    subTab === tab ? 'text-[#724A9A]' : 'text-[#7F7F7F] hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="px-3 py-2 border-b border-gray-100 shrink-0 bg-white">
            <p className="text-[10.5px] text-gray-600 leading-relaxed">
              The <span className="font-semibold text-gray-800">PE</span> value of Software &amp; IT Service industry is{' '}
              <span className="font-bold text-[#724A9A]">37.03</span> and the current valuation is higher than the{' '}
              <span className="font-bold text-[#724A9A]">1.89%</span> time in the past 1 year(s).
            </p>
          </div>

          {/* Price labels + chart */}
          <div className="flex flex-1 overflow-hidden px-1 pt-1 pb-1">
            {/* Y-axis price labels */}
            <div className="flex flex-col justify-between shrink-0 text-[9px] text-gray-400 pr-1 items-end py-1">
              <span>62.31</span>
              <span>37.39</span>
            </div>
            {/* Chart */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex-1 relative" style={{ minHeight: 0 }} ref={chartContainerRef} />
              {/* X-axis date labels */}
              <div className="flex justify-between text-[9px] text-gray-400 pt-0.5 px-1">
                <span>04/11/2025</span>
                <span>04/02/2026</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-300 text-xs">
          Related Stocks
        </div>
      )}
    </div>
  );
}
