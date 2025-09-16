import { Col } from '@/components';
import { CompanyProfileSectionCardProps } from '../interfaces/company-profile-interfaces';

function CompanyProfileSectionCard({ mockData: { title, value } }: CompanyProfileSectionCardProps) {
  return (
    <Col xs={24} sm={12} md={12} lg={8}>
        <p className='text-md text-grey-600'>{title}</p>
        <h1 className='text-lg font-opensauce-bold mt-2'>{value}</h1>
    </Col>
  )
}

export default CompanyProfileSectionCard;