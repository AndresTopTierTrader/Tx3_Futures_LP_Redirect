"use client"

import { NoLinkButton } from '@/components/common/Buttons/Buttons'
import { SectionLayout } from '@/components/common/SectionLayout'
import React from 'react'
import Image from 'next/image'
import liveAccount from './assets/phoneBoy.webp'

const steps = [
    {
        number: '1',
        title: 'Initial Evaluation',
        text: 'Sign up to receive your account and start trading in as little as 5 minutes.'
    },
    {
        number: '2',
        title: 'Funded Stage',
        text: 'Trade your account using your strategy and following our trading guidelines.'
    },
    {
        number: '3',
        title: 'Live Active Account',
        text: 'Pass our challenge and you can trade a funded account in as little as 2 days.'
    },
]

const MedalIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 22.5C23.5919 22.5 28.125 18.1348 28.125 12.75C28.125 7.36522 23.5919 3 18 3C12.4081 3 7.875 7.36522 7.875 12.75C7.875 18.1348 12.4081 22.5 18 22.5Z" fill="#717892" />
        <path d="M23.685 23.4149C24.18 23.1599 24.75 23.5349 24.75 24.0899V31.3649C24.75 32.7149 23.805 33.3749 22.635 32.8199L18.615 30.9149C18.27 30.7649 17.73 30.7649 17.385 30.9149L13.365 32.8199C12.195 33.3599 11.25 32.6999 11.25 31.3499L11.28 24.0899C11.28 23.5349 11.865 23.1749 12.345 23.4149C14.04 24.2699 15.96 24.7499 18 24.7499C20.04 24.7499 21.975 24.2699 23.685 23.4149Z" fill="#717892" />
    </svg>
)

const Arrow = () => (
    <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM1 9H28V7H1V9Z" fill="#717892" />
    </svg>
)

export function LiveAccount() {
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
        <SectionLayout>
            <h4 className="text-center text-3xl md:text-5xl">Get a Live Trading Account<br /> in 3 Simple Steps</h4>

            <div className='flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-[372px,auto,auto] gap-4 mx-auto max-w-[1400px] lg:px-12 mt-12 md:mt-24'>
                <div className='grid grid-cols-1 lg:grid-cols-3 rounded-lg border border-[#717892] divide-y lg:divide-y-0 lg:divide-x divide-[#717892] bg-gradient-to-br from-[#122620]/50 to-black/0 col-span-3 row-span-2'>
                    {
                        steps.map(({ title, number, text }) => (
                            <article key={number} className='row-span-2 flex flex-col justify-between px-6 py-4 relative'>
                                <div className='flex flex-col gap-2 text-balance'>
                                    <span className='text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br w-fit from-[#0052B4] to-[#45D1FF]'>
                                        {number}
                                    </span>
                                    <div className='font-medium text-lg md:text-2xl flex justify-between gap-4 '>
                                        {title}
                                        {
                                            number != '3'
                                            &&
                                            <span className='mt-2 hidden md:block'>
                                                <Arrow />
                                            </span>
                                        }
                                    </div>

                                    {
                                        number === '3'
                                        &&
                                        <span className='absolute top-4 right-4'>
                                            <MedalIcon />
                                        </span>
                                    }
                                </div>

                                <p className='text-[#A2ACCF]'>{text}</p>
                            </article>
                        ))
                    }
                </div>
                <div className='lg:col-span-2 row-span-3 relative flex jutify-center'>
                    <Image src={liveAccount} alt='man holding phone' className='w-full h-fit md:absolute -z-10' />
                    <div className="rounded-full aspect-square top-0 left-0 w-[244px] bg-green/20 absolute blur-3xl -z-20"></div>
                    <div className="rounded-full aspect-square top-0 right-0 w-[244px] bg-[#45D1FF]/20 absolute blur-3xl -z-20"></div>
                </div>

                <div className='col-span-3 md:py-8 font-medium text-lg md:text-2xl'>
                    Benefits of a Live Account
                </div>

                <div>
                    <Card title={'Trailing Drawdown'} text={'Trailing maximum loss limit to help manage risk"'} />
                </div>

                <div className='lg:col-span-2'>
                    <Card title={'Scaling Opportunities'} text={'Consistent performance may lead to increased contract size, enhancing profit potential.'} />
                </div>

                <div className='lg:col-span-2'>
                    <Card title={'Customizable Daily Loss Limit'} text={'Set a daily loss limit based on your own risk tolerance and trading style.'} />
                </div>

                <div className='flex lg:hidden items-center justify-center'>
                </div>
            </div>

            <span className='grid place-items-center mt-12'>
                <NoLinkButton 
                    x={'CTA - Live Account'} 
                    icon
                    onClick={scrollToChallenge}
                >
                    Get Your Plan Now
                </NoLinkButton>
            </span>
        </SectionLayout>
    )
}

function Card({ title, text }) {
    return (
        <article className='flex flex-col p-4 gap-4 rounded-lg border border-[#717892] bg-gradient-to-br from-[#60F94B]/10 to-black/0'>
            <span className='text-transparent bg-clip-text bg-gradient-to-br w-fit from-[#0052B4] to-[#45D1FF] text-lg md:text-2xl'>{title}</span>
            <p>{text}</p>
        </article>
    )
}