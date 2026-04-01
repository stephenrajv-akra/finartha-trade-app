import { ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';

const TurboTradeLadder = () => {
    const [activeTradeTab, setActiveTradeTab] = useState('trade'); 
    const [buySellMode, setBuySellMode] = useState('buy');  
    const [orderType, setOrderType] = useState('limit'); // 'limit', 'market', 'stop'
    const [limitPrice, setLimitPrice] = useState('4565.66');
    const [stopPrice, setStopPrice] = useState('');
    const [takeProfitPrice, setTakeProfitPrice] = useState('');
    const [showStopLoss, setShowStopLoss] = useState(false);
    const [showTakeProfit, setShowTakeProfit] = useState(false);
    return (
        <>
            {/* Tab Navigation */}
            <div className="flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white">
                <div className="flex gap-1 items-center justify-start"> 
                    <button
                        onClick={() => setActiveTradeTab('trade')}
                        className={`flex-1 py-3 px-2 text-sm font-medium transition-colors ${activeTradeTab === 'trade'
                            ? 'text-black border-b-2 border-black'
                            : 'text-[#616161] border-b-2 border-transparent'
                            }`}
                    >
                        Trade
                    </button>
                    <button
                        onClick={() => setActiveTradeTab('turbo')}
                        className={`flex-1 py-3 px-2 text-sm font-medium transition-colors ${activeTradeTab === 'turbo'
                            ? 'text-black border-b-2 border-black'
                            : 'text-[#616161] border-b-2 border-transparent'
                            }`}
                    >
                        TurboTrader
                    </button>
                    <button 
                        onClick={() => setActiveTradeTab('ladder')}
                        className={`flex-1 py-3 px-2 text-sm font-medium transition-colors ${activeTradeTab === 'ladder'
                            ? 'text-black border-b-2 border-black'
                            : 'text-[#616161] border-b-2 border-transparent'
                            }`}
                    >
                        Ladder
                    </button>
                </div>
                <div className='ml-auto'>  
                    <Menu size={18} /> 
                </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-auto p-4">
                {activeTradeTab === 'trade' && (
                    <div className="space-y-4">
                        {/* Buy/Sell Selector */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setBuySellMode('buy')}
                                className={`flex-1 py-3 px-4 rounded font-semibold text-white transition-colors ${buySellMode === 'buy'
                                    ? 'bg-green-500 hover:bg-green-600'
                                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                                    }`}
                            >
                                BUY
                            </button>
                            <button
                                onClick={() => setBuySellMode('sell')}
                                className={`flex-1 py-3 px-4 rounded font-semibold text-white transition-colors ${buySellMode === 'sell'
                                    ? 'bg-red-500 hover:bg-red-600'
                                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                                    }`}
                            >
                                SELL
                            </button>
                        </div>

                        {/* Order Type Selection */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-700 uppercase">Order Type</label>
                            <div className="flex gap-2">
                                {['limit', 'market', 'stop'].map((type) => (  
                                    <button
                                        key={type}
                                        onClick={() => setOrderType(type)}
                                        className={`flex-1 py-2 px-3 text-xs font-medium rounded transition-colors ${orderType === type
                                            ? 'bg-blue-100 text-blue-700 border border-blue-300'
                                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                                            }`}
                                    >
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quick Amount Buttons */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-700 uppercase">Quick Amount</label>
                            <div className="grid grid-cols-3 gap-2">
                                {['10', '50', '100', '500', '+1', '-1'].map((amount) => (
                                    <button
                                        key={amount}
                                        className="py-2 px-2 bg-gray-100 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                                    >
                                        {amount}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Input */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-700 uppercase">
                                {orderType === 'limit' ? 'Limit Price' : orderType === 'stop' ? 'Stop Price' : 'Market Price'}
                            </label>
                            <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
                                <input
                                    type="text"
                                    value={limitPrice}
                                    onChange={(e) => setLimitPrice(e.target.value)}
                                    className="flex-1 outline-none text-sm font-medium"
                                    placeholder="0.00"
                                />
                                <ChevronDown size={16} className="text-gray-400" />
                            </div>
                        </div>

                        {/* Time-in-Force Selection */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-700 uppercase">Time-in-Force</label>
                            <div className="flex gap-2">
                                <select className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm bg-white outline-none hover:border-gray-400">
                                    <option>Day</option>
                                    <option>GTC</option>
                                    <option>OPG</option>
                                </select>
                                <select className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm bg-white outline-none hover:border-gray-400">
                                    <option>Trading Hours</option>
                                    <option>Extended</option>
                                </select>
                            </div>
                        </div>

                        {/* Stop Loss and Take Profit */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={showStopLoss}
                                    onChange={(e) => setShowStopLoss(e.target.checked)}
                                    className="w-4 h-4"
                                />
                                <span className="text-xs font-semibold text-gray-700">Stop Loss</span>
                            </label>
                            {showStopLoss && (
                                <input
                                    type="text"
                                    value={stopPrice}
                                    onChange={(e) => setStopPrice(e.target.value)}
                                    placeholder="Enter stop price"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none"
                                />
                            )}

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={showTakeProfit}
                                    onChange={(e) => setShowTakeProfit(e.target.checked)}
                                    className="w-4 h-4"
                                />
                                <span className="text-xs font-semibold text-gray-700">Take Profit</span>
                            </label>
                            {showTakeProfit && (
                                <input
                                    type="text"
                                    value={takeProfitPrice}
                                    onChange={(e) => setTakeProfitPrice(e.target.value)}
                                    placeholder="Enter take profit price"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none"
                                />
                            )}
                        </div>

                        {/* Order Summary */}
                        <div className="space-y-2 border-t border-gray-200 pt-4">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-600">Estimated Amount:</span>
                                <span className="font-medium text-gray-900">456,566.00</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-600">Estimated Fee:</span>
                                <span className="font-medium text-gray-900">22.83</span>
                            </div>
                            <div className="flex justify-between text-xs border-t border-gray-200 pt-2">
                                <span className="text-gray-600">Buying Power:</span>
                                <span className="font-medium text-green-600">$123,456.50</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-600">Max Shares:</span>
                                <span className="font-medium text-gray-900">100</span>
                            </div>
                        </div>

                        {/* Buy/Sell Button */}
                        <button
                            className={`w-full py-3 rounded font-semibold text-white text-sm transition-colors ${buySellMode === 'buy'
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-red-500 hover:bg-red-600'
                                }`}
                        >
                            {buySellMode === 'buy' ? 'BUY' : 'SELL'}
                        </button>
                    </div>
                )}

                {activeTradeTab === 'turbo' && (
                    <div className="flex items-center justify-center h-40 text-gray-500 text-sm">
                        <p>TurboTrader interface coming soon</p>
                    </div>
                )}

                {activeTradeTab === 'ladder' && (
                    <div className="flex items-center justify-center h-40 text-gray-500 text-sm">
                        <p>Ladder interface coming soon</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default TurboTradeLadder;