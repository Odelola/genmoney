import React from 'react'

export interface UpBentArrowIconProps {
    color?: string;
    width?: number,
    height?: number
    className?: string;
}

function UpBentArrowIcon({ color, width = 15, height = 15, className = "" }: UpBentArrowIconProps) {
    return (
        <svg width={width} height={height} viewBox={`0 0 10 10`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M9.16665 2.91669L5.88805 6.19528C5.72304 6.36029 5.64054 6.44279 5.5454 6.47371C5.46172 6.5009 5.37157 6.5009 5.28789 6.47371C5.19275 6.44279 5.11025 6.36029 4.94524 6.19528L3.80472 5.05476C3.63971 4.88975 3.55721 4.80725 3.46207 4.77634C3.37839 4.74915 3.28824 4.74915 3.20456 4.77634C3.10942 4.80725 3.02692 4.88975 2.86191 5.05476L0.833313 7.08335M9.16665 2.91669H6.24998M9.16665 2.91669V5.83335" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default UpBentArrowIcon