import { SectionLayout } from "@/components/common/SectionLayout";
import image from './assets/image1.webp'
import Image from "next/image";

const terms = [
    {
        old: 'Pips',
        new: 'Tick'
    },
    {
        old: 'Pairs',
        new: 'Products'
    },
    {
        old: 'Lots',
        new: 'Contracts'
    },
    {
        old: 'Buy/Sell',
        new: 'Bid/Ask'
    },
    {
        old: 'Mini Pair',
        new: 'Micro'
    },
]

const Arrow = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5145_1159)">
            <path d="M5 12.6562H19" stroke="#65FD51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 18.6562L19 12.6562" stroke="#65FD51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 6.65625L19 12.6562" stroke="#65FD51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_5145_1159">
                <rect width="24" height="24" fill="white" transform="translate(0 0.65625)" />
            </clipPath>
        </defs>
    </svg>
)

export function Terminology() {
    return (
        <SectionLayout className='flex flex-col md:flex-row items-center justify-center gap-12 relative'>
            <div className="flex flex-col gap-12">
                <span>
                    <h2 className="text-3xl md:text-5xl text-white">Futures Terminology</h2>
                    <p className="text-modest mt-6 max-w-md">Here are a few key Forex trading terms that vary from the futures industry to help you get started</p>
                </span>

                <span className="max-w-lg flex flex-col gap-6">
                    <strong className="text-white font-medium text-lg md:text-2xl">Replace these forex terms with these Futures Terms</strong>

                    <ul className="flex flex-col gap-6 text-modest">
                        {
                            terms.map(term => (
                                <li key={term.old} className="flex items-center gap-6">
                                    {term.old}
                                    <Arrow />
                                    {term.new}
                                </li>
                            ))
                        }
                    </ul>
                </span>
            </div>

            <picture>
                <Image src={image} alt="man holding a computer" className="w-full max-w-3xl" />
            </picture>

            <div className="hidden md:block aspect-square border border-green w-[300px] rounded-3xl bottom-0 absolute -z-10 -left-[244px]"></div>
            <div className="hidden md:block border border-green w-[600px] h-[200px] rounded-3xl top-0 absolute -z-10 -right-[300px]"></div>
        </SectionLayout>
    )
}