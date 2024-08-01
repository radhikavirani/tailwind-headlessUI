import Image from "next/image"
import BgImage1 from './../../../assets/img/ScaleBg1.png'
import BgImage2 from './../../../assets/img/ScaleBg2.png'
import BgImage3 from './../../../assets/img/ScaleBg3.png'
import Icon1 from './../../../assets/img/scale_img1.png'
import Icon2 from './../../../assets/img/scale_img2.png'
import Icon3 from './../../../assets/img/scale_img3.png'
import Icon4 from './../../../assets/img/scale_img4.png'
import Icon5 from './../../../assets/img/scale_img5.png'
import BgDesign from "@/components/BgDesign"

const Card = [
    {
        Icon: Icon1,
        Title: 'Data',
        Text: 'Getting the right data and incorporating it into an integrated CDP can uncover actionable insights and drive real value'
    },
    {
        Icon: Icon2,
        Title: 'Strategy',
        Text: 'Having a clear understanding of what the company is trying to drive'
    },
    {
        Icon: Icon3,
        Title: 'Decisioning',
        Text: 'Identifying the right triggers-closely monitoring a range of consumer ‘signals’'
    },
    {
        Icon: Icon4,
        Title: 'Design',
        Text: 'Adopting agile marketing practices across the organisation to drive speed, testing volume & cross vehicle impact'
    },
    {
        Icon: Icon5,
        Title: 'Distribution',
        Text: 'Getting the right data and incorporating it into an integrated CDP can uncover actionable insights and drive real value'
    }
]

const ScaleOmnichannel = () => {
    return (
        <div className="bg-white relative">
            <div className="container mx-auto sm:pb-[100px] pb-20 pt-[69px] px-5 sm:px-4">
                <div>
                    <div className='flex sm:justify-center justify-left mb-px'>
                    <BgDesign/>
                    </div>
                    <h1 className="lg:w-[587px] w-auto sm:text-[44px] text-2xl sm:text-center text-left mx-auto Inter_700 sm:leading-[56px] sm:mb-4 mb-3">Scale Omnichannel Personalalization engine</h1>
                    <p className="lg:w-[890px] w-auto text-greay sm:text-center text-left mx-auto sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="grid lg:grid-cols-2 sm:gap-8 gap-4 sm:mt-[62px] mt-[46px] lg:w-[932px] w-auto mx-auto">
                    {Card.map((Data) =>
                        <div className="sm:px-[17px] px-[9.50px] sm:py-[19px] py-4 bg-BgBlue/5 shadow-md shadow-black/5 rounded-2xl flex sm:items-center items-start gap-3">
                            <div className="sm:min-h-[72px] min-h-11 sm:min-w-[72px] min-w-11 bg-IconBg border border-white/20 rounded-full flex justify-center items-center">
                                <Image className="sm:h-[revert-layer] h-6 sm:w-[revert-layer] w-6" alt="img" src={Data.Icon} />
                            </div>
                            <div>
                                <span className="sm:Inter_700 Inter_600 sm:text-xl text-sm">{Data.Title}</span>
                                <p className="text-greay sm:text-base text-xs">{Data.Text}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Image className="absolute top-0 sm:block hidden" alt="img" src={BgImage1} />
            <Image className="absolute right-0 bottom-0 sm:block hidden" alt="img" src={BgImage2} />
            <Image className="absolute top-[20px] sm:hidden block" alt="img" src={BgImage3} />
        </div>
    )
}
export default ScaleOmnichannel