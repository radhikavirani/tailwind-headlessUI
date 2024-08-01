import Image from "next/image"
import RetailersImage from './../../../assets/img/RetailersImage.png'
import CheckMark from './../../../assets/img/check-mark.png'

const Benefits = [
    { Pointe: '3-5% increase in margins for retailers' },
    { Pointe: '90% above fill rates ensuring no stock-outs' },
    { Pointe: 'Disciplines retails engagement (D+1 Delivery, flexible order taking)' },
    { Pointe: 'Single point of contact for multiple brands' },
    { Pointe: 'No pilferage no schemes' },
    { Pointe: 'SKU curation for high offtakes' },
]

const Retailers = () => {
    return (
        <div className="container mx-auto pb-[100px] sm:px-5 px-4">
            <div className="grid lg:grid-cols-2 xl:gap-[82px] lg:gap-[34px] gap-[32px] items-center">
                <div className="flex 2xl:justify-center lg:jusify-left justify-center lg:order-1 order-2">
                    <Image alt="img" src={RetailersImage} />
                </div>
                <div className="lg:pl-[37px] lg:order-2 order-1">
                    <h1 className='Inter_700 xl:text-[44px] sm:text-[38px] text-2xl inline-block w-fit relative mb-6'>Benefits for retailers
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
            </div>
        </div>
    )
}
export default Retailers