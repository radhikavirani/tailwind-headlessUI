import Image from "next/image"
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Image1 from './../../../assets/img/membar1.png'
import Image2 from './../../../assets/img/membar2.png'
import Image3 from './../../../assets/img/membar3.png'
import Image4 from './../../../assets/img/membar4.png'
import Image5 from './../../../assets/img/membar5.png'
import Image6 from './../../../assets/img/membar6.png'
import Image7 from './../../../assets/img/membar7.png'
import Image8 from './../../../assets/img/membar8.png'

const RowOne = [
    {Pictures: Image1},
    {Pictures: Image2},
    {Pictures: Image3},
    {Pictures: Image4}
]
const RowTwo = [
    {Pictures: Image5},
    {Pictures: Image6},
    {Pictures: Image7},
    {Pictures: Image8}
]

const MeetTeam = () => {
    return (
        <div className="container mx-auto sm:pt-[137px] pt-[50px] sm:pb-[74px] pb-[60px] sm:px-5 px-4">
            <div className="flex justify-center sm:mb-[73px] mb-7">
                <span className='Inter_700 sm:text-[44px] text-2xl inline-block w-fit relative'>Meet our team
                    <div className='bg-TextBox rounded-full absolute sm:w-[139px] w-[71px] sm:h-5 h-3 sm:bottom-[-11px] sm:bottom-0 bottom-[1px] sm:right-[-20px] right-[-9px]'></div>
                </span>
            </div>
            <div className="flex justify-center xl:gap-[37px] gap-4 xl:mb-[36px] mb-[18px]">
                {RowOne.map((Img) =>
                    <div className="md:[&:nth-child(3)]:block lg:[&:nth-child(4)]:block [&:nth-child(3)]:hidden [&:nth-child(4)]:hidden relative flex rounded-16 after:absolute after:bottom-0 after:left-0 after:w-[100%] after:h-[55%] after:z-[99] after:rounded-16 after:bg-gradient-to-t from-[#000000] hover:after:bg-gradient-to-t hover:after:from-[#288CD5]">
                        <Image className="rounded-16" alt="img" src={Img.Pictures} />
                        <div className="absolute bottom-0 text-white pl-4 pb-[14px] z-[100]">
                            <h1 className="Inter_600 leading-none sm:text-xl text-sm sm:mb-1 mb-0">Prateek Bansal</h1>
                            <span className="sm:text-base text-xs">Founder | CEO</span>
                            <div className="flex gap-4 sm:mt-1.5 mt-[3px]">
                                <FaTwitter className="sm:h-[19px] w-4 sm:w-[19px] h-4" />
                                <FaLinkedin className="sm:h-[19px] w-4 sm:w-[19px] h-4" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex justify-center xl:gap-[37px] gap-4">
                {RowTwo.map((Img) =>
                    <div className="md:[&:nth-child(3)]:block lg:[&:nth-child(4)]:block [&:nth-child(3)]:hidden [&:nth-child(4)]:hidden relative flex rounded-16  after:absolute after:bottom-0 after:left-0 after:w-[100%] after:h-[55%] after:z-[99] after:rounded-16 after:bg-gradient-to-t from-[#000000] hover:after:bg-gradient-to-t hover:after:from-[#288CD5]">
                        <Image className=" rounded-16" alt="img" src={Img.Pictures} />
                        <div className="absolute bottom-0 text-white pl-4 pb-[14px] z-[100]">
                            <h1 className="Inter_600 leading-none sm:text-xl text-sm sm:mb-1 mb-0">Prateek Bansal</h1>
                            <span className="sm:text-base text-xs">Founder | CEO</span>
                            <div className="flex gap-4 sm:mt-1.5 mt-[3px]">
                                <FaTwitter className="sm:h-[19px] w-4 sm:w-[19px] h-4" />
                                <FaLinkedin className="sm:h-[19px] w-4 sm:w-[19px] h-4" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default MeetTeam