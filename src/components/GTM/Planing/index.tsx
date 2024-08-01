import Image from "next/image"
import BgImage from './../../../assets/img/planingBg.png'
import Line from './../../../assets/img/line.png'
import Finger from './../../../assets/img/PlaningFinger.png'
import Icon1 from './../../../assets/img/planing-icon1.png'
import Icon2 from './../../../assets/img/planing-icon2.png'
import Icon3 from './../../../assets/img/planing-icon3.png'
import Icon4 from './../../../assets/img/planing-icon4.png'

const PlaningChart = [
    {
        Icon1: Icon1,
        Title1: 'Business trend analysis',
        Icon2: Icon2,
        Title2: 'Scenario planning'
    },
    {
        Icon1: Icon3,
        Title1: 'Gap analysis',
        Icon2: Icon4,
        Title2: 'Intervention planning & clarity'
    }
]

const MobileScreen = [
    { Icon: Icon1, Title: 'Business trend analysis' },
    { Icon: Icon2, Title: 'Scenario planning' },
    { Icon: Icon3, Title: 'Gap analysis' },
    { Icon: Icon4, Title: 'Intervention planning & clarity' }
]

const Benefits = [
    { Title: 'Plan surgical interventions to drive incremental growth' },
    { Title: 'Improve financial planning & capacity planning' },
    { Title: 'Minimise errors in the supply chain networks' },
    { Title: 'Drive reduction in lost sales and optimise inventory levels' },
]

const Planing = () => {
    return (
        <div>
            <div className="bg-BgBlue relative">
                <div className="container mx-auto pt-[69px] sm:pb-[285px] pb-20 sm:px-5 px-4">
                    <div className="text-TextGreay mb-[42px]">
                        <div className='flex sm:justify-center justify-left mb-1'>
                            <div className='sm:w-[51px] w-[30.6px] sm:h-[15px] h-[9px] rounded-full bg-primary mr-1.5'></div>
                            <div className='sm:w-[15px] w-[9px] sm:h-[15px] h-[9px] rounded-full bg-secondary'></div>
                        </div>
                        <h1 className="relative lg:w-[587px] w-auto sm:text-[44px] text-2xl sm:text-center text-left mx-auto Inter_700 sm:leading-[56px] sm:mb-6 mb-3">GTM Planing
                            <div className="sm:hidden block bg-TextBox rounded-full absolute w-[163px] h-3 bottom-0 left-[-5px]"></div>
                        </h1>
                        <p className="lg:w-[890px] w-auto sm:text-center text-left mx-auto sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="relative">
                        <Image className="absolute lg:left-1/2 sm:left-[62px] left-[29px]" alt="img" src={Line} />
                        {PlaningChart.map((Data) =>
                            <div className="lg:block hidden">
                                <div className="flex items-center justify-end gap-6 py-10 2xl:pr-[234px] pr-[105px]">
                                    <div className="min-h-[124px] min-w-[124px] rounded-full bg-IconBg border-2 border-[#F3F3F3] flex justify-center items-center relative z-0">
                                        <Image alt="img" src={Data.Icon1} />
                                    </div>
                                    <div className="text-TextGreay">
                                        <h1 className="Inter_600 text-xl mb-1.5">{Data.Title1}</h1>
                                        <p className="xl:w-[426px] lg:w-[295px] w-auto">Access to pan India retailers as one stop solution Access to pan India retailers as one stop solutionAccess to pan India retailers as one stop solution</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-start gap-6 2xl:pl-[240px] pl-[113px]">
                                    <div className="text-TextGreay">
                                        <h1 className="Inter_600 text-xl mb-1.5 text-right">{Data.Title2}</h1>
                                        <p className="xl:w-[426px] lg:w-[295px] w-auto text-right">Access to pan India retailers as one stop solution Access to pan India retailers as one stop solutionAccess to pan India retailers as one stop solution</p>
                                    </div>
                                    <div className="min-h-[124px] min-w-[124px] rounded-full bg-IconBg border-2 border-[#F3F3F3] flex justify-center items-center relative z-0">
                                        <Image alt="img" src={Data.Icon2} />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="lg:hidden block pt-10">
                            {MobileScreen.map((Data) =>
                                <div className="flex sm:mb-10 mb-[28px] items-center gap-6">
                                    <div className="sm:min-h-[124px] min-h-[64px] sm:min-w-[124px] min-w-[64px] rounded-full bg-IconBg border-2 border-[#F3F3F3] flex justify-center items-center relative z-0">
                                        <Image className="sm:w-[revert-layer] sm:h-[revert-layer] w-10 h-10" alt="img" src={Data.Icon} />
                                    </div>
                                    <div className="text-TextGreay">
                                        <h1 className="Inter_600 sm:text-xl text-base mb-1.5">{Data.Title}</h1>
                                        <p className="sm:text-base text-sm sm:w-auto w-[205px]">Access to pan India retailers as one stop solution Access to pan India retailers as one stop solutionAccess to pan India retailers as one stop solution</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Image className="sm:block hidden absolute bottom-[185px] left-0" alt="img" src={BgImage} />
            </div>
            <div className="container mx-auto sm:px-[114px] px-4 sm:py-[53px] pb-8 pt-6 rounded-16 sm:shadow-2xl shadow/7 w-fit bg-white relative sm:top-[-185px] top-0 z-10">
                <div className='flex sm:justify-center justify-left sm:mb-12 mb-4'>
                    <p className="Inter_700 sm:text-[32px] text-2xl sm:px-4 pl-[5px]">Benefits of</p>
                    <span className="sm:text-[32px] text-2xl Inter_700 sm:ml-0 ml-1.5 relative w-fit">GTM
                        <div className='bg-TextBox rounded-full absolute sm:w-[84px] w-[67px] sm:h-5 h-3 sm:top-[15px] top-[17px] left-[-3px]'></div>
                    </span>
                </div>
                <div className="grid lg:grid-cols-2 sm:gap-10 gap-3">
                    {Benefits.map((Data) =>
                        <div className="flex gap-3 items-center">
                            <div className="sm:h-[56px] h-6 sm:w-[56px] w-6 rounded-full bg-IconBg flex justify-center items-center border border-white/20">
                                <Image className="sm:w-[revert-layer] sm:h-[revert-layer] w-4 h-4" alt="img" src={Finger} />
                            </div>
                            <span className="sm:text-xl text-sm text-[#1D1D1D] lg:w-[332px] w-auto">{Data.Title}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Planing