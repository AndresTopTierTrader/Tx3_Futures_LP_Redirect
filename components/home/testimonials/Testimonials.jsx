'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { useState } from "react";

const VolumeUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-volume"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
)

const VolumeDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-volume-off"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464" /><path d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615" /><path d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664" /><path d="M3 3l18 18" /></svg>
)

export function Testimonials() {

    const [soundEnabledIndex, setSoundEnabledIndex] = useState(null);

    // Handle click on a video
    const handleVideoClick = (index) => {
        // If clicking the currently unmuted video, mute it
        if (soundEnabledIndex === index) {
            setSoundEnabledIndex(null);
        } else {
            // Otherwise enable sound for the clicked video
            setSoundEnabledIndex(index);
        }
    };

    const videoSources = [
        '/videos/shannonWhite.webm',
        '/videos/aaronWong.webm',
        '/videos/michaelRivers.webm',
        '/videos/jacquesEtienne.webm',
        '/videos/bernardoFlores.webm',
        '/videos/nusky.webm',
    ];

    return (
        <SectionLayout className='py-24 items-center relative'>
            <h2 className="text-center grid place-items-center text-3xl md:text-5xl">Testimonials Directly From <br /> Our Community</h2>

            <div className='flex items-center gap-6 mt-10 md:mt-20 overflow-x-scroll pb-4'>
                {
                    videoSources.map((video, index) => (
                        <div key={index} className='group relative rounded-lg overflow-hidden aspect-[9/16] w-64 min-w-[256px] border border-[#717892] grid place-items-center'>
                            <video autoPlay loop muted={soundEnabledIndex !== index} playsInline preload="metadata" className='pointer-events-none w-full' src={video} />

                            <button onClick={() => handleVideoClick(index)} className="md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all absolute top-2 right-2 cursor-pointer">
                                {
                                    soundEnabledIndex === index ?
                                        <VolumeUp />
                                        : <VolumeDown />
                                }
                            </button>
                        </div>
                    ))
                }
            </div>
        </SectionLayout>
    )
}
