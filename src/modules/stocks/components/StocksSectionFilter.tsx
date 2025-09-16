import { FilterTabs } from "@/components"
import { STOCKS_FILTER } from "../mocks/stocks"

function StocksSectionFilter() {
  return (
    <div>
        <FilterTabs options={STOCKS_FILTER} defaultValue={"Gainers"} />
    </div>
  )
}

export default StocksSectionFilter 