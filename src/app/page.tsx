
import CategoriesSection from '@/modules/categories/views/CategoriesSection';
import ClubsSection from '@/modules/clubs/views/ClubsSection';
import EtfsSection from '@/modules/etfs/views/EtfsSection';
import IndicesSection from '@/modules/indices/views/IndicesSection';
import NewsSection from '@/modules/news/views/NewsSection';
import StocksSection from '@/modules/stocks/views/StocksSection';
import { SectionSpacer, SectionHeader } from '@/shared';
import { Col, Row } from 'antd';

export default function Home() {
  return (
    <main className='max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <Row>
        <Col xs={24} lg={14}>
          <aside>
            <SectionSpacer>
              <SectionHeader title='Stocks' />
              <StocksSection />
            </SectionSpacer>
            <SectionSpacer>
              <SectionHeader title='ETFs' />
              <EtfsSection />
            </SectionSpacer>
            <SectionSpacer>
              <SectionHeader title='Indices' withIcon={false} />
              <IndicesSection />
            </SectionSpacer>
          </aside>
        </Col>
        <Col xs={24} lg={{span: 8, offset: 2}}>
          <aside>
            <SectionSpacer>
              <SectionHeader title='Categories' />
              <CategoriesSection />
            </SectionSpacer>
            <SectionSpacer>
              <SectionHeader title='Club' />
              <ClubsSection />
            </SectionSpacer>
            <SectionSpacer>
              <SectionHeader title='News' />
              <NewsSection />
            </SectionSpacer>
          </aside>
        </Col>
      </Row>
    </main>
  );
}
