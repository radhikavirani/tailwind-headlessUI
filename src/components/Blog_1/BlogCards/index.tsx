import Image from "next/image"
import { BsArrowRight } from "react-icons/bs";
import Card1 from './../../../assets/img/BlogCrad1.png'
import Card2 from './../../../assets/img/BlogCrad2.png'
import Card3 from './../../../assets/img/BlogCrad3.png'
import Card4 from './../../../assets/img/BlogCrad4.png'
import Card5 from './../../../assets/img/BlogCrad5.png'
import Card6 from './../../../assets/img/BlogCrad6.png'
import { Button } from "@headlessui/react";

const Card = [
    { Image: Card1 },
    { Image: Card2 },
    { Image: Card3 },
    { Image: Card4 },
    { Image: Card5 },
    { Image: Card6 }
]

const CardSection = () => {
    return (
        <div className="container mx-auto sm:px-5 px-4 sm:py-0 pt-6 pb-4">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-x-[45px] gap-y-[37px]">
                {Card.map((Data) =>
                    <div className="first:ml-auto [&:nth-child(2)]:mx-auto [&:nth-child(4)]:ml-auto sm:[&:nth-child(3)]:block [&:nth-child(3)]:hidden [&:nth-child(5)]:mx-auto sm:[&:nth-child(5)]:block [&:nth-child(5)]:hidden sm:[&:nth-child(6)]:block [&:nth-child(6)]:hidden">
                        <Image alt="img" src={Data.Image} />
                        <div className="pt-7 pb-2">
                            <h1 className="mb-3 Inter_600 text-xl">Lorem ipsum dolor sit amet,</h1>
                            <p className="text-greay xl:w-[359px] w-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim ven</p>
                        </div>
                        <Button className="py-3 Inter_500 flex itens-center gap-1.5 w-fit">Read More<BsArrowRight size={24} /></Button>
                    </div>
                )}
            </div>
            <div className="flex items-center w-fit gap-1.5 text-[#20222F]/50 py-3 mx-auto mt-[50px] mb-[130px]">
                <strong>Loading...</strong>
                <div
                    className="ms-auto inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent"
                    role="status"></div>
            </div>
        </div>
    )
}
export default CardSection