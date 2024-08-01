import Image from "next/image"
import BgImage1 from './../../../assets/img/FairdealBg.png'
import BgImage2 from './../../../assets/img/FairdealBg2.png'
import Icon1 from './../../../assets/img/ServicesIcon1.png'
import Icon2 from './../../../assets/img/ServicesIcon2.png'
import Icon3 from './../../../assets/img/ServicesIcon3.png'
import Icon4 from './../../../assets/img/ServicesIcon4.png'
import Icon5 from './../../../assets/img/ServicesIcon5.png'

const CardData = [
    { Icon: Icon1, Title: <>Unified tech<br/>platform</> },
    { Icon: Icon2, Title: <>Direct relation<br/>with brands</> },
    { Icon: Icon3, Title: <>Best in-class<br/>on group ops</> },
    { Icon: Icon4, Title: <>Data<br/>analytics</> },
    { Icon: Icon5, Title: <>Geo-tagging the<br/>retail network</> },
]

const Fairdeal = () => {
    return (
        <div className="bg-BgBlue relative">
            <div className="container mx-auto sm:py-[143px] pt-[147px] pb-[100px] sm:px-5 px-4 relative z-10">
                <div className="sm:mb-14 mb-6">
                    <div className='sm:mb-[15px] mb-1 flex sm:justify-center justify-left'>
                        
                    </div>
                    <h1 className='relative text-TextGreay sm:mx-auto sm:text-center text-left sm:text-[44px] text-2xl Inter_500 xl:w-[667px] lg:w-[470px] w-auto sm:mb-6 mb-3 sm:leading-[56px] leading-[32px]'>Fairdeal’s expertise
                        <div className="sm:hidden block bg-TextBox rounded-full absolute w-[163px] h-3 bottom-0 left-[-5px]"></div>
                    </h1>
                    <p className='text-TextGreay sm:mx-auto lg:w-[890px] w-auto sm:text-center text-left sm:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="flex flex-wrap justify-center sm:gap-9 gap-4">
                    {CardData.map((Card) =>
                        <div className="bg-TextGreay/10 rounded-16 sm:pt-8 sm:pb-[33px] py-4 sm:w-[204px] w-[156px]">
                            <div className="flex flex-col items-center sm:gap-6 gap-3">
                                <div className="sm:h-[108px] h-[56px] sm:w-[108px] w-[56px] rounded-full border-2 border-white/10 bg-IconBg flex items-center justify-center">
                                    <Image className="sm:h-[revert-layer] h-8 sm:w-[revert-layer] w-8" alt="img" src={Card.Icon} />
                                </div>
                                <span className="Inter_600 sm:text-xl text-base text-center text-TextGreay">{Card.Title}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Image className="absolute bottom-0 xl:block hidden" alt="img" src={BgImage1} />
            <Image className="absolute top-10 sm:hidden block" alt="img" src={BgImage2} />
        </div>
    )
}
export default Fairdeal