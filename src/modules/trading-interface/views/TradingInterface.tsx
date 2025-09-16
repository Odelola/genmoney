"use client"
import { useState } from 'react'
import { Button, Card, Flex, IconImageRender, PrimaryButton } from '@/components'
import { Segmented, Select } from 'antd';
import { PercentageIndicator } from '@/shared';
import { ChevronBottomIcon, ChevronRightIcon } from '@/assets/svgs';

function TradingInterface() {
    const [activeTab, setActiveTab] = useState('Buy');
    const [orderType, setOrderType] = useState('Market order');
    const [validUntil, setValidUntil] = useState('');

    const commonDivStyle = "p-6 border-b border-b-white-400";

    return (
        <Card className="[&>.ant-card-body]:!p-0" style={{ padding: "0 !important", }}>
            <div className={commonDivStyle}>
                <Segmented
                    className='w-full [&>label]:!hidden'
                    style={{
                        border: "0 !important",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                    value={activeTab}
                    onChange={setActiveTab}
                    options={[
                        {
                            label: "Buy",
                            value: 'Buy'
                        },
                        {
                            label: 'Sell',
                            value: 'Sell'
                        }
                    ]}
                />

            </div>

            <div className={commonDivStyle}>
                <Flex justify='space-between'>
                    <div>
                        <h3 style={{ margin: '0 0 4px 0', fontSize: '24px', fontWeight: 600 }}>
                            LAB
                        </h3>
                        <p style={{ color: '#6c757d', fontSize: '14px' }}>
                            Standard BioTools Inc.
                        </p>
                    </div>
                    <Flex vertical align='flex-end' gap={4}>
                        <h1 className='font-opensauce-bold'>
                            $19,381.46
                        </h1>
                        <PercentageIndicator percentage='17.22%' />
                    </Flex>
                </Flex>
            </div>

            <Flex vertical className={commonDivStyle + " !py-8"}>
                <Flex gap={6} className='!bg-white-600  !p-1 !pl-3 !rounded-full'
                >
                    <div>
                        <h2>Dollars</h2>
                    </div>
                    <Button
                        shape="circle"
                        style={{
                            backgroundColor: 'white',
                            border: '1px solid #dee2e6',
                            color: '#6f42c1',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}
                    >
                        $
                    </Button>
                </Flex>

                <h1 className='text-5xl font-opensauce-regular text-grey-200'>
                    $0.00
                </h1>

                <Flex gap={8}>
                    <p style={{ color: '#6c757d', fontSize: '14px' }}>
                        Buying Power: $10,520.00
                    </p>
                    <IconImageRender renderIcon={ChevronRightIcon} alt='Chevron Right Icon' />
                </Flex>
            </Flex>

            <div className={commonDivStyle}>
                <Flex justify='space-between' style={{ marginBottom: "16px" }}>
                    <p className='text-grey-600'>Order Type</p>
                    <Select
                        style={{
                            width: "150px"
                        }}
                        suffixIcon={<IconImageRender renderIcon={ChevronBottomIcon} alt="Chevron Right Icon" />}
                        value={orderType}
                        onChange={setOrderType}
                        options={[
                            { value: 'Market order', label: 'Market order' },
                            { value: 'Limit order', label: 'Limit order' },
                            { value: 'Stop order', label: 'Stop order' }
                        ]}
                    />
                </Flex>

                <Flex justify='space-between'>
                    <p className='text-grey-600'>Valid until</p>
                    <Select
                        style={{
                            width: "150px"
                        }}
                        suffixIcon={<IconImageRender renderIcon={ChevronBottomIcon} alt="Chevron Right Icon" />}
                        value={validUntil}
                        onChange={setValidUntil}
                        options={[
                            { value: 'October', label: 'October' },
                            { value: 'November', label: 'Novemober' },
                            { value: 'December', label: 'Decemober' }
                        ]}
                    />
                </Flex>

            </div>
            <div className={commonDivStyle}>

                <PrimaryButton className='ant-btn-reset-disabled'>
                    Review Buy Order
                </PrimaryButton>
            </div >
        </Card>
    );
};

export default TradingInterface;