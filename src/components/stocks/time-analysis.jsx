import { useState } from "react";
import { timeAndSalesData, volAnalysisData } from '../../utils/placeholder-obj';

const TimeAnalysis = () => {
    const [activeTimeSalesTab, setActiveTimeSalesTab] = useState('timeSales');
    return (
        <>
            {/* Tabs Header */}
            <div className="flex items-center gap-0 border-b border-gray-200 bg-[#f7f7f7]"> 
                <button
                    onClick={() => setActiveTimeSalesTab('timeSales')}
                    className={`px-4 py-2 text-xs lg:text-sm font-medium border-r border-[#C8B9D8] rounded-tr-lg transition-all whitespace-nowrap ${activeTimeSalesTab === 'timeSales'
                        ? 'bg-white text-black'
                        : 'text-gray-600 border-b-transparent hover:text-gray-900'
                        }`}
                >
                    Time&Sales
                </button>
                <button
                    onClick={() => setActiveTimeSalesTab('volAnalysis')}
                    className={`px-4 py-2 text-xs lg:text-sm font-medium border-r border-[#C8B9D8] rounded-tr-lg transition-all whitespace-nowrap ${activeTimeSalesTab === 'volAnalysis'
                        ? 'bg-white text-black'
                        : 'text-gray-600 border-b-transparent hover:text-gray-900'
                        }`}
                >
                    Vol Analysis
                </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 flex items-start justify-center overflow-auto w-full">
                {activeTimeSalesTab === 'timeSales' && (
                    <div className="time-analysis w-full p-4">
                        <div className="overflow-x-auto w-full">
                            <table className="min-w-full border-separate border-spacing-y-1"> 
                                <tbody>
                                    {timeAndSalesData.map((row, idx) => (
                                        <tr key={idx} className="text-xs font-medium">
                                            <td className={`${row.symbol === 'BOSS' ? 'text-[#E05C6E]' : 'text-[#2BAF7A]'}`}>{row.time}</td>
                                            <td className={`${row.symbol === 'BOSS' ? 'text-[#079E53]' : 'text-[#EC4D5C]'}`}>{row.price.toFixed(2)}</td>
                                            <td className={`${row.symbol === 'BOSS' ? 'text-[#079E53]' : 'text-[#EC4D5C]'}`}>{row.volume}</td>
                                            <td className={`${row.symbol === 'BOSS' ? 'text-[#079E53]' : 'text-[#EC4D5C]'}`}>{row.symbol}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTimeSalesTab === 'volAnalysis' && (
                    <div className="vol-analysis w-full p-4">
                        <div className="overflow-x-hidden w-full">
                            <table className="min-w-full border-separate border-spacing-y-1">
                                <thead> 
                                    <tr className="text-left text-xs text-[#616161] font-semibold">
                                        <th className="text-[#616161] font-normal">Price</th>
                                        <th className="text-[#616161] font-normal">Buy</th>
                                        <th className="text-[#616161] font-normal">Sell</th>
                                        <th className="text-[#616161] font-normal">Volume</th>
                                        <th className="text-[#616161] font-normal">Ratio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {volAnalysisData.map((row, idx) => (
                                        <tr key={idx} className="text-xs font-medium">
                                            <td className="pr-6 pl-2 text-[#E05C6E]">{row.price}</td>
                                            <td className="pr-6 text-[#2BAF7A]">{(row.buy/1000).toFixed(2)}K</td>
                                            <td className="pr-6 text-[#E05C6E]">{(row.sell/1000).toFixed(2)}K</td>
                                            <td className="pr-6 text-[#2BAF7A]">{(row.volume/1000).toFixed(2)}K</td>
                                            <td className="pr-6 text-[#2BAF7A]">{row.ratio.toFixed(2)}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}  

export default TimeAnalysis;