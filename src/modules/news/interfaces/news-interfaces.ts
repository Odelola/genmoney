import { StaticImageData } from "next/image";

export interface NEWS_MOCK_DATA_TYPE {
    image: StaticImageData;
    headline: string;
    time: string;
    extraTag: string
}

export interface NewsSectionCardProps {
    mockData: NEWS_MOCK_DATA_TYPE,
    key: string | number
}