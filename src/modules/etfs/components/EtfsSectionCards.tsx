import { Row } from 'antd'
import { ETFS_MOCK_DATA } from '../mocks/etfs'
import EtfSectionCard from './EtfsSectionCard'

function EtfSectionCards() {
  return (
    <Row gutter={[20, 20]} className='mt-12'>
      {ETFS_MOCK_DATA.map((etf, index) => (
        <EtfSectionCard mockData={etf} key={index} />
      ))}
    </Row>
  )
}

export default EtfSectionCards;