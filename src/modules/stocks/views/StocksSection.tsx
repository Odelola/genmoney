import StocksSectionFilter from "../components/StocksSectionFilter"
import StocksSectionTable from "../components/StocksSectionTable"

function StocksSection() {
  return (
    <section>
        <StocksSectionFilter />
        <StocksSectionTable />
    </section>
  )
}

export default StocksSection