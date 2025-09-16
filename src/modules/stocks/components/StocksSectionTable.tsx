import { AppleIcon, CircleAddIcon, HimsIcon, MetaIcon, NvidiaIcon, RingNotificationIcon } from "@/assets/svgs";
import { Card, Flex, IconButton, IconImageRender } from "@/components";
import { Table } from "antd";
import { STOCK_TABLE_COLUMNS } from "../mocks/stocks";
import { ImageWrapperProps, STOCKS_TABLE_DATA_TYPE } from "../interfaces/stock-interfaces";
import { PercentageIndicator } from "@/shared";

function ImageWrapper({ renderIcon, alt, company }: ImageWrapperProps) {
  return (
    <Flex>
      <Flex className=" max-md:!hidden bg-white-300 size-12 rounded-full" justify="center">
        <IconImageRender renderIcon={renderIcon} alt={alt} />
      </Flex>
      <h2 className="uppercase">{company}</h2>
    </Flex>
  )
}

function TableActionIcons() {
  return (
    <Flex className="max-md:!hidden">
      <IconButton renderIcon={RingNotificationIcon} alt="Ring Notifixation Icon" />
      <IconButton renderIcon={CircleAddIcon} alt="Circle Add Icon" />
    </Flex>
  )
}

function StocksSectionTable() {

  // Could not move this to mock file as it contains jsx element and the mock file is not for JSX elements.
  const STOCKS_TABLE_DATA: STOCKS_TABLE_DATA_TYPE[] = [
    {
      key: '1',
      symbol: <ImageWrapper renderIcon={AppleIcon} alt="Apple Icon" company="AAPL" />,
      name: 'Apple Inc.',
      price: "$157.07",
      change: <PercentageIndicator />,
      icons: <TableActionIcons />,
    },
    {
      key: '2',
      symbol: <ImageWrapper renderIcon={MetaIcon} alt="Apple Icon" company="META" />,
      name: 'Meta Inc.',
      price: "$157.07",
      change: <PercentageIndicator />,
      icons: <TableActionIcons />,
    },
    {
      key: '3',
      symbol: <ImageWrapper renderIcon={NvidiaIcon} alt="Apple Icon" company="NVDA" />,
      name: 'Nvidia Corp',
      price: "$157.07",
      change: <PercentageIndicator />,
      icons: <TableActionIcons />,
    },
    {
      key: '4',
      symbol: <ImageWrapper renderIcon={HimsIcon} alt="Apple Icon" company="HIMS" />,
      name: 'His & Hers Health',
      price: "$157.07",
      change: <PercentageIndicator />,
      icons: <TableActionIcons />,
    },
  ];

  const COMPANY_NAMES: string[] = ["AAPL", "META", "NVDA", "HIMS"];
  return (
    <>
      <Table dataSource={STOCKS_TABLE_DATA} columns={STOCK_TABLE_COLUMNS}
        scroll={{
          x: 400
        }}
        pagination={false}
        className="table-responsive max-md:hidden"
        size="middle"
      />
      <div className="md:hidden">
        {
          STOCKS_TABLE_DATA.map((item, index) => (
            <Card variant="borderless" className="!shadow-none" key={index}>
              <Flex justify="space-between">

                <Flex align="flex-start" vertical>
                  <h1 className='text-xl'>{COMPANY_NAMES[index] || "Company"}</h1>
                  <p className='text-md text-grey-500'>{item.name}</p>

                </Flex>
                <Flex align="flex-end" vertical>
                  <h1 className='text-xl'>{item.price}</h1>
                  <PercentageIndicator />
                </Flex>
              </Flex>

            </Card>
          ))
        }
      </div>

    </>
  )
}

export default StocksSectionTable;