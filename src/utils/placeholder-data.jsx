// ── Global Header Search Suggestions ─────────────────────────────────────────
// type: 'Stock' | 'Index' | 'Forex' | 'Crypto' | 'ETF' | 'Commodity'
// exchange: exchange / market label shown in the dropdown
export const SEARCH_SUGGESTIONS = [
  // ── US Stocks ──
  { symbol: 'AAPL', name: 'Apple Inc.', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'META', name: 'Meta Platforms Inc.', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'TSLA', name: 'Tesla Inc.', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'BRK.B', name: 'Berkshire Hathaway B', type: 'Stock', exchange: 'NYSE' },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', type: 'Stock', exchange: 'NYSE' },
  { symbol: 'V', name: 'Visa Inc.', type: 'Stock', exchange: 'NYSE' },
  { symbol: 'UNH', name: 'UnitedHealth Group', type: 'Stock', exchange: 'NYSE' },
  { symbol: 'WMT', name: 'Walmart Inc.', type: 'Stock', exchange: 'NYSE' },
  { symbol: 'XOM', name: 'Exxon Mobil Corporation', type: 'Stock', exchange: 'NYSE' },
  { symbol: 'MA', name: 'Mastercard Inc.', type: 'Stock', exchange: 'NYSE' },
  { symbol: 'LLY', name: 'Eli Lilly and Company', type: 'Stock', exchange: 'NYSE' },
  { symbol: 'AVGO', name: 'Broadcom Inc.', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'AMD', name: 'Advanced Micro Devices', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'COST', name: 'Costco Wholesale', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'NFLX', name: 'Netflix Inc.', type: 'Stock', exchange: 'NASDAQ' },
  { symbol: 'INTC', name: 'Intel Corporation', type: 'Stock', exchange: 'NASDAQ' },
  // ── Indian Stocks ──
  { symbol: 'RELIANCE', name: 'Reliance Industries Ltd.', type: 'Stock', exchange: 'NSE' },
  { symbol: 'TCS', name: 'Tata Consultancy Services', type: 'Stock', exchange: 'NSE' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd.', type: 'Stock', exchange: 'NSE' },
  { symbol: 'INFY', name: 'Infosys Ltd.', type: 'Stock', exchange: 'NSE' },
  { symbol: 'ICICIBANK', name: 'ICICI Bank Ltd.', type: 'Stock', exchange: 'NSE' },
  { symbol: 'HINDUNILVR', name: 'Hindustan Unilever Ltd.', type: 'Stock', exchange: 'NSE' },
  { symbol: 'BAJFINANCE', name: 'Bajaj Finance Ltd.', type: 'Stock', exchange: 'NSE' },
  { symbol: 'WIPRO', name: 'Wipro Ltd.', type: 'Stock', exchange: 'NSE' },
  { symbol: 'TATAMOTORS', name: 'Tata Motors Ltd.', type: 'Stock', exchange: 'NSE' },
  { symbol: 'ADANIENT', name: 'Adani Enterprises Ltd.', type: 'Stock', exchange: 'NSE' },
  // ── Indices ──
  { symbol: 'SPX', name: 'S&P 500 Index', type: 'Index', exchange: 'IDXSP' },
  { symbol: 'NDX', name: 'NASDAQ 100 Index', type: 'Index', exchange: 'IDXNASDAQ' },
  { symbol: 'DJI', name: 'Dow Jones Industrial Avg.', type: 'Index', exchange: 'IDXDJX' },
  { symbol: 'NIFTY', name: 'Nifty 50', type: 'Index', exchange: 'NSE' },
  { symbol: 'SENSEX', name: 'BSE Sensex', type: 'Index', exchange: 'BSE' },
  { symbol: 'BANKNIFTY', name: 'Bank Nifty', type: 'Index', exchange: 'NSE' },
  { symbol: 'FTSE', name: 'FTSE 100', type: 'Index', exchange: 'LSE' },
  { symbol: 'DAX', name: 'DAX 40', type: 'Index', exchange: 'XETRA' },
  { symbol: 'NIKKEI', name: 'Nikkei 225', type: 'Index', exchange: 'JPX' },
  { symbol: 'HSI', name: 'Hang Seng Index', type: 'Index', exchange: 'HKEX' },
  { symbol: 'VIX', name: 'CBOE Volatility Index', type: 'Index', exchange: 'CBOE' },
  // ── Forex ──
  { symbol: 'EURUSD', name: 'Euro / US Dollar', type: 'Forex', exchange: 'FX' },
  { symbol: 'GBPUSD', name: 'British Pound / US Dollar', type: 'Forex', exchange: 'FX' },
  { symbol: 'USDJPY', name: 'US Dollar / Japanese Yen', type: 'Forex', exchange: 'FX' },
  { symbol: 'USDINR', name: 'US Dollar / Indian Rupee', type: 'Forex', exchange: 'FX' },
  { symbol: 'AUDUSD', name: 'Australian Dollar / USD', type: 'Forex', exchange: 'FX' },
  { symbol: 'USDCAD', name: 'US Dollar / Canadian Dollar', type: 'Forex', exchange: 'FX' },
  // ── Crypto ──
  { symbol: 'BTC', name: 'Bitcoin', type: 'Crypto', exchange: 'Crypto' },
  { symbol: 'ETH', name: 'Ethereum', type: 'Crypto', exchange: 'Crypto' },
  { symbol: 'BNB', name: 'BNB (Binance)', type: 'Crypto', exchange: 'Crypto' },
  { symbol: 'SOL', name: 'Solana', type: 'Crypto', exchange: 'Crypto' },
  { symbol: 'XRP', name: 'XRP (Ripple)', type: 'Crypto', exchange: 'Crypto' },
  { symbol: 'DOGE', name: 'Dogecoin', type: 'Crypto', exchange: 'Crypto' },
  // ── ETFs ──
  { symbol: 'SPY', name: 'SPDR S&P 500 ETF', type: 'ETF', exchange: 'NYSE' },
  { symbol: 'QQQ', name: 'Invesco QQQ Trust', type: 'ETF', exchange: 'NASDAQ' },
  { symbol: 'GLD', name: 'SPDR Gold Shares', type: 'ETF', exchange: 'NYSE' },
  { symbol: 'VTI', name: 'Vanguard Total Stock Market', type: 'ETF', exchange: 'NYSE' },
  // ── Commodities ──
  { symbol: 'XAUUSD', name: 'Gold / US Dollar', type: 'Commodity', exchange: 'COMEX' },
  { symbol: 'XAGUSD', name: 'Silver / US Dollar', type: 'Commodity', exchange: 'COMEX' },
  { symbol: 'BRENT', name: 'Brent Crude Oil', type: 'Commodity', exchange: 'ICE' },
  { symbol: 'WTI', name: 'WTI Crude Oil', type: 'Commodity', exchange: 'NYMEX' },
  { symbol: 'NG', name: 'Natural Gas', type: 'Commodity', exchange: 'NYMEX' },
];

export const stockItems = [
  { name: 'Dow Jones Industrial Average', sub: 'DJI Index IDXDJX' },
  { name: 'S&P 500 Index', sub: 'SPX Index IDXSP' },
  { name: 'NASDAQ Composite', sub: 'IXIC Index IDXNASDAQ' },

  // US Indices
  { name: 'Russell 2000', sub: 'RUT Index IDXRUSSELL' },
  { name: 'CBOE Volatility Index (VIX)', sub: 'VIX Index IDXVIX' },

  // Indian Indices (since your users likely Indian)
  { name: 'Nifty 50', sub: 'NSE Index NIFTY' },
  { name: 'Sensex', sub: 'BSE Index SENSEX' },
  { name: 'Bank Nifty', sub: 'NSE Index BANKNIFTY' },
  { name: 'Nifty IT', sub: 'NSE Index NIFTYIT' },

  // Global Indices
  { name: 'FTSE 100', sub: 'UK Index FTSE' },
  { name: 'DAX', sub: 'Germany Index DAX' },
  { name: 'Nikkei 225', sub: 'Japan Index NIKKEI' },
  { name: 'Hang Seng Index', sub: 'Hong Kong Index HSI' },

  // Popular Stocks (US)
  { name: 'Apple Inc.', sub: 'AAPL NASDAQ' },
  { name: 'Microsoft Corporation', sub: 'MSFT NASDAQ' },
  { name: 'Tesla Inc.', sub: 'TSLA NASDAQ' },
  { name: 'Amazon.com Inc.', sub: 'AMZN NASDAQ' },
  { name: 'NVIDIA Corporation', sub: 'NVDA NASDAQ' },
  { name: 'Meta Platforms', sub: 'META NASDAQ' },
  { name: 'Alphabet Inc. (Google)', sub: 'GOOGL NASDAQ' },

  // Popular Stocks (India)
  { name: 'Reliance Industries', sub: 'RELIANCE NSE' },
  { name: 'Tata Consultancy Services', sub: 'TCS NSE' },
  { name: 'HDFC Bank', sub: 'HDFCBANK NSE' },
  { name: 'Infosys', sub: 'INFY NSE' },
  { name: 'ICICI Bank', sub: 'ICICIBANK NSE' },
];


export const newsData = [
  {
    title: "Gold, other precious metals fall as Trump threatens to hit Iran “Extremely hard”",
    source: "Seeking Alpha",
    time: "50m ago"
  },
  {
    title: "Oil prices rise amid supply concerns and geopolitical tensions",
    source: "Reuters",
    time: "1h ago"
  },
  {
    title: "US stocks close higher as tech shares lead gains",
    source: "Bloomberg",
    time: "2h ago"
  },
  {
    title: "Bitcoin crosses $70,000 mark amid renewed investor interest",
    source: "CoinDesk",
    time: "3h ago"
  },
  {
    title: "Asian markets fall as inflation fears weigh on sentiment",
    source: "CNBC",
    time: "4h ago"
  },
  {
    title: "Federal Reserve signals potential rate cuts later this year",
    source: "Wall Street Journal",
    time: "5h ago"
  },
  {
    title: "Tesla shares dip after quarterly delivery miss",
    source: "MarketWatch",
    time: "6h ago"
  },
  {
    title: "Crude oil demand outlook improves as global travel rebounds",
    source: "Financial Times",
    time: "7h ago"
  },
  {
    title: "Nvidia hits new all-time high driven by AI demand",
    source: "Yahoo Finance",
    time: "8h ago"
  },
  {
    title: "Rupee weakens slightly against dollar in early trade",
    source: "Economic Times",
    time: "9h ago"
  }
];

export const chartsymbolNameSuggestions = [
  { symbol: 'EURUSD', name: 'Euro / US Dollar' },
  { symbol: 'GBPUSD', name: 'British Pound / US Dollar' },
  { symbol: 'USDJPY', name: 'US Dollar / Japanese Yen' },
  { symbol: 'AUDUSD', name: 'Australian Dollar / US Dollar' },
  { symbol: 'NZDUSD', name: 'New Zealand Dollar / US Dollar' },
  { symbol: 'USDCAD', name: 'US Dollar / Canadian Dollar' },
  { symbol: 'XAUUSD', name: 'Gold / US Dollar' },
  { symbol: 'XAGUSD', name: 'Silver / US Dollar' },
  { symbol: 'BRENTUSD', name: 'Brent Crude Oil' },
  { symbol: 'SP500', name: 'S&P 500 Index' },
];


export const HEATMAP_DATA = {
  'Healthcare Providers': [
    { name: 'UNH', value: 4800, change: 1.23, market: 'Stock Market', region: 'North America' },
    { name: 'CVS', value: 1200, change: 0.44, market: 'Stock Market', region: 'North America' },
    { name: 'HCA', value: 800, change: -0.22, market: 'Stock Market', region: 'North America' },
    { name: 'CNC', value: 600, change: 0.88, market: 'Stock Market', region: 'Asia Pacific' },
    { name: 'ELV', value: 900, change: 0.15, market: 'Stock Market', region: 'Europe' },
    { name: 'HUM', value: 500, change: -0.65, market: 'Stock Market', region: 'North America' },
  ],
  'Communications & Ne...': [
    { name: 'CSCO', value: 2200, change: 0.15, market: 'Stock Market', region: 'North America' },
    { name: 'CMCSA', value: 1600, change: 0.33, market: 'Stock Market', region: 'North America' },
    { name: 'T', value: 1400, change: -0.18, market: 'Stock Market', region: 'North America' },
    { name: 'VZ', value: 1100, change: 0.05, market: 'Stock Market', region: 'North America' },
    { name: 'NFLX', value: 2800, change: 0.77, market: 'Stock Market', region: 'North America' },
    { name: 'DIS', value: 1800, change: 0.42, market: 'Stock Market', region: 'North America' },
  ],
  'Semiconductors & Se...': [
    { name: 'NVDA', value: 3200, change: 0.26, market: 'Stock Market', region: 'North America' },
    { name: 'TSM', value: 2800, change: 1.04, market: 'Stock Market', region: 'Asia Pacific' },
    { name: 'AVGO', value: 2400, change: 6.21, market: 'Stock Market', region: 'North America' },
    { name: 'AMD', value: 1200, change: 0.55, market: 'Stock Market', region: 'North America' },
    { name: 'INTC', value: 1100, change: -0.45, market: 'Stock Market', region: 'North America' },
    { name: 'KLAC', value: 900, change: 0.33, market: 'Stock Market', region: 'North America' },
    { name: 'ASML', value: 1500, change: 0.82, market: 'Stock Market', region: 'Europe' },
    { name: 'AMAT', value: 800, change: 0.28, market: 'Stock Market', region: 'North America' },
    { name: 'LRCX', value: 700, change: 0.12, market: 'Stock Market', region: 'North America' },
    { name: 'QCOM', value: 1400, change: 0.19, market: 'Stock Market', region: 'North America' },
    { name: 'MRVL', value: 500, change: -0.35, market: 'Stock Market', region: 'North America' },
    { name: 'MU', value: 600, change: 0.44, market: 'Stock Market', region: 'Asia Pacific' },
  ],
  'Electronic Equipment ...': [
    { name: 'APH', value: 900, change: 0.66, market: 'Stock Market', region: 'North America' },
    { name: 'GLW', value: 500, change: 0.22, market: 'Stock Market', region: 'North America' },
    { name: 'TEL', value: 700, change: -0.11, market: 'Stock Market', region: 'Asia Pacific' },
    { name: 'KEYS', value: 400, change: 0.33, market: 'Stock Market', region: 'North America' },
  ],
  'Oil & Gas Related Equi...': [
    { name: 'SLB', value: 800, change: -0.22, market: 'Commodities', region: 'Global' },
    { name: 'BKR', value: 600, change: 0.35, market: 'Commodities', region: 'North America' },
    { name: 'HAL', value: 500, change: 0.11, market: 'Commodities', region: 'North America' },
    { name: 'FTI', value: 300, change: -0.55, market: 'Commodities', region: 'Europe' },
  ],
  'Natural Gas Utilities': [
    { name: 'LNG', value: 1200, change: 0.44, market: 'Commodities', region: 'Global' },
    { name: 'KINDER', value: 800, change: 0.18, market: 'Commodities', region: 'North America' },
    { name: 'WMB', value: 700, change: 0.55, market: 'Commodities', region: 'North America' },
    { name: 'OKE', value: 500, change: -0.12, market: 'Commodities', region: 'North America' },
  ],
  'Software & IT Services': [
    { name: 'MSFT', value: 3100, change: 0.88, market: 'Stock Market', region: 'North America' },
    { name: 'ORCL', value: 1800, change: 0.45, market: 'Stock Market', region: 'North America' },
    { name: 'CRM', value: 1400, change: -0.33, market: 'Stock Market', region: 'North America' },
    { name: 'NOW', value: 1100, change: 0.66, market: 'Stock Market', region: 'North America' },
    { name: 'ADBE', value: 1300, change: 0.22, market: 'Stock Market', region: 'North America' },
    { name: 'INTU', value: 900, change: 0.55, market: 'Stock Market', region: 'North America' },
  ],
  'Oil & Gas': [
    { name: 'CVX', value: 2800, change: 0.77, market: 'Commodities', region: 'North America' },
    { name: 'XOM', value: 3200, change: 0.55, market: 'Commodities', region: 'North America' },
    { name: 'COP', value: 1700, change: 0.12, market: 'Commodities', region: 'North America' },
    { name: 'EOG', value: 800, change: -0.33, market: 'Commodities', region: 'North America' },
    { name: 'PXD', value: 600, change: 0.28, market: 'Commodities', region: 'North America' },
  ],
  'Electric Utilities & IPPs': [
    { name: 'NEE', value: 1600, change: 0.44, market: 'Stock Market', region: 'North America' },
    { name: 'DUK', value: 1200, change: 0.18, market: 'Stock Market', region: 'North America' },
    { name: 'SO', value: 1000, change: -0.22, market: 'Stock Market', region: 'North America' },
    { name: 'GEV', value: 700, change: 0.33, market: 'Stock Market', region: 'North America' },
  ],
  'Metals & Mining': [
    { name: 'BHP', value: 1800, change: 0.55, market: 'Commodities', region: 'Asia Pacific' },
    { name: 'RIO', value: 1500, change: 0.33, market: 'Commodities', region: 'Global' },
    { name: 'NEM', value: 900, change: -0.44, market: 'Commodities', region: 'North America' },
    { name: 'FCX', value: 700, change: 0.22, market: 'Commodities', region: 'North America' },
    { name: 'VALE', value: 600, change: -0.18, market: 'Commodities', region: 'Emerging Markets' },
  ],
};

export const BEST_PERFORMING_INDUSTRIES = [
  { name: 'Semiconductors', value: 3500, change: 8.45 },
  { name: 'Software & IT', value: 3200, change: 7.22 },
  { name: 'Communication', value: 2800, change: 5.67 },
  { name: 'Healthcare', value: 2600, change: 4.89 },
  { name: 'Energy', value: 2400, change: 4.12 },
  { name: 'Financials', value: 2200, change: 3.34 },
  { name: 'Consumer Disc', value: 1900, change: 2.78 },
  { name: 'Industrials', value: 1700, change: 1.95 },
  { name: 'Utilities', value: 1500, change: 0.88 },
  { name: 'Real Estate', value: 1200, change: -0.45 },
];

export const MOST_POPULAR_ETFS = [
  { name: 'SPY', value: 5200, change: 3.45 },
  { name: 'QQQ', value: 4800, change: 5.67 },
  { name: 'IWM', value: 3200, change: 2.34 },
  { name: 'EEM', value: 2800, change: -1.23 },
  { name: 'GLD', value: 2400, change: 4.56 },
  { name: 'TLT', value: 2100, change: -2.34 },
  { name: 'XLF', value: 1900, change: 1.78 },
  { name: 'XLV', value: 1800, change: 2.89 },
  { name: 'XLE', value: 1600, change: 6.12 },
  { name: 'XLI', value: 1400, change: 0.56 },
];

export const BUBBLE_DATA = {
  'PE/PB': {
    '1Y': [
      { name: 'Healthcare', pe: 15, pb: 10, size: 14, highlighted: false },
      { name: 'Financials', pe: 25, pb: 28, size: 16, highlighted: false },
      { name: 'Consumer Staples', pe: 32, pb: 35, size: 12, highlighted: false },
      { name: 'Industrials', pe: 40, pb: 40, size: 14, highlighted: false },
      { name: 'Materials', pe: 48, pb: 38, size: 12, highlighted: false },
      { name: 'Energy', pe: 55, pb: 42, size: 16, highlighted: false },
      { name: 'Communication', pe: 68, pb: 55, size: 22, highlighted: true },
      { name: 'Technology', pe: 75, pb: 35, size: 30, highlighted: true },
      { name: 'Utilities', pe: 82, pb: 60, size: 16, highlighted: false },
      { name: 'Real Estate', pe: 88, pb: 52, size: 12, highlighted: false },
      { name: 'Consumer Disc', pe: 92, pb: 68, size: 14, highlighted: false },
    ],
    '5Y': [
      { name: 'Healthcare', pe: 20, pb: 18, size: 16, highlighted: false },
      { name: 'Financials', pe: 30, pb: 22, size: 18, highlighted: false },
      { name: 'Consumer Staples', pe: 35, pb: 40, size: 14, highlighted: false },
      { name: 'Industrials', pe: 45, pb: 48, size: 16, highlighted: false },
      { name: 'Materials', pe: 52, pb: 32, size: 14, highlighted: false },
      { name: 'Energy', pe: 60, pb: 55, size: 18, highlighted: true },
      { name: 'Communication', pe: 72, pb: 62, size: 24, highlighted: true },
      { name: 'Technology', pe: 80, pb: 45, size: 32, highlighted: false },
      { name: 'Utilities', pe: 85, pb: 70, size: 16, highlighted: false },
      { name: 'Real Estate', pe: 90, pb: 58, size: 14, highlighted: false },
    ],
    '10Y': [
      { name: 'Healthcare', pe: 18, pb: 15, size: 18, highlighted: false },
      { name: 'Financials', pe: 28, pb: 25, size: 20, highlighted: false },
      { name: 'Consumer Staples', pe: 38, pb: 45, size: 16, highlighted: false },
      { name: 'Industrials', pe: 50, pb: 50, size: 18, highlighted: true },
      { name: 'Materials', pe: 55, pb: 38, size: 14, highlighted: false },
      { name: 'Energy', pe: 65, pb: 58, size: 20, highlighted: true },
      { name: 'Communication', pe: 75, pb: 65, size: 26, highlighted: false },
      { name: 'Technology', pe: 82, pb: 42, size: 34, highlighted: false },
      { name: 'Utilities', pe: 88, pb: 72, size: 18, highlighted: false },
    ],
  },
};


export const HISTORY_DATA = {
  PE: {
    '1Y': {
      industryName: 'Software & IT Service',
      currentValue: 37.03,
      percentile: 1.89,
      dates: [
        '2025-04-11', '2025-04-25', '2025-05-10', '2025-05-25',
        '2025-06-10', '2025-06-25', '2025-07-10', '2025-07-25',
        '2025-08-10', '2025-08-25', '2025-09-10', '2025-09-25',
        '2025-10-10', '2025-10-25', '2025-11-10', '2025-11-25',
        '2025-12-10', '2025-12-25', '2026-01-10', '2026-01-25',
        '2026-02-10', '2026-02-25', '2026-03-10', '2026-03-25',
        '2026-04-02',
      ],
      values: [
        62.31, 61.40, 59.80, 58.10, 56.50, 57.20, 58.00, 56.30,
        54.80, 53.50, 52.10, 50.80, 49.00, 47.50, 46.20, 44.80,
        43.10, 41.50, 40.00, 42.50, 44.80, 42.30, 39.80, 38.20,
        37.39,
      ],
    },
    '3Y': {
      industryName: 'Software & IT Service',
      currentValue: 37.03,
      percentile: 5.42,
      dates: [
        '2023-04-01', '2023-07-01', '2023-10-01', '2024-01-01',
        '2024-04-01', '2024-07-01', '2024-10-01', '2025-01-01',
        '2025-04-01', '2025-07-01', '2025-10-01', '2026-01-01',
        '2026-04-02',
      ],
      values: [
        48.50, 52.30, 55.80, 58.10, 60.20, 63.50, 65.80,
        62.31, 58.10, 52.30, 47.50, 40.00, 37.39,
      ],
    },
    '5Y': {
      industryName: 'Software & IT Service',
      currentValue: 37.03,
      percentile: 8.75,
      dates: [
        '2021-04-01', '2021-10-01', '2022-04-01', '2022-10-01',
        '2023-04-01', '2023-10-01', '2024-04-01', '2024-10-01',
        '2025-04-01', '2025-10-01', '2026-04-02',
      ],
      values: [
        45.00, 50.20, 55.80, 52.10, 48.50, 55.80, 60.20,
        65.80, 58.10, 47.50, 37.39,
      ],
    },
  },
  PB: {
    '1Y': {
      industryName: 'Software & IT Service',
      currentValue: 4.82,
      percentile: 3.21,
      dates: [
        '2025-04-11', '2025-04-25', '2025-05-10', '2025-05-25',
        '2025-06-10', '2025-06-25', '2025-07-10', '2025-07-25',
        '2025-08-10', '2025-08-25', '2025-09-10', '2025-09-25',
        '2025-10-10', '2025-10-25', '2025-11-10', '2025-11-25',
        '2025-12-10', '2025-12-25', '2026-01-10', '2026-01-25',
        '2026-02-10', '2026-02-25', '2026-03-10', '2026-03-25',
        '2026-04-02',
      ],
      values: [
        8.20, 8.05, 7.80, 7.55, 7.30, 7.45, 7.60, 7.35,
        7.10, 6.85, 6.60, 6.35, 6.10, 5.85, 5.65, 5.45,
        5.25, 5.50, 5.80, 5.55, 5.30, 5.10, 4.95, 4.88,
        4.82,
      ],
    },
    '3Y': {
      industryName: 'Software & IT Service',
      currentValue: 4.82,
      percentile: 6.10,
      dates: [
        '2023-04-01', '2023-07-01', '2023-10-01', '2024-01-01',
        '2024-04-01', '2024-07-01', '2024-10-01', '2025-01-01',
        '2025-04-01', '2025-07-01', '2025-10-01', '2026-01-01',
        '2026-04-02',
      ],
      values: [
        6.50, 7.10, 7.80, 8.20, 8.50, 8.80, 8.50,
        8.20, 7.30, 6.35, 5.65, 5.25, 4.82,
      ],
    },
    '5Y': {
      industryName: 'Software & IT Service',
      currentValue: 4.82,
      percentile: 10.30,
      dates: [
        '2021-04-01', '2021-10-01', '2022-04-01', '2022-10-01',
        '2023-04-01', '2023-10-01', '2024-04-01', '2024-10-01',
        '2025-04-01', '2025-10-01', '2026-04-02',
      ],
      values: [
        5.80, 6.50, 7.50, 6.80, 6.50, 7.80, 8.50,
        8.50, 7.30, 5.65, 4.82,
      ],
    },
  },
};

// Market table placeholder data 

// ── Market Table — Single Source of Truth ────────────────────────────────────
// Edit ONLY this array to add, remove, reorder, or rename columns.
// Backend: 'field' is the camelCase key in your API response object.
// 'group' controls which panel it appears in the column-picker UI.
// 'pinned: true' means the column is always visible and cannot be unchecked.
// 'defaultVisible: true' means the column is shown on first load.
export const MARKET_TABLE_COLUMNS = [
  { id: 'symbol', label: 'Symbol', group: 'label', field: 'symbol', pinned: true, defaultVisible: true },
  { id: 'name', label: 'Name', group: 'label', field: 'name', defaultVisible: true },
  { id: 'pm-price', label: 'PM Price', group: 'label', field: 'price', defaultVisible: true },
  { id: 'sparkline', label: 'Sparkline', group: 'label', field: null, defaultVisible: true },
  { id: 'pct-change', label: '% Change', group: 'label', field: 'change', defaultVisible: true },
  { id: 'volume', label: 'Volume', group: 'label', field: 'volume', defaultVisible: true },
  { id: 'market-cap', label: 'Market Cap', group: 'stock', field: 'marketCap', defaultVisible: true },
  { id: 'bps', label: 'BPS', group: 'stock', field: 'bps', defaultVisible: false },
  { id: 'dividend', label: 'Dividend', group: 'stock', field: 'dividend', defaultVisible: false },
  { id: 'eps', label: 'EPS', group: 'stock', field: 'eps', defaultVisible: false },
  { id: 'ex-date', label: 'Ex-Date', group: 'stock', field: 'exDate', defaultVisible: false },
  { id: 'free-float-mkt-cap', label: 'Free Float Mkt Cap', group: 'stock', field: 'freeFloatMktCap', defaultVisible: false },
  { id: 'next-earnings', label: 'Next Earnings', group: 'stock', field: 'nextEarnings', defaultVisible: false },
  { id: 'free-float', label: 'Free Float', group: 'stock', field: 'freeFloat', defaultVisible: false },
  { id: 'pb', label: 'P/B', group: 'stock', field: 'pb', defaultVisible: false },
];

// ── Derived — do NOT edit manually ───────────────────────────────────────────
export const DEFAULT_VISIBLE_IDS = MARKET_TABLE_COLUMNS.filter(c => c.defaultVisible).map(c => c.id);
export const ALL_COLUMN_IDS = MARKET_TABLE_COLUMNS.map(c => c.id);
export const COLUMN_LABELS = Object.fromEntries(MARKET_TABLE_COLUMNS.map(c => [c.id, c.label]));
export const LABEL_COLS = MARKET_TABLE_COLUMNS.filter(c => c.group === 'label');
export const STOCK_COLS = MARKET_TABLE_COLUMNS.filter(c => c.group === 'stock');

export const gainersData = [
  { symbol: 'SKYO', name: 'Sky Quarry L...', price: '5.57', change: '+135.67%', volume: '206.13%', marketCap: '19.16M', bps: '2.34', dividend: '0.85', eps: '1.25', exDate: '2026-04-20', freeFloatMktCap: '15.8M', nextEarnings: '2026-05-15', freeFloat: '78.5%', pb: '2.45' },
  { symbol: 'Alpha Nexus', name: 'Stone Ridge...', price: '2323', change: '+142.30%', volume: '230.50%', marketCap: '30.12M', bps: '3.12', dividend: '1.20', eps: '2.15', exDate: '2026-04-18', freeFloatMktCap: '25.3M', nextEarnings: '2026-05-10', freeFloat: '82.3%', pb: '3.12' },
  { symbol: 'Beta Wave', name: 'Granite Peak...', price: '2323', change: '+142.30%', volume: '240.00%', marketCap: '28.45M', bps: '2.89', dividend: '0.95', eps: '1.85', exDate: '2026-04-22', freeFloatMktCap: '23.1M', nextEarnings: '2026-05-12', freeFloat: '80.1%', pb: '2.98' },
  { symbol: 'Gamma Stream', name: 'Granite Sum...', price: '3432.00', change: '+110.89%', volume: '250.00%', marketCap: '35.00M', bps: '4.56', dividend: '1.50', eps: '2.95', exDate: '2026-04-25', freeFloatMktCap: '28.5M', nextEarnings: '2026-05-20', freeFloat: '85.2%', pb: '3.45' },
  { symbol: 'Gamma Stream', name: 'Granite Sum...', price: '3432.00', change: '+110.89%', volume: '250.00%', marketCap: '35.00M', bps: '4.56', dividend: '1.50', eps: '2.95', exDate: '2026-04-25', freeFloatMktCap: '28.5M', nextEarnings: '2026-05-20', freeFloat: '85.2%', pb: '3.45' },
  { symbol: 'Beta Wave', name: 'Granite Peak...', price: '2323', change: '+142.30%', volume: '240.00%', marketCap: '28.45M', bps: '2.89', dividend: '0.95', eps: '1.85', exDate: '2026-04-22', freeFloatMktCap: '23.1M', nextEarnings: '2026-05-12', freeFloat: '80.1%', pb: '2.98' },
];

export const losersData = [
  { symbol: 'SKYO', name: 'Sky Quarry L...', price: '5.57', change: '-135.67%', volume: '206.13%', marketCap: '19.16M', bps: '2.34', dividend: '0.85', eps: '1.25', exDate: '2026-04-20', freeFloatMktCap: '15.8M', nextEarnings: '2026-05-15', freeFloat: '78.5%', pb: '2.45' },
  { symbol: 'Alpha Nexus', name: 'Stone Ridge...', price: '2323', change: '-142.30%', volume: '230.50%', marketCap: '30.12M', bps: '3.12', dividend: '1.20', eps: '2.15', exDate: '2026-04-18', freeFloatMktCap: '25.3M', nextEarnings: '2026-05-10', freeFloat: '82.3%', pb: '3.12' },
  { symbol: 'Beta Wave', name: 'Granite Peak...', price: '2323', change: '-142.30%', volume: '240.00%', marketCap: '28.45M', bps: '2.89', dividend: '0.95', eps: '1.85', exDate: '2026-04-22', freeFloatMktCap: '23.1M', nextEarnings: '2026-05-12', freeFloat: '80.1%', pb: '2.98' },
  { symbol: 'Gamma Stream', name: 'Granite Sum...', price: '3432.00', change: '-110.89%', volume: '250.00%', marketCap: '35.00M', bps: '4.56', dividend: '1.50', eps: '2.95', exDate: '2026-04-25', freeFloatMktCap: '28.5M', nextEarnings: '2026-05-20', freeFloat: '85.2%', pb: '3.45' },
  { symbol: 'Gamma Stream', name: 'Granite Sum...', price: '3432.00', change: '-110.89%', volume: '250.00%', marketCap: '35.00M', bps: '4.56', dividend: '1.50', eps: '2.95', exDate: '2026-04-25', freeFloatMktCap: '28.5M', nextEarnings: '2026-05-20', freeFloat: '85.2%', pb: '3.45' },
  { symbol: 'Beta Wave', name: 'Granite Peak...', price: '2323', change: '-142.30%', volume: '240.00%', marketCap: '28.45M', bps: '2.89', dividend: '0.95', eps: '1.85', exDate: '2026-04-22', freeFloatMktCap: '23.1M', nextEarnings: '2026-05-12', freeFloat: '80.1%', pb: '2.98' },
];

export const stocks = [
  {
    id: 'dow',
    name: 'Dow Jones',
    price: '46,504.67',
    change: '-61.07',
    pct: '-3.13%',
    positive: false,
    selected: true,
  },
  {
    id: 'sp500',
    name: 'S&P 500 Index',
    price: '6,582.69',
    change: '+7.37',
    pct: '+0.11%',
    positive: true,
    selected: false,
  },
  {
    id: 'nasdaq1',
    name: 'NASDAQ',
    price: '6,582.69',
    change: '+7.37',
    pct: '+0.11%',
    positive: true,
    selected: false,
  }
];

// ── Active Tab Data ───────────────────────────────────────────────────────────
export const ACTIVE_TABLE_COLUMNS = [
  { id: 'symbol', label: 'Symbol', group: 'label', field: 'symbol', pinned: true, defaultVisible: true },
  { id: 'name', label: 'Name', group: 'label', field: 'name', defaultVisible: true },
  { id: 'sparkline', label: 'Sparkline', group: 'label', field: null, defaultVisible: true },
  { id: 'volume', label: 'Volume', group: 'label', field: 'volume', defaultVisible: true },
  { id: 'price', label: 'Price', group: 'label', field: 'price', defaultVisible: true },
  { id: 'pct-change', label: '% Change', group: 'label', field: 'change', defaultVisible: true },
  { id: 'market-cap', label: 'Market Cap', group: 'stock', field: 'marketCap', defaultVisible: true },
  { id: 'rvol', label: 'RVol(10D)', group: 'stock', field: 'rvol', defaultVisible: false },
  { id: 'turnover', label: '% Turnover', group: 'stock', field: 'turnover', defaultVisible: false },
  { id: 'range', label: '% Range', group: 'stock', field: 'range', defaultVisible: false },
];
export const ACTIVE_DEFAULT_VISIBLE_IDS = ACTIVE_TABLE_COLUMNS.filter(c => c.defaultVisible).map(c => c.id);
export const ACTIVE_ALL_COLUMN_IDS = ACTIVE_TABLE_COLUMNS.map(c => c.id);
export const ACTIVE_COLUMN_LABELS = Object.fromEntries(ACTIVE_TABLE_COLUMNS.map(c => [c.id, c.label]));
export const ACTIVE_LABEL_COLS = ACTIVE_TABLE_COLUMNS.filter(c => c.group === 'label');
export const ACTIVE_STOCK_COLS = ACTIVE_TABLE_COLUMNS.filter(c => c.group === 'stock');

const _activeRow = (symbol, name, price, change, volume, marketCap, rvol, turnover, range) =>
  ({ symbol, name, price, change, volume, marketCap, rvol, turnover, range });

export const activeData = {
  Volume: [
    _activeRow('SNAL', 'Snail, INC.', '2.345', '+19.16%', '845.67M', '67.25M', '12.4x', '8.5%', '45.2%'),
    _activeRow('PMNT', 'Perfect Moment LTD', '3.678', '+19.16%', '530.12M', '67.25M', '9.8x', '6.2%', '38.7%'),
    _activeRow('MIMI', 'Mint Incorporation Li.', '4.910', '+19.16%', '412.89M', '67.25M', '8.3x', '5.4%', '32.1%'),
    _activeRow('HUBC', 'Hub Cyber Security Is.', '5.234', '+19.16%', '278.45M', '67.25M', '7.1x', '4.8%', '28.5%'),
    _activeRow('WGRX', 'Sky Quarry Innovations', '5.234', '-19.16%', '964.33M', '67.25M', '15.2x', '10.1%', '52.3%'),
    _activeRow('MIMI', 'Granite Peak Solutions', '7.012', '+19.16%', '753.21M', '67.25M', '11.7x', '7.9%', '41.8%'),
  ],
  'RVol(10D)': [
    _activeRow('WGRX', 'Sky Quarry Innovations', '5.234', '-19.16%', '964.33M', '67.25M', '15.2x', '10.1%', '52.3%'),
    _activeRow('SNAL', 'Snail, INC.', '2.345', '+19.16%', '845.67M', '67.25M', '12.4x', '8.5%', '45.2%'),
    _activeRow('MIMI', 'Granite Peak Solutions', '7.012', '+19.16%', '753.21M', '67.25M', '11.7x', '7.9%', '41.8%'),
    _activeRow('PMNT', 'Perfect Moment LTD', '3.678', '+19.16%', '530.12M', '67.25M', '9.8x', '6.2%', '38.7%'),
    _activeRow('MIMI', 'Mint Incorporation Li.', '4.910', '+19.16%', '412.89M', '67.25M', '8.3x', '5.4%', '32.1%'),
    _activeRow('HUBC', 'Hub Cyber Security Is.', '5.234', '+19.16%', '278.45M', '67.25M', '7.1x', '4.8%', '28.5%'),
  ],
  '% Turnover': [
    _activeRow('MIMI', 'Mint Incorporation Li.', '4.910', '+19.16%', '412.89M', '67.25M', '8.3x', '10.1%', '32.1%'),
    _activeRow('WGRX', 'Sky Quarry Innovations', '5.234', '-19.16%', '964.33M', '67.25M', '15.2x', '9.8%', '52.3%'),
    _activeRow('SNAL', 'Snail, INC.', '2.345', '+19.16%', '845.67M', '67.25M', '12.4x', '8.5%', '45.2%'),
    _activeRow('MIMI', 'Granite Peak Solutions', '7.012', '+19.16%', '753.21M', '67.25M', '11.7x', '7.9%', '41.8%'),
    _activeRow('PMNT', 'Perfect Moment LTD', '3.678', '+19.16%', '530.12M', '67.25M', '9.8x', '6.2%', '38.7%'),
    _activeRow('HUBC', 'Hub Cyber Security Is.', '5.234', '+19.16%', '278.45M', '67.25M', '7.1x', '4.8%', '28.5%'),
  ],
  '% Range': [
    _activeRow('WGRX', 'Sky Quarry Innovations', '5.234', '-19.16%', '964.33M', '67.25M', '15.2x', '10.1%', '52.3%'),
    _activeRow('MIMI', 'Granite Peak Solutions', '7.012', '+19.16%', '753.21M', '67.25M', '11.7x', '7.9%', '41.8%'),
    _activeRow('SNAL', 'Snail, INC.', '2.345', '+19.16%', '845.67M', '67.25M', '12.4x', '8.5%', '45.2%'),
    _activeRow('PMNT', 'Perfect Moment LTD', '3.678', '+19.16%', '530.12M', '67.25M', '9.8x', '6.2%', '38.7%'),
    _activeRow('MIMI', 'Mint Incorporation Li.', '4.910', '+19.16%', '412.89M', '67.25M', '8.3x', '5.4%', '32.1%'),
    _activeRow('HUBC', 'Hub Cyber Security Is.', '5.234', '+19.16%', '278.45M', '67.25M', '7.1x', '4.8%', '28.5%'),
  ],
};

//  Bonds data placeholder

export const SEED = [
  { "country": "United States", "currency": "USD", "data_source": "live", "flag": "🇺🇸", "id": "US_2Y", "instrument": "T-Note", "mat_yr": 2, "maturity": "2Y", "name": "US Treasury", "price": 100.01, "price_change": 0.0, "rating": "AA+", "region": "Americas", "session": "open", "volume_bn": 417.0, "yield": 3.806, "yield_change": 0.0 },
  { "country": "United States", "currency": "USD", "data_source": "live", "flag": "🇺🇸", "id": "US_5Y", "instrument": "T-Note", "mat_yr": 5, "maturity": "5Y", "name": "US Treasury", "price": 100.03, "price_change": -0.054, "rating": "AA+", "region": "Americas", "session": "open", "volume_bn": 307.8, "yield": 3.993, "yield_change": 0.012 },
  { "country": "United States", "currency": "USD", "data_source": "live", "flag": "🇺🇸", "id": "US_10Y", "instrument": "T-Note", "mat_yr": 10, "maturity": "10Y", "name": "US Treasury", "price": 100.07, "price_change": -0.127, "rating": "AA+", "region": "Americas", "session": "open", "volume_bn": 254.4, "yield": 4.351, "yield_change": 0.016 },
  { "country": "Japan", "currency": "JPY", "data_source": "simulated", "flag": "🇯🇵", "id": "JP_10Y", "instrument": "JGB", "mat_yr": 10, "maturity": "10Y", "name": "JGB", "price": 100.03, "price_change": -0.198, "rating": "A+", "region": "Asia-Pacific", "session": "closed", "volume_bn": 182.2, "yield": 1.527, "yield_change": 0.021 },
  { "country": "United States", "currency": "USD", "data_source": "live", "flag": "🇺🇸", "id": "US_30Y", "instrument": "T-Bond", "mat_yr": 30, "maturity": "30Y", "name": "US Treasury", "price": 100.19, "price_change": -0.421, "rating": "AA+", "region": "Americas", "session": "open", "volume_bn": 180.1, "yield": 4.918, "yield_change": 0.027 },
  { "country": "China", "currency": "CNY", "data_source": "simulated", "flag": "🇨🇳", "id": "CN_10Y", "instrument": "CGB", "mat_yr": 10, "maturity": "10Y", "name": "CGB", "price": 99.87, "price_change": 0.179, "rating": "A+", "region": "Asia-Pacific", "session": "closed", "volume_bn": 58.4, "yield": 2.315, "yield_change": -0.02 },
  { "country": "Japan", "currency": "JPY", "data_source": "simulated", "flag": "🇯🇵", "id": "JP_30Y", "instrument": "JGB", "mat_yr": 30, "maturity": "30Y", "name": "JGB", "price": 99.9, "price_change": 0.338, "rating": "A+", "region": "Asia-Pacific", "session": "closed", "volume_bn": 41.6, "yield": 2.485, "yield_change": -0.016 },
  { "country": "Germany", "currency": "EUR", "data_source": "simulated", "flag": "🇩🇪", "id": "DE_10Y", "instrument": "Bund", "mat_yr": 10, "maturity": "10Y", "name": "Bund", "price": 100.09, "price_change": -0.075, "rating": "AAA", "region": "Europe", "session": "open", "volume_bn": 35.4, "yield": 2.67, "yield_change": 0.009 },
  { "country": "United Kingdom", "currency": "GBP", "data_source": "simulated", "flag": "🇬🇧", "id": "GB_10Y", "instrument": "Gilt", "mat_yr": 10, "maturity": "10Y", "name": "Gilt", "price": 100.15, "price_change": 0.103, "rating": "AA", "region": "Europe", "session": "open", "volume_bn": 24.9, "yield": 4.561, "yield_change": -0.013 },
  { "country": "France", "currency": "EUR", "data_source": "simulated", "flag": "🇫🇷", "id": "FR_10Y", "instrument": "OAT", "mat_yr": 10, "maturity": "10Y", "name": "OAT", "price": 100.2, "price_change": 0.035, "rating": "AA-", "region": "Europe", "session": "open", "volume_bn": 23.5, "yield": 3.156, "yield_change": -0.004 },
  { "country": "Germany", "currency": "EUR", "data_source": "simulated", "flag": "🇩🇪", "id": "DE_2Y", "instrument": "Schatz", "mat_yr": 2, "maturity": "2Y", "name": "Bund", "price": 99.99, "price_change": 0.022, "rating": "AAA", "region": "Europe", "session": "open", "volume_bn": 22.0, "yield": 2.286, "yield_change": -0.012 },
  { "country": "China", "currency": "CNY", "data_source": "simulated", "flag": "🇨🇳", "id": "CN_30Y", "instrument": "CGB", "mat_yr": 30, "maturity": "30Y", "name": "CGB", "price": 100.15, "price_change": -0.575, "rating": "A+", "region": "Asia-Pacific", "session": "closed", "volume_bn": 19.8, "yield": 2.523, "yield_change": 0.027 },
  { "country": "Italy", "currency": "EUR", "data_source": "simulated", "flag": "🇮🇹", "id": "IT_10Y", "instrument": "BTP", "mat_yr": 10, "maturity": "10Y", "name": "BTP", "price": 100.02, "price_change": -0.202, "rating": "BBB+", "region": "Europe", "session": "open", "volume_bn": 18.4, "yield": 3.778, "yield_change": 0.024 },
  { "country": "Canada", "currency": "CAD", "data_source": "simulated", "flag": "🇨🇦", "id": "CA_10Y", "instrument": "GoC", "mat_yr": 10, "maturity": "10Y", "name": "GoC Bond", "price": 99.91, "price_change": 0.022, "rating": "AAA", "region": "Americas", "session": "open", "volume_bn": 16.8, "yield": 3.661, "yield_change": -0.003 },
  { "country": "South Korea", "currency": "KRW", "data_source": "simulated", "flag": "🇰🇷", "id": "KR_10Y", "instrument": "KTB", "mat_yr": 10, "maturity": "10Y", "name": "KTB", "price": 100.0, "price_change": -0.097, "rating": "AA", "region": "Asia-Pacific", "session": "closed", "volume_bn": 14.6, "yield": 2.97, "yield_change": 0.011 },
  { "country": "Australia", "currency": "AUD", "data_source": "simulated", "flag": "🇦🇺", "id": "AU_10Y", "instrument": "TIB", "mat_yr": 10, "maturity": "10Y", "name": "ACGB", "price": 99.92, "price_change": 0.127, "rating": "AAA", "region": "Asia-Pacific", "session": "closed", "volume_bn": 12.2, "yield": 4.39, "yield_change": -0.016 },
  { "country": "United Kingdom", "currency": "GBP", "data_source": "simulated", "flag": "🇬🇧", "id": "GB_30Y", "instrument": "Gilt", "mat_yr": 30, "maturity": "30Y", "name": "Gilt", "price": 99.91, "price_change": -0.314, "rating": "AA", "region": "Europe", "session": "open", "volume_bn": 11.5, "yield": 5.126, "yield_change": 0.021 },
  { "country": "Italy", "currency": "EUR", "data_source": "simulated", "flag": "🇮🇹", "id": "IT_30Y", "instrument": "BTP", "mat_yr": 30, "maturity": "30Y", "name": "BTP", "price": 99.36, "price_change": 0.141, "rating": "BBB+", "region": "Europe", "session": "open", "volume_bn": 8.2, "yield": 4.238, "yield_change": -0.008 }
];

// ── ETF Tab Data ──────────────────────────────────────────────────────────────
export const ETF_TABLE_COLUMNS = [
  { id: 'symbol', label: 'Symbol', group: 'label', field: 'symbol', pinned: true, defaultVisible: true },
  { id: 'name', label: 'Name', group: 'label', field: 'name', defaultVisible: true },
  { id: 'sparkline', label: 'Sparkline', group: 'label', field: null, defaultVisible: true },
  { id: 'price', label: 'Price', group: 'label', field: 'price', defaultVisible: true },
  { id: 'pct-change', label: '% Change', group: 'label', field: 'change', defaultVisible: true },
  { id: 'market-cap', label: 'Market Cap', group: 'stock', field: 'marketCap', defaultVisible: false },
  { id: 'volume', label: 'Volume', group: 'stock', field: 'volume', defaultVisible: false },
];
export const ETF_DEFAULT_VISIBLE_IDS = ETF_TABLE_COLUMNS.filter(c => c.defaultVisible).map(c => c.id);
export const ETF_ALL_COLUMN_IDS = ETF_TABLE_COLUMNS.map(c => c.id);
export const ETF_COLUMN_LABELS = Object.fromEntries(ETF_TABLE_COLUMNS.map(c => [c.id, c.label]));
export const ETF_LABEL_COLS = ETF_TABLE_COLUMNS.filter(c => c.group === 'label');
export const ETF_STOCK_COLS = ETF_TABLE_COLUMNS.filter(c => c.group === 'stock');

const _etfRow = (symbol, name, price, change, volume, marketCap) =>
  ({ symbol, name, price, change, volume, marketCap });

export const etfData = {
  'Dow Jones': [
    _etfRow('SNAL', 'Snail, INC.', '2.345', '+19.16M', '845.67M', '67.25M'),
    _etfRow('PMNT', 'Perfect Moment LTD', '3.678', '+19.16M', '530.12M', '67.25M'),
    _etfRow('MIMI', 'Mint Incorporation Li.', '4.910', '+19.16M', '412.89M', '67.25M'),
    _etfRow('HUBC', 'Hub Cyber Security Is.', '5.234', '+19.16M', '278.45M', '67.25M'),
    _etfRow('WGRX', 'Sky Quarry Innovations', '5.234', '-19.16M', '964.33M', '67.25M'),
    _etfRow('MIMI', 'Granite Peak Solutions', '7.012', '+19.16M', '753.21M', '67.25M'),
  ],
  'VIX': [
    _etfRow('HUBC', 'Hub Cyber Security Is.', '5.234', '+19.16M', '278.45M', '67.25M'),
    _etfRow('SNAL', 'Snail, INC.', '2.345', '+19.16M', '845.67M', '67.25M'),
    _etfRow('WGRX', 'Sky Quarry Innovations', '5.234', '-19.16M', '964.33M', '67.25M'),
    _etfRow('MIMI', 'Granite Peak Solutions', '7.012', '+19.16M', '753.21M', '67.25M'),
    _etfRow('PMNT', 'Perfect Moment LTD', '3.678', '+19.16M', '530.12M', '67.25M'),
    _etfRow('MIMI', 'Mint Incorporation Li.', '4.910', '+19.16M', '412.89M', '67.25M'),
  ],
  'Industrials': [
    _etfRow('MIMI', 'Granite Peak Solutions', '7.012', '+19.16M', '753.21M', '67.25M'),
    _etfRow('WGRX', 'Sky Quarry Innovations', '5.234', '-19.16M', '964.33M', '67.25M'),
    _etfRow('MIMI', 'Mint Incorporation Li.', '4.910', '+19.16M', '412.89M', '67.25M'),
    _etfRow('SNAL', 'Snail, INC.', '2.345', '+19.16M', '845.67M', '67.25M'),
    _etfRow('HUBC', 'Hub Cyber Security Is.', '5.234', '+19.16M', '278.45M', '67.25M'),
    _etfRow('PMNT', 'Perfect Moment LTD', '3.678', '+19.16M', '530.12M', '67.25M'),
  ],
};

// ── 52 Week Tab Data ────────────────────────────────────────────────────────
export const WEEK52_TABLE_COLUMNS = [
  { id: 'symbol', label: 'Symbol', group: 'label', field: 'symbol', pinned: true, defaultVisible: true },
  { id: 'name', label: 'Name', group: 'label', field: 'name', defaultVisible: true },
  { id: 'sparkline', label: 'Sparkline', group: 'label', field: null, defaultVisible: true },
  { id: 'week-high', label: 'his Week High', group: 'label', field: 'weekHigh', defaultVisible: true },
  { id: '52w-last-high', label: '52W Last High', group: 'label', field: 'w52LastHigh', defaultVisible: true },
  { id: 'last-high', label: 'Last High', group: 'stock', field: 'lastHigh', defaultVisible: true },
  { id: 'last-price', label: 'Last Price', group: 'stock', field: 'lastPrice', defaultVisible: true },
  { id: 'pct-change', label: '% Change', group: 'stock', field: 'change', defaultVisible: true },
];
export const WEEK52_DEFAULT_VISIBLE_IDS = WEEK52_TABLE_COLUMNS.filter(c => c.defaultVisible).map(c => c.id);
export const WEEK52_ALL_COLUMN_IDS = WEEK52_TABLE_COLUMNS.map(c => c.id);
export const WEEK52_COLUMN_LABELS = Object.fromEntries(WEEK52_TABLE_COLUMNS.map(c => [c.id, c.label]));
export const WEEK52_LABEL_COLS = WEEK52_TABLE_COLUMNS.filter(c => c.group === 'label');
export const WEEK52_STOCK_COLS = WEEK52_TABLE_COLUMNS.filter(c => c.group === 'stock');

const _week52Row = (symbol, name, weekHigh, w52LastHigh, lastHigh, lastPrice, change) =>
  ({ symbol, name, weekHigh, w52LastHigh, lastHigh, lastPrice, change });

export const week52Data = {
  'New High': [
    _week52Row('ALLO', 'Allogene Therapeutics', '3.567', '4.678', '+45.67%', '45.67', 'After: -3.25%'),
    _week52Row('SYRE', 'Avanos Health Solutions', '42.89', '2.345', '+72.15%', '12.89', 'After: -5.12%'),
    _week52Row('SPIR', 'Spyre Biotech', '17.63', '5.890', '+38.90%', '78.54', 'After: -2.87%'),
    _week52Row('AEHR', 'Spire Technologies', '58.74', '1.234', '+54.32%', '90.12', 'After: -6.45%'),
    _week52Row('LWLG', 'Aehr Innovations', '33.21', '6.789', '+63.78%', '23.45', 'After: -4.78%'),
    _week52Row('SPIR', 'Lightwave Technologies Inc.', '91.05', '7.456', '+49.99%', '67.89', 'After: -3.90%'),
  ],
  'Near High': [
    _week52Row('AEHR', 'Spire Technologies', '58.74', '1.234', '+54.32%', '90.12', 'After: -6.45%'),
    _week52Row('ALLO', 'Allogene Therapeutics', '3.567', '4.678', '+45.67%', '45.67', 'After: -3.25%'),
    _week52Row('LWLG', 'Aehr Innovations', '33.21', '6.789', '+63.78%', '23.45', 'After: -4.78%'),
    _week52Row('SYRE', 'Avanos Health Solutions', '42.89', '2.345', '+72.15%', '12.89', 'After: -5.12%'),
    _week52Row('SPIR', 'Lightwave Technologies Inc.', '91.05', '7.456', '+49.99%', '67.89', 'After: -3.90%'),
    _week52Row('SPIR', 'Spyre Biotech', '17.63', '5.890', '+38.90%', '78.54', 'After: -2.87%'),
  ],
  'New Low': [
    _week52Row('SPIR', 'Spyre Biotech', '17.63', '5.890', '-38.90%', '78.54', 'After: -2.87%'),
    _week52Row('LWLG', 'Aehr Innovations', '33.21', '6.789', '-63.78%', '23.45', 'After: -4.78%'),
    _week52Row('ALLO', 'Allogene Therapeutics', '3.567', '4.678', '-45.67%', '45.67', 'After: -3.25%'),
    _week52Row('AEHR', 'Spire Technologies', '58.74', '1.234', '-54.32%', '90.12', 'After: -6.45%'),
    _week52Row('SYRE', 'Avanos Health Solutions', '42.89', '2.345', '-72.15%', '12.89', 'After: -5.12%'),
    _week52Row('SPIR', 'Lightwave Technologies Inc.', '91.05', '7.456', '-49.99%', '67.89', 'After: -3.90%'),
  ],
  'Near Low': [
    _week52Row('SYRE', 'Avanos Health Solutions', '42.89', '2.345', '-72.15%', '12.89', 'After: -5.12%'),
    _week52Row('SPIR', 'Spyre Biotech', '17.63', '5.890', '-38.90%', '78.54', 'After: -2.87%'),
    _week52Row('AEHR', 'Spire Technologies', '58.74', '1.234', '-54.32%', '90.12', 'After: -6.45%'),
    _week52Row('ALLO', 'Allogene Therapeutics', '3.567', '4.678', '-45.67%', '45.67', 'After: -3.25%'),
    _week52Row('LWLG', 'Aehr Innovations', '33.21', '6.789', '-63.78%', '23.45', 'After: -4.78%'),
    _week52Row('SPIR', 'Lightwave Technologies Inc.', '91.05', '7.456', '-49.99%', '67.89', 'After: -3.90%'),
  ],
};

// ── Popular Stocks Tab Data ──────────────────────────────────────────────────
export const POPULAR_TABLE_COLUMNS = [
  { id: 'symbol', label: 'Symbol', group: 'label', field: 'symbol', pinned: true, defaultVisible: true },
  { id: 'name', label: 'Name', group: 'label', field: 'name', defaultVisible: true },
  { id: 'sparkline', label: 'Sparkline', group: 'label', field: null, defaultVisible: true },
  { id: 'div-yield', label: 'Div Yield', group: 'label', field: 'divYield', defaultVisible: true },
  { id: 'dividend', label: 'Divident', group: 'label', field: 'dividend', defaultVisible: true },
  { id: 'ex-date', label: 'Ex-date', group: 'stock', field: 'exDate', defaultVisible: true },
  { id: 'market-cap', label: 'Arket cap', group: 'stock', field: 'marketCap', defaultVisible: true },
];
export const POPULAR_DEFAULT_VISIBLE_IDS = POPULAR_TABLE_COLUMNS.filter(c => c.defaultVisible).map(c => c.id);
export const POPULAR_ALL_COLUMN_IDS = POPULAR_TABLE_COLUMNS.map(c => c.id);
export const POPULAR_COLUMN_LABELS = Object.fromEntries(POPULAR_TABLE_COLUMNS.map(c => [c.id, c.label]));
export const POPULAR_LABEL_COLS = POPULAR_TABLE_COLUMNS.filter(c => c.group === 'label');
export const POPULAR_STOCK_COLS = POPULAR_TABLE_COLUMNS.filter(c => c.group === 'stock');

const _popularRow = (symbol, name, divYield, dividend, exDate, marketCap) =>
  ({ symbol, name, divYield, dividend, exDate, marketCap });

export const popularData = {
  'High Dividend Stocks': [
    _popularRow('GMEX', 'GMEX ROBOTICS', '4.123%', '4.678', '01/08/2026', '32.45M'),
    _popularRow('CMCT', 'Creative Media &', '2.789%', '2.345', '01/08/2026', '58.90M'),
    _popularRow('ICON', 'Icon Energy Corp.', '5.456%', '5.890', '01/08/2026', '73.12M'),
    _popularRow('CMTG', 'Claros Mtf Tr Inc', '1.234%', '1.234', '01/08/2026', '21.34M'),
    _popularRow('MREC', 'Nova Innovations', '6.890%', '6.789', '01/08/2026', '89.76M'),
    _popularRow('ICMB', 'Radiant Wave Technologies', '3.999%', '7.456', '01/08/2026', '47.89M'),
  ],
  'Earnings Beyond Exp.': [
    _popularRow('ICON', 'Icon Energy Corp.', '5.456%', '5.890', '01/08/2026', '73.12M'),
    _popularRow('MREC', 'Nova Innovations', '6.890%', '6.789', '01/08/2026', '89.76M'),
    _popularRow('GMEX', 'GMEX ROBOTICS', '4.123%', '4.678', '01/08/2026', '32.45M'),
    _popularRow('ICMB', 'Radiant Wave Technologies', '3.999%', '7.456', '01/08/2026', '47.89M'),
    _popularRow('CMCT', 'Creative Media &', '2.789%', '2.345', '01/08/2026', '58.90M'),
    _popularRow('CMTG', 'Claros Mtf Tr Inc', '1.234%', '1.234', '01/08/2026', '21.34M'),
  ],
  'Earnings Below Exp.': [
    _popularRow('CMTG', 'Claros Mtf Tr Inc', '1.234%', '1.234', '01/08/2026', '21.34M'),
    _popularRow('CMCT', 'Creative Media &', '2.789%', '2.345', '01/08/2026', '58.90M'),
    _popularRow('ICMB', 'Radiant Wave Technologies', '3.999%', '7.456', '01/08/2026', '47.89M'),
    _popularRow('GMEX', 'GMEX ROBOTICS', '4.123%', '4.678', '01/08/2026', '32.45M'),
    _popularRow('MREC', 'Nova Innovations', '6.890%', '6.789', '01/08/2026', '89.76M'),
    _popularRow('ICON', 'Icon Energy Corp.', '5.456%', '5.890', '01/08/2026', '73.12M'),
  ],
};

// ── Crypto Tab Data ─────────────────────────────────────────────────────────
export const CRYPTO_TABLE_COLUMNS = [
  { id: 'symbol', label: 'Symbol', group: 'label', field: 'symbol', pinned: true, defaultVisible: true },
  { id: 'name', label: 'Name', group: 'label', field: 'name', defaultVisible: true },
  { id: 'price', label: 'Price', group: 'label', field: 'price', defaultVisible: true },
  { id: 'pct-change', label: '% Change', group: 'label', field: 'change', defaultVisible: true },
  { id: 'volume24h', label: '24H Volume', group: 'label', field: 'volume24h', defaultVisible: true },
  { id: 'market-cap', label: 'Market Cap', group: 'stock', field: 'marketCap', defaultVisible: true },
];
export const CRYPTO_DEFAULT_VISIBLE_IDS = CRYPTO_TABLE_COLUMNS.filter(c => c.defaultVisible).map(c => c.id);
export const CRYPTO_ALL_COLUMN_IDS = CRYPTO_TABLE_COLUMNS.map(c => c.id);
export const CRYPTO_COLUMN_LABELS = Object.fromEntries(CRYPTO_TABLE_COLUMNS.map(c => [c.id, c.label]));
export const CRYPTO_LABEL_COLS = CRYPTO_TABLE_COLUMNS.filter(c => c.group === 'label');
export const CRYPTO_STOCK_COLS = CRYPTO_TABLE_COLUMNS.filter(c => c.group === 'stock');

const _cryptoRow = (symbol, name, price, change, volume24h, marketCap) =>
  ({ symbol, name, price, change, volume24h, marketCap });

export const cryptoData = {
  'Tradable': [
    _cryptoRow('SNAL', 'Snail, INC.', '2.345', '+19.16M', '845.67M', '67.25M'),
    _cryptoRow('PMNT', 'Perfect Moment LTD', '3.678', '+19.16M', '530.12M', '67.25M'),
    _cryptoRow('MIMI', 'Mint Incorporation Li.', '4.910', '+19.16M', '412.89M', '67.25M'),
    _cryptoRow('HUBC', 'Hub Cyber Security Is.', '5.234', '+19.16M', '278.45M', '67.25M'),
    _cryptoRow('WGRX', 'Sky Quarry Innovations', '5.234', '-19.16M', '964.33M', '67.25M'),
    _cryptoRow('MIMI', 'Granite Peak Solutions', '7.012', '+19.16M', '753.21M', '67.25M'),
  ],
  'Non-tradable': [
    _cryptoRow('HUBC', 'Hub Cyber Security Is.', '5.234', '+19.16M', '278.45M', '67.25M'),
    _cryptoRow('WGRX', 'Sky Quarry Innovations', '5.234', '-19.16M', '964.33M', '67.25M'),
    _cryptoRow('SNAL', 'Snail, INC.', '2.345', '+19.16M', '845.67M', '67.25M'),
    _cryptoRow('MIMI', 'Granite Peak Solutions', '7.012', '+19.16M', '753.21M', '67.25M'),
    _cryptoRow('MIMI', 'Mint Incorporation Li.', '4.910', '+19.16M', '412.89M', '67.25M'),
    _cryptoRow('PMNT', 'Perfect Moment LTD', '3.678', '+19.16M', '530.12M', '67.25M'),
  ],
};

export const REGION_LABELS = { '': 'All', Americas: 'Americas', Europe: 'Europe', 'Asia-Pacific': 'Asia-Pac' };

export const COLUMNS = [
  { key: 'country', label: 'Country' },
  { key: 'instrument', label: 'Instrument' },
  { key: 'mat_yr', label: 'Maturity' },
  { key: null, label: 'Session' },
  { key: 'yield', label: 'Yield %' },
  { key: 'yield_change', label: 'Chg (bps)' },
  { key: 'price', label: 'Price' },
  { key: 'price_change', label: 'Px Chg' },
  { key: 'volume_bn', label: 'Volume USD bn' },
  { key: 'rating', label: 'Rating' },
  { key: null, label: 'CCY' },
  { key: null, label: 'Source' },
];

/* ──────────────────────────────────────────────────────────────────────────────
 *  ANALYST DATA — Replace with API calls during backend integration.
 * 
 *  Expected API endpoints:
 *    GET /api/analyst-rating?symbol=AAPL
 *      → { updatedAt, overallRating, basedOnCount, breakdown: [...] }
 *
 *    GET /api/analyst-price-target?symbol=AAPL
 *      → { updatedAt, high, average, low, current }
 *
 *  breakdown item: { label, percentage, color }
 *    color is one of: 'strongBuy' | 'buy' | 'hold' | 'underperform' | 'sell'
 * ────────────────────────────────────────────────────────────────────────────── */

export const ANALYST_DATA = {
  rating: {
    updatedAt: '04/10/2026 EDT',
    overallRating: 'BUY',
    basedOnCount: 48,
    breakdown: [
      { label: 'Strong Buy', percentage: 52.08, color: 'strongBuy' },
      { label: 'Buy', percentage: 34.50, color: 'buy' },
      { label: 'Hold', percentage: 31.25, color: 'hold' },
      { label: 'Under-Perform', percentage: 22.08, color: 'underperform' },
      { label: 'Sell', percentage: 32.08, color: 'sell' },
    ],
  },
  priceTarget: {
    updatedAt: '04/10/2026 EDT',
    high: 350.00,
    average: 296.33,
    low: 205.00,
    current: 260.48,
  },
};

/* ──────────────────────────────────────────────────────────────────────────────
 *  ORDER FLOW DATA — Replace with API calls during backend integration.
 *
 *  Expected API endpoints:
 *    GET /api/order-flow/distribution?symbol=AAPL
 *      → { inflow: { total, breakdown: [{ size, pct, value }] },
 *          outflow: { total, breakdown: [...] } }
 *
 *    GET /api/order-flow/large-scale?symbol=AAPL&days=5
 *      → { orders: [{ date, value }] }
 *        value > 0 = net buy (green), value < 0 = net sell (red)
 *
 *  size key: 'L' = Large, 'M' = Medium, 'S' = Small
 * ────────────────────────────────────────────────────────────────────────────── */

export const ORDER_FLOW_DATA = {
  distribution: {
    inflow: {
      total: 821.27,
      breakdown: [
        { size: 'L', pct: 7.45, value: 112.67 },
        { size: 'M', pct: 5.89, value: 98.12 },
        { size: 'S', pct: 8.15, value: 120.45 },
      ],
    },
    outflow: {
      total: 855.27,
      breakdown: [
        { size: 'L', pct: 4.72, value: 88.90 },
        { size: 'M', pct: 9.03, value: 130.22 },
        { size: 'S', pct: 3.56, value: 75.34 },
      ],
    },
  },
  largeScaleOrders: [
    { date: '12/15', value: -225.83 },
    { date: '03/22', value: -1515.19 },
    { date: '09/05', value: 486.25 },
    { date: '11/30', value: 1445.37 },
    { date: '01/18', value: -550.83 },
  ],
};

// ── Releases Data ────────────────────────────────────────────────────────────────
// type: 'All' | 'Financials' | 'Insiders'
// date: YYYY-MM-DD, time: HH:MM (24-hour format)
export const RELEASES_DATA = [
  {
    id: 1,
    type: 'Insiders',
    company: 'Apple Inc.',
    ticker: '0000320193',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
  {
    id: 2,
    type: 'Insiders',
    company: 'Orchard Innovations Ltd.',
    ticker: '0012345678',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
  {
    id: 3,
    type: 'Insiders',
    company: 'Quantum Orchard Corp.',
    ticker: '0012345679',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
  {
    id: 4,
    type: 'Insiders',
    company: 'Stellar Orchard Inc.',
    ticker: '0012345680',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
  {
    id: 5,
    type: 'Financials',
    company: 'Future Orchard Group',
    ticker: '0012345681',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
  {
    id: 6,
    type: 'Insiders',
    company: 'Nexus Orchard Enterprises',
    ticker: '0012345682',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
  {
    id: 7,
    type: 'Insiders',
    company: 'Apex Orchard Innovations',
    ticker: '0012345683',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
  {
    id: 8,
    type: 'Financials',
    company: 'Horizon Orchard Technologies',
    ticker: '0012345684',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
  {
    id: 9,
    type: 'Insiders',
    company: 'Visionary Orchard Systems',
    ticker: '0012345685',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
  {
    id: 10,
    type: 'Insiders',
    company: 'Synergy Orchard Labs',
    ticker: '0012345686',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
  {
    id: 11,
    type: 'Financials',
    company: 'Infinity Orchard Solutions',
    ticker: '0012345687',
    date: '04/03/2026',
    time: '18:30',
    description: 'Statement of changes in beneficial ownership of securities',
  },
];

// ── Profile Data ─────────────────────────────────────────────────────────────────
export const PROFILE_DATA = {
  name: 'Apple Inc',
  address: 'One Apple Park Way, CUPERTINO, CA, United States',
  phone: '1-408-9961010',
  industry: 'Computers, Phones & Household Electronics',
  listingDate: '12/12/1880',
  website: 'https://www.apple.com/',
  summary: 'Apple Inc. designs, manufactures and markets smartphones, personal computers, tablets, wearables and accessories, and sells a variety of related services. Its product categories include iPhone, Mac, iPad, and Wearables, Home and Accessories. Its software platforms include iOS, iPadOS, macOS, watchOS, and tvOS. Its services include advertising, Apple Books, Apple Fitness+, Apple Music, Apple News+, and Apple TV+. Its products include iPhone 15, iPhone 15 Pro, iPhone 14, iPhone SE, MacBook Air, MacBook Pro, Mac mini, Mac Studio, Mac Pro, iPad Pro, iPad Air, AirPods, AirPods Pro, AirPods Max, Apple TV, Apple Vision Pro and others.',
};

// ── Key Executives Data ──────────────────────────────────────────────────────────
export const KEY_EXECUTIVES_DATA = [
  {
    id: 1,
    name: 'Tim Cook',
    title: 'Chief Executive Officer',
    imageUrl: 'https://via.placeholder.com/48',
  },
  {
    id: 2,
    name: 'Luca Maestri',
    title: 'Chief Financial Officer',
    imageUrl: 'https://via.placeholder.com/48',
  },
  {
    id: 3,
    name: 'Craig Federighi',
    title: 'Senior Vice President, Software Engineering',
    imageUrl: 'https://via.placeholder.com/48',
  },
  {
    id: 4,
    name: 'Katherine Adams',
    title: 'Vice President, General Counsel',
    imageUrl: 'https://via.placeholder.com/48',
  },
  {
    id: 5,
    name: 'Eddy Cue',
    title: 'Senior Vice President, Services',
    imageUrl: 'https://via.placeholder.com/48',
  },
  {
    id: 6,
    name: 'John Ternus',
    title: 'Senior Vice President, Hardware Engineering',
    imageUrl: 'https://via.placeholder.com/48',
  },
];


// quotes and watchlist  

export const stats = [
  {
    column: [
      { label: "Open", value: "4,510.95" },
      { label: "Low", value: "4,510.95" },
      { label: "52 Wk High", value: "4,510.95" },
      { label: "Volume", value: "0.00" },
    ],
  },
  {
    column: [
      { label: "High", value: "4,510.95" },
      { label: "Close", value: "4,510.95" },
      { label: "52 Wk Low", value: "4,510.95" },
      { label: "Market Cap", value: "0.00" },
    ],
  },
  {
    column: [
      { label: "Open", value: "4,510.95" },
      { label: "Low", value: "4,510.95" },
      { label: "52 Wk High", value: "4,510.95" },
      { label: "Volume", value: "0.00" },
    ],
  },
];


// ── Portfolio Page Data ──────────────────────────────────────────────────────

export const PORTFOLIO_CHART_DATA = {
  '1M': {
    labels: ['Apr 1', 'Apr 3', 'Apr 5', 'Apr 7', 'Apr 9', 'Apr 11', 'Apr 13', 'Apr 15', 'Apr 17', 'Apr 19', 'Apr 21', 'Apr 23', 'Apr 25', 'Apr 27', 'Apr 29', 'May 1'],
    current: [270, 290, 280, 305, 335, 318, 360, 390, 375, 405, 428, 418, 445, 462, 478, 500],
    invested: [158, 170, 163, 182, 205, 192, 222, 248, 236, 260, 278, 268, 285, 290, 293, 295],
  },
  '6M': {
    labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    current: [270, 215, 195, 155, 280, 500],
    invested: [162, 172, 172, 118, 168, 295],
  },
  '1Y': {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    current: [20, 165, 148, 215, 365, 435, 395, 285, 195, 155, 275, 500],
    invested: [20, 205, 182, 272, 540, 618, 550, 345, 172, 118, 165, 295],
  },
  '3Y': {
    labels: ["Q2'23", "Q3'23", "Q4'23", "Q1'24", "Q2'24", "Q3'24", "Q4'24", "Q1'25", "Q2'25", "Q3'25", "Q4'25", "Q1'26"],
    current: [20, 165, 148, 215, 365, 435, 395, 285, 195, 155, 275, 500],
    invested: [20, 205, 182, 272, 540, 618, 550, 345, 172, 118, 165, 295],
  },
  '5Y': {
    labels: ['2021', 'Q2\'21', 'Q3\'21', 'Q4\'21', '2022', 'Q2\'22', 'Q3\'22', 'Q4\'22', '2023', 'Q2\'23', 'Q3\'23', 'Q4\'23', '2024', 'Q2\'24', 'Q3\'24', 'Q4\'24', '2025', 'Q2\'25', 'Q3\'25', 'Q4\'25', '2026'],
    current: [20, 80, 120, 95, 60, 88, 128, 108, 75, 165, 148, 215, 365, 435, 395, 285, 195, 155, 275, 440, 500],
    invested: [20, 95, 145, 115, 65, 105, 165, 132, 90, 205, 182, 272, 540, 618, 550, 345, 172, 118, 165, 255, 295],
  },
  'ALL': {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    current: [20, 165, 148, 215, 365, 435, 395, 285, 195, 155, 275, 500],
    invested: [20, 205, 182, 272, 540, 618, 550, 345, 172, 118, 165, 295],
  },
};

export const PORTFOLIO_SUMMARY = {
  currentValue: '$1,000,00.00',
  investedValue: '$5,000,00.00',
  currentValueChange: '-$4,000,00.00',
  currentValueChangeDirection: 'down', // 'up' = green, 'down' = red
  currentValueChangeColor: 'red', // 'green' | 'red'
  currentReturn: '-$1,000,00.00',
  currentReturnDirection: 'down', // 'up' = green, 'down' = red
  currentReturnColor: 'red', // 'green' | 'red'
  inflation: '56.48%',
  inflationDirection: 'up', // 'up' = green/TriangleUp, 'down' = red/TriangleDown
  inflationColor: 'green' // 'green' | 'red'
}; 

export const PORTFOLIO_HOLDINGS = [
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [12, 14, 11, 15, 13, 16, 14, 17, 15, 18, 16, 14, 13, 15, 17, 16, 18, 15, 14, 16], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$142.72', currentDirection: 'up', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 13, 12, 14, 16, 15, 17, 14, 13, 15], sparklineColor: 'red', marketPrice: '$14.24', priceDirection: 'down', priceChange: '-$4.00', priceChangePct: '-5.00 (0.90%)', priceChangeColor: 'red', returns: '-$110.72', returnsDirection: 'down', returnsPct: '-40.48%', returnsColor: 'red', current: '$110.72', currentDirection: 'down', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [14, 13, 15, 12, 14, 11, 13, 15, 14, 16, 13, 15, 14, 12, 16, 15, 13, 14, 16, 15], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$114.72', currentDirection: 'up', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 14, 13, 15, 17, 16, 18, 15, 14, 16], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$114.72', currentDirection: 'up', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 16, 15, 17, 19, 18, 20, 17, 16, 18], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$114.72', currentDirection: 'up', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [15, 14, 16, 13, 15, 12, 14, 16, 15, 17, 14, 16, 15, 13, 17, 16, 14, 15, 17, 16], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$114.72', currentDirection: 'up', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 15, 14, 16, 18, 17, 19, 16, 15, 17], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$114.72', currentDirection: 'up', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 13, 12, 14, 16, 15, 17, 14, 13, 15], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$114.72', currentDirection: 'up', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [14, 13, 15, 12, 14, 11, 13, 15, 14, 16, 13, 15, 14, 12, 16, 15, 13, 14, 16, 15], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$114.72', currentDirection: 'up', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 14, 13, 15, 17, 16, 18, 15, 14, 16], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$114.72', currentDirection: 'up', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [14, 13, 15, 12, 14, 11, 13, 15, 14, 16, 13, 15, 14, 12, 16, 15, 13, 14, 16, 15], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$114.72', currentDirection: 'up', invested: '$100.00' },
  { company: 'Apple', index: 'Dow Jones', timeAgo: '5h ago', sparkline: [11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 14, 13, 15, 17, 16, 18, 15, 14, 16], sparklineColor: 'green', marketPrice: '$14.24', priceDirection: 'up', priceChange: '+$4.00', priceChangePct: '+5.00 (0.90%)', priceChangeColor: 'green', returns: '+$114.72', returnsDirection: 'up', returnsPct: '40.48%', returnsColor: 'green', current: '$114.72', currentDirection: 'up', invested: '$100.00' },
];

export const MARKET_CAP_DATA = [
  { name: 'Large Cap', count: '7 Stocks', allocation: '$111.88', allocationPct: '5.30%', returns: '+$15.42', returnsPct: '56.48%', color: '#3B82F6' },
  { name: 'Mid Cap', count: '0 Stocks', allocation: '$40.88', allocationPct: '5.30%', returns: '+$15.42', returnsPct: '56.48%', color: '#F59E0B' },
  { name: 'Small Cap', count: '3 Stocks', allocation: '$70.88', allocationPct: '5.30%', returns: '+$15.42', returnsPct: '56.48%', color: '#14B8A6' },
];

export const SECTOR_ALLOCATION_DATA = [
  { name: 'ETF', count: '1 Stocks', allocation: '$111.88', allocationPct: '5.30%', returns: '+$15.42', returnsPct: '56.48%', color: '#F7B84B' },
  { name: 'Oil & Gas', count: '0 Stocks', allocation: '$111.88', allocationPct: '5.30%', returns: '+$15.42', returnsPct: '56.48%', color: '#8668B9' },
  { name: 'IT Sector', count: '3 Stocks', allocation: '$111.88', allocationPct: '5.30%', returns: '+$15.42', returnsPct: '56.48%', color: '#DA6AAB' },
];

export const ASSET_ALLOCATION_DATA = [
  { name: 'Stocks', count: '7 Stocks', allocation: '$111.88', allocationPct: '5.30%', returns: '+$15.42', returnsPct: '56.48%', color: '#17B667' },
];

export const colorMap = {
  "Open": "text-green-600",
  "Low": "text-red-600",
  "52 Wk High": "text-[#616161]",
  "Volume": "text-[#616161]",
  "High": "text-green-600",
  "Close": "text-red-600",
  "52 Wk Low": "text-[#616161]",
  "Market Cap": "text-[#616161]",
};


export const INDUSTRY_CHANGE_DATA = [
  {
    industry: 'Diversified Retail',
    change: 4.11,
    stocks: [
      { symbol: 'AMZN', change: 3.87 },
      { symbol: 'M', change: 5.29 },
      { symbol: 'RVLV', change: 2.46 },
      { symbol: 'PSMT', change: 6.03 },
    ],
  },
  {
    industry: 'Water & Related Utilities',
    change: 4.11,
    stocks: [
      { symbol: 'AMZN', change: 3.87 },
      { symbol: 'M', change: 5.29 },
      { symbol: 'RVLV', change: 2.46 },
      { symbol: 'PSMT', change: 6.03 },
    ],
  },
  {
    industry: 'Beverages',
    change: 4.11,
    stocks: [
      { symbol: 'AMZN', change: 3.87 },
      { symbol: 'M', change: 5.29 },
      { symbol: 'RVLV', change: 2.46 },
      { symbol: 'PSMT', change: 6.03 },
    ],
  },
  {
    industry: 'Beverages',
    change: 4.11,
    stocks: [
      { symbol: 'AMZN', change: 3.87 },
      { symbol: 'M', change: 5.29 },
      { symbol: 'RVLV', change: 2.46 },
      { symbol: 'PSMT', change: 6.03 },
    ],
  },
  {
    industry: 'Biotechnology',
    change: 3.52,
    stocks: [
      { symbol: 'MRNA', change: 4.10 },
      { symbol: 'BNTX', change: 2.85 },
      { symbol: 'REGN', change: 3.42 },
      { symbol: 'VRTX', change: 3.71 },
    ],
  },
  {
    industry: 'Semiconductors',
    change: 5.22,
    stocks: [
      { symbol: 'NVDA', change: 6.15 },
      { symbol: 'AMD', change: 4.87 },
      { symbol: 'INTC', change: 3.92 },
      { symbol: 'TSM', change: 5.94 },
    ],
  },
];


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

// ── Market Overview (Adv/Dec) ────────────────────────────────────────────────
// Expected API shape:
// {
//   total: number,
//   decliners: number,
//   advancers: number,
//   bars: [{ label: string, value: number, type: 'decline'|'neutral'|'advance' }]
// }
// To integrate: replace marketOverviewData with an API response of the same shape.
export const marketOverviewData = {
  total: 6469,
  decliners: 1914,
  advancers: 3857, 
  bars: [
    { label: '<-10%', value: 72, type: 'decline' },
    { label: '-5~-2%', value: 102, type: 'decline' },
    { label: '-5~-2%', value: 102, type: 'decline' },
    { label: '', value: 335, type: 'decline' },
    { label: '0', value: 295, type: 'neutral' },
    { label: '', value: 2563, type: 'advance' },
    { label: '2~5%', value: 932, type: 'advance' },
    { label: '', value: 324, type: 'advance' },
    { label: '>10%', value: 111, type: 'advance' },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

