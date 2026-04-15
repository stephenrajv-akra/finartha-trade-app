
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { netFlowChartData } from '../../utils/placeholder-data';

/*
 * NetFlowChart — Multi-line chart (NASDAQ vs NYSE)
 *
 * Data shape (from placeholder-obj / API):
 * {
 *   times: string[],
 *   series: [{ id, label, color, data: number[] }]
 * }
 *
 * Backend integration: replace netFlowChartData import with an API fetch
 * that returns the same shape.
 */

const NetFlowChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    // Build ECharts option
    const buildOption = () => {
        return {
            backgroundColor: 'transparent',
            grid: {
                top: 32,
                right: 24,
                bottom: 32,
                left: 20,
                containLabel: false,
            },
            xAxis: {
                type: 'category',
                data: netFlowChartData.times,
                boundaryGap: false,
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    color: '#000',
                    fontSize: 10,
                    fontFamily: 'inherit',
                },
                splitLine: { show: false },
            },
            yAxis: {
                type: 'value',
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    color: '#000',
                    fontSize: 10,
                    fontFamily: 'inherit',
                },
                splitLine: { show: false },
            },
            legend: {
                top: 8,
                right: 12,
                orient: 'horizontal',
                itemGap: 24,
                icon: 'square',
                textStyle: {
                    color: '#616161',
                    fontSize: 10,
                    fontFamily: 'inherit',
                },
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: '#fff',
                borderColor: '#e8e8e8',
                borderWidth: 0.5,
                textStyle: { color: '#000', fontSize: 10 },
                formatter: (params) => {
                    let html = `<div style="font-weight:600;margin-bottom:6px;color:#333">${params[0]?.axisValue}</div>`;
                    params.forEach((p) => {
                        html += `<div style="display:flex;align-items:center;gap:8px;color:#666;margin-bottom:4px">
                            <span style="width:8px;height:8px;border-radius:50%;background:${p.color};display:inline-block;flex-shrink:0"></span>
                            <span>${p.seriesName}: <span style="font-weight:600;color:#333">${p.value}</span></span>
                        </div>`;
                    });
                    return html;
                },
            },
            series: netFlowChartData.series.map((s) => ({
                name: s.label,
                type: 'line',
                data: s.data,
                smooth: false,
                symbol: 'none',
                lineStyle: { color: s.color, width: 0.5 },
                itemStyle: { color: s.color },
                emphasis: { scale: 1 },
            })),
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
    }, []);

    // Set chart option on mount
    useEffect(() => {
        if (!chartInstance.current) return;
        chartInstance.current.setOption(buildOption(), { notMerge: true });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="w-full h-full" style={{ background: '#FFF', borderRadius: 12, padding: '16px 12px 12px 12px' }}>
            <div ref={chartRef} style={{ width: '100%', height: '100%', minHeight: 280 }} />
        </div>
    );
};

export default NetFlowChart;