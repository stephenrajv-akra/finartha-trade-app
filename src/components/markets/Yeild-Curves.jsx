
import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { yieldCurvesData } from '../../utils/placeholder-obj';

/*
 * YeildCurves — Multi-series line chart
 *
 * Data shape (from placeholder-obj / API):
 * {
 *   xAxis: string[],
 *   series: [{ id, label, color, data: number[] }]
 * }
 *
 * Backend integration: replace yieldCurvesData import with an API fetch
 * that returns the same shape.
 */ 

const YeildCurves = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    // Track which button is highlighted (does NOT hide any line)
    const [activeId, setActiveId] = useState(yieldCurvesData.series[0].id);

    // Build ECharts option — always renders all series
    const buildOption = () => {
        return {
            backgroundColor: 'transparent',
            grid: {
                top: 24,
                right: 72,
                bottom: 36,
                left: 20,
                containLabel: false,
            },
            xAxis: {
                type: 'category',
                data: yieldCurvesData.xAxis,
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
                position: 'right',
                min: 3,
                max: 10,
                interval: null,
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    color: '#000',
                    fontSize: 10,
                    fontFamily: 'inherit',
                    formatter: (v) => v.toFixed(3) + '%',
                    showMinLabel: true,
                    showMaxLabel: true,
                },
                splitLine: { show: false },
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: '#fff',
                borderColor: '#e8e0f0',
                borderWidth: 1,
                textStyle: { color: '#333', fontSize: 12 },
                formatter: (params) => {
                    let html = `<div style="font-weight:600;margin-bottom:4px">${params[0]?.axisValue}</div>`;
                    params.forEach((p) => {
                        html += `<div style="display:flex;align-items:center;gap:6px">
                            <span style="width:8px;height:8px;border-radius:50%;background:${p.color};display:inline-block"></span>
                            <span style="color:#666">${p.seriesName}</span>
                            <span style="font-weight:600;margin-left:auto">${p.value.toFixed(3)}%</span>
                        </div>`;
                    });
                    return html;
                },
            },
            series: yieldCurvesData.series.map((s) => ({
                name: s.label,
                type: 'line',
                data: s.data,
                smooth: true,
                symbol: 'circle',
                symbolSize: 7,
                lineStyle: { color: s.color, width: 2 },
                itemStyle: { color: s.color },
                emphasis: { scale: 1.4 },
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

    // Init chart option once on mount (series never change, only active highlight)
    useEffect(() => {
        if (!chartInstance.current) return;
        chartInstance.current.setOption(buildOption(), { notMerge: true });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex flex-1 min-h-0 gap-3">
                {/* Left legend */}
                <div className="flex flex-col gap-2 justify-start p-3 pr-0 w-full max-w-[134px]">
                    {yieldCurvesData.series.map((s) => {  
                        const active = activeId === s.id;
                        return (
                            <button
                                key={s.id}
                                onClick={() => setActiveId(s.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    background: s.bgColor,
                                    border: active ? '1.5px solid #AE6DA2' : '1.5px solid transparent',
                                    borderRadius: 10,
                                    padding: '6px 14px 6px 10px',
                                    cursor: 'pointer',
                                    opacity: 1,
                                    transition: 'all 0.18s',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <span
                                    style={{
                                        width: 9,
                                        height: 9,
                                        borderRadius: '50%',
                                        background: s.color,
                                        display: 'inline-block',
                                        flexShrink: 0,
                                    }}
                                />
                                <span style={{ fontSize: 12, color: 'black', fontWeight: 500 }}>
                                    {s.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Chart */}
                <div ref={chartRef} style={{ flex: 1, minHeight: 220, minWidth: 0 }} />
            </div>
        </div>
    );
};

export default YeildCurves;
