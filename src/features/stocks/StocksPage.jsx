
import { useState } from 'react';
import { Resizable } from 're-resizable';
import { Menu, ChevronDown } from 'lucide-react';
import ChartContainer from '../../components/stocks/chart-container';
import OpenAccount from '../../components/stocks/open-account';
import QuotesWatchlist from '../../components/stocks/quotes-watchlist';
import OrdersNOI from '../../components/stocks/orders-noi';
import TimeAnalysis from '../../components/stocks/time-analysis';

const StocksPage = () => {
  const [leftWidth, setLeftWidth] = useState(50); // percentage 
  const [activeTradeTab, setActiveTradeTab] = useState('trade');
  const [buySellMode, setBuySellMode] = useState('buy'); // 'buy' or 'sell'
  const [orderType, setOrderType] = useState('limit'); // 'limit', 'market', 'stop'
  const [limitPrice, setLimitPrice] = useState('4565.66');
  const [stopPrice, setStopPrice] = useState('');
  const [takeProfitPrice, setTakeProfitPrice] = useState('');
  const [showStopLoss, setShowStopLoss] = useState(false);
  const [showTakeProfit, setShowTakeProfit] = useState(false);

  const handleLeftResize = (e, direction, ref, delta) => {
    const containerWidth = ref.parentElement.clientWidth;
    const newWidth = (ref.clientWidth / containerWidth) * 100;
    setLeftWidth(Math.max(20, Math.min(80, newWidth)));
  };

  const rightWidth = 100 - leftWidth;

  return (
    <div className="w-full h-[150vh] bg-white overflow-hidden">
      <div className="flex gap-2 h-full">
        {/* LEFT BLOCK */}
        <Resizable
          size={{
            width: `${leftWidth}%`,
            height: '100%',
          }}
          onResizeStop={handleLeftResize}
          minWidth="20%"
          maxWidth="80%"
          enable={{
            top: false,
            right: true,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          className="bg-gray-50 rounded-lg p-4 overflow-hidden border-2 border-gray-200"
        >
          <div className="flex flex-col h-full gap-4">
            <Resizable
                defaultSize={{
                    width: '100%',
                    height: '60%',
                }}
                minHeight="15%"
                maxHeight="85%"
                enable={{
                    top: false,
                    right: false,
                    bottom: true,
                    left: false,
                    topRight: false,
                    bottomRight: false,
                    bottomLeft: false,
                    topLeft: false,
                }}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col"
            >
              <ChartContainer />
            </Resizable>
            <Resizable
                defaultSize={{
                    width: '100%',
                    height: '40%',
                }}
                minHeight="15%"
                maxHeight="85%"
                enable={{
                    top: false,
                    right: false,
                    bottom: false,
                    left: false,
                    topRight: false,
                    bottomRight: false,
                    bottomLeft: false,
                    topLeft: false,
                }}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col"
            >
             <OpenAccount />
            </Resizable> 
          </div>
        </Resizable>

        {/* RIGHT BLOCK */}
        <Resizable
          size={{
            width: `${rightWidth}%`,
            height: '100%',
          }}
          onResizeStop={(e, direction, ref) => {
            const containerWidth = ref.parentElement.clientWidth;
            const newWidth = (ref.clientWidth / containerWidth) * 100;
            setLeftWidth(100 - Math.max(20, Math.min(80, newWidth)));
          }}
          minWidth="20%"
          maxWidth="80%"
          enable={{
            top: false,
            right: false,
            bottom: false,
            left: true,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          className="bg-gray-50 rounded-lg p-4 overflow-hidden border-2 border-gray-200"
        >
          <div className="flex flex-col h-full gap-4">
            {/* Right Top */}
            <Resizable
              defaultSize={{
                width: '100%',
                height: '30%', 
              }}
              minHeight="15%"
              maxHeight="85%"
              enable={{
                top: false,
                right: false,
                bottom: true,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col"
            >
              <QuotesWatchlist />
            </Resizable>

            {/* Right Bottom Split */}
            <div className="flex-1 flex gap-4 overflow-hidden">
              {/* Right Bottom Left */}
              <Resizable
                defaultSize={{
                  width: '50%',
                  height: '100%',
                }}
                minWidth="15%"
                maxWidth="85%"
                enable={{
                  top: false,
                  right: true,
                  bottom: false,
                  left: false,
                  topRight: false,
                  bottomRight: false,
                  bottomLeft: false,
                  topLeft: false,
                }}
              >
                <div className="flex flex-col h-full gap-4">
                  {/* Right Bottom Left Top */}
                  <Resizable
                    defaultSize={{
                      width: '100%',
                      height: '50%',
                    }}
                    minHeight="15%"
                    maxHeight="85%"
                    enable={{
                      top: false,
                      right: false,
                      bottom: true,
                      left: false,
                      topRight: false,
                      bottomRight: false,
                      bottomLeft: false,
                      topLeft: false,
                    }}
                    className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col"
                  >
                    <OrdersNOI />
                  </Resizable>

                  {/* Right Bottom Left Bottom */}
                  <Resizable
                    defaultSize={{
                      width: '100%',
                      height: '50%',
                    }}
                    minHeight="15%"
                    maxHeight="85%"
                    enable={{
                      top: false,
                      right: false,
                      bottom: false,
                      left: false,
                      topRight: false,
                      bottomRight: false,
                      bottomLeft: false,
                      topLeft: false,
                    }}
                    className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col"
                  >
                    <TimeAnalysis />
                  </Resizable>
                </div>
              </Resizable>

              {/* Right Bottom Right */}
              <Resizable
                defaultSize={{
                  width: '50%',
                  height: '100%',
                }}
                minWidth="15%"
                maxWidth="85%"
                enable={{
                  top: false,
                  right: false,
                  bottom: false,
                  left: true,
                  topRight: false,
                  bottomRight: false,
                  bottomLeft: false,
                  topLeft: false,
                }}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-auto flex flex-col"
              >
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 sticky top-0 bg-white">
                  <button
                    onClick={() => setActiveTradeTab('trade')}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                      activeTradeTab === 'trade'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Trade
                  </button>
                  <button
                    onClick={() => setActiveTradeTab('turbo')}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                      activeTradeTab === 'turbo'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    TurboTrader
                  </button>
                  <button
                    onClick={() => setActiveTradeTab('ladder')}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                      activeTradeTab === 'ladder'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Ladder
                  </button>
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-auto p-4">
                  {activeTradeTab === 'trade' && (
                    <div className="space-y-4">
                      {/* Buy/Sell Selector */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => setBuySellMode('buy')}
                          className={`flex-1 py-3 px-4 rounded font-semibold text-white transition-colors ${
                            buySellMode === 'buy'
                              ? 'bg-green-500 hover:bg-green-600'
                              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                          }`}
                        >
                          BUY
                        </button>
                        <button
                          onClick={() => setBuySellMode('sell')}
                          className={`flex-1 py-3 px-4 rounded font-semibold text-white transition-colors ${
                            buySellMode === 'sell'
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
                              className={`flex-1 py-2 px-3 text-xs font-medium rounded transition-colors ${
                                orderType === type
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
                        className={`w-full py-3 rounded font-semibold text-white text-sm transition-colors ${
                          buySellMode === 'buy'
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
              </Resizable>
            </div>
          </div>
        </Resizable>
      </div>
    </div>
  );
};

export default StocksPage;