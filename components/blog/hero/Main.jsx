import { SectionLayout } from "@/components/common/SectionLayout";

export function Hero() {
    return (
        <SectionLayout>
            <div className="text-center max-w-lg mx-auto">
                <h2 className="text-3xl text-center mx-auto md:text-6xl max-w-3xl mb-8 font-light">Blog</h2>
                <p className="text-modest">Get expert insights on the latest trends, technologies and strategies for successful trading.</p>
            </div>
        </SectionLayout>
    )
}