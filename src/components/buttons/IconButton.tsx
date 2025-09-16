import { Button } from "../ui/button";
import { IconImageRender, IconImageRenderProps } from "../icons/IconImageRender";
import { ButtonProps } from "antd";

interface IconButtonProps extends ButtonProps, IconImageRenderProps{
    bordered?: boolean
}

export function IconButton({ className = "", bordered = false, renderIcon, alt, width, ...props }: IconButtonProps) {
    return (
        <Button className={`!size-10 !rounded-full !p-0 hover:!bg-white-50 ${bordered  ? "!border !border-white-400" : ""} ${className.trim()}`} {...props}>
            <IconImageRender renderIcon={renderIcon} alt={alt} width={width} />
        </Button>
    )
}