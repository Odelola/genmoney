import { IconImageRenderProps } from "@/components/icons/IconImageRender"
import { Breakpoint } from "antd"

export interface ImageWrapperProps extends IconImageRenderProps {
    company: string
}

export interface STOCK_TABLE_COLUMNS_TYPE {
  title: string,
  dataIndex: string,
  key: string,
  responsive?: Breakpoint[] | undefined
  ellipsis?: boolean
} 

export interface STOCKS_TABLE_DATA_TYPE {
    key: string,
    symbol: React.JSX.Element,
    name: string,
    price: string,
    change: React.JSX.Element,
    icons: React.JSX.Element
}