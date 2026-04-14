import { PORTFOLIO_SUMMARY } from '../../utils/placeholder-data';
import { useState } from 'react';
import {IndianRupee, DollarSign, ChevronUp} from 'lucide-react';

export default function PortfolioSummary() {
    const [active, setActive] = useState("INR");
    return (
        <div className="flex flex-col h-full overflow-hidden bg-white">

            {/* ── Top row: Current value label + value + buttons ── */}
            <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#EDE8F2] shrink-0">
                <div>
                    <p className="text-[#616161] text-base font-normal">Current value</p>
                    <div className='flex items-end gap-1'>  
                        <p className="text-[#862574] text-xl font-bold">{PORTFOLIO_SUMMARY.currentValue}</p>
                        <div className='flex items-end'>
                        <ChevronUp color='#079E53' />   
                        <p className='text-[#079E53] text-base font-medium'>{PORTFOLIO_SUMMARY.inflation}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative inline-flex bg-[#6E3A9C] rounded-full p-[8px] w-[120px]">

                        {/* Sliding Background */}
                        <div
                            className={`absolute top-[3px] h-[calc(100%-6px)] w-[calc(50%-3px)] bg-white rounded-full transition-all duration-300 ease-in-out
          ${active === "USD" ? "left-[calc(50%+1.5px)]" : "left-[3px]"}
        `}
                        />

                        {/* INR */}
                        <button
                            onClick={() => setActive("INR")}
                            className={`relative z-10 flex items-center justify-center gap-0.5 w-1/2 text-xs font-semibold
          ${active === "INR" ? "text-[#6E3A9C]" : "text-white"}
        `}
                        >
                            <span className="text-xs"><IndianRupee size={14} /></span>
                            INR
                        </button>

                        {/* USD */}
                        <button
                            onClick={() => setActive("USD")}  
                            className={`relative z-10 flex items-center justify-center gap-0.5 w-1/2 text-xs font-semibold
          ${active === "USD" ? "text-[#6E3A9C]" : "text-white"}
        `}  
                        >
                            <span className="text-xs"><DollarSign size={14} /></span>  
                            USD 
                        </button>
                    </div> 
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

