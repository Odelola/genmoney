import Image from 'next/image';

export interface IconImageRenderProps {
    priority?: boolean;
    renderIcon: string;
    width?: number;
    alt: string;
}
export function IconImageRender({ priority = false, renderIcon, width, alt }: IconImageRenderProps) {
    return (
        <Image
            priority={priority}
            src={renderIcon}
            width={width}
            alt={alt}
        />
    )
}
