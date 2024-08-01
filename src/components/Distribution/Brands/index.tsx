import Image from "next/image"
import BgImage from './../../../assets/img/BrandBg.png'
import BrandImage from './../../../assets/img/BrandImage.png'
import CheckMark from './../../../assets/img/check-mark.png'

const Benefits = [
    { Pointe: 'Efficient distribution network' },
    { Pointe: 'Business intelligence to drive deman centric growth' },
    { Pointe: 'Optimal inventory and return management' },
    { Pointe: 'Stock availability in right geographies' },
    { Pointe: 'Joint business plans (Sales marketing support)' },
    { Pointe: 'Access previously untapped markets' },
]

const Brands = () => {
    return (
        <div className="relative">
            <div className="container mx-auto sm:pt-[103px] pt-20 sm:pb-[100px] pb-10 sm:px-5 px-4">
                <div className="grid lg:grid-cols-2 lg:gap-[82px] gap-[32px] items-center">
                    <div className="lg:pl-[37px]">
                        <h1 className='Inter_700 xl:text-[44px] sm:text-[42px] text-2xl inline-block w-fit relative mb-6'>Benefits for brands
                            <div className='bg-TextBox rounded-full absolute sm:w-[177px] w-[124px] sm:h-5 h-3 sm:bottom-[-10px] sm:bottom-0 bottom-[1px] sm:right-[-15px] sm:left-auto left-0'></div>
                        </h1>
                        <p className="text-greay sm:mb-6 mb-4 sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {Benefits.map((Data) =>
                            <div className="flex gap-3 pb-3 items-center lg:w-[448px] w-auto">
                                <Image className="sm:h-[revert-layer] h-6 sm:w-[revert-layer] w-6" alt="img" src={CheckMark} />
                                <span className="sm:text-lg text-sm Inter_500">{Data.Pointe}</span>
                            </div>
                        )}
                    </div>
                    <div className="flex 2xl:justify-center lg:jusify-left justify-center">
                        <Image alt="img" src={BrandImage} />
                    </div>
                </div>
            </div>
            <Image className="sm:hidden block absolute top-[9px]" alt="img" src={BgImage}/>
        </div>
    )
}
export default Brands