import { LcidIcon, NioIcon, RivnIcon, XpevIcon } from "@/assets/svgs";
import { RELATED_STOCKS_MOCK_DATA_TYPE } from "../interfaces/related-stocks";


export const HOLDINGS_MOCK_DATA: RELATED_STOCKS_MOCK_DATA_TYPE[] = [
    {
        icon: RivnIcon,
        title: "RIVN",
        description: "Rivian Automotive",
        price: "$203.95",
        percentage: "2.34%",
        increase: true
    },
    {
        icon: LcidIcon,
        title: "LCID",
        description: "Lucid Group",
        price: "$203.95",
        percentage: "1.87%",
        increase: false
    },
    {
        icon: NioIcon,
        title: "NIO",
        description: "Nio Inc.",
        price: "$697.01",
        percentage: "3.21%",
        increase: false
    },
    {
        icon: XpevIcon,
        title: "XPEV",
        description: "Xpeng Inc.",
        price: "$697.01",
        percentage: "4.56%",
        increase: true
    },
]