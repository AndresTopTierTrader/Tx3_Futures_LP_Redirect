'use client'

import Logo from "@/app/[locale]/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { DefaultButton, PrimaryButton } from "../Buttons/Buttons";
import { track } from "@vercel/analytics/react";
import { FaArrowRight } from "react-icons/fa6";

const Menu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
)

const X = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
)

const User = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
)

export function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const path = usePathname()
    const [isOpen, setIsOpened] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0);
    const [currentNavState, setCurrentNavState] = useState("");

    useEffect(() => {
        // Verificar si estamos en el cliente (navegador)
        if (typeof window !== 'undefined') {
            setScreenWidth(window.innerWidth); // Establecer el ancho de la pantalla en el cliente
        }

        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setScreenWidth(window.innerWidth);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (screenWidth >= 768) {
            setIsOpened(false);
        }
    }, [screenWidth]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Limpia el event listener al desmontar
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => { setIsOpened(false) }, [path])

    return (
        <motion.header
            initial={{
                y: -200, // Posición inicial, fuera de la pantalla hacia arriba
                backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            animate={{
                y: 0, // Posición final, posición original
                backgroundColor: isScrolled || isOpen ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)",
            }}
            transition={{
                duration: 0.3, // Duración de la animación en segundos
                ease: "easeOut", // Curva de animación
            }}
            className={`w-full bg-black/40 backdrop-blur-sm md:bg-black/70 text-sm fixed z-50 top-0 px-7 md:px-[72px] py-2 ${isOpen ? 'pb-12' : ''}`}>
            <div className="w-full mx-auto max-w-[1800px] flex flex-wrap items-center justify-between">

                <Link onClick={() => setCurrentNavState('home')} href='/'>
                    <Logo className='w-[112px] md:w-[164px]' />
                </Link>

                <nav className="items-center hidden gap-6 nav:flex">
                    <NavOptions currentNavState={currentNavState} setCurrentNavState={setCurrentNavState} />
                </nav>

                <div className="flex items-center gap-4">
                    <span className="hidden md:block">
                        <DefaultButton trackName={'Login - Navbar'} href="https://app.tx3funding.com/login">
                            Log in
                        </DefaultButton>
                    </span>
                    <Link href='./challenges' onClick={() => {track('Navbar - CTA')}} className="flex flex-row items-center px-4 py-2 rounded-md bg-green text-background">
                        Get Started
                        <FaArrowRight className="w-3 h-3 ml-1" />
                    </Link>

                    {/* mobile nav */}

                    <nav className="grid nav:hidden place-items-center">
                        <button className="h-fit" onClick={() => setIsOpened(!isOpen)}>
                            {
                                isOpen ? <X /> : <Menu />
                            }
                        </button>
                    </nav>
                </div>

                {
                    isOpen ?
                        <div className="flex flex-col h-full gap-6 pt-10 nav:hidden basis-full">
                            <NavOptions currentNavState={currentNavState} setCurrentNavState={setCurrentNavState} />
                        </div>
                        : <></>
                }
            </div>
        </motion.header>
    )
}

function NavOptions({currentNavState, setCurrentNavState}) {

    const selectedStyle = 'text-green flex items-center justify-between'
    const unselectedStyle = 'transition-colors hover:text-green flex items-center justify-between'

    const Chevron = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
    )

    const navOptions = [
        {
            label: 'How It Works',
            href: 'how-it-works'
        },
        {
            label: 'Forex to Futures',
            href: 'forex-to-futures'
        },
        {
            label: 'Affiliates Program',
            href: 'affiliates-program'
        },
        {
            label: 'Blog',
            href: 'blog'
        },
        {
            label: 'About',
            href: 'about'
        },
        {
            label: 'Contact',
            href: 'contact'
        },
        {
            label: 'FAQs',
            href: 'https://help.tx3funding.com/en/'
        },
    ]

    return (
        <>
            {
                navOptions.map(({ label, href }) => (
                    <Link key={label} href={label === 'FAQs' ? `${href}` : `/${href}`} className={currentNavState === href ? selectedStyle : unselectedStyle} onClick={() => setCurrentNavState(href)}>
                        {label}
                        <span className="nav:hidden">
                            <Chevron />
                        </span>
                    </Link>
                ))
            }
            <Link key='login' href='https://app.tx3funding.com/login' className='flex items-center justify-between transition-colors hover:text-green md:hidden'>
                Log in
                <span className="nav:hidden">
                    <User />
                </span>
            </Link>
        </>
    )
}