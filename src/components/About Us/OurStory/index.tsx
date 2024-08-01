import Image from "next/image"
import { IoPlayCircleOutline } from "react-icons/io5";
import Circle1 from './../../../assets/img/SecondSection1.png'
import Circle2 from './../../../assets/img/SecondSection2.png'
import BgImage from './../../../assets/img/SecondSection-img.png'

const OurStory = () => {
    return (
        <div className="container mx-auto sm:mb-[133px] mb-2.5">
            <div className="relative">
                <div className="relative flex rounded-16 after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-gradient-to-t from-[#000000] after:rounded-16 after:opacity-[0.7] justify-center items-center sm:mx-5 mx-4">
                    <Image className="w-full" alt="img" src={BgImage} />
                    <div className='cursor-pointer absolute sm:h-[72px] h-[48px] sm:w-[72px] w-[48px] backdrop-blur-sm bg-white/20 rounded-full flex justify-center items-center z-10'>
                        <IoPlayCircleOutline className="sm:h-10 h-[26.67px] sm:w-10 w-[26.67px] text-white" />
                    </div>
                </div>
                <div className="sm:pt-10 pt-6 sm:px-[52px] px-4 sm:pb-[66px] pb-8 bg-white sm:rounded-16 rounded-0 w-fit mx-auto relative sm:top-[-67px] top-0 sm:mx-20 mx-0">
                    <div className="flex justify-center sm:mb-6 mb-2">
                        <span className='Inter_700 sm:text-[32px] text-2xl inline-block w-fit relative'>Our story
                            <div className='bg-TextBox rounded-full absolute sm:w-[94px] w-[71px] sm:h-5 h-3 sm:bottom-[-6px] bottom-0 right-[-4px]'></div>
                        </span>
                    </div>
                    <p className="text-greay sm:text-base text-sm">In India's $1.3 Trillion retail industry, 95% is driven by offline channels. Achieving omnichannel success is essential. Legacy brands dominate current distribution, posing challenges. Offline lacks product performance visibility and tech revolution. Fairdeal democratises offline through integrated tech, helping big businesses find the right retail shelf with data insights. We understand the simplicity of online listing and offline retail complexity. Our team's expertise, retailer network, and stakeholder support empower brands in offline commerce digitally.</p>
                </div>
                <div className="absolute sm:top-[-193px] top-[-80px] xl:left-[-45px] sm:left-[-95px] left-[26%] z-[-1] sm:w-auto w-[167.13px]">
                    <Image alt="img" src={Circle1} />
                </div>
                <div className="absolute bottom-[-80px] xl:right-[50px] right-0 z-[-1] sm:block hidden">
                    <Image alt="img" src={Circle2} />
                </div>
            </div>
        </div>
    )
}
export default OurStory