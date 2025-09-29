'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { useState } from "react";
import Image from 'next/image';

// Images
import DiscordIcon from './assets/Discord.svg';
import TwitterIcon from './assets/Twitter.svg';
import Facebook from './assets/Facebook.svg';
import Instagram from './assets/Instagram.svg';
import Youtube from './assets/Youtube.svg';
import TikTok from './assets/TikTok.svg';

// Images with Color
import DiscordIconColor from './assets/DiscordColor.svg';
import TwitterIconColor from './assets/TwitterColor.svg';
import FacebookColor from './assets/FacebookColor.svg';
import InstagramColor from './assets/InstagramColor.svg';
import YoutubeColor from './assets/YoutubeColor.svg';
import TikTokColor from './assets/TikTokColor.svg';

export function Community() {

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const socialIcons = [
        { id: 'instagram', default: Instagram, color: InstagramColor, alt: 'Instagram Icon', link: "https://www.instagram.com/tx3funding?igsh=MTM5a2RwbHlldDg1Yg==" },
        { id: 'discord', default: DiscordIcon, color: DiscordIconColor, alt: 'Discord Icon', link: "https://discord.gg/fRUsCFuhUf" },
        // { id: 'youtube', default: Youtube, color: YoutubeColor, alt: 'Youtube Icon', link: "https://www.youtube.com/@toptier.trader" },
        { id: 'twitter', default: TwitterIcon, color: TwitterIconColor, alt: 'Twitter Icon', link: "https://x.com/tx3funding?s=21&t=_BWk6eOLrVtbr0xENajeFA" },
        { id: 'facebook', default: Facebook, color: FacebookColor, alt: 'Facebook Icon', link: "https://www.facebook.com/share/1C95DbebGX/?mibextid=wwXIfr" },
        // { id: 'tiktok', default: TikTok, color: TikTokColor, alt: 'Tiktok Icon', link: "https://www.tiktok.com/@toptier.trader" }
    ];

    const firstRow = socialIcons.slice(0, 3);
    const secondRow = socialIcons.slice(3);

    return (
        <SectionLayout bgColor='bg-[#00161D] overflow-hidden' className='md:py-32 relative'>
            <div className="aspect-square rounded-full w-[300px] bg-[#45D1FF33]/30 absolute top-6 -left-36 blur-[200px]"></div>

            <h2 className="text-center grid place-items-center text-3xl md:text-5xl text-white">Join The TX3 Funding <br /> Community</h2>

            <section className="flex flex-col mb:flex-row justify-center mt-16">
                <div className="flex justify-center flex-row">
                    {firstRow.map((icon) => (
                        <a href={icon.link} key={icon.alt} target='_blank'>
                            <div
                                key={icon.id}
                                className="relative mx-4 w-20 h-20"
                                onMouseEnter={() => setHoveredIcon(icon.id)}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >

                                <Image
                                    src={icon.default}
                                    alt={icon.alt}
                                    className={`absolute cursor-pointer top-0 left-0 transition-opacity duration-300 ${hoveredIcon === icon.id ? 'opacity-0' : 'opacity-100'
                                        }`}
                                    loading="lazy"
                                    width={80}
                                    height={80}
                                />
                                <Image
                                    src={icon.color}
                                    alt={icon.alt}
                                    className={`absolute cursor-pointer top-0 left-0 transition-opacity duration-300 ${hoveredIcon === icon.id ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    loading="lazy"
                                    width={80}
                                    height={80}
                                />
                            </div>
                        </a>
                    ))}
                </div>
                <div className="flex flex-row justify-center mb:mt-0 mt-6">
                    {secondRow.map((icon) => (
                        <a href={icon.link} key={icon.alt} target='_blank'>
                            <div
                                key={icon.id}
                                className="relative mx-4 w-20 h-20"
                                onMouseEnter={() => setHoveredIcon(icon.id)}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >
                                <Image
                                    src={icon.default}
                                    alt={icon.alt}
                                    className={`absolute cursor-pointer top-0 left-0 transition-opacity duration-300 ${hoveredIcon === icon.id ? 'opacity-0' : 'opacity-100'
                                        }`}
                                    loading="lazy"
                                    width={80}
                                    height={80}
                                />
                                <Image
                                    src={icon.color}
                                    alt={icon.alt}
                                    className={`absolute cursor-pointer top-0 left-0 transition-opacity duration-300 ${hoveredIcon === icon.id ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    loading="lazy"
                                    width={80}
                                    height={80}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <div className="aspect-square rounded-full w-[300px] bg-[#4BE736]/30 absolute top-6 -right-36 blur-[200px]"></div>

        </SectionLayout>
    )
}