import { Col as AntCol, ColProps } from 'antd'
import { ReactNode } from 'react';

interface CustomColProps extends ColProps {
    children?: ReactNode;
    md?: number;
    xs?: number;
    lg?: number;
}

function Col({ md = 12, xs = 24, lg = 8, children, ...props }: CustomColProps) {
    return (
        <AntCol xs={xs} md={md} lg={lg} {...props}>
            {children}
        </AntCol>
    )
}

export { Col }