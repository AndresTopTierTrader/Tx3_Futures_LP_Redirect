'use client'

//Functions & Hooks
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion';

//Images
import imgOne from "./assets/carousel/one.png"
import imgTwo from "./assets/carousel/two.png"
import imgThree from "./assets/carousel/three.png"
import imgFour from "./assets/carousel/four.png"
import imgFive from "./assets/carousel/five.png"

const carouselImages = [
    { src: imgOne, alt: 'First image' },
    { src: imgTwo, alt: 'Second image' },
    { src: imgThree, alt: 'Third image' },
    { src: imgFour, alt: 'Fourth image' },
    { src: imgFive, alt: 'Fifth image' },
];

const transition = { type: 'spring', stiffness: 300, damping: 30 };
const autoPlayInterval = 5000;

function Carousel() {

    const [currentPage, setCurrentPage] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setIsExiting(true); // Start the exit phase
        }, autoPlayInterval);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);


    return (
        <div className='text-white w-full mb:max-w-[1000px] '>

            {/* Desktop images */}
            <div className='hidden mb:flex justify-around flex-row w-full pb-36'>
                <Image src={imgOne} loading="lazy" width={160} height={160} alt="image-in-carousel" />
                <Image src={imgTwo} loading="lazy" width={160} height={160} alt="image-in-carousel" />
                <Image src={imgThree} loading="lazy" width={160} height={160} alt="image-in-carousel" />
                <Image src={imgFour} loading="lazy" width={160} height={160} alt="image-in-carousel" />
                <Image src={imgFive} loading="lazy" width={160} height={160} alt="image-in-carousel" />
            </div>


            {/* Mobile Carousel */}
            <div className='flex mb:hidden flex-col items-center pb-10'>
                <AnimatePresence
                    initial={false}
                    onExitComplete={() => {
                        // Once the exit is complete, move to the next image and reset exiting state
                        setCurrentPage((prevPage) => (prevPage + 1) % carouselImages.length);
                        setIsExiting(false);
                    }}
                >
                    {!isExiting && (
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.0 }}
                            className='h-[440px]'
                        >
                            <Image
                                src={carouselImages[currentPage].src}
                                alt={carouselImages[currentPage].alt}
                                loading="lazy"
                                width={300}
                                height={300}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex justify-center p-4">
                    {carouselImages.map((image, index) => (
                        <span
                            key={index}
                            className={`block cursor-pointer rounded-full w-2 h-2 m-1 ${index === currentPage ? 'bg-ttorange' : 'bg-gray-800'}`}
                            onClick={() => {
                                setIsExiting(true);
                                setTimeout(() => setCurrentPage(index), 5000); // Wait for exit to complete
                            }}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel