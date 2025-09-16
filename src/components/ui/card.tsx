import { Card as AntCard, CardProps } from 'antd'

interface CustomCardProps extends CardProps {
    borderColorClass?: string;
}

function Card({ borderColorClass = "border-white-400", className = "", children, ...props }: CustomCardProps) {
    return (
        <AntCard className={"max-md:!rounded-3xl max-sm:[&>.ant-card-body]:!p-4 " + className.trim() + ` !${borderColorClass}`} {...props}>
            {children}
        </AntCard>
    )
}

export { Card };