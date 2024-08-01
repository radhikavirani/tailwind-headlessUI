import Image from "next/image"
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import Icon1 from '@/assets/img/dollar.png'
import Icon2 from '@/assets/img/building.png'
import Icon3 from '@/assets/img/box.png'
import CardBg from '@/assets/img/cardbg.png'
import { Button } from "@headlessui/react"

const CardSection = () => {
    return (
        <div className='bg-white'>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 lg:gap-[39px] gap-0 sm:px-5 px-4">
                    <div className='sm:pt-[42px] pt-4 sm:pb-[38px] pb-8'>
                        <div className='relative'>
                            <div className='lg:pt-[244px] sm:pt-[170px] pt-[70px] lg:pb-[124px] pb-0'>
                                <div className='mb-6'>
                                    <h1 className='Inter_700 sm:text-[44px] text-2xl relative w-fit'>Why FairDeal ?
                                        <div className='bg-TextBox rounded-full absolute sm:w-[222px] w-[124px] sm:h-5 h-3 sm:top-[21px] top-[17px] right-[-2px]'></div>
                                    </h1>
                                </div>
                                <p className='mb-6 text-greay xl:w-[570px] sm:text-base text-sm'>At Fairdeal. market, we understand the distinctive challenges businesses encounter when expanding into offline markets. Our passion lies in simplifying this journey, offering a friendly and supportive solution to ensure your success.</p>
                                <Button className="Inter_500 py-[14.5px] rounded-[30px] sm:text-base text-sm text-black flex gap-1.5">Learn More<ArrowRightIcon className="h-6 w-6" /></Button>
                            </div>
                            <div className='absolute sm:left-[-95px] left-[-24px] top-0 sm:w-auto w-[223px]'>
                                <Image alt='img' src={CardBg} />
                            </div>
                        </div>
                    </div>
                    <div className='lg:pt-[162px] pt-0 lg:pb-[114px] pb-10'>
                        <div className="rounded-2xl sm:py-[23px] py-[18px] sm:pl-[18px] sm:pr-4 px-[9px] bg-BgBlue/10 lg:w-fit w-auto sm:mb-6 mb-[18px]">
                            <div className='flex items-center sm:gap-4 gap-2'>
                                <div className="bg-white flex justify-center items-center sm:h-[72px] sm:min-w-[72px] h-[44px] min-w-[44px] rounded-full border-2 border-[#fff3]">
                                    <Image alt='img' src={Icon1} className='sm:h-[45px] h-[27px] sm:w-[45px] w-[27px]' />
                                </div>
                                <div className='sm:w-[332px] w-auto'>
                                    <h1 className='sm:pb-1.5 pb-1.5 sm:text-xl text-sm Inter_600'>Largest Retailers Network</h1>
                                    <p className='sm:text-sm text-xs sm:leading-[22px] leading-[14.4px] text-greay'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                </div>
                            </div>
                        </div>
                        <div className='xl:flex block justify-end'>
                            <div className="rounded-2xl sm:py-[23px] py-[18px] sm:pl-[18px] sm:pr-4 px-[9px] bg-BgBlue lg:w-fit w-auto sm:mb-6 mb-[18px]">
                                <div className='flex items-center sm:gap-4 gap-2'>
                                    <div className="bg-white flex justify-center items-center sm:h-[72px] sm:min-w-[72px] h-[44px] min-w-[44px] rounded-full border-2 border-[#fff3]">
                                        <Image alt='img' src={Icon2} className='sm:h-[45px] h-[27px] sm:w-[45px] w-[27px]' />
                                    </div>
                                    <div className='sm:w-[332px] w-auto text-TextGreay'>
                                        <h1 className='sm:pb-1.5 pb-1.5 sm:text-xl text-sm Inter_600'>Largest Retailers Network</h1>
                                        <p className='sm:text-sm text-xs sm:leading-[22px] leading-[14.4px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl sm:py-[23px] py-[18px] sm:pl-[18px] sm:pr-4 px-[9px] bg-BgBlue/10 lg:w-fit w-auto">
                            <div className='flex items-center sm:gap-4 gap-2'>
                                <div className="bg-white flex justify-center items-center sm:h-[72px] sm:min-w-[72px] h-[44px] min-w-[44px] rounded-full border-2 border-[#fff3]">
                                    <Image alt='img' src={Icon3} className='sm:h-[45px] h-[27px] sm:w-[45px] w-[27px]' />
                                </div>
                                <div className='sm:w-[332px] w-auto'>
                                    <h1 className='sm:pb-1.5 pb-1.5 sm:text-xl text-sm Inter_600'>Storage</h1>
                                    <p className='sm:text-sm text-xs sm:leading-[22px] leading-[14.4px] text-greay'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardSection