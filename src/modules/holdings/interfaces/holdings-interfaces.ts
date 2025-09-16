
export interface HOLDINGS_MOCK_DATA_TYPE {
    title: string;
    value: string;
    percentage?: string | undefined
    increase?: boolean | undefined
}

export interface HoldingsSectionCardProps {
    mockData: HOLDINGS_MOCK_DATA_TYPE,
}