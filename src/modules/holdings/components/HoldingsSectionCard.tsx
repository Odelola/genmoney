import { PercentageIndicator } from '@/shared';
import { HoldingsSectionCardProps } from '../interfaces/holdings-interfaces';
import { Col, Flex } from '@/components';

function HoldingsSectionCard({ mockData: { title, value, percentage, increase } }: HoldingsSectionCardProps) {
  return (
    <Col xs={24} sm={12} md={12} lg={12}>
      <p className='text-md text-grey-600'>{title}</p>
      <Flex className='!mt-2 max-sm:flex-col max-sm:!items-start'>
        <h1 className='text-lg font-opensauce-bold'>{value}</h1>
        {percentage && (
          <Flex>
            <PercentageIndicator percentage={percentage} increase={increase} />
            <span className='text-xs'>(Total return)</span>
          </Flex>
        )}
      </Flex>

    </Col>
  )
}

export default HoldingsSectionCard;