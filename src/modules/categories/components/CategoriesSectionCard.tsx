import { Card, Col, Flex } from '@/components'
import { CategoriesSectionCardProps } from '../interfaces/categories-interfaces';
import Image from 'next/image';

function CategoriesSectionCard({ mockData: { category, description, image } }: CategoriesSectionCardProps) {
  return (
    <Col xs={24} sm={12} md={12} lg={12}>
      <Card>
        <Flex vertical gap={6} align='flex-start w-full'>
          <Image src={image} className='h-24 max-sm:h-48  rounded-xl object-cover w-full' alt={`Category: ${category}`} />
          <h1 className='text-lg'>{category}</h1>
          <p className='text-md text-grey-500'>{description}</p>
        </Flex>
      </Card>
    </Col >
  )
}

export default CategoriesSectionCard;