import { ButtonProps } from "antd";

interface PrimaryButtonProps extends ButtonProps {
    disabled?: boolean
}

export function PrimaryButton({ className = "", children }: PrimaryButtonProps) {
    return (
        <button className={`ant-btn-reset ${className.trim()}`}
        >
            {children}
        </button >
    )
}