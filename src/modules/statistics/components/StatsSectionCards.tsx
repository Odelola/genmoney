import { Row } from 'antd';
import { STATS_MOCK_DATA } from '../mocks/statistics'
import StatsSectionCard from './StatsSectionCard'

function StatsSectionCards() {
  return (
    <Row gutter={[40, 40]} className='mt-12'>
      {STATS_MOCK_DATA.map((stats, index) => (
        <StatsSectionCard mockData={stats} key={index} />
      ))}
    </Row>
  )
}

export default StatsSectionCards;