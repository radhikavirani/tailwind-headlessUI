import Image from "next/image"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from './../../assets/img/FooterLogo.svg'

const Company = [
    { Title: <a href="/about-us">About Us</a> },
    { Title: <a href="/contact-us">Contact Us</a> },
    { Title: <a href="/careers">Careers</a> },
    { Title: 'Buy on fairdeal' },
    { Title: 'Sell on fairdeal' }
]
const Services = [
    { Title: <a href="/services/retail-network">Retail Network</a> },
    { Title: <a href="/services/distribution">Distribution</a> },
    { Title: <a href="/services/data-analytics">Retail analytics</a> }
]
const Legal = [
    { Title: 'Privacy Policy' },
    { Title: 'Terms & Conditions' },
    { Title: 'Return Policy' },
    { Title: 'Refund and cancellation policy' }
]

const FooterIcons = [
    { img: <FaTwitter size={19} /> },
    { img: <FaFacebookSquare size={19} /> },
    { img: <FaInstagram size={19} /> },
    { img: <FaLinkedin size={19} /> },
]

const Footer = () => {
    return (
        <div className="bg-BgBlue">
            <div className="container mx-auto sm:pb-9 pb-4 sm:pt-[70px] pt-8 grid xl:grid-cols-2 grid-cols-1 sm:px-5 px-4">
                <div>
                    <div className='lg:mb-10 mb-0'>
                        <Image alt="img" src={Logo} />
                        <span className='Inter_500 text-white mt-1.5'>Enabling offline commerce, digitally</span>
                    </div>
                    <div className='w-full h-[1px] bg-[#f9f9f966] my-8 xl:hidden block'></div>
                    <div className='flex flex-wrap sm:justify-between justify-start gap-x-14 sm:gap-y-0 gap-6'>
                        <div>
                            <span className='Inter_600 text-white text-lg pb-1.5'>Company</span>
                            {Company.map((ColumnOne) =>
                                <h1 className='text-white my-1 cursor-pointer'>{ColumnOne.Title}</h1>
                            )}
                        </div>
                        <div>
                            <span className='Inter_600 text-white text-lg pb-1.5'>Services</span>
                            {Services.map((ColumnTwo) =>
                                <h1 className='text-white my-1 cursor-pointer'>{ColumnTwo.Title}</h1>
                            )}
                        </div>
                        <div>
                            <span className='Inter_600 text-white text-lg pb-1.5'>Legal</span>
                            {Legal.map((ColumnThree) =>
                                <h1 className='text-white my-1 cursor-pointer'>{ColumnThree.Title}</h1>
                            )}
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[#f9f9f966] my-8 xl:hidden block'></div>
                </div>
                <div className='grid xl:justify-items-end justify-items-start'>
                    <div>
                        <div className='mb-6'>
                            <span className='Inter_600 text-white text-lg mb-3'>Office</span>
                            <p className='text-white xl:w-[344px] w-auto my-1 example'>FDM Digital Solutions Pvt. Ltd.First Floor,1448, Landmark Corporate Centre, Landpark Cyber Park, Sector 67, Manesar, Gurugram, Haryana - 122101</p>
                        </div>
                        <div className='mb-6'>
                            <span className='Inter_600 text-white text-lg mb-3'>Contact Us</span>
                            <p className='text-white my-1'>
                                <span className="cursor-pointer">innovation@fairdeal.market</span>  |  011 90886753
                            </p>
                        </div>
                        <div>
                            <span className='Inter_600 text-white text-lg'>Follow Us</span>
                            <div className='flex gap-[30px] text-white mt-3'>
                                {FooterIcons.map((Icons) =>
                                    <div className="cursor-pointer">{Icons.img}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#1D1D1D]'>
                <div className='container mx-auto sm:flex block justify-between py-[22px] text-white px-5 sm:text-auto text-center'>
                    <p className='sm:mb-0 mb-3'>Privacy Policy | Terms & Condition</p>
                    <p className="cursor-pointer">Copyright © Fairdeal.market</p>
                </div>
            </div>
        </div>
    )
}
export default Footer