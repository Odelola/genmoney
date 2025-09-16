"use client";
import { ArrowRightIcon } from '@/assets/svgs'
import { IconButton, Flex } from '@/components'
import { Modal } from 'antd';
import { useState } from 'react';

interface SectionHeaderProps {
    title: string;
    withIcon?: boolean
    underlined?: boolean
}

function SectionHeader({ title, withIcon = true, underlined = false }: SectionHeaderProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Flex justify='space-between' className={`${underlined ? "!border-b !border-b-white-100 !py-6" : ""}`}>
                <h1 className='!text-3xl max-md:!text-2xl'>{title}</h1>
                {withIcon && (
                        <IconButton
                            onClick={showModal}
                            renderIcon={ArrowRightIcon}
                            width={30}
                            alt='Arrow Right Icon'
                        />
                )
                }
            </Flex>
            <Modal
                title={title}
                closable={{ 'aria-label': `${title} Button'` }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>{title}</p>
                <p>{title}</p>
                <p>{title}</p>
                <p>{title}</p>
                <p>{title}</p>
            </Modal>
        </>
    )
}

export default SectionHeader;