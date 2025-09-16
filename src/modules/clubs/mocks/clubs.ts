import { CLUBS_MOCK_DATA_TYPE } from "../interfaces/clubs-interfaces";
import SavannahNguyen from "@/assets/images/savannah-nguyen.png"
import { CommentIcon, ForwardIcon, HeartIcon } from '@/assets/svgs';
import { UpBentArrowIcon } from "@/shared/";



export const CLUB_MOCK_DATA: CLUBS_MOCK_DATA_TYPE[] = [
    {
        clubMemberImage: SavannahNguyen,
        clubMemberAlt: "Savannah Nguyen's Image",
        clubMemberName: "Savannah Nguyen",
        clubMemberUsername: "@techtrader99",
        clubMemberLastActive: "2h",
        clubMemberPost: "Bitcoin is facing a tough resistance level. The recent regulatory news could have a big impact. What’s your take?",
        clubMemberTags: [
            {
                name: "$TSLA",
                className: "!border-dark-700 !text-grey-600"
            },
            {
                name: "Bullish",
                className: "!border-green-100 !text-green-100",
                element: UpBentArrowIcon
            }
        ],
        clubMemberImpressionCount: [
            {
                name: "Comment",
                count:  67,
                icon: CommentIcon
            },
            {
                name: "Heart",
                count:  234,
                icon: HeartIcon
            },
            {
                name: "Forward",
                count:  67,
                icon: ForwardIcon
            }
        ]
    }
]