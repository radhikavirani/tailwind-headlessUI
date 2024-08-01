import Image from "next/image"
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import Working from './../../../assets/img/working.png'
import ArrowImage from './../../../assets/img/workSection.png'
import BgImage from './../../../assets/img/WorkBg.png'
import { Button } from "@headlessui/react"

const Data = [
    { Title: 'Retail Penetration', TitleTwo: 'Retail Penetration', BtnText: 'Step 2' },
    { Title: 'Outlet Servicing', TitleTwo: 'Outlet Servicing', BtnText: 'Step 3' },
    { Title: 'Wider consumer reach', TitleTwo: 'Wider consumer reach', BtnText: 'Step 4' }
]

const WorkSection = () => {
    return (
        <div className="container mx-auto sm:pb-[90px] pb-[30px] sm:pt-[84.46px] pt-10">
            <div className="flex sm:justify-center justify-left sm:px-5 px-4">
                <h1 className='Inter_700 sm:text-[44px] text-2xl relative w-fit'>How its work ?
                    <div className='sm:w-[150px] w-[82px] sm:h-5 h-3 bg-TextBox rounded-full absolute right-0 sm:top-[19px] top-[17px] z-[-1]'></div>
                </h1>
            </div>
            <div className='grid lg:grid-cols-2 lg:gap-[74.47px] gap-0 items-center sm:px-5 px-4 relative'>
                <div className="sm:pt-11 pt-0">
                    <details className="group transition duration-250" open>
                        <summary className="ListStyleHidden">
                            <div className="block group-open:hidden transition duration-250 cursor-pointer list-none sm:p-6 px-3 py-4 text-lg font-medium text-greay group-open:text-TextGreay group-open:bg-BgBlue group-open:rounded-t-[20px]">
                                <div className="flex items-center justify-between">
                                    <p className="sm:text-[28px] text-lg Inter_500">Go to market (GTM)</p>
                                    <ArrowRightIcon className="h-5 w-5" />
                                </div>
                            </div>
                            <div className="hidden group-open:block cursor-pointer list-none sm:px-6 px-4 sm:pt-6 pt-4 pb-[18px] text-lg font-medium text-greay group-open:text-TextGreay group-open:bg-BgBlue group-open:rounded-t-[20px]">
                                <div className="flex items-center justify-between">
                                    <Button className="border border-[#d5702880] bg-[#d570281a] text-secondary py-1.5 px-4 rounded-full sm:text-sm text-xs Inter_500">Step 1</Button>
                                    <ArrowDownIcon className="h-5 w-5" />
                                </div>
                            </div>
                        </summary>
                        <div className="bg-BgBlue rounded-b-[20px] px-6 pb-6 text-TextGreay">
                            <h1 className="sm:text-[28px] sm:mb-3 mb-0 text-lg Inter_600">Go to market (GTM)</h1>
                            <p className="xl:w-[502px] sm:text-base text-sm w-auto">We leverage our industry expertise to craft tailored go-to-market strategies for your products, ensuring they shine on the shelves of offline retail stores.</p>
                        </div>
                    </details>
                    {Data.map((Text) =>
                        <details className="group">
                            <summary className="ListStyleHidden">
                                <div className="block group-open:hidden cursor-pointer list-none sm:px-6 sm:pb-6 px-3 pb-4 text-lg font-medium text-greay group-open:text-TextGreay group-open:bg-BgBlue group-open:rounded-t-[20px]">
                                    <div className="flex items-center justify-between">
                                        <p className="sm:text-[28px] text-lg Inter_500">{Text.Title}</p>
                                        <ArrowRightIcon className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="hidden group-open:block cursor-pointer list-none sm:px-6 px-4 sm:pt-6 pt-4 pb-[18px] text-lg font-medium text-greay group-open:text-TextGreay group-open:bg-BgBlue group-open:rounded-t-[20px]">
                                    <div className="flex items-center justify-between">
                                        <Button className="border border-[#d5702880] bg-[#d570281a] text-secondary py-1.5 px-4 rounded-full text-sm Inter_500">{Text.BtnText}</Button>
                                        <ArrowDownIcon className="h-5 w-5" />
                                    </div>
                                </div>
                            </summary>
                            <div className="bg-BgBlue rounded-b-[20px] px-6 pb-6 text-TextGreay">
                                <h1 className="sm:text-[28px] sm:mb-3 mb-0 text-lg Inter_600">{Text.TitleTwo}</h1>
                                <p className="xl:w-[502px] sm:text-base text-sm w-auto">We leverage our industry expertise to craft tailored go-to-market strategies for your products, ensuring they shine on the shelves of offline retail stores.</p>
                            </div>
                        </details>
                    )}
                    <Image className="absolute rotate-[-10deg] left-[-100px] top-[-80px] z-[-1] lg:block hidden" alt="img" src={BgImage} />
                </div>
                <div className='mt-[235.54px] mb-[46.45px] relative lg:flex justify-end hidden'>
                    <Image alt='img' src={Working} />
                    <Image className='absolute top-[-135px] left-[-148px] rotate-[2.1deg] z-[-1]' alt='img' src={ArrowImage} />
                </div>
            </div>
        </div>
    )
}
export default WorkSection