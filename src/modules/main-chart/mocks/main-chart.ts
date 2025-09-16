export const MAIN_CHART_FILTERS: string[] = ['1D', '1W', '1M', '3M', '6M', '1Y', '5Y', 'ALL'];

export interface MAIN_CHART_MOCK_ARRAY_TYPE {
  time: string,
  price: number
}

interface MAIN_CHART_MOCK_TYPE {
  [key: string]: MAIN_CHART_MOCK_ARRAY_TYPE[]
}

export const MAIN_CHART_MOCK_DATA: MAIN_CHART_MOCK_TYPE = {
  '1D': [
    { time: '9:30', price: 58.45 },
    { time: '10:00', price: 58.92 },
    { time: '10:30', price: 59.31 },
    { time: '11:00', price: 59.18 },
    { time: '11:30', price: 59.67 },
    { time: '12:00', price: 60.12 },
    { time: '12:30', price: 59.95 },
    { time: '13:00', price: 60.33 },
    { time: '13:30', price: 60.78 },
    { time: '14:00', price: 61.24 },
  ],
  '1W': [
    { time: 'Mon', price: 55.23 },
    { time: 'Tue', price: 56.78 },
    { time: 'Wed', price: 58.45 },
    { time: 'Thu', price: 59.67 },
    { time: 'Fri', price: 61.24 },
  ],
  '1M': [
    { time: 'Aug 20', price: 52.31 },
    { time: 'Aug 27', price: 53.78 },
    { time: 'Sep 3', price: 55.45 },
    { time: 'Sep 10', price: 58.92 },
    { time: 'Sep 16', price: 61.24 },
  ],
  '3M': [
    { time: 'Jun', price: 45.67 },
    { time: 'Jul', price: 48.23 },
    { time: 'Aug', price: 52.31 },
    { time: 'Sep', price: 61.24 },
  ],
  '6M': [
    { time: 'Mar', price: 38.45 },
    { time: 'Apr', price: 41.23 },
    { time: 'May', price: 43.78 },
    { time: 'Jun', price: 45.67 },
    { time: 'Jul', price: 48.23 },
    { time: 'Aug', price: 52.31 },
    { time: 'Sep', price: 61.24 },
  ],
  '1Y': [
    { time: 'Sep 24', price: 32.45 },
    { time: 'Nov 24', price: 34.78 },
    { time: 'Jan 25', price: 36.23 },
    { time: 'Mar 25', price: 38.45 },
    { time: 'May 25', price: 43.78 },
    { time: 'Jul 25', price: 48.23 },
    { time: 'Sep 25', price: 61.24 },
  ],
  '5Y': [
    { time: '2020', price: 12.45 },
    { time: '2021', price: 18.67 },
    { time: '2022', price: 25.34 },
    { time: '2023', price: 28.91 },
    { time: '2024', price: 32.45 },
    { time: '2025', price: 61.24 },
  ],
  'ALL': [
    { time: '2018', price: 8.23 },
    { time: '2019', price: 9.78 },
    { time: '2020', price: 12.45 },
    { time: '2021', price: 18.67 },
    { time: '2022', price: 25.34 },
    { time: '2023', price: 28.91 },
    { time: '2024', price: 32.45 },
    { time: '2025', price: 61.24 },
  ],
};