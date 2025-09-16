import { DxyIcon, NdqIcon, SpxIcon, VixIcon } from "@/assets/svgs";
import { INDICES_MOCK_DATA_TYPE } from "../interfaces/indices-interfaces";

export const INDICES_MOCK_DATA: INDICES_MOCK_DATA_TYPE[] = [
    {
        icon: SpxIcon,
        name: "SPX",
        description: "S&P 500 Index",
        price: "$4,365.99",
        percentage: "0.10%",
        increase: true
    },
    {
        icon: NdqIcon,
        name: "NDQ",
        description: "Nasdaq 100",
        price: "$15,154.93",
        percentage: "0.10%",
        increase: false
    },
    {
        icon: SpxIcon,
        name: "SPX",
        description: "S&P 500 Index",
        price: "$4,365.99",
        percentage: "0.10%",
        increase: true
    },
    {
        icon: VixIcon,
        name: "VIX",
        description: "Volatility S&P 500",
        price: "$14.89",
        percentage: "0.10%",
        increase: false
    },
    {
        icon: DxyIcon,
        name: "DXY",
        description: "U.S. Dollar Currency",
        price: "$105.341",
        percentage: "0.10%",
        increase: true
    },
    {
        icon: VixIcon,
        name: "VIX",
        description: "Volatility S&P 500",
        price: "$14.89",
        percentage: "0.10%",
        increase: false
    }
]