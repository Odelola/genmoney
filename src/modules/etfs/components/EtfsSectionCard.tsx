import { Card, Col, Flex } from '@/components'
import { EtfSectionCardProps } from '../interfaces/eft-interfaces'
import { PercentageIndicator } from '@/shared'

function EtfSectionCard({ mockData: { price, description, increase, name, percentage } }: EtfSectionCardProps) {
  return (
    <Col>
      <Card borderColorClass='border-white-50'>
        <Flex vertical align='flex-start w-full'>
          <h1 className='text-xl'>{name}</h1>
          <p className='text-md text-grey-500'>{description}</p>
          <Flex justify='space-between'>
            <h1 className='!text-lg font-opensauce-bold'>{price}</h1>
            <PercentageIndicator increase={increase} percentage={percentage} />
          </Flex>
        </Flex>
      </Card>
    </Col >
  )
}

export default EtfSectionCard;