import Image from "next/image"
import BgImage from './../../../assets/img/NextSectionBg-img.png'
import Icon1 from './../../../assets/img/NextSectionicon1.png'
import Icon2 from './../../../assets/img/NextSectionicon2.png'
import Icon3 from './../../../assets/img/NextSectionicon3.png'
import Icon4 from './../../../assets/img/NextSectionicon4.png'

const Card1 = [
    { Title: 'Transactional systems (SFA,ERP,etc)' },
    { Title: 'Survey data systems (Retail, Audit, Market execution etc)' }
]

const Card2 = [
    { Title: 'Data Lakes' },
    { Title: 'Middleware systems' },
    { Title: 'Large scale data engineering solutions' }
]

const Card3 = [
    { Title: 'Emerging data visualization libraries' },
    { Title: 'Simulators & planners' },
    { Title: 'Geospatial Analytics' }
]

const Card4 = [
    { Title: 'Conversation UI based sales reporting platform' },
    { Title: 'Gamification of incentive management' },
    { Title: 'Gamified learning and development' }
]

const NextSection = () => {
    return (
        <div className="bg-BgBlue relative">
            <div className="container mx-auto relative z-10 sm:px-5 px-4 lg:pb-0 pb-[100px]">
                <div className="lg:pt-[206px] pt-[161px] lg:pb-[258px] pb-0">
                    <h1 className='xl:w-[545px] lg:w-[385px] w-auto Inter_700 text-TextGreay sm:leading-[56px] leading-[34px] xl:text-[44px] sm:text-[42px] text-2xl inline-block w-fit relative mb-6'>The Next-Gen sales tech stack
                        <div className='bg-TextBox rounded-full absolute sm:w-[228px] w-[170px] sm:h-5 h-3 sm:left-[100px] left-0 sm:top-[33px] top-5 z-[-1]'></div>
                    </h1>
                    <p className="xl:w-[522px] lg:w-[385px] w-auto text-TextGreay">At Fairdeal. market, we understand the distinctive challenges businesses encounter when expanding into offline markets. Our passion lies in simplifying this journey, offering a friendly and supportive solution to ensure your success.</p>
                </div>
                <div className="lg:absolute relative lg:top-[143px] top-[26px] lg:right-5 right-0">
                    <div className="lg:flex block gap-[34px] relative">
                        <div className="lg:mb-0 mb-4 py-5 px-4 bg-secondary lg:w-fit w-full lg:h-fit sm:h-[150px] h-auto rounded-16 flex lg:items-baseline items-center lg:flex-col flex-row sm:gap-5 gap-2">
                            <div className="sm:min-h-[72px] min-h-[56px] sm:min-w-[72px] min-w-[56px] rounded-full border border-white/10 bg-IconBg flex justify-center items-center">
                                <Image className="sm:w-[revert-layer] w-[32px] sm:h-[revert-layer] h-[32px]" alt="img" src={Icon1} />
                            </div>
                            <div className="lg:w-[240px] w-auto flex flex-col sm:gap-2 gap-1.5 text-TextGreay">
                                <h1 className="sm:Inter_700 Inter_600 sm:text-xl text-sm">ETL of large complex data sets</h1>
                                <div>
                                    {Card1.map((Text) =>
                                        <ul className="list-disc lg:leading-6 leading-3 ml-4">
                                            <li className="sm:text-sm text-xs">{Text.Title}</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="lg:mb-0 mb-4 sm:pt-5 px-4 sm:pb-[42px] py-5 bg-primary lg:w-fit w-full lg:h-fit sm:h-[150px] h-auto rounded-16 flex lg:items-baseline items-center lg:flex-col flex-row sm:gap-5 gap-2 lg:mt-[47px] mt-0">
                            <div className="sm:min-h-[72px] min-h-[56px] sm:min-w-[72px] min-w-[56px] rounded-full border border-white/10 bg-IconBg flex justify-center items-center">
                                <Image className="sm:w-[revert-layer] w-[32px] sm:h-[revert-layer] h-[32px]" alt="img" src={Icon2} />
                            </div>
                            <div className="lg:w-[240px] w-auto flex flex-col sm:gap-2 gap-1.5 text-TextGreay">
                                <h1 className="sm:Inter_700 Inter_600 sm:text-xl text-sm">Data integration layer</h1>
                                <div>
                                    {Card2.map((Text) =>
                                        <ul className="list-disc lg:leading-6 leading-3 ml-4">
                                            <li className="sm:text-sm text-xs">{Text.Title}</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='absolute right-0 top-5 lg:flex hidden'>
                            <div className='sm:w-[51px] w-[30.6px] sm:h-[15px] h-[9px] rounded-full bg-primary mr-1.5'></div>
                            <div className='sm:w-[15px] w-[9px] sm:h-[15px] h-[9px] rounded-full bg-secondary'></div>
                        </div>
                    </div>
                    <div className="lg:flex grid lg:gap-[34px] gap-4">
                        <div className="sm:pt-5 px-4 sm:pb-[42px] py-5 bg-primary lg:w-fit w-full lg:h-fit sm:h-[150px] h-auto rounded-16 flex lg:items-baseline items-center lg:flex-col flex-row sm:gap-5 gap-2 lg:order-1 order-2">
                            <div className="sm:min-h-[72px] min-h-[56px] sm:min-w-[72px] min-w-[56px] rounded-full border border-white/10 bg-IconBg flex justify-center items-center">
                                <Image className="sm:w-[revert-layer] w-[32px] sm:h-[revert-layer] h-[32px]" alt="img" src={Icon3} />
                            </div>
                            <div className="lg:w-[240px] w-auto flex flex-col sm:gap-2 gap-1.5 text-TextGreay">
                                <h1 className="sm:Inter_700 Inter_600 sm:text-xl text-sm">State of art visualization</h1>
                                <div>
                                    {Card3.map((Text) =>
                                        <ul className="list-disc lg:leading-6 leading-3 ml-4">
                                            <li className="sm:text-sm text-xs">{Text.Title}</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="py-5 px-4 bg-secondary lg:w-fit w-full lg:h-fit sm:h-[150px] h-auto rounded-16 flex lg:items-baseline items-center lg:flex-col flex-row sm:gap-5 gap-2 lg:mt-[34px] mt-0 lg:order-2 order-1">
                            <div className="sm:min-h-[72px] min-h-[56px] sm:min-w-[72px] min-w-[56px] rounded-full border border-white/10 bg-IconBg flex justify-center items-center">
                                <Image className="sm:w-[revert-layer] w-[32px] sm:h-[revert-layer] h-[32px]" alt="img" src={Icon4} />
                            </div>
                            <div className="lg:w-[240px] w-auto flex flex-col sm:gap-2 gap-1.5 text-TextGreay">
                                <h1 className="sm:Inter_700 Inter_600 sm:text-xl text-sm">Data democratization platforms</h1>
                                <div>
                                    {Card4.map((Text) =>
                                        <ul className="list-disc lg:leading-6 leading-3 ml-4">
                                            <li className="sm:text-sm text-xs">{Text.Title}</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Image className="absolute sm:top-[42px] top-[75px] sm:left-0 left-[-24px] sm:w-[revert-layer] w-[257px]" alt="img" src={BgImage} />
        </div >
    )
}
export default NextSection