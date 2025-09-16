import { ReactNode } from 'react';

interface SectionSpacerProps {
    children: ReactNode
}

function SectionSpacer({ children }: SectionSpacerProps) {
    return (
    <div className='mb-12'>
        {children}
    </div>
    )
}

export default SectionSpacer;