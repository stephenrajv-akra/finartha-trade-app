import { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import SlidingTabBar from '../common/SlidingTabBar';
import { ORDER_FLOW_DATA } from '../../utils/placeholder-data';

const TABS = ['Order Flow', 'Position Cost Distribution'];

/* ── Color constants ── */
const GREEN_SHADES = ['#00A48B', '#00AC5C', '#3ABF2A']; // L, M, S inflow
const RED_SHADES   = ['#FF2040', '#FF5733', '#FF8C00']; // L, M, S outflow

/* ══════════════════════════════════════════════════════════════════════════════
 *  Donut Chart — Order Flow Distribution
 * ══════════════════════════════════════════════════════════════════════════════ */
function OrderFlowDonut({ distribution }) {
    const chartRef = useRef(null);
    const { inflow, outflow } = distribution;

    useEffect(() => {
        if (!chartRef.current) return;
        const chart = echarts.init(chartRef.current, null, { renderer: 'canvas' });

        const seriesData = [
            ...inflow.breakdown.map((d, i) => ({
                name: `Inflow ${d.size}`,
                value: d.value,
                itemStyle: { color: GREEN_SHADES[i] },
            })),
            ...outflow.breakdown.map((d, i) => ({
                name: `Outflow ${d.size}`,
                value: d.value,
                itemStyle: { color: RED_SHADES[i] },
            })),
        ];

        chart.setOption({
            animation: true,
            animationDuration: 600,
            animationEasing: 'cubicOut',
            tooltip: {
                trigger: 'item',
                backgroundColor: '#fff',
                borderColor: '#E0E0E4',
                borderWidth: 1,
                textStyle: { fontSize: 11, color: '#333' },
                formatter: (p) => `${p.name}<br/><b>${p.value.toFixed(2)}</b> (${p.percent}%)`,
            },
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '78%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    padAngle: 2,
                    itemStyle: { borderRadius: 0 },
                    label: {
                        show: true,
                        position: 'center',
                        formatter: 'Orders',
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#333',
                    },
                    emphasis: {
                        label: { show: true, fontSize: 14, fontWeight: 700 },
                        scaleSize: 6,
                    },
                    labelLine: { show: false },
                    data: seriesData,
                },
            ],
        });

        const ro = new ResizeObserver(() => chart.resize());
        ro.observe(chartRef.current);
        return () => { ro.disconnect(); chart.dispose(); };
    }, [inflow, outflow]);

    return <div ref={chartRef} style={{ width: '100%', height: '200px' }} />;
}

/* ══════════════════════════════════════════════════════════════════════════════
 *  Bar Chart — Large Scale Orders in Last 5 Days
 * ══════════════════════════════════════════════════════════════════════════════ */
function LargeScaleBarChart({ orders }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;
        const chart = echarts.init(chartRef.current, null, { renderer: 'canvas' });

        const dates  = orders.map(d => d.date);
        const values = orders.map(d => d.value);

        chart.setOption({
            animation: true,
            animationDuration: 600,
            animationEasing: 'cubicOut',
            grid: { left: 12, right: 12, top: 30, bottom: 28, containLabel: true },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'none' },
                backgroundColor: '#fff',
                borderColor: '#E0E0E4',
                borderWidth: 1,
                textStyle: { fontSize: 11, color: '#333' },
                formatter: (params) => {
                    const p = params[0];
                    return `<span style="font-size:10px;color:#9ca3af">${p.name}</span><br/><b>${p.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>`;
                },
            },
            xAxis: {
                type: 'category',
                data: dates,
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { fontSize: 10, color: '#999', fontWeight: 500 },
                splitLine: { show: false },
            },
            yAxis: {
                type: 'value',
                show: false,
                splitLine: { show: false },
            },
            series: [
                {
                    type: 'bar',
                    data: values.map(v => ({
                        value: v,
                        itemStyle: {
                            color: v >= 0 ? '#17B667' : '#EC4D5C', 
                            borderRadius: v >= 0 ? [0, 0, 0, 0] : [0, 0, 0, 0],
                        },
                    })),
                    barWidth: 24,
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: (p) => {
                            const v = p.value;
                            if (Math.abs(v) >= 1000) return `${v < 0 ? '-' : ''}${Math.abs(v).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                            return v.toFixed(2);
                        },
                        fontSize: 10,
                        fontWeight: 600,
                    },  
                },
            ],
        });

        const ro = new ResizeObserver(() => chart.resize());
        ro.observe(chartRef.current);
        return () => { ro.disconnect(); chart.dispose(); };
    }, [orders]);

    return <div ref={chartRef} style={{ width: '100%', height: '230px' }} />;
}

/* ══════════════════════════════════════════════════════════════════════════════
 *  Main Order Flow Component
 * ══════════════════════════════════════════════════════════════════════════════ */
const OrderFlow = () => {
    const [activeTab, setActiveTab] = useState('Order Flow');
    const { distribution, largeScaleOrders } = ORDER_FLOW_DATA;

    return (
        <div className="flex flex-col h-full overflow-hidden bg-transparent">

            <SlidingTabBar tabs={TABS} active={activeTab} onSelect={setActiveTab} />

            {/* ── Order Flow Tab ── */}
            {activeTab === 'Order Flow' && (
                <div className="flex justify-between min-h-0 w-full overflow-auto p-3 gap-2">

                    {/* ── Left: Order Flow Distribution ── */}
                    <div className="w-1/2">

                        {/* Header */}
                        <div className="px-4 py-2 bg-[#EDE8F2] rounded mb-2 flex items-center justify-between">
                            <div className="text-sm text-black font-normal">Order Flow Distribution</div>
                            <div className="text-[#7F7F7F] text-xxs font-normal">Million USD</div>
                        </div>

                        {/* Inflow / Outflow totals */}
                        <div className="flex justify-between px-3 mb-1">
                            <div className="text-xs">
                                <span className="text-[#7F7F7F]">Inflow: </span>
                                <span className="text-[#17B667] font-semibold">{distribution.inflow.total.toFixed(2)}</span>
                            </div>
                            <div className="text-xs">
                                <span className="text-[#7F7F7F]">Outflow: </span>
                                <span className="text-[#ef4444] font-semibold">{distribution.outflow.total.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Donut chart */}
                        <OrderFlowDonut distribution={distribution} />

                        {/* Legend grid */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 px-3 mt-1">
                            {distribution.inflow.breakdown.map((d, i) => (
                                <div key={`in-${d.size}`} className="flex items-center gap-1.5 text-[10.5px]">
                                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: GREEN_SHADES[i] }} />
                                    <span className="text-black font-medium">{d.size}</span>
                                    <span className="text-[#7F7F7F]">{d.pct}% ({d.value.toFixed(2)})</span>
                                </div>
                            ))}
                            {distribution.outflow.breakdown.map((d, i) => (
                                <div key={`out-${d.size}`} className="flex items-center gap-1.5 text-[10.5px]">
                                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: RED_SHADES[i] }} />
                                    <span className="text-black font-medium">{d.size}</span>
                                    <span className="text-[#7F7F7F]">{d.pct}% ({d.value.toFixed(2)})</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Vertical Divider ── */}
                    <div className="w-px bg-[#EDE8F2]" />

                    {/* ── Right: Large Scale Orders ── */}
                    <div className="w-1/2">

                        {/* Header */}
                        <div className="px-4 py-2 bg-[#EDE8F2] rounded mb-2 flex items-center justify-between">
                            <div className="text-sm text-black font-normal">Large Scale Orders in Last 5 Days</div>
                            <div className="text-[#7F7F7F] text-xxs font-normal">Million USD</div>
                        </div>

                        {/* Bar chart */}
                        <LargeScaleBarChart orders={largeScaleOrders} />
                    </div>

                </div>
            )}

            {/* ── Position Cost Distribution Tab — placeholder ── */}
            {activeTab === 'Position Cost Distribution' && (
                <div className="flex-1 flex items-center justify-center text-gray-300 text-xs">
                    Position Cost Distribution — coming soon
                </div>
            )}

        </div>
    );
};

export default OrderFlow;
