'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowDimensions } from '@/utils/getWindowDimensions';
import { track } from '@vercel/analytics/react';
import { useState, useEffect } from 'react';

//Images
import Image from 'next/image';
import desktopBg from './assets/NewInFutures/bg_desktop.webp'
import mobileBg from './assets/NewInFutures/bg_mobile.webp'
import icon from "./assets/Misc/Tx3Icon.svg"

export function NewInFutures() {


    const commit = ''
    const width = useWindowDimensions().width;
    const [currentBg, setCurrentBg] = useState(mobileBg);

    useEffect(() => {
        setCurrentBg(width > 500 ? desktopBg : mobileBg)
    }, [width]);

    const bgImageStyle = {
        background: "black",
        backgroundPosition: "center",
        backgroundSize: 'cover',
        backgroundImage: `url(${currentBg.src})`,
    };

    return (
        <a href="https://www.tx3funding.com/en/new-to-tx3" rel="noopener noreferrer" target='_blank'
            onClick={() => { track('Banner - New In Futures?') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex flex-col items-center justify-center gap-1 p-4 overflow-hidden text-center shadow-2xl cursor-pointer rounded-t-2xl h-36 md:h-24"
                    style={bgImageStyle}
                >
                    <h4 className='relative z-10 -ml-16 text-2xl italic font-medium md:ml-0 md:text-4xl'>New to <strong className='font-extrabold tracking-wide'>TX3 FUNDING?</strong></h4>

                    <p className='-ml-16 md:ml-0 relative z-10 text-md font-normal md:text-lg px-6 bg-gradient-to-br from-[#358639] rounded-md border border-[#65FD51]/50 to-transparent py-1 max-w-[300px] md:max-w-full text-balance'>Signup today and receive <strong className='font-black italic text-[#65FD51] mr-1'>20% OFF</strong> your first purchase</p>

                    <span className='z-10 text-[#0B111D] bg-[#65FD51] px-4 py-2 rounded-lg absolute right-44 hidden lg:block'>Sign Up Now</span>

                    <Image src={icon} alt='tx3 logo' className='w-full max-w-[332px] absolute -top-6 right-12 z-0 hidden md:block' />
                    <Image src={icon} alt='tx3 logo' className='w-full max-w-[332px] absolute -top-6 left-12 z-0 hidden md:block' />
                </motion.div>
            </AnimatePresence>
        </a>
    )
}