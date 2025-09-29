'use client'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import analytics from './assets/Misc/Dashboard_Analytics.png'

const Arrow = () => (
    <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.244 1.51147L26.42 7.68748L20.244 13.8635M25.6789 7.68748H1.5" stroke="#65FD51" strokeWidth="1.97632" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export function ForexVsFutures() {

    return (
        <a href="https://tx3funding.com/forex-to-futures/" target="_blank" rel="noopener noreferrer">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="cursor-pointer shadow-2xl fixed bottom-0 left-0 right-0 rounded-t-2xl flex flex-row justify-start md:justify-center items-center w-full h-36 md:h-20 z-30 bg-[#0B111D]"
                >
                    {/* desktop */}
                    <div className='relative flex items-center justify-center w-full h-full gap-2 p-2 overflow-hidden md:gap-6'>
                        <span className='flex flex-col items-center justify-center gap-0 text-center text-white md:flex-row'>
                            <p className='relative z-10 -ml-3 text-2xl italic font-semibold md:ml-0 md:text-4xl'>Forex Vs Futures</p>
                            <picture className='relative'>
                                <Image src={analytics} alt='analytics images' className='relative max-w-[220px] -mt-2 md:mt-6 z-10' />
                                <div className="rounded-full aspect-square top-0 right-4 w-[192px] bg-[#45D1FF]/60 absolute blur-3xl"></div>
                            </picture>
                        </span>

                        <span className='flex flex-col items-center gap-1 text-sm text-center md:text-base md:flex-row'>
                            <p className='flex items-center gap-2'>Explore the Similarities and Differences
                                <span className='hidden mx-2 md:block'><Arrow /></span>
                            </p>
                            <button className='rounded-md px-4 py-2 bg-green text-[#0B111D]'>Learn More</button>
                        </span>

                        <div className='rounded-xl hidden md:block border-2 border-[#65FD51]/40 w-[140px] h-[60px] absolute left-6 -top-4'></div>
                        <div className='rounded-xl hidden md:block border-2 border-[#65FD51]/40 w-[140px] h-[60px] absolute right-6 -top-4'></div>
                        <div className='rounded-xl md:hidden border-2 border-[#65FD51]/40 w-[200px] h-[100px] absolute left-8 -bottom-12'></div>

                        <div className="rounded-full aspect-square top-0 left-0 w-[244px] bg-[#45D1FF]/20 absolute blur-3xl -z-20"></div>
                        <div className="rounded-full aspect-square top-0 left-[50%] w-[244px] bg-[#45D1FF]/20 absolute blur-3xl -z-20"></div>
                        <div className="rounded-full aspect-square top-0 right-0 w-[244px] bg-[#45D1FF]/20 absolute blur-3xl -z-20"></div>

                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    )
}