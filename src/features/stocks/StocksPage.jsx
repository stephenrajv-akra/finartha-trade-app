
import { useState } from 'react';
import { Resizable } from 're-resizable';
import { Menu, ChevronDown, BarChart3, TrendingUp, TrendingDown } from 'lucide-react';
import ChartContainer from '../../components/stocks/chart-container';
import OpenAccount from '../../components/stocks/open-account';
import QuotesWatchlist from '../../components/stocks/quotes-watchlist';

const StocksPage = () => {
  const [leftWidth, setLeftWidth] = useState(50); // percentage
  
  const [activeOrderBookTab, setActiveOrderBookTab] = useState('all');

  const handleLeftResize = (e, direction, ref, delta) => {
    const containerWidth = ref.parentElement.clientWidth;
    const newWidth = (ref.clientWidth / containerWidth) * 100;
    setLeftWidth(Math.max(20, Math.min(80, newWidth)));
  };

  const rightWidth = 100 - leftWidth;

  return (
    <div className="w-full h-screen bg-white overflow-hidden">
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
                    height: '75%',
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
                    height: '25%',
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
                className="bg-gray-50 rounded-lg p-4 overflow-hidden border-2 border-gray-200"
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
                    {/* Order Book Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900">Order Book</h3>
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">NOlI</span>
                      </div>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Menu size={18} />
                      </button>
                    </div>

                    {/* Order Book Tabs with Icons */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
                      <button
                        onClick={() => setActiveOrderBookTab('all')}
                        className={`p-2 rounded transition-colors ${activeOrderBookTab === 'all'
                          ? 'bg-gray-300 text-gray-900'
                          : 'bg-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        title="All Orders"
                      >
                        <BarChart3 size={18} />
                      </button>
                      <button
                        onClick={() => setActiveOrderBookTab('buy')}
                        className={`p-2 rounded transition-colors ${activeOrderBookTab === 'buy'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-transparent text-gray-500 hover:text-green-600'
                          }`}
                        title="Buy Orders"
                      >
                        <TrendingUp size={18} />
                      </button>
                      <button
                        onClick={() => setActiveOrderBookTab('sell')}
                        className={`p-2 rounded transition-colors ${activeOrderBookTab === 'sell'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-transparent text-gray-500 hover:text-red-600'
                          }`}
                        title="Sell Orders"
                      >
                        <TrendingDown size={18} />
                      </button>

                      {/* Price Selector */}
                      <div className="ml-auto flex items-center gap-1 px-2 py-1 border border-gray-300 rounded text-xs font-medium text-gray-700">
                        <span>0.00001</span>
                        <ChevronDown size={14} />
                      </div>
                    </div>

                    {/* Table Header */}
                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 grid grid-cols-3 gap-4 text-xs font-semibold text-gray-600">
                      <div>Price USD</div>
                      <div>Size(XAU)</div>
                      <div>Total(XAU)</div>
                    </div>

                    {/* Table Content */}
                    <div className="flex-1 overflow-auto">
                      {(activeOrderBookTab === 'all' || activeOrderBookTab === 'sell') && (
                        <>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs bg-red-50 hover:bg-red-100 transition-colors">
                            <div className="font-semibold text-red-600">$4560.65</div>
                            <div className="text-gray-700">55,55,500</div>
                            <div className="text-gray-700 bg-red-100 px-2 py-1 rounded">55,55,500</div>
                          </div>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs hover:bg-gray-50 transition-colors">
                            <div className="font-semibold text-red-600">$4560.65</div>
                            <div className="text-gray-700">55,55,500</div>
                            <div className="text-gray-700 bg-red-50 px-2 py-1 rounded">55,55,500</div>
                          </div>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs hover:bg-gray-50 transition-colors">
                            <div className="font-semibold text-red-600">$4560.65</div>
                            <div className="text-gray-700">55,55,500</div>
                            <div className="text-gray-700 bg-red-50 px-2 py-1 rounded">55,55,500</div>
                          </div>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs hover:bg-gray-50 transition-colors">
                            <div className="font-semibold text-red-600">$4560.65</div>
                            <div className="text-gray-700">55,55,500</div>
                            <div className="text-gray-700 bg-red-50 px-2 py-1 rounded">55,55,500</div>
                          </div>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs hover:bg-gray-50 transition-colors">
                            <div className="font-semibold text-red-600">$4560.65</div>
                            <div className="text-gray-700">55,55,500</div>
                            <div className="text-gray-700 bg-red-50 px-2 py-1 rounded">55,55,500</div>
                          </div>
                        </>
                      )}

                      {(activeOrderBookTab === 'all' || activeOrderBookTab === 'buy') && (
                        <>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs bg-green-50 hover:bg-green-100 transition-colors font-bold">
                            <div className="text-green-600 text-lg">$4560.65</div>
                            <div className="text-gray-700">
                              <span className="bg-gray-700 text-white px-2 py-0.5 rounded text-xs">M</span> 4560.65
                            </div>
                            <div className="text-gray-700 bg-green-100 px-2 py-1 rounded">55,55,500</div>
                          </div>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs hover:bg-gray-50 transition-colors">
                            <div className="font-semibold text-green-600">$4560.65</div>
                            <div className="text-gray-700">55,55,500</div>
                            <div className="text-gray-700 bg-green-50 px-2 py-1 rounded">55,55,500</div>
                          </div>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs hover:bg-gray-50 transition-colors">
                            <div className="font-semibold text-green-600">$4560.65</div>
                            <div className="text-gray-700">55,55,500</div>
                            <div className="text-gray-700 bg-green-50 px-2 py-1 rounded">55,55,500</div>
                          </div>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs hover:bg-gray-50 transition-colors">
                            <div className="font-semibold text-green-600">$4560.65</div>
                            <div className="text-gray-700">55,55,500</div>
                            <div className="text-gray-700 bg-green-50 px-2 py-1 rounded">55,55,500</div>
                          </div>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs hover:bg-gray-50 transition-colors">
                            <div className="font-semibold text-green-600">$4560.65</div>
                            <div className="text-gray-700">55,55,500</div>
                            <div className="text-gray-700 bg-green-50 px-2 py-1 rounded">55,55,500</div>
                          </div>
                          <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-3 gap-4 text-xs hover:bg-gray-50 transition-colors">
                            <div className="font-semibold text-green-600">$4560.65</div>
                            <div className="text-gray-700">55,55,500</div>
                            <div className="text-gray-700 bg-green-50 px-2 py-1 rounded">55,55,500</div>
                          </div>
                        </>
                      )}
                    </div>
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
                    className="bg-white border-2 border-gray-200 rounded-lg overflow-auto"
                  >
                    <div className="p-4">
                      <h3 className="font-bold text-gray-700 mb-2">Right Bottom - Left Bottom</h3>
                      <p className="text-gray-600 text-sm">Resizable content area</p>
                    </div>
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
                className="bg-white border-2 border-gray-200 rounded-lg overflow-auto"
              >
                <div className="p-4">
                  <h3 className="font-bold text-gray-700 mb-2">Right Bottom - Right</h3>
                  <p className="text-gray-600 text-sm">Drag the divider to the left to resize</p>
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