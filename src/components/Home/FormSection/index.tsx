import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/16/solid"
import GrowImage from './../../../assets/img/Grow-img.png'
import GrowImage2 from './../../../assets/img/Grow-img2.png'
import Arrow from './../../../assets/img/arrow.svg'
import { Button, Input } from "@headlessui/react"

const InputForm = [
    { Title: 'Name' },
    { Title: 'Brand name' },
    { Title: 'Brand website' },
    { Title: 'E-mail id' },
    { Title: 'Phone number' },
]

const FormSection = () => {
    return (
        <div className='sm:pb-[50px] pb-0'>
            <div className="FormBgGradient px-4">
                <div className="container mx-auto">
                    <div className="xl:mx-[53px] mx-0">
                        <div className="pt-[27px] xl:pl-[38px] pl-0 flex items-center">
                            <div className="sm:w-[51px] w-[34px] sm:h-[15px] h-2.5 rounded-full bg-[#D9D9D9] mr-1"></div>
                            <div className="sm:w-[15px] w-2.5 sm:h-[15px] h-2.5 rounded-full border border-[#D9D9D9] mr-[8px]"></div>
                            <div className="sm:w-[51px] w-[34px] sm:h-[15px] h-2.5 rounded-full bg-[#D9D9D9] mr-1"></div>
                            <div className="sm:w-[15px] w-2.5 sm:h-[15px] h-2.5 rounded-full border border-[#D9D9D9] mr-[8px]"></div>
                        </div>
                        <div className="sm:flex block justify-between max-[401px]:h-[165px]">
                            <div className='sm:mt-[73px] mt-[44px] sm:mb-[152px] mb-0 xl:ml-[35px] ml-0 lg:w-auto sm:w-[65%] w-auto'>
                                <div className='flex items-center gap-1'>
                                    <h1 className="flex items-baseline lg:text-[64px] sm:text-5xl text-2xl Inter_700 sm:leading-[56px] leading-[29.05px] text-TextGreay">Build
                                        <span className="sm:h-3 sm:w-3 h-1.5 w-1.5 rounded-full bg-[#D9D9D9] block sm:mx-2 mx-1"></span>Operate
                                        <span className="sm:h-3 sm:w-3 h-1.5 w-1.5 rounded-full bg-[#D9D9D9] block sm:mx-2 mx-1"></span>Grow
                                    </h1>
                                    <Image className='relative z-10 sm:h-auto sm:w-auto h-[32px] w-[32px]' alt='img' src={Arrow} />
                                </div>
                                <p className="text-TextGreay lg:w-[610px] w-auto sm:mt-[21px] text-base text-sm mt-2 min-[401px]:mb-12 mb-0">We craft your initial identity, streamline your operations, and ignite your brand's potential for sustained growth, fostering a roadmap to long-term success.</p>
                            </div>
                            <Image className='relative xl:left-[-29px] left-0 top-[-44px] h-fit sm:block hidden' alt='img' src={GrowImage} />
                            <div className="relative top-[-204px] flex justify-end">
                                <Image className='h-fit max-[400px]:block hidden' alt='img' src={GrowImage2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className='xl:mx-[70px] mx-0 overflow-x-hidden sm:px-[86px] px-4 sm:pt-[52px] pt-[32px] sm:pb-[92px] pb-[54px] rounded-2xl bg-white shadow-2xl shadow-[#00000012] relative sm:top-[-115px] top-0'>
                    <div className='sm:flex block sm:justify-center justify-left'>
                        <p className="Inter_700 sm:text-[32px] text-2xl sm:px-4 pl-[5px]">Get started with us</p>
                        <span className="sm:text-[32px] text-2xl Inter_700 sm:ml-0 ml-1.5 relative w-fit">today
                            <div className='bg-TextBox rounded-full absolute sm:w-[107px] w-[83px] sm:h-5 h-3 top-[18px] left-[-6px]'></div>
                        </span>
                    </div>
                    <form className='sm:mt-[51px] mt-6'>
                        <div className="grid sm:grid-cols-2 gap-x-[30px] sm:gap-y-7 gap-y-4">
                            {InputForm.map((Text) =>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder={Text.Title}
                                    className="w-full sm:text-base text-sm rounded-xl bg-[#F3F3F3] sm:py-[18px] sm:px-4 p-3 placeholder:text-greay sm:placeholder:text-base placeholder:text-sm border border-transparent outline-none focus:border focus:border-primary"
                                />
                            )}
                        </div>
                        <Button className="sm:mt-7 mt-4 Inter_500 sm:py-3.5 sm:px-[49.5px] px-10 py-2.5 rounded-[30px] bg-primary sm:text-base text-sm text-white border hover:border-black hover:text-black hover:bg-white flex gap-2">Submit<ArrowRightIcon className="h-6 w-6" /></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FormSection