import { Row } from 'antd';
import { COMPANY_PROFILE_MOCK_DATA } from '../mocks/company-profile'
import CompanyProfileSectionCard from './CompanyProfileSectionCard'

function CompanyProfileSectionCards() {
  return (
    <article>
      <div className='my-6'>
        <p className='text-grey-600'>Meta Platforms, Inc. engages in the development of social media applications. It builds technology that helps people connect and share, find communities, and grow businesses. It operates through the Family of Apps (FoA) and Reality Labs (RL) segments. The FoA segment consists of Facebook, Instagram, Messenger, WhatsApp, and other services.The RL segment includes augmented, mixed and virtual reality related consumer hardware, software, and content. The company was founded by Mark Elliot Zuckerberg, Dustin Moskovitz, Chris R. Hughes, Andrew McCollum, and Eduardo P. Saverin on February 4, 2004, and is headquartered in Menlo Park, CA. The listed name for META is Meta Platforms, Inc. Class A Common Stock.</p>
      </div>
      <Row gutter={[40, 40]} className=''>
        {COMPANY_PROFILE_MOCK_DATA.map((companyProfile, index) => (
          <CompanyProfileSectionCard mockData={companyProfile} key={index} />
        ))}
      </Row>
    </article>
  )
}

export default CompanyProfileSectionCards;