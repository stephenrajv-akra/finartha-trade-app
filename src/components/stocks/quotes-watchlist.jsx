import { useState } from "react";
import { Star, Bell, Clipboard } from 'lucide-react';

const QuotesWatchlist = () => {
  const [activeRightTopTab, setActiveRightTopTab] = useState('quotes');
    return (
        <>
            {/* Tabs */}
            <div className="flex items-center gap-0 border-b border-gray-200 bg-gray-50">
                <button
                    onClick={() => setActiveRightTopTab('quotes')}
                    className={`px-4 py-2 text-xs lg:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${activeRightTopTab === 'quotes'
                        ? 'text-gray-900 border-b-gray-900'
                        : 'text-gray-600 border-b-transparent hover:text-gray-900'
                        }`}
                >
                    Quotes
                </button>
                <button
                    onClick={() => setActiveRightTopTab('watchlist')}
                    className={`px-4 py-2 text-xs lg:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${activeRightTopTab === 'watchlist'
                        ? 'text-gray-900 border-b-gray-900'
                        : 'text-gray-600 border-b-transparent hover:text-gray-900'
                        }`}
                >
                    Watchlist
                </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-auto">
                {activeRightTopTab === 'quotes' && (
                    <div className="p-6">
                        {/* Top Icons */}
                        <div className="flex justify-end gap-2">
                            <button className="text-gray-400 hover:text-gray-600">
                                <Star size={20} className="fill-gray-300" strokeWidth={1.5} />
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                                <Bell size={20} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Price Display */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <h2 className="text-4xl font-bold text-green-600">4560.65</h2>
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold text-green-600">+45.65</span>
                                    <span className="text-sm text-green-600 font-medium">+1.10%</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500">Open, 03/31 06:10 EDT</p>
                        </div>

                        {/* Info Grid */}
                        <div className="flex items-center justify-between gap-40">
                            <div className="left-block flex flex-col gap-2.5 w-1/2">
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs text-gray-500 mb-1">Open</p>
                                    <p className="text-sm font-semibold text-green-600">4,510.95</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs text-gray-500 mb-1">High</p>
                                    <p className="text-sm font-semibold text-green-600">4,510.95</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs text-gray-500 mb-1">Low</p>
                                    <p className="text-sm font-semibold text-red-600">4,510.95</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <p className="text-xs text-gray-500 mb-1">Prev Close</p>
                                    <p className="text-sm font-semibold text-red-600">4,510.95</p>
                                </div>
                            </div>
                            <div className="right-block flex flex-col gap-2.5 w-1/2">
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs text-gray-500 mb-1">52 Wk High</p>
                                    <p className="text-sm font-semibold text-gray-900">4,510.95</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs text-gray-500 mb-1">52 Wk Low</p>
                                    <p className="text-sm font-semibold text-gray-900">4,510.95</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs text-gray-500 mb-1">Volume</p>
                                    <p className="text-sm font-semibold text-gray-900">0.00</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs text-gray-500 mb-1">Market Cap</p>
                                    <p className="text-sm font-semibold text-gray-900">0.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeRightTopTab === 'watchlist' && (
                    <div className="p-6">
                        <div className="flex flex-col items-center justify-center py-12">
                            <Clipboard size={48} className="text-gray-300 mb-3" strokeWidth={1} />
                            <h3 className="text-lg font-semibold text-gray-700 mb-1">Watchlist Empty</h3>
                            <p className="text-sm text-gray-500">Add symbols to your watchlist</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default QuotesWatchlist;