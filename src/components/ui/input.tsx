"use client"
import { Input as AntInput, InputProps } from "antd";

function Input({ ...props }: InputProps) {
    return (
        <AntInput {...props} />
    )
}

export { Input }