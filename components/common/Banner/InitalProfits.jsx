'use client'

import { motion, AnimatePresence } from 'framer-motion';


export function InitialProfits() {

    return (
        <a  target='_blank' href="https://tx3funding.com/en/challenges">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="cursor-pointer shadow-2xl fixed bottom-0 left-0 right-0 rounded-t-2xl flex flex-row justify-start md:justify-center items-center w-full h-24 md:h-20 z-30 bg-[#4CBA43]"
                >
                    {/* desktop */}
                    <div className='relative flex flex-col items-center justify-center w-full h-full gap-1 p-2 overflow-hidden md:flex-row md:gap-12'>
                        <span className='flex gap-2 items-center md:gap-4 text-[#0B111D]'>
                            <p className='text-2xl font-medium tracking-tighter shadow-sm md:text-7xl'>100%</p>
                            <p className='flex flex-row text-2xl text-white md:flex-col'>Of Initial <span className='md:-mt-1'>Profits</span></p>
                        </span>

                        <span className='text-whtie px-4 py-2 border border-green bg-gradient-to-br from-[#0F1D1E] via-[#0F1D1E] to-green/40 rounded-lg md:text-xl'>
                            <p>First <span className='font-semibold text-green'>$10,000</span> in Profits is <span className='font-semibold text-green'>100%</span> Yours</p>
                        </span>

                        <span className='flex-col items-center hidden gap-1 text-center md:flex'>
                            <button className='rounded-md px-4 py-2 bg-green text-[#0B111D]'>Get Funded Now</button>
                        </span>

                        <div className="rounded-full aspect-square top-0 right-24 w-[50%] bg-[#0E2038] absolute blur-3xl -z-20"></div>
                        <div className="rounded-full aspect-square top-0 left-0 w-[20%] bg-[#0E2038] absolute blur-3xl -z-20"></div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    )
}