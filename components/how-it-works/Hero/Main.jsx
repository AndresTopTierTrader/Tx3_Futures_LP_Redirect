import { SectionLayout } from "@/components/common/SectionLayout";

export function Hero() {
    return (
        <SectionLayout>

            <h2 className="text-center grid place-items-center text-3xl md:text-4xl max-w-3xl mx-auto my-16">From Buying your First Challenge, Setting up your Account to Placing your First Trade</h2>

            <div className="relative">
                <div className="aspect-square rounded-full w-[300px] bg-[#45D1FF33]/30 absolute top-28 -left-36 blur-[200px]"></div>

                <iframe className="aspect-video w-full mx-auto max-w-[800px]" src="https://www.youtube.com/embed/L5Zxwvw-VDM?si=bvHTKKpkc8IDqFRK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <div className="aspect-square rounded-full w-[300px] bg-[#4BE736]/30 absolute top-28 -right-36 blur-[200px]"></div>
            </div>

        </SectionLayout>
    )
}