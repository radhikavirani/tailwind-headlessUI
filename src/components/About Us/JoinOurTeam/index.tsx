import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/16/solid"
import BgImage from './../../../assets/img/JoinTeamBg.png'
import BgImage2 from './../../../assets/img/JoinTeamBg2.png'
import Team from './../../../assets/img/JoinTeam.png'
import TeamSm from './../../../assets/img/JoinTeam2.png'
import TeamBg from './../../../assets/img/JoinTeamBg3.png'

const JoinTeam = () => {
    return (
        <div className="sm:container mx-auto sm:pt-[100px] pt-0 lg:pb-[100px] pb-0">
            <div className="relative flex flex-wrap gap-10">
                <div className="bg-white rounded-16 w-fit h-fit sm:shadow-2xl shadow-none shadow-black/7 relative xl:left-[62px] lg:left-5 left-0 lg:order-1 order-2 lg:mx-0 sm:mx-5 mx-4 lg:top-0 top-[-130px]">
                    <div className="sm:pt-[129px] pt-11 sm:pb-[121px] pb-6 sm:pl-[50px] xl:pr-[150px] sm:pr-[50px] px-[14px]">
                        <h1 className='Inter_700 sm:text-[44px] text-2xl inline-block w-fit relative sm:mb-6 mb-4'>Join our team
                            <div className='bg-TextBox rounded-full absolute sm:w-[139px] w-[71px] sm:h-5 h-3 sm:bottom-[-11px] sm:bottom-0 bottom-[1px] sm:right-[-20px] right-[-9px]'></div>
                        </h1>
                        <p className="text-greay sm:mb-6 mb-2 xl:w-[570px] lg:w-[498px] w-auto">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="flex gap-1.5 py-[14.5px] w-fit">
                            <a className="Inter_500" href="/careers">See all positions</a>
                            <ArrowRightIcon className="h-6 w-6" />
                        </div>
                    </div>
                    <Image className="sm:block hidden absolute top-0 right-0" alt="img" src={BgImage} />
                    <Image className="sm:hidden block absolute top-0 right-0" alt="img" src={BgImage2} />
                </div>
                <div className="lg:order-2 order-1 lg:mx-0 mx-auto">
                    <Image className="min-[361px]:block hidden lg:absolute inherit rounded-16 xl:top-[65px] top-20 xl:right-[62px] right-5 z-[-1] shadow-2xl shadow-[#288CD5]/10" alt="img" src={Team} />
                    <Image className="min-[361px]:hidden block" alt="img" src={TeamSm}/>
                </div>
                <Image className="min-[361px]:hidden block absolute w-[235px] right-0 bottom-0" alt="img" src={TeamBg}/>
            </div>
        </div>
    )
}
export default JoinTeam