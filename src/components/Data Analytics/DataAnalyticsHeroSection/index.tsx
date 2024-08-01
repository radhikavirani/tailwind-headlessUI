import Image from "next/image"
import BgImg1 from './../../../assets/img/hero_img1.png'
import BgImg2 from './../../../assets/img/AboutBg-img.png'
import MainImage from './../../../assets/img/DataAnalyticsImage1.png'
import MainImage2 from './../../../assets/img/DataAnalyticsImage2.png'
import ArrowImage from './../../../assets/img/mainSectionArrow.png'
import BgDesign from "@/components/BgDesign"

const HeroSection = () => {
    return (
        <div>
            <div>
                <Image className="absolute" alt="img" src={BgImg1} />
                <Image className="xl:block hidden absolute right-0 z-[-1]" alt="img" src={BgImg2} />
            </div>
            <div className="container mx-auto sm:pt-[76px] pt-[85px] sm:pb-[145px] pb-[102.62px] lg:flex grid lg:justify-between justify-center items-center sm:px-5 px-4">
                <div className='relative lg:order-1 order-2'>
                    <div className='sm:mb-[21px] mb-1 sm:mt-0 mt-[45px] flex sm:ml-0 ml-2'>
                       <BgDesign/>
                    </div>
                    <h1 className='sm:text-left text-center sm:text-[44px] text-2xl Inter_500 xl:w-[667px] lg:w-[470px] w-auto sm:mb-6 mb-3 sm:leading-[56px] leading-[32px]'>Data analytics Lorem ipsum <br /> dolor sit amet,
                    </h1>
                    <p className='sm:w-[585px] w-auto sm:px-0 px-[13px] sm:text-left text-center sm:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='relative lg:order-2 order-1 lg:mb-0 sm:mb-16 mb-0'>
                    <div className='sm:block hidden'>
                        <Image className='lg:mx-0 mx-auto' alt="img" src={MainImage} />
                    </div>
                    <div className='sm:hidden block'>
                        <Image className='mx-auto' alt='img' src={MainImage2} />
                    </div>
                    <Image className='absolute left-[100px] bottom-[-95px] z-[-1] lg:block hidden' alt='img' src={ArrowImage} />
                    <div className="sm:h-[51px] h-[30px] sm:w-[51px] w-[30px] rounded-full bg-primary absolute sm:right-0 right-2 sm:bottom-[-50px] bottom-[-35px]"></div>
                    <div className="sm:h-[239px] h-[110px] sm:w-[239px] w-[110px] border border-secondary rounded-full flex justify-center items-center absolute sm:top-[-55px] top-[-20px] lg:left-[-55px] sm:left-[-20px] left-0 z-[-1]">
                        <div className="sm:h-[190px] h-[87px] sm:w-[190px] w-[87px] rounded-full bg-secondary"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection