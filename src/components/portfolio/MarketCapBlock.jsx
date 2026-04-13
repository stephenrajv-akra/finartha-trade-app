import { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { MARKET_CAP_DATA } from '../../utils/placeholder-data';

echarts.use([PieChart, TooltipComponent, LegendComponent, CanvasRenderer]);

export default function MarketCapBlock() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    chart.setOption({
      tooltip: {
        trigger: 'item',
        backgroundColor: '#fff',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        textStyle: { color: '#374151', fontSize: 11 },
        formatter: (params) => {
          return `<div style="padding:4px 0">
            <div style="font-weight:600;color:#374151">${params.name}</div>
            <div style="font-size:10px;color:#6b7280;margin-top:2px">${params.value}</div>
          </div>`;
        },
      },
      series: [{
        type: 'pie',
        radius: ['42%', '70%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
          formatter: 'Market\nCap',
          fontSize: 10,
          color: '#737373',
          fontWeight: '500',
          lineHeight: 16,
        },
        emphasis: {
          label: { show: true, fontSize: 10, fontWeight: 'bold', color: '#6b7280' },
        },
        labelLine: { show: false },
        data: MARKET_CAP_DATA.map(d => ({
          value: parseFloat(d.allocation.replace('$', '')),
          name: d.name,
          itemStyle: { color: d.color, borderColor: '#fff', borderWidth: 2 },
        })),
      }],
    });

    const ro = new ResizeObserver(() => chart.resize());
    ro.observe(chartRef.current);
    return () => { ro.disconnect(); chart.dispose(); };
  }, []);

  return (
    <div className="flex flex-col h-full overflow-hidden bg-white">

      {/* ── Title ── */}
      <div className="flex items-center justify-center border-b border-[#EDE8F2] px-4 pt-4 pb-2 shrink-0">
        <h3 className="text-base font-normal text-[#242424]">Market Cap</h3>
      </div>  

      {/* ── Chart ── */}
      <div className="h-[200px]" ref={chartRef} />

      {/* ── Divider ── */}
      <div className="h-px bg-gray-200 shrink-0" />

      {/* ── Table Header ── */}
      <div className="shrink-0">
        <div className="flex items-center px-4 py-2 bg-[#EDE8F2] text-[11px] font-semibold text-gray-800">
          <div className="flex-1">Market cap</div>
          <div className="flex-1 text-center">Current (Allocation)</div>
          <div className="flex-1 text-right">Returns(%)</div>
        </div>
      </div>

      {/* ── Table Body ── */}
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
        {MARKET_CAP_DATA.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start px-4 py-3 hover:bg-[#faf9ff] transition-colors cursor-pointer"
          >
            {/* Left: colored dot + name & count */}
            <div className="flex items-start gap-2.5 flex-1">
              <span
                className="w-3 h-3 rounded-full shrink-0 mt-0.5"
                style={{ backgroundColor: item.color }}
              />
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-gray-900 leading-tight">
                  {item.name}
                </p>
                <p className="text-[10px] text-gray-400 leading-tight mt-0.5">
                  {item.count}
                </p>
              </div>
            </div>
        
            {/* Center: allocation value & percentage */}
            <div className="flex-1 text-center px-2">
              <p className="text-[12px] font-bold text-gray-900 leading-tight">
                {item.allocation}
              </p>
              <p className="text-[10px] text-gray-400 leading-tight mt-0.5">
                {item.allocationPct}
              </p>
            </div>

            {/* Right: returns value & percentage */}
            <div className="flex-1 text-right">
              <p className="text-[12px] font-bold text-gray-900 leading-tight">
                {item.returns}
              </p>
              <p className="text-[10px] font-medium text-[#17B667] leading-tight mt-0.5">
                {item.returnsPct}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
