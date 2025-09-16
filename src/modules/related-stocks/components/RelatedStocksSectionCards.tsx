import { Row } from 'antd';
import { HOLDINGS_MOCK_DATA } from '../mocks/related-stocks'
import RelatedStocksSectionCard from './RelatedStocksSectionCard'

function RelatedStocksSectionCards() {
  return (
      <Row gutter={[40, 40]} className='my-4'>
        {HOLDINGS_MOCK_DATA.map((companyProfile, index) => (
          <RelatedStocksSectionCard mockData={companyProfile} key={index} />
        ))}
      </Row>
  )
}

export default RelatedStocksSectionCards;