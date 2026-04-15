import { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { PORTFOLIO_HOLDINGS } from '../../utils/placeholder-data';
import { TriangleUp, TriangleDown } from '../../utils/SvgCode';
import { ArrowRight, ChevronRight } from 'lucide-react';

echarts.use([LineChart, GridComponent, CanvasRenderer]);

const ChevronDown = () => (
  <svg width="9" height="9" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 1l4 4 4-4" />
  </svg>
);

const Sparkline = ({ data, color = 'green' }) => {
  const ref = useRef(null);
  const lineColor = color === 'red' ? '#EF4444' : '#17B667';
  const gradientStart = color === 'red' ? 'rgba(239, 68, 68, 0.25)' : 'rgba(23, 182, 103, 0.25)';
  const gradientEnd = color === 'red' ? 'rgba(239, 68, 68, 0)' : 'rgba(23, 182, 103, 0)';
  
  useEffect(() => {
    if (!ref.current) return;
    const chart = echarts.init(ref.current);
    chart.setOption({
      grid: { top: 2, right: 2, bottom: 2, left: 2 },
      xAxis: { type: 'category', show: false, data: data.map((_, i) => i), boundaryGap: false },
      yAxis: { type: 'value', show: false, min: Math.min(...data) - 0.5, max: Math.max(...data) + 0.5 },
      series: [{
        type: 'line',
        data,
        smooth: 0.6,
        symbol: 'none',
        lineStyle: { color: lineColor, width: 1.5 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: gradientStart },
            { offset: 1, color: gradientEnd },
          ]),
        },
      }],
      animation: false,
    });
    return () => chart.dispose();
  }, [data]);
  return <div ref={ref} style={{ width: 80, height: 30, flexShrink: 0 }} />;
};

export default function HoldingsTable() {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-white">
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse" style={{ minWidth: 560 }}>
          <thead>
            <tr className="bg-[#EDE8F2] sticky top-0 z-10">
              <th className="px-4 py-2.5 text-left text-xs font-semibold text-black whitespace-nowrap w-[40%]">
                <span className="flex items-center gap-1">Company <ChevronDown /></span>
              </th>
              <th className="px-3 py-2.5 text-right text-xs font-semibold text-black whitespace-nowrap">
                <span className="flex items-center justify-end gap-1">Market Price (1D) <ChevronDown /></span>
              </th>
              <th className="px-3 py-2.5 text-right text-xs font-semibold text-black whitespace-nowrap">
                <span className="flex items-center justify-end gap-1">Returns(%) <ChevronDown /></span>
              </th>
              <th className="px-4 py-2.5 text-right text-xs font-semibold text-black whitespace-nowrap">
                <span className="flex items-center justify-end gap-1">Current (Invested) <ChevronDown /></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {PORTFOLIO_HOLDINGS.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 hover:bg-[#faf9ff] transition-colors cursor-pointer"
              >
                {/* Company + sparkline */}
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-3 justify-between">
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-gray-900 leading-tight">{row.company}</p>
                      <p className="text-xxs text-gray-400 leading-tight mt-0.5">{row.index} &nbsp;·&nbsp; {row.timeAgo}</p>
                    </div>  
                    <Sparkline data={row.sparkline} color={row.sparklineColor} />
                  </div>
                </td>
                {/* Market Price */}
                <td className="px-3 py-2.5 text-right whitespace-nowrap">
                  <div className={`text-[12px] font-semibold leading-tight flex items-center justify-end gap-1.5 ${row.priceChangeColor === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                    <span>{row.marketPrice}</span>
                    {row.priceDirection === 'up' ? <TriangleUp color='#22c55e' /> : <TriangleDown color='#ef4444' />}
                  </div>
                  <p className={`text-xxs font-medium leading-tight mt-0.5 ${row.priceChangeColor === 'green' ? 'text-green-600' : 'text-red-600'}`}>{row.priceChange} {row.priceChangePct}</p>
                </td>
                {/* Returns */}
                <td className="px-3 py-2.5 text-right whitespace-nowrap">
                  <div className={`text-[12px] font-semibold leading-tight flex items-center justify-end gap-1.5 ${row.returnsColor === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                    <span>{row.returns}</span>
                    {row.returnsDirection === 'up' ? <TriangleUp color='#22c55e' /> : <TriangleDown color='#ef4444' />} 
                  </div>
                  <p className={`text-xxs font-medium leading-tight mt-0.5 ${row.returnsColor === 'green' ? 'text-green-600' : 'text-red-600'}`}>{row.returnsPct}</p>
                </td> 
                {/* Current (Invested) */}
                <td className="px-4 py-2.5 flex items-start gap-2 justify-end text-right">
                  <div className="flex flex-col">
                  <div className={`text-[12px] font-semibold leading-tight flex items-center justify-end gap-1.5 ${row.currentDirection === 'up' ? 'text-black' : 'text-black'}`}>
                    <span>{row.current}</span>
                    {row.currentDirection === 'up' ? <TriangleUp  /> : <TriangleDown />}
                  </div>
                  <p className="text-xxs text-black font-medium leading-tight mt-0.5">{row.invested}</p>
                  </div>
                  <div>
                    <ChevronRight size={20} color='#724A9A' />  
                  </div>
                </td>
              </tr>
            ))} 
          </tbody>  
        </table>
      </div>
    </div>
  );
}

