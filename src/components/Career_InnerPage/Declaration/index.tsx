import { Button } from "@headlessui/react"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

const List = [
    { Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' },
    { Text: 'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' },
    { Text: 'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru' },
    { Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' },
    { Text: 'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' },
    { Text: 'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru' }
]

const Declaration = [
    { Title: 'Job Description' },
    { Title: 'Responsibilities:' },
    { Title: 'Perks and Benefites' }
]

const JobDeclaration = () => {
    return (
        <div className="container mx-auto sm:pt-[55px] pt-[32px] pb-[100px] sm:px-[50px] px-4">
            <div className="flex flex-col sm:gap-11 gap-6 sm:mb-10 mb-[32px]">
                <div className="flex flex-col gap-4">
                    <h1 className="sm:text-xl text-base Inter_700">Job Description</h1>
                    <p className="text-greay sm:text-base text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru</p>
                </div>
                {Declaration.map((Data) =>
                    <div className="flex flex-col gap-4">
                        <h1 className="sm:text-xl text-base Inter_700">{Data.Title}</h1>
                        <ul className="list-disc ml-5 text-greay flex flex-col gap-1 sm:text-base text-[13px]">
                            {List.map((Data) =>
                                <li>{Data.Text}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
            <Button className="sm:mx-0 mx-auto Inter_500 sm:py-3.5 py-2.5 sm:px-[66px] px-11 rounded-full bg-primary md:text-base text-sm text-white border border-primary hover:border-black hover:text-black hover:bg-transparent flex gap-2">Apply<ArrowRightIcon className="h-6 w-6" /></Button>
        </div>
    )
}
export default JobDeclaration