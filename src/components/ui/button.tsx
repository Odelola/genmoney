"use client"
import { Button as AntButton, ButtonProps } from 'antd'

function Button({ children,  ...props }: ButtonProps) {
    return (
        <AntButton {...props}>
            {children}
        </AntButton>
    )
}

export { Button };