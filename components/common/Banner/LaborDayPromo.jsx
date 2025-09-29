'use client'

import { useWindowDimensions } from '@/utils/getWindowDimensions';
import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';

//Images
import desktopBg from './assets/LaborDayPromo/desktop_bg.webp'
import mobileBg from './assets/LaborDayPromo/mobile_bg.webp'

//Images 
import desktopEn from './assets/LaborDayPromo/desktop_en.svg'
import mobileEn from './assets/LaborDayPromo/mobile_en.svg'

export function LaborDayPromo() {
    const width = useWindowDimensions().width;
    const [currentBg, setCurrentBg] = useState(mobileBg);

    useEffect(() => {
        setCurrentBg(width > 500 ? desktopBg : mobileBg)
    }, [width]);

    const bgImageStyle = {
        background: "black",
        backgroundPosition: "center",
        backgroundImage: `url(${currentBg.src})`,
    };
    return (
        <a href={`https://www.tx3funding.com/en/challenges`}
            onClick={() => { track('Banner - LaborDayPromo - STARTER25') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex flex-row items-center justify-start w-full h-24 pl-3 -mb-1 shadow-2xl cursor-pointer mb:mb-0 rounded-t-2xl mb:pl-0 mb:justify-center mb:h-20 " style={bgImageStyle}
                >
                    {/* Mobile */}
                    <div className="flex flex-row items-center w-full mb:hidden ">
                        <section className='flex flex-col items-center mt-1 -ml-3' >
                          <Image src={mobileEn} alt="decoration" width={350} height={100} className='object-contain ml-5' />
                        </section>
                    </div>

                    {/* Desktop */}
                    <div className="relative items-center hidden mb:flex mb:flex-row ">
                        <Image src={desktopEn} alt="decoration" width={1300} height={120} className='object-contain ' /> 
                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    );
}
