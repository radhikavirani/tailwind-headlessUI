import Image from "next/image"
import Logo1 from './../../../assets/img/logo1.svg'
import Logo2 from './../../../assets/img/logo2.svg'
import Logo3 from './../../../assets/img/logo3.svg'
import Logo4 from './../../../assets/img/logo4.svg'
import Logo5 from './../../../assets/img/logo5.svg'
import Logo6 from './../../../assets/img/logo6.svg'
import Logo7 from './../../../assets/img/logo7.svg'
import Logo8 from './../../../assets/img/logo8.svg'
import Logo9 from './../../../assets/img/logo9.svg'
import Logo10 from './../../../assets/img/logo10.svg'
import Logo11 from './../../../assets/img/logo11.svg'
import Logo12 from './../../../assets/img/logo12.svg'

const RowOne = [
    { logo: Logo1 },
    { logo: Logo2 },
    { logo: Logo3 },
    { logo: Logo4 },
    { logo: Logo5 },
    { logo: Logo6 },
]
const RowTwo = [
    { logo: Logo7 },
    { logo: Logo8 },
    { logo: Logo9 },
    { logo: Logo10 },
    { logo: Logo11 },
    { logo: Logo12 },
]
const Row = [
    { logo: Logo1 },
    { logo: Logo2 },
    { logo: Logo5 },
    { logo: Logo3 },
    { logo: Logo4 },
    { logo: Logo6 },
    { logo: Logo7 },
    { logo: Logo8 },
    { logo: Logo9 },
    { logo: Logo10 },
    { logo: Logo11 },
    { logo: Logo12 },
]

const LogoSection = () => {
    return (
        <div className="relative bg-white">
            <div className="container mx-auto">
                <div className="sm:block hidden px-11 pt-[64px] pb-[65.35px]">
                    <div className="overflow-x-auto">
                        <div className="flex gap-[62px] mb-[26px] min-w-max">
                            {RowOne.map((img) =>
                                <Image alt="img" src={img.logo} />
                            )}
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="flex justify-end gap-[62px] min-w-max">
                            {RowTwo.map((img) =>
                                <Image alt="img" src={img.logo} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="sm:hidden block p-[22px]">
                    <div className="overflow-x-auto">
                        <div className="flex gap-[27px] min-w-max">
                            {Row.map((img) =>
                                <Image className="h-5 w-auto" alt="img" src={img.logo} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:w-[346px] w-[72px] sm:h-[283.34px] h-[72px] bg-gradient-to-r from-white to-[#ffffff00] absolute top-0"></div>
            <div className="sm:w-[346px] w-[72px] sm:h-[283.34px] h-[72px] bg-gradient-to-l from-white to-[#ffffff00] absolute top-0 right-0"></div>
        </div>
    )
}
export default LogoSection