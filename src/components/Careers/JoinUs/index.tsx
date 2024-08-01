"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import BgImage from './../../../assets/img/Careers.png'
import BgImage2 from './../../../assets/img/Careers2.png'
import { Field, Input, Menu, MenuButton, MenuItems, Transition } from '@headlessui/react'
import BgDesign from "@/components/BgDesign"

const MegaMenu = [
    { Title: 'Department' },
    { Title: 'Location' },
    { Title: 'Job Type' },
]

const Dropdown = [
    { Title: 'Department' },
    { Title: 'Location' },
    { Title: 'Job Type' },
]

const JoinUs = () => {
    const [open, setOpenmenu] = useState(false)
    console.log(open, 'open')
    return (
        <div className="mb-[176px] relative">
            <div className="relative lg:flex block items-center">
                <div className='lg:absolute relative lg:ml-[100px] lg:mt-0 mt-[113px] mb-0 mb-11 sm:px-5 px-4'>
                    <div className='sm:mb-[21px] mb-1 sm:mt-0 mt-[45px] flex lg:justify-start justify-center sm:ml-0 ml-5'>
                        <BgDesign/>
                    </div>
                    <h1 className='lg:text-left text-center sm:text-[44px] text-2xl Inter_700 w-auto sm:mb-6 mb-3 sm:leading-[56px] leading-[32px]'>Join us & be a part of the <br /> #Fairdeal.Market
                    </h1>
                    <p className='sm:w-[585px] w-auto lg:px-0 px-[13px] mx-auto lg:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <Image className="w-full sm:block hidden" alt="img" src={BgImage} />
                <Image className="w-full sm:hidden block" alt="img" src={BgImage2} />
            </div>
            <div className="flex justify-center">
                <div className="sm:p-6 py-5 px-3 rounded-16 shadow-md shadow-black/5 bg-[#F3F3F3] absolute lg:bottom-[-51px] sm:bottom-[-87px] bottom-[-158px] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-5 gap-4 mx-10 sm:w-auto w-[90%]">
                    <Field className="relative">
                        <div className="absolute inset-y-0 left-5 flex items-center">
                            <MagnifyingGlassIcon className="w-6 h-6" />
                        </div>
                        <Input
                            type="search"
                            placeholder="Search here..."
                            required
                            className="block w-full py-4 ps-[56px] pr-2 text-sm text-greay placeholder:text-greay rounded-lg border border-black/10 bg-white/50 focus-visible:outline-none"
                        />
                    </Field>
                    {Dropdown.map((MainMenu) =>
                        <Menu as="div" className="relative inline-block text-left">
                            <MenuButton className="w-full px-5 sm:py-4 py-3 rounded-lg bg-white text-sm text-[#1D1D1D] flex justify-between">
                                <a href="">{MainMenu.Title}</a>
                                <ChevronDownIcon
                                    className="h-5 w-5"
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
                                    className="absolute w-full z-50 bg-white text-black border mt-2"
                                >
                                    {MegaMenu.map((menu) =>
                                        <MenuItems className="p-4 cursor-pointer">{menu.Title}</MenuItems>
                                    )}
                                </MenuItems>
                            </Transition>
                        </Menu>
                    )}
                </div>
            </div>
        </div>
    )
}
export default JoinUs