import { StaticImageData } from "next/image"

export interface CATEGORIES_MOCK_DATA_TYPE {
    image: StaticImageData,
    category: string,
    description: string
}

export interface CategoriesSectionCardProps {
    mockData: CATEGORIES_MOCK_DATA_TYPE,
}