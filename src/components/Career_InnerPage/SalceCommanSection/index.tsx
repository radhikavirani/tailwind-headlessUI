import Image from "next/image"
import { FC } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Icon from './../../../assets/img/JobPosition.png'
import { Button } from "@headlessui/react";

type Props = {
    title: string;
    city: string;
    space: string;
    experience: string;
    button: string;
}

const CommanSection: FC<Props> = ({ title, city, experience, space, button }) => {
    return (
        <>
            <div className="bg-BgBlue">
                <div className="container mx-auto sm:py-[74px] pt-[72px] pb-20 lg:px-[50px] sm:px-5 px-4 md:flex block items-center justify-between">
                    <div className="lg:flex block items-start gap-5 md:mb-0 mb-6">
                        <div className="md:mx-0 mx-auto max-w-[72px] max-h-[72px] min-w-[72px] min-h-[72px] bg-[#F3F3F3] border-2 border-white/20 rounded-full flex justify-center items-center lg:mb-0 sm:mb-5 mb-3">
                            <Image alt="img" src={Icon} />
                        </div>
                        <div>
                            <h1 className="Inter_600 text-TextGreay sm:text-[32px] text-2xl sm:mb-3.5 mb-1.5 sm:leading-[38.73px] leading-[32px] md:text-left text-center">{title}</h1>
                            <div className="text-TextGreay flex items-center md:justify-start justify-center sm:mb-5 mb-2.5">
                                <h1 className="Inter_500 sm:text-xl text-sm">{city}</h1>
                                <span className="sm:px-4 px-1.5 text-white/40 sm:text-2xl text-sm">|</span>
                                <h1 className="Inter_500 sm:text-xl text-sm">{experience}</h1>
                                <span className="sm:px-4 px-1.5 text-white/40 sm:text-2xl text-sm">|</span>
                                <h1 className="Inter_500 sm:text-xl text-sm">{space}</h1>
                            </div>
                            <div className="flex items-center md:justify-start justify-center gap-2.5">
                                <Button className="Inter_500 text-TextGreay sm:text-base text-xs py-2 px-5 rounded-full bg-white/20 border border-white/20">{button}</Button>
                                <Button className="Inter_500 text-TextGreay sm:text-base text-xs py-2 px-5 rounded-full bg-white/20 border border-white/20">Full Time</Button>
                            </div>
                        </div>
                    </div>
                    <Button className="md:mx-0 mx-auto Inter_500 sm:py-3.5 py-2.5 sm:px-[66px] px-12 rounded-full bg-primary md:text-base text-sm text-white border border-primary hover:border-white hover:text-white hover:bg-transparent flex gap-2">Apply<ArrowRightIcon className="h-6 w-6" /></Button>
                </div>
            </div>
        </>
    )
}
export default CommanSection