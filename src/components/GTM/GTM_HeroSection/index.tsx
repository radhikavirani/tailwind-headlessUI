import Image from "next/image"
import BgImg1 from './../../../assets/img/hero_img1.png'
import BgImg2 from './../../../assets/img/AboutBg-img.png'
import MainImage from './../../../assets/img/gtmHeroSection.png'
import MainImage2 from './../../../assets/img/gtmHeroSection2.png'
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
                    <div className='sm:mb-[21px] mb-1 sm:mt-0 mt-[45px] flex sm:justify-start justify-center'>
                        <BgDesign/>
                    </div>
                    <h1 className='sm:text-left text-center sm:text-[44px] text-2xl Inter_500 xl:w-[667px] lg:w-[470px] w-auto sm:mb-6 mb-3 sm:leading-[56px] leading-[32px]'>
                        <span>AI based GTM</span><br/> 
                        <span className='Inter_700'>(Go to Market)</span>
                    </h1>
                    <p className='sm:w-[585px] w-auto sm:px-0 px-[13px] sm:text-left text-center sm:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className='relative lg:order-2 order-1 lg:mb-0 sm:mb-16 mb-0'>
                    <div className='sm:block hidden'>
                        <Image className='lg:mx-0 mx-auto' alt="img" src={MainImage} />
                    </div>
                    <div className='sm:hidden block'>
                        <Image className='mx-auto' alt='img' src={MainImage2}/>
                    </div>
                    <Image className='absolute left-[100px] bottom-[-95px] z-[-1] lg:block hidden' alt='img' src={ArrowImage} />
                    <div className="sm:h-[51px] h-[30px] sm:w-[51px] w-[30px] rounded-full bg-primary absolute right-0 sm:bottom-0 bottom-[-30px]"></div>
                    <div className="sm:h-[131px] h-[110px] sm:w-[131px] w-[110px] border border-secondary rounded-full flex justify-center items-center absolute sm:top-[-55px] top-[-35px] lg:left-[-55px] sm:left-[-20px] left-[-16px] z-[-1]">
                        <div className="sm:h-[104px] h-[87px] sm:w-[104px] w-[87px] rounded-full bg-secondary"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HeroSection