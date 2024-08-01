import Image from "next/image"
import BgImage from './../../../assets/img/MapBg.png'
import Map from './../../../assets/img/Map.svg'

const GrowText = [
    { Number: '7+', Title: 'Cities 🏙️' },
    { Number: '50k+', Title: 'Retailers 🛍️' },
    { Number: '20+', Title: 'Brands 📢' }
]

const MapSection = () => {
    return (
        <div className=' mb-[124px] relative overflow-hidden'>
            <div className='container mx-auto grid lg:grid-cols-2 items-center'>
                <div className='grid lg:mt-0 mt-[26px]'>
                    <div className='lg:mb-[51px] mb-6'>
                        <h1 className='Inter_700 sm:text-[44px] text-2xl sm:px-5 px-4 relative w-fit'>Grow with FairDeal
                            <div className='bg-TextBox rounded-full absolute sm:w-[201px] w-[108px] sm:h-5 h-3 sm:top-[22px] top-[18px] sm:right-[3px] right-2 z-[-1]'></div>
                        </h1>
                        <p className='text-greay sm:px-5 pl-4 pr-[15px] sm:text-base text-sm lg:w-[458px] w-auto leading-6 sm:mt-[21px] mt-3'>We offer customised strategies, a wide retail network, convenient outlet servicing, and insights based on data to help you succeed. When you choose us, you get expertise, efficiency, flexibility, and a track record of success.</p>
                    </div>
                    <div className='flex sm:gap-[52px] gap-auto sm:justify-normal justify-evenly sm:px-5 px-4'>
                        {GrowText.map((Data) =>
                            <div>
                                <h1 className='TextGradient sm:text-[64px] text-[40px] Inter_700'>{Data.Number}</h1>
                                <p className='sm:text-2xl text-base'>{Data.Title}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='mt-[29px] grid lg:justify-end justify-center'>
                    <Image alt='img' src={Map} />
                </div>
            </div>
            <Image className='w-full lg:max-h-[666px] h-full absolute z-[-1] top-0 opacity-50' alt="img" src={BgImage} />
        </div>
    )
}
export default MapSection