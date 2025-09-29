'use client'

import { NoLinkButton } from "@/components/common/Buttons/Buttons";
import { SectionLayout } from "@/components/common/SectionLayout";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export function GetFunded() {
    return (
        <SectionLayout className='flex flex-col items-center gap-12 relative mb-24'>
            <h2 className="text-3xl md:text-5xl text-white text-center mx-auto">Are You Ready to Get Funded?</h2>
            <Link href='./challenges' onClick={() => { track('Navbar - CTA') }} className="flex flex-row bg-green items-center rounded-md px-4 py-2 text-background">
                Choose Your Plan Now
                <FaArrowRight className="ml-1 w-3 h-3" />
            </Link>
            <div className="rounded-full w-[700px] h-[100px] mx-auto bg-[#4BE736]/30 absolute top-28 -z-10 inset-0 blur-[200px]"></div>
        </SectionLayout>
    )
}