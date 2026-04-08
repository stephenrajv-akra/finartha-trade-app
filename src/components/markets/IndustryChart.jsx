
export default function IndustryChart() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center border-b border-gray-200 bg-[#f7f7f7] shrink-0 px-3 py-2 gap-2">
        <span className="text-xs font-medium text-gray-700">Industry</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 shrink-0 bg-white">
        {/* Dropdown */}
        <div className="flex items-center gap-1 border border-gray-200 rounded px-2 py-1 cursor-pointer text-xs text-gray-700 font-medium">
          PE/PB
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {/* Time buttons */}
        {['1Y', '5Y', '10Y'].map((t) => (
          <button key={t} className={`text-xs px-2 py-1 rounded font-medium transition-colors ${t === '1Y' ? 'bg-[#EDE8F2] text-[#724A9A]' : 'text-gray-500 hover:text-gray-700'}`}>
            {t}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-1.5">
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <button className="text-[#724A9A]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Axis labels + scatter area */}
      <div className="flex flex-1 overflow-hidden p-2 gap-1">
        {/* Y-axis label */}
        <div className="flex flex-col justify-between shrink-0 text-[9px] text-gray-400 py-1 pr-1 items-end">
          <span>PB%</span>
          <span>70%</span>
          <span>30%</span>
          <span>0%</span>
        </div>
        {/* Chart area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 relative border border-gray-100 rounded" style={{ minHeight: 0 }}>
            {/* Scatter bubbles */}
            {[
              { top: '10%', left: '5%', size: 14 },
              { top: '20%', left: '18%', size: 16 },
              { top: '35%', left: '30%', size: 12 },
              { top: '25%', left: '50%', size: 20 },
              { top: '45%', left: '62%', size: 28 },
              { top: '38%', left: '78%', size: 16 },
              { top: '55%', left: '88%', size: 12 },
              { top: '65%', left: '45%', size: 32 },
              { top: '70%', left: '70%', size: 18 },
            ].map((b, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#9B72C8] opacity-40"
                style={{ top: b.top, left: b.left, width: b.size, height: b.size, transform: 'translate(-50%, -50%)' }}
              />
            ))}
          </div>
          {/* X-axis labels */}
          <div className="flex justify-between text-[9px] text-gray-400 pt-1">
            <span>30%</span>
            <span>70%</span>
            <span>PE%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
