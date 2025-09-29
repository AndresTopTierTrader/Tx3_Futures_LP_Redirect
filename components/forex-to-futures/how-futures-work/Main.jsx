import { SectionLayout } from "@/components/common/SectionLayout"
import { FuturesTable } from "./Table"

export function HowFuturesWork() {
    return (
        <SectionLayout>
            <span>
                <h2 className="text-center grid place-items-center text-3xl md:text-5xl text-white">How Futures Work</h2>
                <p className="text-modest text-center mt-8 mx-auto max-w-3xl">Futures have standarized contracts and a centralized exchange, which means all participants in the market get pricing transparency and liquidity. Each product has defined leverage and comissions because it is built into the contract - no surprises</p>
            </span>

            <div className="mt-16">
                <FuturesTable/>
            </div>
        </SectionLayout>
    )
}