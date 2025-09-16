import { CheckboxGroupProps } from "antd/es/checkbox";
import { STOCK_TABLE_COLUMNS_TYPE } from "../interfaces/stock-interfaces";

export const STOCKS_FILTER: CheckboxGroupProps<string>['options'] = [
  { label: 'Gainers', value: 'Gainers' },
  { label: 'Losers', value: 'Losers' },
  { label: 'Most Traded', value: 'Most Traded' },
];


export const STOCK_TABLE_COLUMNS: STOCK_TABLE_COLUMNS_TYPE[] = [
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    responsive: ['md'] as const,
          ellipsis: true,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '% Change',
    dataIndex: 'change',
    key: 'change',
  },
  {
    title: '',
    dataIndex: 'icons',
    key: 'icons',
  }
];