import { NEWS_MOCK_DATA } from '../mocks/news'
import NewsSectionCard from './NewsSectionCard'

function NewsSectionCards() {
  return (
    <section className='mt-12'>
      {/*  Just to repeat the same data twice as per the design */}
      {NEWS_MOCK_DATA.concat(NEWS_MOCK_DATA).concat(NEWS_MOCK_DATA).map((news, index) => (
        <NewsSectionCard mockData={news} key={index} />
      ))}
    </section>
  )
}

export default NewsSectionCards;