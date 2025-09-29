'use client'

import { DefaultButton, PrimaryButton } from "@/components/common/Buttons/Buttons";
import { SectionLayout } from "@/components/common/SectionLayout";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { track } from "@vercel/analytics/react";

const DollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>
)

const GrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trending-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>
)

export function Hero() {
    return (
        <SectionLayout>
            <article className='grid grid-cols-1 md:grid-cols-[0.43fr_0.43fr] gap-8 justify-center h-auto pt-6 md:pt-20 relative'>
                <div>
                    <small className="px-3 py-2 rounded-md bg-green/20 text-green font-medim w-fit">Trading Evolution</small>
                    <h2 className="text-3xl md:text-6xl max-w-3xl mb-6 mt-3 font-light">Switching from
                        Forex to <strong className="font-bold text-green">Futures</strong>?</h2>
                    <span className="flex items-center gap-2 mb-6">
                        <p className="flex items-center gap-2">
                            <span className="aspect-square w-fit rounded-full p-1 text-green bg-green/20">
                                <GrowIcon />
                            </span>
                            Higher Leverage
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="aspect-square w-fit rounded-full p-1 text-green bg-green/20">
                                <DollarIcon />
                            </span>
                            Lower Fees
                        </p>
                    </span>
                    <p>This comprehensive guide will be all you need to make the transition successfully.</p>

                    <span className="flex items-center gap-2 mt-4 md:mt-8">
                        <Link href='./challenges' onClick={() => { track('Navbar - CTA') }} className="flex flex-row bg-green items-center rounded-md px-4 py-2 text-background">
                            Get Started
                            <FaArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                        <DefaultButton trackName={'Learn More - Forex to Futures Hero'} href="/about">Learn More</DefaultButton>
                    </span>
                </div>

                <div>
                    <iframe className="aspect-video rounded-md w-full max-w-[600px]" src="https://www.youtube.com/embed/L5Zxwvw-VDM?si=bvHTKKpkc8IDqFRK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="rounded-full w-[1200px] h-[200px] mx-auto bg-[#45D1FF33]/20 absolute top-28 -z-10 inset-0 blur-[200px]"></div>

                <div className="hidden md:block aspect-square border border-green/30 w-[300px] rounded-3xl bottom-24 absolute -z-10 -left-[300px]"></div>
                <div className="hidden md:block border border-green/30 w-[600px] h-[200px] rounded-3xl bottom-0 absolute -z-10 -right-[300px]"></div>
            </article>
        </SectionLayout>
    )
}