"use client"
import { ArrowRightIcon } from "@/assets/svgs";
import { Button, Flex, IconImageRender } from "@/components";
import CompanyProfileSection from "@/modules/company-profile/views/CompanyProfileSection";
import HoldingsSection from "@/modules/holdings/views/HoldingsSection";
import MainChart from "@/modules/main-chart/views/MainChart";
import NewsSection from "@/modules/news/views/NewsSection";
import RelatedStocksSection from "@/modules/related-stocks/views/RelatedStocksSection";
import StatsSection from "@/modules/statistics/views/StatsSection";
import TradingInterface from "@/modules/trading-interface/views/TradingInterface";
import { SectionHeader, SectionSpacer } from "@/shared";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";

export default function FixedIncome() {
  const router = useRouter();
  return (
    <main className='max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <Button onClick={() => router.back()} className="hover:!bg-white-50 rounded-full" style={{ padding: "20px", paddingLeft: 0, marginLeft: "-8px", borderRadius: "20px" }}>
        <Flex gap={8}>
          <div className='rotate-180'>
            <IconImageRender
              renderIcon={ArrowRightIcon}
              width={30}
              alt='Arrow Left Icon'
            />
          </div>
          <h2 className="text-dark-700 text-2xl">Back</h2>
        </Flex>
      </Button>
      <Row>
        <Col xs={24} lg={14}>
          <aside>
            <SectionSpacer>

              <MainChart />
            </SectionSpacer>
            <SectionSpacer>
              <SectionHeader title="My Holding" underlined />
              <HoldingsSection />
            </SectionSpacer>
            <SectionSpacer>
              <SectionHeader title="Company Profile" underlined />
              <CompanyProfileSection />
            </SectionSpacer>
            <SectionSpacer>
              <SectionHeader title="Statistics" underlined />
              <StatsSection />
            </SectionSpacer>
            <SectionSpacer>
              <SectionHeader title="Related Stocks" underlined />
              <RelatedStocksSection />
            </SectionSpacer>
            <SectionSpacer>
              <SectionHeader title="News" underlined />
              <NewsSection />
            </SectionSpacer>
          </aside>
        </Col>
        <Col xs={24} lg={{ span: 8, offset: 2}}>
          <aside>
            <TradingInterface />
          </aside>
        </Col>
      </Row>
    </main>
  );
}
