'use client'

import { NoLinkButton } from "@/components/common/Buttons/Buttons";
import { SectionLayout } from "@/components/common/SectionLayout";

const ClockIcon = () => (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.875 15.5C3.875 17.0266 4.17569 18.5383 4.7599 19.9487C5.34411 21.3591 6.2004 22.6406 7.27988 23.7201C8.35936 24.7996 9.64089 25.6559 11.0513 26.2401C12.4617 26.8243 13.9734 27.125 15.5 27.125C17.0266 27.125 18.5383 26.8243 19.9487 26.2401C21.3591 25.6559 22.6406 24.7996 23.7201 23.7201C24.7996 22.6406 25.6559 21.3591 26.2401 19.9487C26.8243 18.5383 27.125 17.0266 27.125 15.5C27.125 12.4169 25.9002 9.45999 23.7201 7.27988C21.54 5.09977 18.5831 3.875 15.5 3.875C12.4169 3.875 9.45999 5.09977 7.27988 7.27988C5.09977 9.45999 3.875 12.4169 3.875 15.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 9.04175V15.5001L19.375 19.3751" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const SunIcon = () => (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5001_2042)">
            <g clipPath="url(#clip1_5001_2042)">
                <path d="M4.125 14.5H5.5M16.5 2.125V3.5M27.5 14.5H28.875M16.5 25.5V26.875M7.7 5.7L8.6625 6.6625M25.3 5.7L24.3375 6.6625M24.3375 22.3375L25.3 23.3M8.6625 22.3375L7.7 23.3M11 14.5C11 15.9587 11.5795 17.3576 12.6109 18.3891C13.6424 19.4205 15.0413 20 16.5 20C17.9587 20 19.3576 19.4205 20.3891 18.3891C21.4205 17.3576 22 15.9587 22 14.5C22 13.0413 21.4205 11.6424 20.3891 10.6109C19.3576 9.57946 17.9587 9 16.5 9C15.0413 9 13.6424 9.57946 12.6109 10.6109C11.5795 11.6424 11 13.0413 11 14.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_5001_2042">
                <rect width="29.8258" height="31" fill="white" transform="translate(0.977295)" />
            </clipPath>
            <clipPath id="clip1_5001_2042">
                <rect width="31" height="31" fill="white" transform="translate(2)" />
            </clipPath>
        </defs>
    </svg>
)

const CalendarIcon = () => (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5001_2030)">
            <path d="M15.5 15.5001H21.9583V21.9584H15.5V15.5001ZM24.5417 3.87508H23.25V1.29175H20.6667V3.87508H10.3333V1.29175H7.75V3.87508H6.45833C5.0375 3.87508 3.875 5.03758 3.875 6.45842V24.5417C3.875 25.9626 5.0375 27.1251 6.45833 27.1251H24.5417C25.9625 27.1251 27.125 25.9626 27.125 24.5417V6.45842C27.125 5.03758 25.9625 3.87508 24.5417 3.87508ZM24.5417 6.45842V9.04175H6.45833V6.45842H24.5417ZM6.45833 24.5417V11.6251H24.5417V24.5417H6.45833Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_5001_2030">
                <rect width="31" height="31" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

const CoinsIcon = () => (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5001_2051)">
            <g clipPath="url(#clip1_5001_2051)">
                <path d="M10 13.675C10 14.7338 10.825 15.6 11.8287 15.6H13.8912C14.7712 15.6 15.4862 14.8438 15.4862 13.9225C15.4862 12.9188 15.0462 12.5613 14.4 12.3275L11.1 11.1725C10.44 10.9388 10 10.5813 10 9.57752C10 8.65627 10.715 7.90002 11.595 7.90002H13.6575C14.675 7.91377 15.5 8.76628 15.5 9.82503" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.75 15.6687V16.6862" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.75 6.81372V7.88622" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.7362 22.7225C18.8038 22.7225 23.7225 17.8038 23.7225 11.7362C23.7225 5.66871 18.8038 0.75 12.7362 0.75C6.66871 0.75 1.75 5.66871 1.75 11.7362C1.75 17.8038 6.66871 22.7225 12.7362 22.7225Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.8474 25.335C18.0849 27.0812 20.1062 28.2225 22.4162 28.2225C26.1699 28.2225 29.2224 25.17 29.2224 21.4163C29.2224 19.1338 28.0949 17.1125 26.3762 15.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_5001_2051">
                <rect width="31" height="31" fill="white" />
            </clipPath>
            <clipPath id="clip1_5001_2051">
                <rect width="31" height="31" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

const keys = [
    {
        icon: <ClockIcon/>,
        title: 'No Set Time Limit',
        text: "We don't rush you, take your time.",
        small: ''
    },
    {
        icon: <SunIcon/>,
        title: 'Trade Any Day. 22 Hours a Day',
        text: 'Trade whenever you want.',
        small: ''
    },
    {
        icon: <ClockIcon/>,
        title: 'Lightning-Fast Payouts',
        text: 'We process payouts in as little as 24-48 hours after request.',
        small: ''
    },
    {
        icon: <CalendarIcon/>,
        title: 'No Minimun Trading Days',
        text: 'Trade whenever you want.',
        small: ''
    },
    {
        icon: <CoinsIcon/>,
        title: '100% of Initial Profits',
        text: 'First $10,000 in profits is 100% yours.',
        small: 'After that, a 90/10 profit split applies.'
    },
    {
        icon: '',
        title: 'Is it Really That Simple?',
        text: 'Yes. Focus on what matters most. Earning BIG PROFITS',
        small: ''
    },
]

export function WhatTradersWant() {
    const scrollToChallenge = () => {
        const element = document.getElementById('challenge-box');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    return (
        <SectionLayout className='flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-24 relative'>
            <div className="flex flex-col gap-4 md:gap-8">
                <span className="text-3xl md:text-5xl">We Know <br />What Traders Want.</span>
                <p className="text-modest max-w-sm">Our mission is to provide the capital, tools, and support necessary to help you reach your trading goals with confidence.</p>
                <NoLinkButton 
                    trackName={'CTA - What Traders Want'} 
                    icon
                    onClick={scrollToChallenge}
                >
                    Get Your Plan Now
                </NoLinkButton>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <ul className="flex flex-col gap-4">
                    {
                        keys.slice(0, 3).map(({ icon, title, text, small }) => (
                            <KeyCard key={title} icon={icon} text={text} title={title} small={small} />
                        ))
                    }
                </ul>
                <ul className="flex flex-col gap-4 md:mt-20">
                    {
                        keys.slice(3).map(({ icon, title, text, small }) => (
                            <KeyCard key={title} icon={icon} text={text} title={title} small={small} />
                        ))
                    }
                </ul>
            </div>

            <div className="aspect-square rounded-full w-[300px] bg-[#45D1FF33]/30 absolute -left-36 blur-[200px]"></div>
        </SectionLayout>
    )
}

function KeyCard({ icon, title, text, small }) {

    const specialCard = title === keys[keys.length - 1].title

    return (
        <li className={`md:max-w-[324px] text-balance p-4 md:p-6 flex flex-col gap-2 rounded-lg border ${specialCard ? 'border-green bg-gradient-to-br from-[#0B111D] to-[#235826]' : 'border-[#717892] bg-gradient-to-br from-[#60F94B26]/5 to-black'}`}>
            {icon}
            <span className={`${specialCard ? 'text-white' : 'text-cyan'} text-lg md:text-2xl`}>{title}</span>
            <p>{text}</p>
            <small className="md:-mt-1 text-modest">{small}</small>
        </li>
    )
}