import { PORTFOLIO_SUMMARY } from '../../utils/placeholder-data';

export default function PortfolioSummary() {
    return (
        <div className="flex flex-col h-full overflow-hidden bg-white">

            {/* ── Top row: Current value label + value + buttons ── */}
            <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#EDE8F2] shrink-0">
                <div>  
                    <p className="text-[#616161] text-base font-normal">Current value</p>
                    <p className="text-[#862574] text-xl font-bold">{PORTFOLIO_SUMMARY.currentValue}</p>
                </div>
                <div className="flex items-center gap-4">
                    {/* Analyse button */}
                    <button className="flex items-center gap-1.5 border border-[#38155C] rounded px-2 py-1 text-[#38155C] font-xs font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 2V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H14" stroke="#38155C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.667 6L9.33366 9.33333L6.66699 6.66667L4.66699 8.66667" stroke="#38155C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Analyse
                    </button>
                    {/* Menu icon */}
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 8H17M7 12H12M7 16H17" stroke="#28303F" stroke-width="1.5" stroke-linecap="round" />
                        </svg> 
                    </button>
                </div>
            </div>

            {/* ── Bottom row: three metrics, evenly spread ── */}
            <div className="flex items-start px-5 py-2 gap-0 shrink-0">
                {/* Invested value */}
                <div className="flex-1">
                    <p className="text-[#7F7F7F] text-base font-normal">Invested value</p>
                    <p className="text-[#242424] text-base font-bold">{PORTFOLIO_SUMMARY.investedValue}</p>
                </div>

                {/* Divider */}
                <div className="w-px self-stretch bg-[#EDE8F2] mx-4" />

                {/* Current value (P&L absolute) */}
                <div className="flex-1 text-center">
                    <p className="text-[#7F7F7F] text-base font-normal">Current value</p>
                    <p className="text-[#EC4D5C] text-base font-bold">{PORTFOLIO_SUMMARY.currentValueChange}</p>
                </div>

                {/* Divider */}
                <div className="w-px self-stretch bg-[#EDE8F2] mx-4" />

                {/* Current value (P&L return) */}
                <div className="flex-1 text-right">
                    <p className="text-[#7F7F7F] text-base font-normal">Current value</p>
                    <p className="text-[#EC4D5C] text-base font-bold">{PORTFOLIO_SUMMARY.currentReturn}</p>
                </div> 
            </div>

        </div>
    );
}

