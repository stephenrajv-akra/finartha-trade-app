
import { useState } from 'react';
import { ArrowLeftFromLine, ArrowRightToLine, Save } from 'lucide-react';
import TabsComponent from './TabsComponent';

const Note = () => {
    const [activeTab, setActiveTab] = useState('Current Stock');
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
    const [notes, setNotes] = useState('');

    const currentStocks = [
        { symbol: 'SLV', name: 'iShare Sliver', status: 'Unsaved' },
        { symbol: 'AAPL', name: 'Apple Inc', status: 'Saved' },
        { symbol: 'MSFT', name: 'Microsoft Corp', status: 'Unsaved' },
    ];
    
    return (
        <div className="flex items-start justify-between gap-4 h-full w-full bg-white">
            {/* Left Sidebar */}
            <div className={`flex-shrink-0 h-full transition-all duration-300 overflow-hidden flex flex-col ${
                    leftSidebarOpen ? 'w-56' : 'w-0'
                }`}
            >
                {/* Tabs */}
                <TabsComponent 
                    tabs={['Current Stock', 'All Notes']} 
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab}
                />

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 px-0"> 
                    {activeTab === 'Current Stock' && (
                        <div className="space-y-2">
                            {currentStocks.map((stock) => (
                                <div
                                    key={stock.symbol}
                                    className="p-2 bg-[#EDE8F2] rounded-sm cursor-pointer hover:bg-purple-100 transition-colors"
                                >
                                    <div className="font-medium text-sm text-black mb-0.5">   
                                        {stock.symbol} {stock.name}
                                    </div>
                                    <div className="text-xs text-[#7F7F7F]">   
                                        {stock.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'All Notes' && (
                        <div className="space-y-2">
                            <div className="p-3 bg-gray-50 rounded-lg text-gray-600 text-sm">
                                No notes yet. Start adding notes to your stocks.
                            </div>
                        </div>
                    )}
                </div>
            </div>

           {leftSidebarOpen && <div className='h-full w-px bg-[#EDE8F2]' />}

            {/* Right Content Area */}
            <div className="flex-1 h-full flex flex-col">
                {/* Header with Toggle and Info */}
                <div className="flex items-center justify-between px-2 py-2 border-b border-gray-200 bg-purple-50">
                    <button
                        onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
                        className="p-2 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                        title={leftSidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
                    >
                        {leftSidebarOpen ? (  
                            <ArrowLeftFromLine color='#8968AB' size={20} />
                        ) : (
                            <ArrowRightToLine color='#8968AB' size={20} /> 
                        )}
                    </button>

                    <div className="flex items-center gap-4 flex-1 px-4">
                        <span className="text-sm font-semibold text-[#242424]"> 
                            SLV 68.14 0.00 0.00% Pre: <span className="text-[#EC4D5C]">63.99 -4.15 -6.09%</span>
                        </span>
                    </div>

                    <button className="flex items-center gap-2 p-2 bg-[#8968AB] text-[#EDE8F2] rounded-lg text-xs font-medium transition-colors">
                        <Save size={16} /> 
                        Save    
                    </button>
                </div>

                {/* Notes Input */}
                <div className="flex-1 flex flex-col py-4 overflow-hidden">
                    <div className="mb-4">
                        <p className="text-sm text-gray-500">Please input notes here.</p>
                    </div>

                    {/* Textarea */}
                    {/* <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Add your notes here..."
                        className="flex-1 w-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    /> */}
                </div>
            </div> 
        </div>
    );
};

export default Note;