const TabsComponent = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="relative border-b border-gray-200 bg-white">
            {/* Sliding Indicator */}
            <div
                className={`absolute bottom-0 left-0 h-0.5 bg-purple-600 transition-all duration-300 ease-out`}
                style={{
                    width: `${(1 / tabs.length) * 100}%`,
                    transform: `translateX(${tabs.indexOf(activeTab) * 100}%)`
                }}
            />
            
            <div className="flex relative z-10"> 
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 px-4 py-2 text-xs font-medium transition-colors ${
                            activeTab === tab
                                ? 'text-[#724A9A]'
                                : 'text-[#7F7F7F] hover:text-gray-900'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TabsComponent;
