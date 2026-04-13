

import { useState } from 'react';
import { Resizable } from 're-resizable';
import PortfolioChart from '../../components/portfolio/PortfolioChart';
import PortfolioSummary from '../../components/portfolio/PortfolioSummary';
import HoldingsTable from '../../components/portfolio/HoldingsTable';
import MarketCapBlock from '../../components/portfolio/MarketCapBlock';
import SectorAllocation from '../../components/portfolio/SectorAllocation';
import AssetAllocation from '../../components/portfolio/AssetAllocation';

const PortfolioPage = () => {
  // Left column row heights
  const [leftRow1H, setLeftRow1H] = useState(450);
  const [leftRow2H, setLeftRow2H] = useState(150);

  // Right column row heights
  const [rightRow1H, setRightRow1H] = useState(450);
  const [rightRow2H, setRightRow2H] = useState(450);

  // Left/right column width
  const [leftWidth, setLeftWidth] = useState(60);

  return (
    <div className="w-full h-full bg-white overflow-y-auto flex gap-1 p-1">

      {/* ── LEFT COLUMN ── */}
      <Resizable
        size={{ width: `${leftWidth}%`, height: '100%' }}
        minWidth="30%"
        maxWidth="75%"
        enable={{
          top: false, right: true, bottom: false, left: false,
          topRight: false, bottomRight: false, bottomLeft: false, topLeft: false,
        }}
        onResizeStop={(e, direction, ref) => {
          const containerWidth = ref.parentElement.clientWidth;
          const pct = (ref.clientWidth / containerWidth) * 100;
          setLeftWidth(Math.max(30, Math.min(75, pct)));
        }}
        className="flex flex-col gap-1 overflow-hidden"
      >
        {/* Left Row 1 – Portfolio Chart */}
        <Resizable
          size={{ width: '100%', height: leftRow1H }}
          minHeight={150}
          maxHeight={500}
          enable={{
            top: false, right: false, bottom: true, left: false,
            topRight: false, bottomRight: false, bottomLeft: false, topLeft: false,
          }}
          onResizeStop={(e, direction, ref) => {
            setLeftRow1H(ref.clientHeight);
          }}
          className="border-2 border-[#EDE8F2] rounded-lg overflow-hidden shrink-0"
          style={{ background: 'linear-gradient(78deg, #FFF 12.93%, #FFFDF4 33.04%, #FFFEFB 64.09%, #FFF 88.77%)' }}
        >
          <PortfolioChart />
        </Resizable> 

        {/* Left Row 2 – Summary */}
        <Resizable
          size={{ width: '100%', height: leftRow2H }}
          minHeight={70}
          maxHeight={200}
          enable={{
            top: false, right: false, bottom: true, left: false,
            topRight: false, bottomRight: false, bottomLeft: false, topLeft: false,
          }}
          onResizeStop={(e, direction, ref) => {
            setLeftRow2H(ref.clientHeight);
          }}
          className="border-2 border-[#EDE8F2] rounded-lg overflow-hidden shrink-0"
        >
          <PortfolioSummary />
        </Resizable>

        {/* Left Row 3 – Holdings Table (fills remaining) */}
        <div className="flex-1 border-2 border-[#EDE8F2] rounded-lg overflow-hidden min-h-[150px]">
          <HoldingsTable />
        </div>
      </Resizable>

      {/* ── RIGHT COLUMN ── */}
      <div className="flex-1 flex flex-col gap-1 overflow-hidden min-w-[25%]">
        {/* Right Row 1 – Market Cap */}
        <Resizable
          size={{ width: '100%', height: rightRow1H }}
          minHeight={180}
          maxHeight={500}
          enable={{
            top: false, right: false, bottom: true, left: false,
            topRight: false, bottomRight: false, bottomLeft: false, topLeft: false,
          }}
          onResizeStop={(e, direction, ref) => {
            setRightRow1H(ref.clientHeight);
          }}
          className="border-2 border-[#EDE8F2] rounded-lg overflow-hidden shrink-0"
        >
          <MarketCapBlock />
        </Resizable>

        {/* Right Row 2 – Sector Allocation */}
        <Resizable
          size={{ width: '100%', height: rightRow2H }}
          minHeight={180}
          maxHeight={500}
          enable={{
            top: false, right: false, bottom: true, left: false,
            topRight: false, bottomRight: false, bottomLeft: false, topLeft: false,
          }}
          onResizeStop={(e, direction, ref) => {
            setRightRow2H(ref.clientHeight);
          }}
          className="border-2 border-[#EDE8F2] rounded-lg overflow-hidden shrink-0"
        >
          <SectorAllocation />
        </Resizable>

        {/* Right Row 3 – Asset Allocation (fills remaining) */}
        <div className="flex-1 border-2 border-[#EDE8F2] rounded-lg overflow-hidden min-h-[150px]">
          <AssetAllocation />
        </div>
      </div>

    </div>
  );
};

export default PortfolioPage;