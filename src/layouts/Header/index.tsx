"use client"
import Image from "next/image"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SlArrowUp } from "react-icons/sl";
import { Button, Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import Logo from './../../assets/img/logo.svg'

const FirstNavItems = [
    { href: "/", menu: "Home" },
    { href: "/about-us", menu: "About" }
];
const DropMenu = [
    { href: "/services/retail-network", menu: "AI Based GTM" },
    { href: "/services/distribution", menu: "Distribution" },
    { href: "/services/data-analytics", menu: "Data analytics" }
]
const LastNavItems = [
    { href: "/careers", menu: "Careers" },
    { href: "/contact-us", menu: "Contact" }
]
const SidebarMenu = [
    { Title: <a className="Inter_700" href="/">Home</a> },
    { Title: <a className="Inter_700" href="/distribution">Service</a> },
    { Title: <a className="Inter_700" href="/about-us">About Us</a> },
    { Title: <a className="Inter_700" href="/data-analytics">Service</a> }
]

const Header = () => {
    const pathname = usePathname();
    const [showSidebar, setShowSidebar] = useState(true);
    const [visible, setVisible] = useState(false)
    const [isSticky, setIsSticky] = useState(false);
    // side bar...
    useEffect(() => {
        if (showSidebar) {
            document.body.classList.remove('no-scroll');
        } else {
            document.body.classList.add('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showSidebar]);
    
    // scroll btn...
    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const scrollPosition = window.scrollY;
            setIsSticky(scrollPosition > 1);
        }
    };
    useEffect(() => {
        if (typeof window !== "undefined")
            window.addEventListener("scroll", handleScroll);

        return () => {
            if (typeof window !== "undefined")
                window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true);
        } else if (scrolled <= 200) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        if (typeof window !== "undefined")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    };
    if (typeof window !== "undefined")
        window.addEventListener("scroll", toggleVisible);

    return (
        <div className={`bg-white top-0 z-[100] sticky ${isSticky ? "shadow-xl" : ""}`}>
            <div className="container mx-auto flex items-center justify-between sm:px-5 px-4">
                <div className="sm:py-5 py-2.5 cursor-pointer">
                    <Image className="sm:w-[232px] w-[164px] sm:h-[48px] h-[34px]" alt="img" src={Logo} />
                </div>
                <div className="lg:flex hidden items-center xl:gap-[30px] gap-5">
                    <nav className="flex items-center xl:gap-8 gap-4 relative">
                        {FirstNavItems.map(({ href, menu }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`${isActive ? "text-primary" : "text-black"}`}
                                >
                                    {menu}
                                </Link>
                            );
                        })}
                        <Menu as="div" className="inline-block text-left">
                            <MenuButton className="flex items-center gap-1 text-black py-3">
                                Services
                                <ChevronDownIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </MenuButton>
                            <Transition
                                enter="transition ease-out duration-75"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <MenuItems
                                    anchor="bottom start"
                                    className="grid shadow-2xl rounded-2xl w-[256px] z-[100]"
                                >
                                    {DropMenu.map(({ href, menu }) => {
                                        const isActive = pathname === href;
                                        return (
                                            <Link
                                                key={href}
                                                href={href}
                                                className={`cursor-pointer p-4 ${isActive ? "text-white bg-primary " : "bg-white text-black"}`}
                                            >
                                                {menu}
                                            </Link>
                                        );
                                    })}
                                </MenuItems>
                            </Transition>
                        </Menu>
                        {LastNavItems.map(({ href, menu }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`${isActive ? "text-primary" : "text-black"}`}
                                >
                                    {menu}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="flex gap-4">
                        <Button className="border border-black h-[47px] w-[155px] rounded-[30px] hover:border-primary hover:bg-primary hover:text-white">Buy on Fair Deal</Button>
                        <Button className="h-[47px] w-[155px] rounded-[30px] bg-primary text-white border hover:border-black hover:text-black hover:bg-inherit">Sell On Fair Deal</Button>
                    </div>
                </div>
                <div className='lg:hidden block' onClick={() => setShowSidebar(false)}>
                    <Bars3Icon className='h-6 w-6' />
                </div>
            </div>
            <div className={`h-screen w-screen bg-white/5 backdrop-blur-sm fixed top-0 z-[100] ${showSidebar ? "right-[-100%]" : "right-0"}`}>
                <div className={`bg-primary h-full sm:w-fit w-full p-4 fixed top-0 z-[100] shadow-xl shadow-black/40 transition-all duration-500 ${showSidebar ? "right-[-100%]" : "right-0"}`}>
                    <div className='flex justify-end mb-10' onClick={() => setShowSidebar(true)}>
                        <XMarkIcon className='h-6 w-6' />
                    </div>
                    {SidebarMenu.map((MainMenu) =>
                        <div>
                            <p className='Inter_700 text-TextGreay text-2xl'>{MainMenu.Title}</p>
                            <div className='h-[1px] w-100% bg-[#f9f9f966] my-4'></div>
                        </div>
                    )}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button className="h-[43px] w-[155px] border border-white text-white rounded-[30px] hover:bg-white hover:text-black">Buy on Fair Deal</Button>
                        <Button className="h-[43px] w-[155px] rounded-[30px] bg-white text-black border hover:border-white hover:text-white hover:bg-inherit">Sell On Fair Deal</Button>
                    </div>
                </div>
            </div>

            {/* scroll btn */}
            <div className="fixed bottom-[15px] right-[15px] z-[11]">
                <Button onClick={scrollToTop} className="border border-primary bg-primary h-[48px] w-[48px] flex justify-center items-center rounded hover:bg-inherit text-white hover:text-primary" style={{ display: visible ? "" : "none" }}><SlArrowUp /></Button>
            </div>
        </div>
    )
}
export default Header