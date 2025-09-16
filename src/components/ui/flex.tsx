"use client";
import { Flex as AntFlex, FlexProps } from "antd";

function Flex({ align = "center", children, gap = 16, ...props }: FlexProps) {
    return (
        <AntFlex align={align} gap={gap} {...props}>
            {children}
        </AntFlex>
)
}

export { Flex }