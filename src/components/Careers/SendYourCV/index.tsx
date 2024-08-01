import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/16/solid"
import BgImage1 from './../../../assets/img/CareersBgImage1.png'
import BgImage2 from './../../../assets/img/CareersBgImage2.png'
import { Button } from "@headlessui/react"

const SendYourCV = () => {
    return (
        <div className="relative">
            <div className="container mx-auto sm:pt-[72px] pt-12 sm:pb-[120px] pb-[100px] sm:px-5 px-4">
                <div className='sm:mb-[15px] mb-1 flex justify-center'>
                    <div className='sm:w-[51px] w-[30.6px] sm:h-[15px] h-[9px] rounded-full bg-primary mr-1.5'></div>
                    <div className='sm:w-[15px] w-[9px] sm:h-[15px] h-[9px] rounded-full bg-secondary'></div>
                </div>
                <h1 className='text-center sm:text-[40px] text-2xl Inter_700 lg:w-[587px] w-auto sm:mb-6 mb-3 sm:leading-[48.41px] leading-[32px] mx-auto'>Can’t find what you’re looking for?</h1>
                <p className='lg:w-[890px] w-auto sm:mb-10 mb-6 mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Button className="mx-auto Inter_500 px-6 py-3.5 rounded-full bg-primary sm:text-base text-sm text-white border hover:border-black hover:text-black hover:bg-white flex gap-2">Send your CV<ArrowRightIcon className="h-6 w-6" /></Button>
            </div>
            <Image className="absolute bottom-[79px] z-[-1] sm:block hidden" alt="img" src={BgImage1} />
            <Image className="absolute bottom-[79px] z-[-1] sm:block hidden right-0" alt="img" src={BgImage2} />
        </div>
    )
}
export default SendYourCV