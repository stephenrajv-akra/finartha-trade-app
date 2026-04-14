// Placeholder data for Time&Sales and Vol Analysis

// ── Yield Curves ──────────────────────────────────────────────────────────────
// Expected API shape:
// {
//   xAxis: string[],          // Maturity labels: ["6M","1Y","2Y","5Y","10Y","30Y"]
//   series: [
//     { id: string, label: string, color: string, data: number[] }
//   ]
// }


export const yieldCurvesData = {
  xAxis: ['6M', '1Y', '2Y', '5Y', '10Y', '30Y'],
  series: [
    {
      id: 'treasury',
      label: 'Treasury',
      color: '#724A9A',
      bgColor: '#EDE8F280', 
      data: [5.02, 5.48, 6.05, 7.12, 7.40, 7.72],
    },
    {
      id: 'ig_corp',
      label: 'IG Corp',
      color: '#9E5190',
      bgColor: '#F3E9F1',
      data: [5.20, 5.90, 6.80, 9.20, 9.35, 8.42],
    },
    {
      id: 'hy_corp',
      label: 'HY Corp',
      color: '#D7A564',
      bgColor: '#F4EFEA',
      data: [4.32, 4.60, 4.85, 5.42, 5.82, 6.38],
    },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

export const timeAndSalesData = [
  { time: '00:47:12', price: 260.12, volume: 3, symbol: 'OCEA' },
  { time: '00:48:15', price: 261.15, volume: 553, symbol: 'OCEA' },
  { time: '00:49:20', price: 262.18, volume: 4, symbol: 'BOSS' },
  { time: '00:50:25', price: 263.21, volume: 13, symbol: 'OCEA' },
  { time: '00:51:30', price: 264.24, volume: 3, symbol: 'OCEA' },
  { time: '00:52:35', price: 265.27, volume: 13, symbol: 'BOSS' },
  { time: '00:53:40', price: 266.30, volume: 23, symbol: 'OCEA' },
  { time: '00:54:45', price: 267.33, volume: 13, symbol: 'BOSS' },
  { time: '00:55:50', price: 268.36, volume: 321, symbol: 'BOSS' },
  { time: '00:56:55', price: 269.39, volume: 13, symbol: 'OCEA' },
  { time: '00:57:00', price: 270.42, volume: 13, symbol: 'OCEA' },
  { time: '00:58:05', price: 271.45, volume: 13, symbol: 'OCEA' },
  { time: '00:59:10', price: 272.48, volume: 23, symbol: 'BOSS' },
  { time: '01:00:15', price: 273.51, volume: 13, symbol: 'BOSS' },
  { time: '01:01:20', price: 274.54, volume: 12, symbol: 'OCEA' },
  { time: '01:02:25', price: 275.57, volume: 12, symbol: 'OCEA' },
  { time: '01:03:30', price: 276.60, volume: 13, symbol: 'OCEA' },
  { time: '01:04:35', price: 277.63, volume: 234, symbol: 'BOSS' },
  { time: '01:05:40', price: 278.66, volume: 13, symbol: 'OCEA' },
  { time: '01:06:45', price: 279.69, volume: 23, symbol: 'OCEA' },
  { time: '01:07:50', price: 280.72, volume: 13, symbol: 'OCEA' },
  { time: '01:08:55', price: 281.75, volume: 13, symbol: 'OCEA' },
  { time: '01:09:00', price: 282.78, volume: 100, symbol: 'OCEA' },
];

// ── Net Flow Chart ───────────────────────────────────────────────────────────
// Expected API shape:
// {
//   times: string[],          // Time labels: ["09:30", "10:00", ...]
//   series: [
//     { id: string, label: string, color: string, data: number[] }
//   ]
// }
// To integrate: replace netFlowChartData with an API response of the same shape.
export const netFlowChartData = {
  // Dense time ticks from 09:30 to 16:00 for ECG/heart-rate style resolution
  times: [
    '09:30','09:35','09:40','09:45','09:50','09:55',
    '10:00','10:05','10:10','10:15','10:20','10:25','10:30',
    '10:35','10:40','10:45','10:50','10:55',
    '11:00','11:05','11:10','11:15','11:20','11:25','11:30',
    '11:35','11:40','11:45','11:50','11:55',
    '12:00','12:05','12:10','12:15','12:20','12:25','12:30',
    '12:35','12:40','12:45','12:50','12:55',
    '13:00','13:05','13:10','13:15','13:20','13:25','13:30',
    '13:35','13:40','13:45','13:50','13:55',
    '14:00','14:05','14:10','14:15','14:20','14:25','14:30',
    '14:35','14:40','14:45','14:50','14:55',
    '15:00','15:05','15:10','15:15','15:20','15:25','15:30',
    '15:35','15:40','15:45','15:50','15:55','16:00',
  ],
  series: [
    {
      id: 'nasdaq',
      label: 'NASDAQ',
      color: '#F7B84B',
      // Upper band: ~160-210
      data: [
        178,162,188,148,195,170,  // 09:30-09:55
        172,185,155,200,165,180,168, // 10:00-10:30
        192,152,205,162,176,170,   // 10:35-10:55
        182,158,196,172,148,188,165, // 11:00-11:30
        180,154,202,166,184,172,   // 11:35-11:55
        188,162,174,198,156,182,170, // 12:00-12:30
        194,152,186,172,162,178,184, // 12:35-13:00
        158,202,166,190,148,176,172, // 13:05-13:30
        194,162,184,150,198,172,   // 13:35-13:55
        182,160,196,168,154,186,174, // 14:00-14:30
        162,198,172,188,158,182,192, // 14:35-15:00
        150,204,166,194,162,184,172, // 15:05-15:30
        156,202,170,192,166,182,148,172, // 15:35-16:00
      ],
    },
    {
      id: 'nyse',
      label: 'NYSE',
      color: '#8668B9',
      // Lower band: ~60-110
      data: [
        78,62,88,52,92,72,   // 09:30-09:55
        68,84,55,96,70,80,65,  // 10:00-10:30
        88,52,100,63,76,70,   // 10:35-10:55
        82,58,94,72,50,86,65,  // 11:00-11:30
        80,55,98,66,85,74,   // 11:35-11:55
        90,62,75,100,55,84,70, // 12:00-12:30
        96,52,82,68,60,78,86,  // 12:35-13:00
        58,102,68,90,50,76,72, // 13:05-13:30
        96,63,84,52,100,72,   // 13:35-13:55
        82,60,95,68,55,88,75,  // 14:00-14:30
        62,100,72,90,58,82,92, // 14:35-15:00
        50,105,68,94,62,84,72, // 15:05-15:30
        55,102,70,92,65,82,48,72, // 15:35-16:00
      ],
    },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

export const volAnalysisData = [
  { price: 250, buy: 33220, sell: 45670, volume: 53880, ratio: 12.85 },
  { price: 250, buy: 47230, sell: 28910, volume: 53880, ratio: 22.15 },
  { price: 250, buy: 36500, sell: 52340, volume: 53880, ratio: 78.60 },
  { price: 250, buy: 54780, sell: 37880, volume: 53880, ratio: 89.10 },
  { price: 250, buy: 82110, sell: 29450, volume: 53880, ratio: 91.30 },
  { price: 250, buy: 27880, sell: 39990, volume: 53880, ratio: 60.00 },
  { price: 250, buy: 29990, sell: 22330, volume: 53880, ratio: 73.45 },
  { price: 250, buy: 49560, sell: 50290, volume: 53880, ratio: 49.55 },
  { price: 250, buy: 55890, sell: 39110, volume: 53880, ratio: 66.75 },
  { price: 250, buy: 60030, sell: 44990, volume: 53880, ratio: 27.40 },
  { price: 250, buy: 71340, sell: 53880, volume: 53880, ratio: 33.10 },
  { price: 250, buy: 40150, sell: 19760, volume: 53880, ratio: 82.25 },
  { price: 250, buy: 58770, sell: 41230, volume: 53880, ratio: 92.80 },
  { price: 250, buy: 39990, sell: 54120, volume: 53880, ratio: 45.25 },
  { price: 250, buy: 75900, sell: 60050, volume: 53880, ratio: 67.90 },
  { price: 250, buy: 31440, sell: 48770, volume: 53880, ratio: 53.40 },
  { price: 250, buy: 48140, sell: 31840, volume: 53880, ratio: 34.75 },
  { price: 250, buy: 52880, sell: 26680, volume: 53880, ratio: 5.50 },
  { price: 250, buy: 42670, sell: 35670, volume: 53880, ratio: 14.20 },
  { price: 250, buy: 38120, sell: 25750, volume: 53880, ratio: 37.80 },
  { price: 250, buy: 63450, sell: 46780, volume: 53880, ratio: 18.90 },
];
