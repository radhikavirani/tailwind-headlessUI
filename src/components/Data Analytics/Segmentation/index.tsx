import Image from "next/image"
import BgImage1 from './../../../assets/img/SegmentationBg1.png'
import BgImage2 from './../../../assets/img/SegmentationBg2.png'
import Icon1 from './../../../assets/img/Segmentation-icon1.png'
import Icon2 from './../../../assets/img/Segmentation-icon2.png'
import Icon3 from './../../../assets/img/Segmentation-icon3.png'
import Icon4 from './../../../assets/img/Segmentation-icon4.png'
import BgDesign from "@/components/BgDesign"

const segmentation = [
    {
        Image: Icon1,
        Title: 'Customer data platform (CDP)',
        Text: 'Create a unified customer data platform with both transactional & market information systems.'
    },
    {
        Image: Icon2,
        Title: 'Potential | Performance | Prosperity',
        Text: 'Develop multidimensional customer clusters leveraging advances analytics and data science.'
    },
    {
        Image: Icon3,
        Title: 'Dynamic target groups',
        Text: 'Leverage the cluster to define the target group to planning customer initiatives.'
    },
    {
        Image: Icon4,
        Title: 'Customer Initiatives',
        Text: 'Execute initiatives with customers specific performance targets and tracking mechanics.'
    }
]

const Segmentation = () => {
    return (
        <div className="relative">
            <div className="container mx-auto sm:pt-[264px] pt-20 sm:pb-[237px] pb-[100px] sm:px-5 px-4">
                <div className="sm:mb-14 mb-6">
                    <div className='sm:mb-[15px] mb-1 flex sm:justify-center justify-left'>
                       <BgDesign/>
                    </div>
                    <h1 className='relative sm:mx-auto sm:text-center text-left sm:text-[44px] text-2xl Inter_700 sm:mb-6 mb-3 sm:leading-[56px] leading-[32px]'>Segmentation of <br className="sm:hidden block"/>Business process
                        <div className="sm:hidden block bg-TextBox rounded-full absolute w-[169px] z-[-1] h-3 top-[19px] left-0"></div>
                    </h1>
                    <p className='sm:mx-auto lg:w-[890px] w-auto sm:text-center text-left sm:text-base text-sm text-greay'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="grid lg:grid-cols-2 sm:gap-8 gap-[18px] mt-10 2xl:w-auto lg:w-[983px] w-auto mx-auto">
                    {segmentation.map((Card) =>
                        <div className="sm:py-[19px] sm:pl-[18px] sm:pr-[66px] p-2.5 bg-[#20222F]/5 lg:w-fit w-full rounded-16 shadow-md shadow-black/5 flex items-center sm:gap-3 gap-1.5">
                            <div className="sm:min-h-[72px] min-h-[44px] sm:min-w-[72px] min-w-[44px] rounded-full bg-IconBg border border-white/20 flex justify-center items-center">
                                <Image className="sm:w-[revert-layer] w-6 sm:h-[revert-layer] h-6" alt="img" src={Card.Image} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h1 className="text-[#1D1D1D] Inter_600 sm:text-base text-sm">{Card.Title}</h1>
                                <span className="text-greay sm:text-base text-xs">{Card.Text}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Image className="absolute top-[9px]" alt="img" src={BgImage1}/>
            <Image className="absolute bottom-0 right-0" alt="img" src={BgImage2}/>
        </div>
    )
}
export default Segmentation