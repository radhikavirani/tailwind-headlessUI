import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/16/solid"
import { ArrowDownCircleIcon, PlayCircleIcon } from "@heroicons/react/24/outline"
import BgImg1 from './../../../assets/img/hero_img1.png'
import BgImg2 from './../../../assets/img/hero_img2.png'
import HeroGraphic from './../../../assets/img/heroGraphic.png'
import { Button } from "@headlessui/react"

const HeroSection = () => {
    return (
        <div>
            <div>
                <Image className="absolute z-[-1]" alt="img" src={BgImg1} />
                <Image className="xl:block hidden absolute right-0 z-[-1]" alt="img" src={BgImg2} />
            </div>
            <div className="container mx-auto sm:pt-[62px] pt-[66px] lg:pb-0 pb-[55.62px]">
                <div className="grid lg:grid-cols-2 lg:gap-0 gap-10 items-center lg:justify-items-end justify-items-center">
                    <div className="lg:text-left text-center lg:order-1 order-2 sm:px-5 px-[22px]">
                        <div className="sm:text-[44px] text-[24px] sm:mb-6 mb-3">
                            <h1 className="Inter_500">Unlock 🔓 the Power of Offline Commerce With Our <span className="Inter_700">All-In-One Retail Solution</span></h1>
                        </div>
                        <p className="sm:mx-0 mx-5 text-base text-sm">Seamlessly sell your products direct to Offline Retailers.</p>
                        <div className="flex flex-wrap lg:justify-start justify-center sm:mt-4 mt-6 gap-2.5 relative z-[1]">
                            <Button className="Inter_500 py-3.5 px-6 rounded-[30px] bg-primary text-white border hover:border-black hover:text-black hover:bg-white flex gap-2">Let’s Connect <ArrowRightIcon className="h-6 w-6" /></Button>
                            <Button className="Inter_500 py-3.5 px-6 rounded-[30px] text-black hover:text-white hover:bg-primary flex gap-2"><PlayCircleIcon className="h-6 w-6" />Know More</Button>
                        </div>
                    </div>
                    <div className="lg:order-2 order-1 sm:px-5 px-7">
                        <Image alt="img" src={HeroGraphic} />
                    </div>
                </div>
                <div className="lg:flex hidden justify-center lg:pb-[100px] lg:pt-[31px] py-12">
                    <Button className="flex text-greay gap-1.5 Inter_500">Scroll Down<ArrowDownCircleIcon className="h-6 w-6" /></Button>
                </div>
            </div>
        </div>
    )
}
export default HeroSection