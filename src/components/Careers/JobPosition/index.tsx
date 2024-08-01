import Image from "next/image"
import { IoLocationSharp } from "react-icons/io5";
import { ArrowRightIcon } from "@heroicons/react/16/solid"
import Icon from './../../../assets/img/JobPosition.png'
import { Button } from "@headlessui/react";

const Job_position = [
    {
        Title: 'Sales Manager',
        City: 'New Delhi',
        Year: '4-5 Years experience',
        Position: '1 Position',
        Button: 'Sales',
        BtnText: <a href="/careers/sales-manager">Apply</a>
    },
    {
        Title: 'Frontend Developer',
        City: 'Gurugram',
        Year: '2-3 Years experience',
        Position: '2 Position',
        Button: 'Tech',
        BtnText: <a href="/careers/frontend-developer">Apply</a>
    },
    {
        Title: 'Junior Graphic Designer',
        City: 'Gurugram',
        Year: '0-1 Years experience',
        Position: '1 Position',
        Button: 'Tech',
        BtnText: <a href="/careers/graphic-design">Apply</a>
    },
    {
        Title: 'Frontend Developer',
        City: 'Gurugram',
        Year: '2-3 Years experience',
        Position: '2 Position',
        Button: 'Tech',
        BtnText: <a href="/careers/frontend-developer">Apply</a>
    }
]

const JobPosition = () => {
    return (
        <div className="container mx-auto">
            <span className="Inter_300 italic ml-6 text-greay sm:text-lg text-sm">12 Jobs available</span>
            <div className="flex flex-col sm:gap-8 gap-4 sm:mt-3 mt-4">
                {Job_position.map((Info) =>
                    <div className="sm:px-5 px-3 sm:pt-5 pt-4 sm:pb-3.5 pb-7 border border-[#20222F]/10 rounded-16 sm:mx-6 mx-4 sm:flex block items-center justify-between shadow shadow-black/5">
                        <div className="md:flex block items-start gap-4">
                            <div className="max-w-[72px] max-h-[72px] min-w-[72px] min-h-[72px] bg-[#F3F3F3] rounded-full flex justify-center items-center sm:mb-0 mb-2">
                                <Image alt="img" src={Icon} />
                            </div>
                            <div>
                                <h1 className="Inter_600 sm:text-xl text-base sm:mb-3 mb-1.5">{Info.Title}</h1>
                                <div className="flex items-center sm:mb-4 mb-3">
                                    <div className="flex items-center sm:gap-2.5 gap-1">
                                        <IoLocationSharp className="text-[#FD003A] sm:h-6 h-4 sm:w-6 w-4 cursor-pointer" />
                                        <span className="Inter_500 sm:text-sm text-xs">{Info.City}</span>
                                    </div>
                                    <span className="sm:px-4 px-1 text-[#20222F]/10 sm:text-2xl text-sm">|</span>
                                    <span className="Inter_500 sm:text-sm text-xs">{Info.Year}</span>
                                    <span className="sm:px-4 px-1 text-[#20222F]/10 sm:text-2xl text-sm">|</span>
                                    <span className="Inter_500 sm:text-sm text-xs">{Info.Position}</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Button className="Inter_500 sm:text-base text-xs sm:py-2 py-1.5 sm:px-5 px-3.5 rounded-full bg-[#D57028]/20 border border-[#D57028]/20">{Info.Button}</Button>
                                    <Button className="Inter_500 sm:text-base text-xs sm:py-2 py-1.5 sm:px-5 px-3.5 rounded-full bg-[#D57028]/20 border border-[#D57028]/20">Full Time</Button>
                                </div>
                            </div>
                        </div>
                        <Button className="Inter_500 sm:mt-0 mt-5 md:py-3 py-2.5 md:px-[38.5px] md:px-0 px-[18px] rounded-full bg-primary md:text-base text-sm text-white border hover:border-black hover:text-black hover:bg-white flex gap-2">{Info.BtnText}<ArrowRightIcon className="h-6 w-6" /></Button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default JobPosition