import Image from "next/image"
import MainImage from './../../../assets/img/AboutMain.png'
import MainImage2 from './../../../assets/img/AboutMain2.png'
import ArrowImage from './../../../assets/img/mainSectionArrow.png'
import ArrowImage2 from './../../../assets/img/aboutMainArrow.png'
import BgImg1 from './../../../assets/img/hero_img1.png'
import BgImg2 from './../../../assets/img/AboutBg-img.png'
import BgDesign from "@/components/BgDesign"


const MainSection = () => {
    return (
        <div>
            <div>
                <Image className="absolute" alt="img" src={BgImg1} />
                <Image className="xl:block hidden absolute right-0 z-[-1]" alt="img" src={BgImg2} />
            </div>
            <div className="container mx-auto sm:pt-[76px] pt-[66px] sm:pb-[126px] pb-[72.62px] lg:flex grid sm:justify-between justify-center items-center sm:px-5 px-4">
                <div className='relative lg:order-1 order-2'>
                    <div className='mb-[21px] flex'>
                        <BgDesign />
                    </div>
                    <h1 className='sm:text-left text-center sm:text-[44px] text-2xl Inter_500 xl:w-[667px] lg:w-[470px] w-auto sm:mb-6 mb-3 sm:leading-[56px] leading-[32px]'>At
                        <span className='ml-2 Inter_700'>Fairdeal,</span> your
                        <span className='ml-2 Inter_700 inline-block w-fit relative'>brand📢
                            <div className='bg-TextBox rounded-full absolute w-[186px] h-5 left-[-3px] bottom-0 z-[-1] sm:block hidden'></div>
                        </span> takes center stage
                    </h1>
                    <p className='sm:text-left text-center sm:text-base text-sm'>Seamless transformation of businesses in the offline market.</p>
                    <Image className='absolute right-[82px] xl:bottom-[-132px] bottom-[-185px] lg:block hidden' alt='img' src={ArrowImage2} />
                </div>
                <div className='relative lg:order-2 order-1 lg:mb-0 sm:mb-16 mb-0'>
                    <div className='sm:block hidden'>
                        <Image className='lg:mx-0 mx-auto' alt="img" src={MainImage} />
                        <div className="sm:border-2 border-[1.2px] border-secondary sm:w-[94px] w-[56.59px] sm:h-[94px] h-[56.59px] bg-white rounded-full flex justify-center items-center shadow-xl shadow-[#0000001a] absolute bottom-[-26px] lg:left-[-35px] md:left-[107px] left-[41px]">
                            <div className="text-center">
                                <h1 className="Inter_700 text-secondary sm:text-2xl text-[14.45px]">15k +</h1>
                                <p className="Inter_500 sm:text-base text-[9.63px]">Retailers</p>
                            </div>
                        </div>
                        <div className="sm:border-2 border-[1.2px] border-secondary sm:w-[84px] w-[56.59px] sm:h-[84px] h-[56.59px] bg-white rounded-full flex justify-center items-center shadow-xl shadow-[#0000001a] absolute top-[24px] lg:right-[26px] md:right-[168px] right-[104px]">
                            <div className="text-center">
                                <h1 className="Inter_700 text-secondary sm:text-2xl text-[14.45px]">20+</h1>
                                <p className="Inter_500 sm:text-base text-[9.63px]">Brands</p>
                            </div>
                        </div>
                    </div>
                    <div className='sm:hidden block'>
                        <Image className=' mx-auto' alt='img' src={MainImage2} />
                    </div>
                    <Image className='absolute left-[42px] bottom-[-95px] z-[-1] lg:block hidden' alt='img' src={ArrowImage} />
                </div>
            </div>

        </div>
    )
}
export default MainSection