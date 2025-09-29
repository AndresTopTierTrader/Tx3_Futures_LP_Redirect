'use client'

import { useWindowDimensions } from '@/utils/getWindowDimensions';
import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';
import logoTx3 from './assets/Misc/logoTx3.svg'

const Logo = () => (
    <svg width="314" height="49" viewBox="0 0 419 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M94.4229 0.942261H80.1408L58.6216 24.9884L52.4287 13.1113H2.2012L0.430939 23.7786H12.9548L7.31996 57.0499H19.0157L24.6505 23.7786H44.9575L50.8444 33.9453L22.9103 65.5539H37.3244L55.8972 44.0107L63.8784 59.0999H77.6564L63.7403 34.726L94.4229 0.942261Z" fill="url(#paint0_linear_10081_755)" />
        <path d="M166.776 23.7786L168.546 13.1113H138.265L130.872 57.0498H142.562L145.293 40.8522H159.821L161.651 30.1849H147.087L148.167 23.7786H166.776Z" fill="url(#paint1_linear_10081_755)" />
        <path d="M199.516 13.1113L195.028 40.0417C194.818 41.4243 194.289 42.64 193.449 43.6829C192.603 44.7318 191.529 45.5422 190.227 46.1322C188.919 46.7162 187.448 47.0082 185.804 47.0082C184.454 47.0082 183.338 46.746 182.456 46.2216C181.574 45.6972 180.961 44.9165 180.625 43.8676C180.289 42.8248 180.247 41.5435 180.499 40.0358L184.988 13.1053H173.292L168.804 40.0358C168.216 43.6769 168.48 46.8235 169.596 49.4814C170.712 52.1393 172.608 54.1893 175.285 55.6315C177.961 57.0736 181.322 57.7947 185.366 57.7947C189.411 57.7947 192.729 57.1034 195.7 55.7209C198.67 54.3383 201.094 52.324 202.967 49.6661C204.839 47.0082 206.093 43.7961 206.729 40.0298L211.218 13.0993H199.522L199.516 13.1113Z" fill="url(#paint2_linear_10081_755)" />
        <path d="M243.635 37.503L230.547 13.1113H218.161L210.762 57.0498H222.458L226.755 31.6986L240.347 57.0498H252.042L259.435 13.1113H247.74L243.635 37.503Z" fill="url(#paint3_linear_10081_755)" />
        <path d="M293.88 16.0254C290.514 14.1303 286.487 13.1649 281.807 13.1172V13.1053H267.014L259.621 57.0438H274.414C278.08 57.0438 281.525 56.5194 284.747 55.4765C287.97 54.4336 290.838 52.9676 293.346 51.0845C295.855 49.2013 297.931 46.9606 299.575 44.3682C301.22 41.7759 302.294 38.9094 302.798 35.7688C303.554 31.3351 303.122 27.4198 301.502 24.0289C299.881 20.638 297.337 17.9741 293.886 16.0254H293.88ZM291.036 34.3863C290.742 36.1026 290.142 37.6699 289.236 39.0942C288.33 40.5185 287.189 41.7521 285.821 42.795C284.453 43.8438 282.911 44.6483 281.207 45.2145C279.502 45.7806 277.72 46.0607 275.866 46.0607H273.165L276.862 24.0885H279.976C282.545 24.0885 284.717 24.5294 286.487 25.4055C288.258 26.2815 289.542 27.4853 290.346 29.0169C291.144 30.5425 291.378 32.3362 291.042 34.3863H291.036Z" fill="url(#paint4_linear_10081_755)" />
        <path d="M304.562 57.0498H316.258L323.657 13.1113H311.961L304.562 57.0498Z" fill="url(#paint5_linear_10081_755)" />
        <path d="M356.716 37.503L343.628 13.1113H331.236L323.843 57.0498H335.539L339.83 31.6986L353.422 57.0498H365.117L372.516 13.1113H360.821L356.716 37.503Z" fill="url(#paint6_linear_10081_755)" />
        <path d="M397.102 32.4435L395.584 41.2336H405.173C404.879 42.199 404.501 43.0512 404.021 43.7783C403.283 44.8867 402.305 45.727 401.081 46.2872C399.856 46.8533 398.338 47.1334 396.532 47.1334C394.726 47.1334 393.117 46.7699 391.731 46.0369C390.339 45.3039 389.205 44.3325 388.317 43.1168C387.434 41.9011 386.822 40.596 386.486 39.1955C386.15 37.795 386.084 36.4244 386.294 35.0835C386.756 32.2409 387.609 29.9346 388.857 28.1766C390.099 26.4186 391.587 25.1254 393.315 24.2851C395.044 23.4508 396.832 23.0277 398.686 23.0277C399.658 23.0277 400.684 23.2065 401.783 23.5581C402.881 23.9156 403.889 24.4162 404.819 25.0658C405.743 25.7154 406.439 26.502 406.907 27.4198L417.715 22.3364C416.833 20.4532 415.639 18.7608 414.144 17.253C412.65 15.7453 410.784 14.5534 408.552 13.6774C406.319 12.8014 403.643 12.3604 400.522 12.3604C396.688 12.3604 393.261 12.8848 390.249 13.9277C387.236 14.9766 384.656 16.4604 382.508 18.3853C380.359 20.3102 378.607 22.6224 377.263 25.3221C375.913 28.0217 374.947 31.0431 374.359 34.3922C373.854 37.2408 374.01 40.0536 374.833 42.8367C375.655 45.6197 377.011 48.1405 378.907 50.3991C380.803 52.6577 383.15 54.4575 385.952 55.7983C388.755 57.1392 391.905 57.8066 395.404 57.8066C399.994 57.8066 403.745 57.1273 406.655 55.7685C409.56 54.4098 411.846 52.3061 413.514 49.4576C415.177 46.6149 416.371 42.9737 417.085 38.534L418.099 32.4435H397.102Z" fill="url(#paint7_linear_10081_755)" />
        <path d="M119.746 12.9802H90.408L82.2348 21.9788L81.3647 22.98H101.402L88.8298 32.1277L89.0878 38.4804H93.3845C98.0472 38.4804 100.574 39.8451 100.376 42.5447C99.8895 49.2371 85.4813 48.0571 74.7277 44.8688L81.1547 56.3526C97.6211 59.1535 112.773 57.5742 112.689 42.1454C112.647 34.6664 106.406 32.08 103.58 31.3172L117.304 21.8239L119.74 12.9683L119.746 12.9802Z" fill="url(#paint8_linear_10081_755)" />
        <defs>
            <linearGradient id="paint0_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint1_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint2_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint3_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint4_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint5_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint6_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint7_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint8_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
        </defs>
    </svg>
)

const LogoMobile = () => (
    <svg width="157" height="24" viewBox="0 0 419 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M94.4229 0.942261H80.1408L58.6216 24.9884L52.4287 13.1113H2.2012L0.430939 23.7786H12.9548L7.31996 57.0499H19.0157L24.6505 23.7786H44.9575L50.8444 33.9453L22.9103 65.5539H37.3244L55.8972 44.0107L63.8784 59.0999H77.6564L63.7403 34.726L94.4229 0.942261Z" fill="url(#paint0_linear_10081_755)" />
        <path d="M166.776 23.7786L168.546 13.1113H138.265L130.872 57.0498H142.562L145.293 40.8522H159.821L161.651 30.1849H147.087L148.167 23.7786H166.776Z" fill="url(#paint1_linear_10081_755)" />
        <path d="M199.516 13.1113L195.028 40.0417C194.818 41.4243 194.289 42.64 193.449 43.6829C192.603 44.7318 191.529 45.5422 190.227 46.1322C188.919 46.7162 187.448 47.0082 185.804 47.0082C184.454 47.0082 183.338 46.746 182.456 46.2216C181.574 45.6972 180.961 44.9165 180.625 43.8676C180.289 42.8248 180.247 41.5435 180.499 40.0358L184.988 13.1053H173.292L168.804 40.0358C168.216 43.6769 168.48 46.8235 169.596 49.4814C170.712 52.1393 172.608 54.1893 175.285 55.6315C177.961 57.0736 181.322 57.7947 185.366 57.7947C189.411 57.7947 192.729 57.1034 195.7 55.7209C198.67 54.3383 201.094 52.324 202.967 49.6661C204.839 47.0082 206.093 43.7961 206.729 40.0298L211.218 13.0993H199.522L199.516 13.1113Z" fill="url(#paint2_linear_10081_755)" />
        <path d="M243.635 37.503L230.547 13.1113H218.161L210.762 57.0498H222.458L226.755 31.6986L240.347 57.0498H252.042L259.435 13.1113H247.74L243.635 37.503Z" fill="url(#paint3_linear_10081_755)" />
        <path d="M293.88 16.0254C290.514 14.1303 286.487 13.1649 281.807 13.1172V13.1053H267.014L259.621 57.0438H274.414C278.08 57.0438 281.525 56.5194 284.747 55.4765C287.97 54.4336 290.838 52.9676 293.346 51.0845C295.855 49.2013 297.931 46.9606 299.575 44.3682C301.22 41.7759 302.294 38.9094 302.798 35.7688C303.554 31.3351 303.122 27.4198 301.502 24.0289C299.881 20.638 297.337 17.9741 293.886 16.0254H293.88ZM291.036 34.3863C290.742 36.1026 290.142 37.6699 289.236 39.0942C288.33 40.5185 287.189 41.7521 285.821 42.795C284.453 43.8438 282.911 44.6483 281.207 45.2145C279.502 45.7806 277.72 46.0607 275.866 46.0607H273.165L276.862 24.0885H279.976C282.545 24.0885 284.717 24.5294 286.487 25.4055C288.258 26.2815 289.542 27.4853 290.346 29.0169C291.144 30.5425 291.378 32.3362 291.042 34.3863H291.036Z" fill="url(#paint4_linear_10081_755)" />
        <path d="M304.562 57.0498H316.258L323.657 13.1113H311.961L304.562 57.0498Z" fill="url(#paint5_linear_10081_755)" />
        <path d="M356.716 37.503L343.628 13.1113H331.236L323.843 57.0498H335.539L339.83 31.6986L353.422 57.0498H365.117L372.516 13.1113H360.821L356.716 37.503Z" fill="url(#paint6_linear_10081_755)" />
        <path d="M397.102 32.4435L395.584 41.2336H405.173C404.879 42.199 404.501 43.0512 404.021 43.7783C403.283 44.8867 402.305 45.727 401.081 46.2872C399.856 46.8533 398.338 47.1334 396.532 47.1334C394.726 47.1334 393.117 46.7699 391.731 46.0369C390.339 45.3039 389.205 44.3325 388.317 43.1168C387.434 41.9011 386.822 40.596 386.486 39.1955C386.15 37.795 386.084 36.4244 386.294 35.0835C386.756 32.2409 387.609 29.9346 388.857 28.1766C390.099 26.4186 391.587 25.1254 393.315 24.2851C395.044 23.4508 396.832 23.0277 398.686 23.0277C399.658 23.0277 400.684 23.2065 401.783 23.5581C402.881 23.9156 403.889 24.4162 404.819 25.0658C405.743 25.7154 406.439 26.502 406.907 27.4198L417.715 22.3364C416.833 20.4532 415.639 18.7608 414.144 17.253C412.65 15.7453 410.784 14.5534 408.552 13.6774C406.319 12.8014 403.643 12.3604 400.522 12.3604C396.688 12.3604 393.261 12.8848 390.249 13.9277C387.236 14.9766 384.656 16.4604 382.508 18.3853C380.359 20.3102 378.607 22.6224 377.263 25.3221C375.913 28.0217 374.947 31.0431 374.359 34.3922C373.854 37.2408 374.01 40.0536 374.833 42.8367C375.655 45.6197 377.011 48.1405 378.907 50.3991C380.803 52.6577 383.15 54.4575 385.952 55.7983C388.755 57.1392 391.905 57.8066 395.404 57.8066C399.994 57.8066 403.745 57.1273 406.655 55.7685C409.56 54.4098 411.846 52.3061 413.514 49.4576C415.177 46.6149 416.371 42.9737 417.085 38.534L418.099 32.4435H397.102Z" fill="url(#paint7_linear_10081_755)" />
        <path d="M119.746 12.9802H90.408L82.2348 21.9788L81.3647 22.98H101.402L88.8298 32.1277L89.0878 38.4804H93.3845C98.0472 38.4804 100.574 39.8451 100.376 42.5447C99.8895 49.2371 85.4813 48.0571 74.7277 44.8688L81.1547 56.3526C97.6211 59.1535 112.773 57.5742 112.689 42.1454C112.647 34.6664 106.406 32.08 103.58 31.3172L117.304 21.8239L119.74 12.9683L119.746 12.9802Z" fill="url(#paint8_linear_10081_755)" />
        <defs>
            <linearGradient id="paint0_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint1_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint2_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint3_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint4_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint5_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint6_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint7_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
            <linearGradient id="paint8_linear_10081_755" x1="-13.3711" y1="33.1229" x2="418.081" y2="52.459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#45D1FF" />
                <stop offset="1" stop-color="#0052B4" />
            </linearGradient>
        </defs>
    </svg>
)

export function NowLive() {

    return (
        <a target='_blank'
            href="https://tx3funding.com/en/challenges">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex flex-row items-center justify-start w-full h-24 bg-[#0B111D] shadow-2xl cursor-pointer rounded-t-2xl md:justify-center md:h-20"
                >
                    <div className='relative flex items-center justify-center w-full h-full p-2 overflow-hidden md:gap-20'>
                        <span className='flex flex-col items-center text-xl italic md:text-4xl md:flex-row md:gap-4'>
                            <Image src={logoTx3} alt='logo tx3 funding' className='md:max-w-sm md:w-full w-[240px] -ml-8 md:-ml-24 md:mt-2' />
                            <p className='-mt-2 text-2xl md:text-4xl md:mt-0'>is now <span className='font-bold'>LIVE</span></p>
                        </span>

                        <span className='flex flex-col items-center gap-1 text-center'>
                            Pick Your Challenge
                            <div className='flex flex-wrap items-center justify-center gap-2'>
                                <button className='rounded-md px-4 py-2 border border-[#717892] bg-gradient-to-br from-transparent to-green/40 via-transparent text-sm w-[80px]'>Starter</button>
                                <button className='rounded-md px-4 py-2 border border-green bg-gradient-to-br from-transparent to-green/40 via-transparent text-sm w-[80px] text-green'>Pro</button>
                            </div>
                        </span>

                        <div className="rounded-full aspect-square bottom-0 left-0 w-[244px] bg-black md:bg-[#45D1FF]/20 absolute blur-3xl -z-20"></div>
                        <div className="rounded-full aspect-square top-0 right-0 w-[244px] bg-[#45D1FF]/20 absolute blur-3xl -z-20"></div>
                        <div className="rounded-full aspect-square -bottom-24 right-[44%] w-[112px] bg-[#45D1FF]/30 absolute blur-2xl -z-20"></div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    )
}