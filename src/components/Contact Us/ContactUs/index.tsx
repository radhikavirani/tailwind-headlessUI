import Image from "next/image"
import BgImage from './../../../assets/img/contactDataBg.png'
import BgImage1 from './../../../assets/img/contactBg1.png'
import BgImage2 from './../../../assets/img/contactBg2.png'
import Icon1 from './../../../assets/img/phone.png'
import Icon2 from './../../../assets/img/board.png'
import Icon3 from './../../../assets/img/location.png'

const ContactData = [
    { Icon: Icon1, Title: 'Call', Text: '011 90886753 | 011 76675645' },
    { Icon: Icon2, Title: 'Email', Text: 'innovation@fairdeal.market' },
    { Icon: Icon3, Title: 'Location', Text: 'FDM Digital Solutions Pvt. Ltd.First Floor, 1448, Landmark Corporate Centre, Landpark Cyber Park, Sector 67, Manesar, Gurugram, Haryana - 122101' }
]

const Contact = () => {
    return (
        <div className="bg-white relative">
            <div className="container mx-auto lg:pt-[269px] lg:pb-[100px] pb-8 pt-14">
                <div className="flex sm:justify-center justify-left sm:mb-[68px] mb-8 sm:px-5 px-4">
                    <span className='Inter_700 sm:text-[44px] text-2xl inline-block w-fit relative'>Contact us
                        <div className='bg-TextBox rounded-full absolute sm:w-[268px] w-[140px] sm:h-5 h-3 sm:bottom-[-9px] sm:bottom-0 bottom-[1px] sm:right-[-17px] right-[-9px]'></div>
                    </span>
                </div>
                <div className="grid lg:grid-cols-2 sm:gap-[54px] gap-6 sm:px-5 px-4">
                    <div className="relative">
                        <div className="sm:pt-[40.5px] h-[100%] pt-6 sm:pl-10 sm:pr-[52px] px-4 sm:pb-[104.5px] pb-[33px] rounded-16 bg-BgBlue">
                            <div className="flex flex-col gap-8">
                                {ContactData.map((Data) =>
                                    <div className="flex gap-3">
                                        <div className="h-11 min-w-11 border-2 border-white/10 rounded-full bg-white/90 flex justify-center items-center">
                                            <Image alt="img" src={Data.Icon} />
                                        </div>
                                        <div className="flex flex-col text-TextGreay">
                                            <span className="Inter_600 sm:text-base text-sm">{Data.Title}</span>
                                            <span className="xl:w-[408px] lg:w-[305px] w-auto sm:text-base text-sm">{Data.Text}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Image className="absolute bottom-0 right-0 " alt="img" src={BgImage} />
                    </div>
                    <div className="relative z-10">
                        <iframe style={{ width: '100%', borderRadius: '16px' }} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17526.856483365773!2d77.05099349806589!3d28.38496878349315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splus%20offices!5e0!3m2!1sen!2sin!4v1715252809826!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <Image className="lg:block hidden absolute top-10" alt="img" src={BgImage1} />
            <Image className="lg:block hidden absolute right-0 bottom-[-25px]" alt="img" src={BgImage2} />
        </div >
    )
}
export default Contact