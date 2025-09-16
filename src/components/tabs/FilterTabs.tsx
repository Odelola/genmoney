"use client"
import { Flex } from '../ui/flex';
import { Segmented, Space } from 'antd';
import type { CheckboxOptionType } from 'antd/es/checkbox';
import { useState } from 'react';
import { UpBentArrowIcon } from '@/shared';
import LittleChartIcon from '@/shared/LittleChartIcon';

interface FilterTabsProps {
    options: (string | number | CheckboxOptionType<unknown>)[] | undefined,
    defaultValue: string
}

function FilterTabs({ options, defaultValue }: FilterTabsProps) {
    const [activeTab, setActiveTab] = useState('Gainers');
    return (
        <Space className='my-8'>
            <Segmented
                className='w-full [&>label]:!hidden ant-segmented-group-filter max-sm:!overflow-x-scroll'
                style={{
                    border: "0 !important",
                    display: "flex",
                    justifyContent: "space-between"
                }}
                value={activeTab}
                onChange={setActiveTab}
                options={[
                    {
                        label: (
                            <Flex>
                                <UpBentArrowIcon />
                                <h2>Gainers</h2>
                            </Flex>

                        ),
                        value: 'Gainers'
                    },
                    {
                        label: (
                            <Flex>
                                <UpBentArrowIcon className='-rotate-180 -scale-x-100' />
                                <h2>Losers</h2>
                            </Flex>

                        ),
                        value: 'Losers'
                    },
                    {
                        label: (
                            <Flex gap={6}>
                                <LittleChartIcon />
                                <h2>Most Traded</h2>
                            </Flex>

                        ),
                        value: 'Most Traded'
                    }
                ]}
            />
        </Space>
    )
}

export { FilterTabs }