import { Card, Flex, IconImageRender } from '@/components'
import { ClubsSectionCardProps, ClubSectionImpressionProps } from '../interfaces/clubs-interfaces';
import Image from 'next/image';
import { VerifiedIcon } from '@/assets/svgs';
import { Tag } from 'antd';

function ClubSectionImpression({ icon, count, alt }: ClubSectionImpressionProps) {
  return (
    <Flex gap={4} className='!pl-1'>
      <IconImageRender renderIcon={icon} alt={alt} />
      <span className='text-grey-500'>{count}</span>
    </Flex>
  )
}

function ClubsSectionCard({ mockData: {
  clubMemberAlt,
  clubMemberImage,
  clubMemberName,
  clubMemberPost,
  clubMemberTags,
  clubMemberUsername,
  clubMemberLastActive,
  clubMemberImpressionCount
} }: ClubsSectionCardProps) {
  return (
    <article className='my-4'>
      <Card>
        <Flex align='flex-start'>
          <Image src={clubMemberImage} className='size-9 rounded-full max-sm:size-11' alt={clubMemberAlt} />
          <Flex vertical gap={10} align='flex-start w-full'>
            <Flex justify='space-between' className='max-sm:flex-col max-sm:!items-start max-sm:!gap-2'>
              <Flex gap={8} >
                <h1 className='text-md text-dark-700'>{clubMemberName}</h1>
                <IconImageRender renderIcon={VerifiedIcon} alt="Verified Icon" />
              </Flex>
              <Flex gap={6}>
                <span className='text-grey-500'>{clubMemberUsername}</span>
                <span className='bg-grey-400 size-2 rounded-full shrink-0' />
                <time className='text-grey-500'>{clubMemberLastActive}</time>
              </Flex>
            </Flex>
            <p className='text-md text-grey-500'>{clubMemberPost}</p>
            <Flex gap={8}>
              {clubMemberTags.map((item, index) => (
                <Tag className={item.className.trim() + " !bg-transparent"} key={index}>
                  {item.element ? (
                    <Flex gap={4}>
                      <item.element color='#2EB200' />
                      {item.name}
                    </Flex>
                  )
                    :
                    (item.name)
                  }
                </Tag>
              ))}
            </Flex>
            <Flex gap={4}>
              {
                clubMemberImpressionCount.map(({ icon, name, count }, index, array) => {
                  return index == array.length - 1 ?
                    (<Flex justify='flex-end' className='flex-1 max-sm:flex-initial' key={index}>
                      <ClubSectionImpression icon={icon} count={count} alt={name} />
                    </Flex>)
                    :
                    (<ClubSectionImpression icon={icon} count={count} alt={name} key={index} />)
                }
                )}
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </article>
  )
}

export default ClubsSectionCard;