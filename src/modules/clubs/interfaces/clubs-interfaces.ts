import { UpBentArrowIconProps } from "@/shared/UpBentArrowIcon";
import { StaticImageData } from "next/image"

export interface CLUBS_MOCK_DATA_TYPE {
    clubMemberImage: StaticImageData;
    clubMemberAlt: string;
    clubMemberName: string;
    clubMemberUsername: string;
    clubMemberLastActive: string;
    clubMemberPost: string;
    clubMemberTags: MEMBER_TAGS_MOCK_DATA_TYPE[];
    clubMemberImpressionCount: IMPRESSION_COUNT__MOCK_DATA_TYPE[]
}

interface MEMBER_TAGS_MOCK_DATA_TYPE {
    name: string;
    className: string;
    element?: (props: UpBentArrowIconProps) => React.JSX.Element;
}

interface IMPRESSION_COUNT__MOCK_DATA_TYPE {
    name: string;
    count: number;
    icon: string;
}

export interface ClubsSectionCardProps {
    mockData: CLUBS_MOCK_DATA_TYPE,
}

export interface ClubSectionImpressionProps {
    icon: string,
    alt: string,
    count: number
}
