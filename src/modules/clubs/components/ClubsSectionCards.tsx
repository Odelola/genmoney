import { CLUB_MOCK_DATA } from '../mocks/clubs'
import ClubsSectionCard from './ClubsSectionCard'

function ClubsSectionCards() {
  return (
    <section className='mt-12'>
      {/*  Just to repeat the same data twice as per the design */}
      {CLUB_MOCK_DATA.concat(CLUB_MOCK_DATA).map((clubs, index) => (
        <ClubsSectionCard mockData={clubs} key={index} />
      ))}
    </section>
  )
}

export default ClubsSectionCards;