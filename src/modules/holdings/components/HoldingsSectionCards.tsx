import { Row } from 'antd';
import { HOLDINGS_MOCK_DATA } from '../mocks/holdings'
import HoldingsSectionCard from './HoldingsSectionCard'

function HoldingsSectionCards() {
  return (
      <Row gutter={[40, 40]} className='my-4'>
        {HOLDINGS_MOCK_DATA.map((companyProfile, index) => (
          <HoldingsSectionCard mockData={companyProfile} key={index} />
        ))}
      </Row>
  )
}

export default HoldingsSectionCards;