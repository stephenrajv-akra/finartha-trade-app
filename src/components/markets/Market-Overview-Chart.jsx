
import { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import SlidingTabBar from '../common/SlidingTabBar';
import { marketOverviewData } from '../../utils/placeholder-obj';

/*
 * MarketOverviewChart — Bar chart showing Adv/Dec distribution
 *
 * Data shape (from placeholder-obj / API):
 * {
 *   total: number,
 *   decliners: number,
 *   advancers: number,
 *   bars: [{ label, value, type: 'decline'|'neutral'|'advance' }]
 * }
 */

const TABS = ['Adv Dec', 
    // 'Market Setiment' 
];

const BAR_COLORS = {
    decline: '#EC4D5C',
    neutral: '#CD8F3D',
    advance: '#079E53',
};

const MarketOverviewChart = () => {
    const [activeTab, setActiveTab] = useState(TABS[0]);
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const data = marketOverviewData;

    const buildOption = () => {
        const labels = data.bars.map((b) => b.label);
        const values = data.bars.map((b) => b.value);
        const colors = data.bars.map((b) => BAR_COLORS[b.type]);

        return {
            backgroundColor: 'transparent',
            grid: {
                top: 40,
                right: 16,
                bottom: 68,
                left: 16,
                containLabel: false,
            },
            xAxis: {
                type: 'category',
                data: labels,
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    color: '#999',
                    fontSize: 10,
                    fontFamily: 'inherit',
                    interval: 0,
                },
                splitLine: { show: false },
            },
            yAxis: {
                type: 'value',
                show: false,
                splitLine: { show: false },
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: '#fff',
                borderColor: '#e8e8e8',
                borderWidth: 1,
                textStyle: { color: '#333', fontSize: 11 },
                formatter: (p) => `${p.name || 'Range'}: <b>${p.value}</b>`,
            },
            series: [
                {
                    type: 'bar',
                    data: values.map((v, i) => ({
                        value: v,
                        itemStyle: {
                            color: colors[i],
                            borderRadius: [0, 0, 0, 0],
                        },
                        label: {
                            color: colors[i],
                        },
                    })),
                    barWidth: '42%',
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: 11,
                        fontWeight: 600,
                        formatter: (p) => p.value,
                    },
                    emphasis: {
                        label: {
                            show: true,
                        },
                    },
                },
            ],
        };
    };

    // Init chart once
    useEffect(() => {
        if (!chartRef.current) return;
        chartInstance.current = echarts.init(chartRef.current, null, { renderer: 'canvas' });

        const ro = new ResizeObserver(() => chartInstance.current?.resize());
        ro.observe(chartRef.current);

        return () => { 
            ro.disconnect();
            chartInstance.current?.dispose();
        };
    }, [activeTab]);

    // Set option
    useEffect(() => { 
        if (!chartInstance.current || activeTab !== 'Adv Dec') return; 
        chartInstance.current.setOption(buildOption(), { notMerge: true });
    }, [activeTab, data]); // Re-run when activeTab or data changes

    // Gradient bar width for decliners vs advancers vs neutral
    const decPct = (data.decliners / data.total) * 100;
    const advPct = (data.advancers / data.total) * 100;
    const neuPct = 100 - decPct - advPct;

    return (
        <div className="w-full h-full flex flex-col">
            {/* Tabs + Total */}
            <div className="flex items-center justify-between">
                <SlidingTabBar tabs={TABS} active={activeTab} onSelect={setActiveTab} />
                <span className="text-xs font-semibold text-gray-500 pr-3 whitespace-nowrap">Total:{data.total}</span>
            </div>

            {/* Tab Content */}
            <div className="flex-1 flex flex-col min-h-0">
                {activeTab === 'Adv Dec' && (
                    <>
                        {/* Chart */}
                        <div ref={chartRef} style={{ flex: 1, minHeight: 180, width: '100%' }} />

                        {/* Bottom gradient bar + labels */}
                        <div className="px-4 pb-3">
                            <div className="flex w-full h-1 rounded-full overflow-hidden">
                                <div
                                    className="rounded-l-full"
                                    style={{ width: `${decPct}%`, background: 'linear-gradient(90deg, #EC4D5C 64.6%, #FFF 100%)' }}
                                />
                                <div
                                    style={{ width: `${neuPct}%`, background: '#9EA1A8' }}
                                />
                                <div
                                    className="rounded-r-full"
                                    style={{ width: `${advPct}%`, background: 'linear-gradient(90deg, #FFF 0%, #37E790 35.4%)' }}
                                />
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="text-xs font-semibold text-[#EC4D5C]">Decliners: {data.decliners.toLocaleString()}</span>
                                <span className="text-xs font-semibold text-[#079E53]">Advancers: {data.advancers.toLocaleString()}</span>
                            </div>
                        </div>
                    </>
                )}

                {/* {activeTab === 'Market Setiment' && (
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-sm text-gray-400">Market Sentiment coming soon</p>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default MarketOverviewChart;