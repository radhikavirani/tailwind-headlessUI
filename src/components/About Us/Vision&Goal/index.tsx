import Image from "next/image"
import Vision from './../../../assets/img/lamp.png'
import Goal from './../../..//assets/img/goal.png'
import Icon from './../../../assets/img/GoalIcon.png'
import BackgroundImg from './../../../assets/img/GoalBg.png'

const Points = [
    { Text: 'We believe in democratising the offline game through integrated tech, which allows a small or big business to reach the right retail shelf through our data insights. ' },
    { Text: 'We are aware of how simple it is to list your products on e-commerce and how equally difficult offline retail is. ' },
    { Text: 'The expertise of our team, the network of our retailers and the backing of our stakeholders, will enable offline commerce for the brands, digitally.' },
]

const Card = [
    { Img: Vision, Title: 'Our vision' },
    { Img: Goal, Title: 'Our Goal' },
]

const CardSection = () => {
    return (
        <div className="sm:py-[120px] py-[50px] bg-BgBlue">
            <div className="relative">
                <div className="container mx-auto flex md:flex-row flex-col justify-center lg:gap-[54px] gap-6 sm:px-5 px-4 relative z-10">
                    {Card.map((Detail) =>
                        <div className="backdrop-blur-sm bg-[#F3F3F3]/10 sm:pt-[43px] sm:pb-[29px] sm:px-10 px-3 py-[18px] rounded-16">
                            <div className="sm:h-[108px] h-[56px] sm:w-[108px] w-[56px] bg-[#FFFFFF]/20 border-2 border-[#ffffff]/30 rounded-full flex justify-center items-center sm:mb-8 mb-6">
                                <Image className="sm:w-[68px] w-[35.26px]" alt="img" src={Detail.Img} />
                            </div>
                            <h1 className="Inter_600 sm:text-[28px] text-lg text-TextGreay sm:mb-6 mb-[14px]">{Detail.Title}</h1>
                            {Points.map((Data) =>
                                <div className="flex items-start sm:gap-4 gap-3 sm:mb-4 mb-2">
                                    <div className="xl:flex hidden h-[33px] w-[33px] border-2 border-[#288CD5]/30 bg-[#288CD5]/20 rounded-full justify-center items-center">
                                        <Image className="sm:w-16 w-[13px] rotate-3" alt="img" src={Icon} />
                                    </div>
                                    <Image className="xl:hidden block w-16 rotate-3 mt-1.5" alt="img" src={Icon} />
                                    <p className="xl:w-[430px] w-auto text-TextGreay sm:text-base text-sm">{Data.Text}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <Image className="sm:block hidden absolute bottom-[-74px] right-0" alt="img" src={BackgroundImg} />
            </div>
        </div>
    )
}
export default CardSection