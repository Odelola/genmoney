import { Col } from '@/components';
import { StatsSectionCardProps } from '../interfaces/stats-interfaces';

function StatsSectionCard({ mockData: { title, value } }: StatsSectionCardProps) {
  return (
          <Col xs={12} sm={12} md={8} lg={8}>
            <p className='text-md text-grey-600'>{title}</p>
            <h1 className='text-lg font-opensauce-bold mt-2'>{value}</h1>
          </Col>
  )
}

export default StatsSectionCard;