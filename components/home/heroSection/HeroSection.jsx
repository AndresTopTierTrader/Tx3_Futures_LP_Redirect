'use client'

import { NoLinkButton } from "@/components/common/Buttons/Buttons";
import { SectionLayout } from "@/components/common/SectionLayout";
import heroImg from './assets/heroImg.webp'
import square1 from './assets/square1.webp'
import square2 from './assets/square2.webp'
import square3 from './assets/square3.webp'
import Image from "next/image";

export function HeroSection() {

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
        <SectionLayout bgColor='overflow-hidden' className='py-24 md:py-28 flex flex-col gap-8 md:gap-0 md:flex-row justify-center items-center relative'>
            <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                <h1 className="text-4xl md:text-8xl font-light">We Fund <br /><span className="font-medium">Futures Traders.</span></h1>
                <p className="max-w-sm">Sign up and in 10 minutes start managing a $100K account and start  earning.</p>
                <NoLinkButton 
                    trackName={'CTA - Home Hero'} 
                    icon
                    onClick={scrollToChallenge}
                >
                    Get Your Plan
                </NoLinkButton>
            </div>

            <picture>
                <Image src={heroImg} alt="hero image for futures" className="w-full md:w-[472px]" />
            </picture>

            <Image src={square1} alt="background image" className="absolute -right-10 bottom-0 md:-bottom-24 -z-10 w-[532px]"/>
            <Image src={square2} alt="background image" className="hidden md:block absolute left-12 -bottom-12 -z-10"/>
            <Image src={square3} alt="background image" className="absolute -left-24 md:left-6 -top-20 md:-top-12 -z-10 w-[332px]"/>

            <div className="rounded-full aspect-square w-[400px] bg-green/30 absolute -z-10 blur-[200px] right-44 bottom-0"></div>
            <div className="rounded-full aspect-square w-[300px] bg-[#45D1FF33]/30 absolute -z-10 blur-[100px] left-[600px] bottom-0"></div>
        </SectionLayout>
    )
}