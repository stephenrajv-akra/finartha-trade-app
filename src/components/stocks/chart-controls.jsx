import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Youtube, CloudMoon, VS, GridIcon, CandlesIcon, EditIcon, GraphIcon, Coin, Delete, EyeIcon, Magnet, PencilDraw, SettingArrow, SettingArr, FilterArr, TextIcon, DoubleStickLeft, DoubleStickRight, CandleH, NIcon, WaveOutlineIcon, WaveFilledIcon, CandlesFilled, CandlesOutline, GridOne, GridTwo, GridThree, GridFour, GridH, DeleteIcon, UploadIcon } from "../../utils/SvgCode";
import { stockItems } from '../../utils/placeholder-data';

const ChartControls = ({ chartType, onChartTypeChange, gridLayout = 1, onGridChange }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [vsDropdownOpen, setVsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeStock, setActiveStock] = useState(0);
    const dropdownRef = useRef(null);

    const filteredStocks = stockItems.filter(
        (s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.sub.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setVsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleTabClick = (index) => {
        if (index === 4) {
            setVsDropdownOpen((prev) => !prev);
            setActiveTab(index);
        } else {
            setVsDropdownOpen(false);
            setActiveTab(index);
        }
    };

    const clickableTabs = [
        { icon: GraphIcon },
        { icon: EditIcon },
        { icon: CandlesIcon },
        { icon: GridIcon },
        { icon: VS },
        { icon: CloudMoon },
    ];

    const staticTabs = [
        { icon: Coin },
        { icon: Youtube },
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="chart-controls bg-[#EDE8F2] py-2 px-4 flex items-center gap-4 min-h-10 overflow-x-auto hide-scrollbar">
                <div className="tabs w-fit flex items-center gap-4 border-r-2 border-[#AE97C5]">
                    {/* Clickable tabs */}
                    {clickableTabs.map((tab, index) => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className="tab"
                            >
                                <IconComponent color={activeTab === index ? "#4F1D81" : undefined} />
                            </button>
                        );
                    })}
                    {/* Static tabs (no click handler) */}
                    {staticTabs.map((tab, index) => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                                key={index + clickableTabs.length}
                                className={`tab ${index === staticTabs.length - 1 ? 'pr-3' : ''}`}
                            >
                                <IconComponent />
                            </button>
                        );
                    })}
                </div>
                <div className="tab-content">
                    {/* content 1 — also visible when VS (tab 4) is active */}
                    <div className={`content-1 flex items-center ${activeTab === 0 || activeTab === 4 ? '' : 'hidden'}`}>
                        <button className="text-xs pl-0 px-4 text-[#242424] border-r border-[#242424]">Volume</button>
                        <button className="text-xs px-4 text-[#242424] border-r border-[#242424]">VWAP</button>
                        <button className="text-xs px-4 text-[#242424] border-r border-[#242424]">MACD</button>
                        <button className="text-xs px-4 text-[#242424] border-r border-[#242424]">All Indicators</button>
                        <button className="text-xs px-4 text-[#242424]">Script Editor</button>
                    </div>
                    {/* content 2 */}
                    <div className={`content-2 flex items-center gap-4 ${activeTab === 1 ? '' : 'hidden'}`}>
                        <div className="flex items-center gap-4 border-r-2 border-[#AE97C5]">
                            <button><SettingArr /></button>
                            <button><SettingArrow /></button>
                            <button><FilterArr /></button>
                            <button className="pr-3"><TextIcon /></button>
                        </div>
                        <div className="flex items-center gap-4">
                            <button><Delete /></button>
                            <button><EyeIcon /></button>
                            <button><Magnet /></button>
                            <button><PencilDraw /></button>
                        </div>
                    </div>
                    {/* content 3 */}
                    <div className={`content-3 flex items-center gap-4 ${activeTab === 2 ? '' : 'hidden'}`}>
                        {[
                            { icon: WaveOutlineIcon, type: 'line' },
                            { icon: WaveFilledIcon, type: 'area' },
                            { icon: CandlesFilled, type: 'candles' },
                            { icon: CandlesOutline, type: 'bars' },
                            { icon: NIcon, type: 'baseline' },
                            { icon: DoubleStickRight, type: 'histogram' },
                        ].map(({ icon: Icon, type }) => (
                            <button
                                key={type}
                                onClick={() => onChartTypeChange(type)}
                                title={type.charAt(0).toUpperCase() + type.slice(1)}
                            >
                                <Icon color={chartType === type ? '#4F1D81' : undefined} />
                            </button>
                        ))} 
                        {/* Static icons — no chart type equivalent */}
                        <button><DoubleStickLeft /></button>
                        <button><CandleH /></button> 
                    </div>
                    {/* content 4 */}
                    <div className={`content-4 flex items-center gap-4 ${activeTab === 3 ? '' : 'hidden'}`}>
                        <div className="grid-block flex items-center gap-2">
                            <div className="text">
                                <p className='text-xs text-[#7F7F7F] font-semibold text-nowrap'>Grids :</p>
                            </div>
                            <div className="grid-types flex items-center gap-4">
                                <button onClick={() => onGridChange?.(1)}><GridOne color={gridLayout === 1 ? '#4F1D81' : undefined} /></button>
                                <button onClick={() => onGridChange?.(2)}><GridTwo color={gridLayout === 2 ? '#4F1D81' : undefined} /></button>
                                <button onClick={() => onGridChange?.(3)}><GridThree color={gridLayout === 3 ? '#4F1D81' : undefined} /></button>
                                <button onClick={() => onGridChange?.(4)}><GridFour color={gridLayout === 4 ? '#4F1D81' : undefined} /></button>
                                <button><GridH /></button>
                            </div> 
                        </div>
                        <div className="grid-block flex items-center gap-2">
                            <div className="text">
                                <p className='text-xs text-[#7F7F7F] font-semibold text-nowrap'>Sync :</p>
                            </div>
                            <div className="grid-types flex items-center gap-2">
                                <div className='flex items-center gap-0.5 cursor-pointer'>
                                    <GridOne />
                                    <p className='text-xs font-normal text-[#242424]'>Symbol</p>
                                </div>
                                <div className='flex items-center gap-0.5 cursor-pointer'>
                                    <GridOne />
                                    <p className='text-xs font-normal text-[#242424]'>Time</p>
                                </div>
                                <div className='flex items-center gap-0.5 cursor-pointer'>
                                    <GridOne />
                                    <p className='text-xs font-normal text-[#242424]'>Indicators</p>
                                </div>
                                <div className='flex items-center gap-0.5 cursor-pointer'>
                                    <GridOne />
                                    <p className='text-xs font-normal text-[#242424]'>Crosshair</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* content 5 */}
                    <div className={`content-5 flex items-center gap-4 ${activeTab === 5 ? 'block' : 'hidden'}`}>
                        <div className="block-1 cursor-pointer flex items-center gap-2 border-r-2 border-[#AE97C5] pr-4">
                            <div className="icon"> 
                                <UploadIcon />  
                            </div>
                            <p className='text-xs font-normal text-[#242424]'>Save layout</p>
                        </div>
                        <div className="block-2 cursor-pointer flex items-center gap-2">   
                            <div className="icon">
                                <DeleteIcon />
                            </div>
                            <p className='text-xs font-normal text-[#242424]'>Delete Layout</p> 
                        </div>
                    </div>
                </div>
            </div>

            {/* VS Dropdown */}
            {vsDropdownOpen && (
                <div className="absolute left-[140px] top-full mt-1 w-full max-w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                    {/* Search Input */}
                    <div className="p-3">
                        <div className="flex items-center gap-2 border border-[#D4A5C9] rounded-xl px-3 py-2 bg-[#EDE8F2]">
                            <Search size={15} className="text-[#C084A8] flex-shrink-0" strokeWidth={2} />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 text-sm text-[#C084A8] placeholder-[#C084A8] outline-none bg-[#EDE8F2]" 
                                autoFocus
                            />
                        </div>
                    </div>  
                    
                    {/* Stock List */}
                    <div className="flex flex-col max-h-[240px] overflow-y-auto p-4 pt-0"> 
                        {filteredStocks.length === 0 ? (
                            <p className="text-xs text-gray-400 text-center py-6">No results found.</p>
                        ) : (
                            filteredStocks.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setActiveStock(i); setVsDropdownOpen(false); setSearchQuery(''); }}
                                    className={`flex flex-col items-start px-4 py-3 text-left rounded border-b border-gray-100 last:border-b-0 transition-colors ${
                                        activeStock === i ? 'bg-[#EDE8F2]' : 'hover:bg-[#EDE8F2]'
                                    }`}
                                >
                                    <span className="text-sm font-medium text-black leading-snug mb-1">{item.name}</span>
                                    <span className="text-xs text-black font-normal">{item.sub}</span>
                                </button>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChartControls;