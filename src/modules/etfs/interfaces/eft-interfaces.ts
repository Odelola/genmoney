export interface ETFS_MOCK_DATA_TYPE {
    name: string,
    description: string,
    price: string,
    percentage: string,
    increase: boolean
}

export interface EtfSectionCardProps {
    mockData: ETFS_MOCK_DATA_TYPE,
}