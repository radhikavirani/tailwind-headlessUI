import Image from "next/image"
import { BsArrowRight } from "react-icons/bs";
import BlogImage from './../../../assets/img/Blog1-img.png'
import { Button } from "@headlessui/react";

const BlogInfo = () => {
    return (
        <div className="container mx-auto py-[74px] 2xl:px-[130px] xl:px-[50px] px-5 sm:block hidden">
            <div className="lg:flex items-center gap-[32.4px]">
                <Image className="min-w-[430px] min-h-[310px] lg:mx-0 mx-auto lg:mb-0 mb-5" alt="img" src={BlogImage} />
                <div className="flex flex-col gap-4">
                    <h1 className="Inter_600 text-2xl">Lorem ipsum dolor sit amet,</h1>
                    <p className="text-greay">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim.</p>
                    <Button className="py-3 Inter_500 flex itens-center gap-1.5 w-fit">Read More<BsArrowRight size={24} /></Button>
                </div>
            </div>
        </div>
    )
}
export default BlogInfo