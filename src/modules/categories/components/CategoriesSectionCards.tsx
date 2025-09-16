import { Row } from 'antd'
import { CATEGORIES_MOCK_DATA } from '../mocks/categories'
import CategoriesSectionCard from './CategoriesSectionCard'

function CategoriesSectionCards() {
  return (
    <Row gutter={[10, 10]} className='mt-12 max-sm:!flex-nowrap max-sm:overflow-x-scroll max-sm:!gap-10 '>
      {CATEGORIES_MOCK_DATA.map((category, index) => (
        <CategoriesSectionCard mockData={category} key={index} />
      ))}
    </Row>
  )
}

export default CategoriesSectionCards;