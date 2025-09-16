import { Card, Flex } from '@/components'
import Image from 'next/image';
import { NewsSectionCardProps } from '../interfaces/news-interfaces';

function NewsSectionCard({ mockData: { image, headline, extraTag, time } }: NewsSectionCardProps) {
  return (
    <article className='my-4'>
      <Card className='ant-card-shrunk border-white-100'>
        <Flex className='max-sm:flex-col'>
          <Image src={image} className='size-20 rounded-xl max-sm:rounded-none max-sm:w-full max-sm:h-40 object-cover' alt={headline} />
          <Flex vertical align='flex-start'>
            <h1 className='text-lg text-grey-600'>{headline}</h1>
            <Flex gap={6}>
              <time className='text-grey-500'>{time}</time>
              <span className='bg-grey-400 size-2 rounded-full shrink-0' />
              <h5 className='text-grey-500'>{extraTag}</h5>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </article>
  )
}

export default NewsSectionCard;