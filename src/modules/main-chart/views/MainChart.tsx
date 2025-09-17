"use client"
import { useState } from 'react'
import { Area } from '@ant-design/plots';
import { CircleAddIcon, RingNotificationIcon } from '@/assets/svgs'
import { Button, Card, Col, Flex, IconButton } from '@/components'
import { PercentageIndicator } from '@/shared'
import { MAIN_CHART_FILTERS, MAIN_CHART_MOCK_ARRAY_TYPE, MAIN_CHART_MOCK_DATA } from '../mocks/main-chart';
import { Row } from 'antd';

function MainChart() {

    const [selectedFilter, setSelectedFilter] = useState('1D');

    const initialData = MAIN_CHART_MOCK_DATA[selectedFilter];

    const MAIN_CHART_CONFIG = {
        data: initialData,
        xField: 'time',
        yField: 'price',
        smooth: "smooth",
        height: 200,
        autoFit: true,
        interaction: {
            tooltip: {
                marker: true,
                customContent: (_: void, items: MAIN_CHART_MOCK_ARRAY_TYPE[]) => {
                    if (items && items.length > 0) {
                        const item = items[0];
                        // Tried custom tooltip here ...
                        return (
                            <div className="bg-white px-4 py-3 rounded-md shadow-lg min-w-[100px] border-0">
                                <div className="text-lg font-semibold text-gray-500 mb-1 leading-tight">
                                    ${item.price}
                                </div>
                                <div className="text-sm text-gray-500 leading-tight">
                                    ${item.time}
                                </div>
                            </div>
                        );
                    }
                    return null;
                },
            },
        },
        style: {
            fill: 'linear-gradient(180deg, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.05) 100%)',
        },
        line: {
            shape: 'smooth',
            style: {
                stroke: '#22c55e',
                lineWidth: 2,
            },
        },
        point: {
            size: 4,
            style: {
                stroke: '#22c55e',
                fill: '#fff',
                lineWidth: 2,
            },
        },
        axis: {
            x: {
                line: false,
                tick: false,
                label: {
                    style: {
                        fontSize: 12,
                        fill: '#8c8c8c',
                    },
                },
            },
            y: {
                line: false,
                tick: false,
                label: false,
                grid: false,
            },
        },
    };

    return (
        <section className='mt-8'>
            <Card>
                <Flex align='flex-start' justify='space-between'>
                    <Flex vertical align='flex-start' gap={4}>
                        <h2 className='text-xl'>LAB</h2>
                        <p>Standard BioTools Inc.</p>
                        <h1 className='text-4xl font-opensauce-bold'>$19,381.00</h1>
                        <Flex>
                            <PercentageIndicator percentage='17.22%' />
                            <Flex gap={4}>
                                <span className='text-grey-600'>+$10.18</span>
                                <span className='bg-grey-500 size-1 rounded-full shrink-0' />
                                <span className='text-grey-600'>Today</span>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex className='max-sm:!flex-col'>
                        <IconButton bordered renderIcon={CircleAddIcon} alt="Circle Add Icon" />
                        <IconButton bordered renderIcon={RingNotificationIcon} alt="Ring Notifixation Icon" />
                    </Flex>

                </Flex>
                <Flex justify='space-around' className='bg-grey-300 h-9  rounded-full !p-6 hidden !mt-12 max-sm:!p-0 max-sm:overflow-x-scroll'>
                    {MAIN_CHART_FILTERS.map((period) => (
                        <Button
                            className='!border-2 !border-transparent hover:!border-green-100 hover:!text-green-100'
                            key={period}
                            onClick={() => setSelectedFilter(period)}
                            style={{
                                flex: 1,
                                fontWeight: 500,
                                padding: '16px',
                                borderRadius: '30px',
                                backgroundColor: selectedFilter === period ? '#FFFFFF' : "transparent",
                                borderColor: selectedFilter === period ? '#2EB200' : "transparent",
                                color: selectedFilter === period ? '#2EB200' : '#667085',
                            }}
                        >
                            <h2>{period}</h2>
                        </Button>
                    ))}
                </Flex>

                <Area {...MAIN_CHART_CONFIG} />

            </Card>
            <Row gutter={[10, 10]} className='mt-8'>
                <Col span={12}>
                    <Card>
                        <p>Today&apos;s Range</p>
                        <h2 className="text-xl">$1.06 - $1.28</h2>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <p>Volume</p>
                        <h2 className="text-xl">2.1M</h2>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default MainChart