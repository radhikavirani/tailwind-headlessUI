import Image from "next/image"
import GrowImage from './../../../assets/img/Grow-img.png'
import GrowImage2 from './../../../assets/img/Grow-img2.png'
import Arrow from './../../../assets/img/arrow.svg'

const BuildGrow = () => {
    return (
        <div className="FormBgGradient px-4">
            <div className="container mx-auto">
                <div className="xl:mx-[53px] mx-0">

                    <div className="sm:flex block justify-between max-[400px]:h-[245px]">
                        <div className='sm:mb-[91px] mb-0 xl:ml-[35px] ml-0 lg:w-auto sm:w-[65%] w-auto'>
                            <div className="sm:pt-[27px] pt-8 sm:pb-[73px] pb-11 flex items-center">
                                <div className="sm:w-[51px] w-[34px] sm:h-[15px] h-2.5 rounded-full bg-[#D9D9D9] mr-1"></div>
                                <div className="sm:w-[15px] w-2.5 sm:h-[15px] h-2.5 rounded-full border border-[#D9D9D9] mr-[8px]"></div>
                                <div className="sm:w-[51px] w-[34px] sm:h-[15px] h-2.5 rounded-full bg-[#D9D9D9] mr-1"></div>
                                <div className="sm:w-[15px] w-2.5 sm:h-[15px] h-2.5 rounded-full border border-[#D9D9D9] mr-[8px]"></div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <h1 className="flex items-baseline lg:text-[64px] sm:text-5xl text-2xl Inter_700 sm:leading-[56px] leading-[29.05px] text-TextGreay">Build
                                    <span className="sm:h-3 sm:w-3 h-1.5 w-1.5 rounded-full bg-[#D9D9D9] block sm:mx-2 mx-1"></span>Operate
                                    <span className="sm:h-3 sm:w-3 h-1.5 w-1.5 rounded-full bg-[#D9D9D9] block sm:mx-2 mx-1"></span>Grow
                                </h1>
                                <Image className='relative z-10 sm:h-auto sm:w-auto h-[32px] w-[32px]' alt='img' src={Arrow} />
                            </div>
                            <p className="text-TextGreay lg:w-[610px] w-auto sm:mt-[21px] text-base text-sm mt-2 min-[401px]:mb-12 mb-0">We craft your initial identity, streamline your operations, and ignite your brand's potential for sustained growth, fostering a roadmap to long-term success.</p>
                        </div>
                        <Image className='relative xl:left-[-29px] left-0  h-fit sm:block hidden' alt='img' src={GrowImage} />
                        <div className="relative top-[-204px] flex justify-end">
                            <Image className='h-fit max-[400px]:block hidden' alt='img' src={GrowImage2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BuildGrow