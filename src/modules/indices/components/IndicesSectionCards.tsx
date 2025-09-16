import { Row } from 'antd'
import { INDICES_MOCK_DATA } from '../mocks/indices'
import IndicesSectionCard from './IndicesSectionCard'

function IndicesSectionCards() {
  return (
    <Row gutter={[20, 20]} className='mt-12'>
      {INDICES_MOCK_DATA.map((indices, index) => (
        <IndicesSectionCard mockData={indices} key={index} />
      ))}
    </Row>
  )
}

export default IndicesSectionCards;