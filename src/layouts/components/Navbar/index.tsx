"use client";
import { useState } from "react";
import { Avatar, Flex, IconButton, SearchInput } from "@/components"
import { HEADER_LINKS } from '@/layouts/mocks/LayoutMock'
import Link from 'next/link'
import BrandLogo from "@public/brand-logo.svg"
import ProfileImage from "@/assets/images/Profile.png"
import { NotificationIcon } from "@/assets/svgs";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const pathName = usePathname();
    return (
        <nav className="relative border-b border-b-white-100">
            {/* <div className="mx-auto max-w-3xl w-full flex justify-between gap-x-8 p-4 sm:px-6 lg:px-8"> */}
            <div className="mx-auto max-w-3xl w-full flex justify-between xl:py-4 p-4">
                <Flex gap={48}>
                    <div className="logo">
                        <Link href="/">
                            <Image
                                src={BrandLogo}
                                width={200}
                                alt='GenMoney Logo'
                                className="w-32 sm:w-48 lg:w-[200px]"
                            />
                        </Link>
                    </div>
                    <div className='hidden xl:flex gap-x-6'>
                        {HEADER_LINKS.map((linkItem, index) => {
                            const isActive = pathName.toLowerCase().startsWith(linkItem.link);
                            const isActiveForHome = pathName === "/" && index == 0;
                            return (
                                <Link
                                    className={`font-opensauc-medium rounded-[64px] p-4
                                        hover:!text-primary hover:!bg-white-50
                                        ${isActive || isActiveForHome ? "!text-primary !bg-white-50 " : "!text-grey-600 bg-transparent"}`}
                                    href={linkItem.link}
                                    key={linkItem.link}>
                                    {linkItem.title}
                                </Link>
                            )
                        })}
                    </div>
                </Flex>
                <div className="hidden lg:flex">
                    <SearchInput />
                </div>

                <Flex gap={64}>
                    <Flex gap={16} className="max-md:!hidden">
                        <IconButton
                            renderIcon={NotificationIcon}
                            width={25}
                            alt='Notification Icon'
                        />
                        <Avatar
                            src={ProfileImage.src}
                            size="large"
                            alt='Profile Image'
                        />
                    </Flex>
                </Flex>

                <button
                    className="md:hidden flex flex-col justify-center items-start w-8 h-8"
                    onClick={toggleMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`w-5 h-0.5 rounded-md bg-grey-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`w-4 h-0.5 rounded-md bg-grey-600 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-5 h-0.5 rounded-md bg-grey-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-white-100 shadow-lg z-50">
                        <div className="p-4 space-y-4">
                            <div className="lg:hidden flex justify-center">
                                <SearchInput />
                            </div>

                            <div className="flex flex-col space-y-2">
                                {HEADER_LINKS.map((linkItem, index) => {
                                    const isActive = pathName.toLowerCase().startsWith(linkItem.link);
                                    const isActiveForHome = pathName === "/" && index == 0;
                                    return (
                                        <Link
                                            className={`font-opensauc-medium rounded-[64px] p-4 text-center
                                            hover:!text-primary hover:!bg-white-50
                                            ${isActive || isActiveForHome ? "!text-primary !bg-white-50 " : "!text-grey-600 bg-transparent"}`}
                                            href={linkItem.link}
                                            key={linkItem.link}
                                            onClick={() => setIsMenuOpen(false)}>
                                            {linkItem.title}
                                        </Link>
                                    )
                                })}
                            </div>

                            <div className="md:hidden flex items-center justify-center gap-4 pt-4 border-t border-white-100">
                                <IconButton
                                    renderIcon={NotificationIcon}
                                    width={25}
                                    alt='Notification Icon'
                                />
                                <Avatar
                                    src={ProfileImage.src}
                                    size="large"
                                    alt='Profile Image'
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar