
export interface RELATED_STOCKS_MOCK_DATA_TYPE {
    icon: string;
    title: string;
    description: string;
    price: string;
    percentage?: string | undefined
    increase?: boolean | undefined
}

export interface RelatedStocksSectionCardProps {
    mockData: RELATED_STOCKS_MOCK_DATA_TYPE,
}