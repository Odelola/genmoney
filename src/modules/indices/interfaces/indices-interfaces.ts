export interface INDICES_MOCK_DATA_TYPE {
    icon: string,
    name: string,
    description: string,
    price: string,
    percentage: string,
    increase: boolean
}

export interface IndicesSectionCardProps {
    mockData: INDICES_MOCK_DATA_TYPE,
}