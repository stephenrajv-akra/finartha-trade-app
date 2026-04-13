
import { useState } from 'react';
import SlidingTabBar from '../common/SlidingTabBar';
import { RELEASES_DATA } from '../../utils/placeholder-data';

const TABS = ['All', 'Financials', 'Insiders'];

const Releases = () => {
    const [activeTab, setActiveTab] = useState('All');

    // Filter data based on active tab
    const filteredData = activeTab === 'All' 
        ? RELEASES_DATA 
        : RELEASES_DATA.filter(item => item.type === activeTab);

    return (
        <div className="flex flex-col h-full overflow-hidden bg-transparent">
            {/* ── Tab Bar ── */}
            <SlidingTabBar tabs={TABS} active={activeTab} onSelect={setActiveTab} />

            {/* ── Releases List ── */}
            <div className="flex-1 overflow-y-auto p-2">  
                <div>
                    {filteredData.map((release) => (
                        <div
                            key={release.id}
                            className="flex items-start gap-4 px-4 py-2 hover:bg-[#EDE8F2] cursor-pointer rounded"
                        >  

                            {/* ── Right: Content ── */}
                            <div className="flex-1 min-w-0">
                                {/* Company and Ticker */}
                                <div className="text-xs font-semibold text-black leading-tight">
                                    {release.company}
                                    <span className="font-normal text-[#666]"> ({release.ticker})</span>
                                </div>

                                {/* Date and Time */}
                                <div className="text-xxs text-[#7F7F7F] mt-0.5">
                                    {release.date} {release.time} · {release.description}
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Releases;  