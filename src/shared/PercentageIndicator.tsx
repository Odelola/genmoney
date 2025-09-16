import { DecreaseChevronUpIcon, IncreaseChevronUpIcon } from "@/assets/svgs";
import { IconImageRender } from "@/components";
import { Flex } from "antd";

export interface PercentageIndicatorProps {
    increase?: boolean;
    percentage?: string;
}

function PercentageIndicator({ increase = true, percentage = "0.10%" }: PercentageIndicatorProps) {
    return (
        <Flex gap={4}>
            <IconImageRender renderIcon={increase ? IncreaseChevronUpIcon : DecreaseChevronUpIcon} alt={`${increase ? "Increase" : "Decrease"} Icon`} />
            <strong className={`${increase ? "text-green-100" : "text-red-100"}`}>{percentage}</strong>
        </Flex>
    )
}

export default PercentageIndicator