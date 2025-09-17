"use client"
import { AppleIcon, CircleAddIcon, HimsIcon, MetaIcon, NvidiaIcon, RingNotificationIcon, VerticalEllipsesIcon } from "@/assets/svgs";
import { Card, Flex, IconButton, IconImageRender } from "@/components";
import { Dropdown, MenuProps, Table } from "antd";
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
      symbol: <ImageWrapper renderIcon={MetaIcon} alt="Meta Icon" company="META" />,
      name: 'Meta Inc.',
      price: "$157.07",
      change: <PercentageIndicator />,
      icons: <TableActionIcons />,
    },
    {
      key: '3',
      symbol: <ImageWrapper renderIcon={NvidiaIcon} alt="NVDA Icon" company="NVDA" />,
      name: 'Nvidia Corp',
      price: "$157.07",
      change: <PercentageIndicator />,
      icons: <TableActionIcons />,
    },
    {
      key: '4',
      symbol: <ImageWrapper renderIcon={HimsIcon} alt="HIMS Icon" company="HIMS" />,
      name: 'His & Hers Health',
      price: "$157.07",
      change: <PercentageIndicator />,
      icons: <TableActionIcons />,
    },
  ];

  const COMPANY_NAMES: string[] = ["AAPL", "META", "NVDA", "HIMS"];

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Flex>
          <IconButton renderIcon={CircleAddIcon} alt="Circle Add Icon" />
          <p className='text-md text-grey-500'>Add to watchlist</p>
        </Flex>
      ),
    },
    {
      key: '2',
      label: (
        <Flex>
          <IconButton renderIcon={RingNotificationIcon} alt="Ring Notification Icon" />
          <p className='text-md text-grey-500'>Set Alert</p>
        </Flex>
      ),
    },
  ]

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
            <Card variant="borderless" className="!shadow-none ant-card-shrunk" key={index} >
              <Flex justify="space-between">
                <Flex align="flex-start" vertical>
                  <h1 className='text-xl'>{COMPANY_NAMES[index] || "Company"}</h1>
                  <p className='text-md text-grey-500'>{item.name}</p>
                </Flex>
                <Flex justify="flex-end" className="!flex-1">
                  <Flex align="flex-end" vertical>
                    <h1 className='text-xl'>{item.price}</h1>
                    <PercentageIndicator />
                  </Flex>
                  <Dropdown menu={{ items }} trigger={['click']}>
                    <IconImageRender renderIcon={VerticalEllipsesIcon} alt="Vertical Ellipses Icon" />
                  </Dropdown>
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