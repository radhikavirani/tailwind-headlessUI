import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/16/solid"
import BgImage from './../../../assets/img/GetInTouch.png'
import BgImg1 from './../../../assets/img/hero_img1.png'
import BgImg2 from './../../../assets/img/AboutBg-img.png'
import BgArrow from './../../../assets/img/contactBgArrow.png'
import { Button, Input } from "@headlessui/react"

const Name = [
    { Text: 'First Name' },
    { Text: 'Last Name' }
]
const FormData = [
    { Title: 'Brand Name' },
    { Title: 'Brand Website' },
    { Title: 'Email id' },
    { Title: 'Phone number' }
]

const GetInTouch = () => {
    return (
        <div>
            <div>
                <Image className="absolute" alt="img" src={BgImg1} />
                <Image className="xl:block hidden absolute right-0 top-0 z-[-1]" alt="img" src={BgImg2} />
            </div>
            <div className="container mx-auto lg:pt-[271px] pt-[113px] lg:pb-[130px] pb-0 sm:px-5 px-4">
                <div className='relative lg:block flex flex-col sm:gap-10 gap-[89px] justify-center'>
                    <div>
                        <div className='sm:mb-[21px] mb-1 flex sm:justify-start justify-center'>
                            <div className='sm:w-[51px] w-[30.6px] sm:h-[15px] h-[9px] rounded-full bg-primary mr-1.5'></div>
                            <div className='sm:w-[15px] w-[9px] sm:h-[15px] h-[9px] rounded-full bg-secondary'></div>
                        </div>
                        <h1 className='sm:text-left text-center sm:text-[44px] text-2xl Inter_500 xl:w-[667px] lg:w-[470px] w-auto sm:mb-6 mb-3 sm:leading-[56px] leading-[32px]'>Get inTouch🤙</h1>
                        <p className='sm:text-left text-center sm:text-base text-sm lg:w-[431px] w-full sm:px-0 px-[13px]'>Have questions or are ready to explore offline commerce solutions? Reach out to us today. We're here to help your brand succeed.</p>
                        <Image className="lg:block hidden absolute top-[-233px] left-[30%]" alt="img" src={BgArrow} />
                    </div>
                    <Image className="absolute sm:hidden block top-[135px] left-20" alt="img" src={BgImage} />
                    <div className='lg:absolute unset z-10 xl:top-[-145px] top-[-200px] xl:right-[50px] right-0 sm:px-10 px-3 sm:pt-10 pt-[22px] sm:pb-11 pb-[30px] bg-white lg:shadow-2xl shadow-[#000000]/7 rounded-16 xl:w-[678px] lg:w-[525px] w-full'>
                        <div className="flex sm:flex-row flex-col sm:gap-[30px] gap-4 sm:mb-7 mb-4">
                            {Name.map((Title) =>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder={Title.Text}
                                    className="w-full sm:text-base text-sm rounded-xl bg-[#F3F3F3] sm:py-[18px] sm:px-4 p-3 placeholder:text-greay sm:placeholder:text-base placeholder:text-sm border border-transparent outline-none focus:border focus:border-primary"
                                />
                            )}
                        </div>
                        {FormData.map((Text) =>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder={Text.Title}
                                className="sm:mb-7 mb-4 w-full sm:text-base text-sm rounded-xl bg-[#F3F3F3] sm:py-[18px] sm:px-4 p-3 placeholder:text-greay sm:placeholder:text-base placeholder:text-sm border border-transparent outline-none focus:border focus:border-primary"
                            />
                        )}
                        <Button className="Inter_500 sm:py-3.5 sm:px-[49.5px] px-10 py-2.5 rounded-[30px] bg-primary sm:text-base text-sm text-white border hover:border-black hover:text-black hover:bg-white flex gap-2">Submit<ArrowRightIcon className="h-6 w-6" /></Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default GetInTouch