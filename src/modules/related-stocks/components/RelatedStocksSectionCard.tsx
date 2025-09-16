import { PercentageIndicator } from '@/shared';
import { RelatedStocksSectionCardProps } from '../interfaces/related-stocks';
import { Col, Flex, IconImageRender } from '@/components';

function RelatedStocksSectionCard({ mockData: { icon, title, description, price, percentage, increase } }: RelatedStocksSectionCardProps) {
  return (
    <Col xs={24} sm={24} md={12} lg={12}>
      {/* <p className='text-md text-grey-600'>{title}</p> */}
      <Flex className='!mt-2'>
        <div className='size-16 p-0 flex justify-center items-center bg-white-300 rounded-full '>
          <IconImageRender width={30} renderIcon={icon} alt={title} />
        </div>
        <Flex align='flex-start' vertical>
          <h1 className='text-lg font-opensauce-bold'>{title}</h1>
          <p className='text-md text-grey-600'>{description}</p>
        </Flex>
        <Flex vertical align='flex-end' className='flex-1'>
          <h1 className='text-lg font-opensauce-bold mt-2'>{price}</h1>
          <PercentageIndicator percentage={percentage} increase={increase} />
        </Flex>
      </Flex>

    </Col >
  )
}

export default RelatedStocksSectionCard;