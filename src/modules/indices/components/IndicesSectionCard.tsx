import { DecreaseChevronUpIcon, IncreaseChevronUpIcon } from '@/assets/svgs'
import { Card, Flex, Col, IconImageRender } from '@/components'
import { IndicesSectionCardProps } from '../interfaces/indices-interfaces';

function IndicesSectionCard({ mockData: { icon, price, description, increase, name, percentage } }: IndicesSectionCardProps) {
  return (
    <Col span={8}>
      <Card>
        <Flex vertical gap={6}>
          <IconImageRender renderIcon={icon} alt={`${name} ${description}`} />
          <h1 className='text-xl font-opensauce-bold'>{name}</h1>
          <p className='text-md text-grey-500'>{description}</p>
            <h5 className='!text-xl'>{price}</h5>
            <Flex gap={4}>
              <IconImageRender renderIcon={increase ? IncreaseChevronUpIcon : DecreaseChevronUpIcon} alt={`${increase ? "Increase" : "Decrease"} Icon`} />
              <strong className={`text-${increase ? "green" : "red" }-100`}>{percentage}</strong>
          </Flex>
        </Flex>
      </Card>
    </Col >
  )
}

export default IndicesSectionCard;