import Image from "next/image"
import Logo1 from './../../../assets/img/InvestorLogo1.png'
import Logo2 from './../../../assets/img/InvestorLogo2.png'
import Logo3 from './../../../assets/img/InvestorLogo3.png'
import Logo4 from './../../../assets/img/InvestorLogo4.png'
import Logo5 from './../../../assets/img/InvestorLogo5.png'
import BgImage from './../../../assets/img/InvestorsBg.png'

const InvestorLogo = [
    { Image: Logo1 },
    { Image: Logo2 },
    { Image: Logo3 },
    { Image: Logo4 },
    { Image: Logo5 },
]

const OurInvestors = () => {
    return (
        <div className="bg-white relative">
            <div className="container mx-auto sm:pt-[100px] pt-[60px] sm:pb-[154.42px] pb-[60.83px] sm:px-5 px-4">
                <div className="flex sm:justify-center justify-left sm:mb-[94.58px] mb-11">
                    <span className='Inter_700 sm:text-[44px] text-2xl inline-block w-fit relative'>Our Investors
                        <div className='bg-TextBox rounded-full absolute sm:w-[218px] w-[125px] sm:h-5 h-3 sm:bottom-[-9px] sm:bottom-0 bottom-[1px] sm:right-[-11px] right-[-9px]'></div>
                    </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-[28.21px] gap-y-7 sm:mx-auto mx-[52px]">
                    {InvestorLogo.map((Logo) =>
                        <Image alt="img" src={Logo.Image} />
                    )}
                </div>
            </div>
            <Image className="absolute top-0 sm:block hidden" alt="img" src={BgImage} />
        </div>
    )
}
export default OurInvestors