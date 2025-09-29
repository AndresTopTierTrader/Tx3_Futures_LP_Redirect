'use client'
import { SectionLayout } from "@/components/common/SectionLayout";
import { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import Image from "next/image";
import logo from "./logo.svg"

export function Competitors() {

    const competitors = [
        {
            name: 'Tradeify',
            pathToLive: 'YES',
            drawdownType: 'EOD',
            profitTarget: '$6,000',
            activationFee: '$125.00',
            EvaluationFee: '$249.00',
            payoutFrequency: '10 Days',
            maxDrawdown: '$3,500'
        },
        {
            name: 'TopStep',
            pathToLive: 'YES',
            drawdownType: 'EOD',
            profitTarget: '$6,000',
            activationFee: '$149,00',
            EvaluationFee: '$99 Monthly',
            payoutFrequency: '5 Days',
            maxDrawdown: '$3,000'
        },
        {
            name: 'Funded Next',
            pathToLive: 'YES',
            drawdownType: 'EOD',
            profitTarget: '$6,000',
            activationFee: '$0.00',
            EvaluationFee: '$145.00',
            payoutFrequency: '5 Days',
            maxDrawdown: '$3,500'
        }
    ];

    const [selectedCompetitor, setSelectedCompetitor] = useState(competitors[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <SectionLayout className='text-[#A2ACCF] relative'>

            <h2 className="grid text-3xl text-center text-white place-items-center md:text-5xl">Our Competitors Don’t Stand a Chance.</h2>

            <div className="aspect-square rounded-full w-[300px] bg-[#45D1FF33]/30 absolute left-[40%] blur-[200px] -z-10"></div>

            <article className="items-end justify-center hidden gap-6 mx-auto mt-32 text-lg max-w-7xl lg:grid lg:grid-cols-5">
                <div className="py-6">
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light">Account Size</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light">Path to Live</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light">Drawdown Type</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light">Profit Target</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light">Activation Fee</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light">Evaluation Fee</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light">Payout Frequency</p>
                    <p className="px-4 py-6 font-light">Trailing Max Drawdown</p>
                </div>

                <div className="relative border border-green bg-gradient-to-br from-[#2F8723]/0 via-[#2F8723]/10 to-green/20 py-6 px-4 rounded-xl flex flex-col items center">
                    <span className="p-4 mx-auto rounded-md bg-background w-fit -mt-14">
                        <Image src={logo} alt="tx3 funding logo" className="w-full max-w-xs"/>
                    </span>

                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">100k</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">Yes</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">EOD</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$6,000</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$0.00</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$135.00</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">5 Days</p>
                    <p className="w-full px-4 py-6 font-light text-center">$3,500</p>
                </div>

                <div className="flex flex-col px-4 py-6 border border-border bg-gradient-to-br from-border/10 to-transparent rounded-xl items center">
                    <span className="p-4 mx-auto rounded-md bg-background w-fit -mt-14">
                        <strong>Tradeify</strong>
                    </span>

                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">100k</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">Yes</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">EOD</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$6,000</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$125.00</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$249.00</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">10 Days</p>
                    <p className="w-full px-4 py-6 font-light text-center">$3,500</p>
                </div>


                <div className="flex flex-col px-4 py-6 border border-border bg-gradient-to-br from-border/10 to-transparent rounded-xl items center">
                    <span className="p-4 mx-auto rounded-md bg-background w-fit -mt-14">
                        <strong>TopStep</strong>
                    </span>

                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">100k</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">Yes</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">EOD</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$6,000</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$149,00</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$99</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">5 Days</p>
                    <p className="w-full px-4 py-6 font-light text-center">$3,000</p>
                </div>

                <div className="flex flex-col px-4 py-6 border border-border bg-gradient-to-br from-border/10 to-transparent rounded-xl items center">
                    <span className="p-4 mx-auto rounded-md bg-background w-fit -mt-14">
                        <strong>Funded Next</strong>
                    </span>

                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">100k</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">Yes</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">EOD</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$6,000</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$0.00</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">$145.00</p>
                    <p className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-center">5 Days</p>
                    <p className="w-full px-4 py-6 font-light text-center">$3,500</p>
                </div>
            </article>

            {/* MOBILE */}

            <article className="grid grid-cols-2 mt-16 text-sm lg:hidden">
                <div className="relative border border-green bg-gradient-to-br from-[#2F8723]/0 via-[#2F8723]/10 to-green/20 py-6 px-4 rounded-l-xl flex flex-col items center">
                    <span className="p-4 mx-auto -mt-12 rounded-md bg-background w-fit">
                        <Image src={logo} alt="tx3 funding logo" className="w-full max-w-xs"/>
                    </span>

                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Account Size</small> <br />
                        100k
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Path to Live</small> <br />
                        Yes
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Drawdown Type</small> <br />
                        EOD
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Profit Target</small> <br />

                        $6,000
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Activation Fee</small> <br />

                        $0.00
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Evaluation Fee</small> <br />

                        $135.00
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Payout Frequency</small> <br />

                        5 Days
                    </span>
                    <span className="w-full px-4 py-6 font-light text-white">
                        <small className="text-[#A2ACCF]">Trailing Max Drawdown</small> <br />

                        $3,500
                    </span>
                </div>

                <div className="relative flex flex-col px-4 py-6 border border-border bg-gradient-to-br from-border/10 to-transparent rounded-r-xl items center">
                    <span className="px-4 h-[44px] grid place-items-center rounded-md bg-background w-fit mx-auto -mt-12 relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between gap-1 bg-[#0B111D]"
                        >
                            {selectedCompetitor.name}
                            <IoCaretDown className={`text-white transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />

                        </button>

                        {isDropdownOpen && (
                            <div className="absolute w-full bg-[#0B111D] shadow-lg z-10 top-12 rounded-lg">
                                {competitors.map((competitor, index) => (
                                    <button
                                        key={index}
                                        className={`w-full text-left px-4 py-3 text-sm ${selectedCompetitor.name === competitor.name ? 'text-[#65FD51]' : 'text-white'} hover:bg-[#181D28] transition-colors font-light`}
                                        onClick={() => {
                                            setSelectedCompetitor(competitor);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {competitor.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </span>

                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Account Size</small> <br />
                        100k
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Path to Live</small> <br />
                        {selectedCompetitor.pathToLive}
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Drawdown Type</small> <br />
                        {selectedCompetitor.drawdownType}
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Profit Target</small> <br />

                        {selectedCompetitor.profitTarget}
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Activation Fee</small> <br />

                        {selectedCompetitor.activationFee}
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Evaluation Fee</small> <br />

                        {selectedCompetitor.EvaluationFee}
                    </span>
                    <span className="px-4 py-6 border-b border-[#717892]/50 font-light w-full text-white">
                        <small className="text-[#A2ACCF]">Payout Frequency</small> <br />

                        {selectedCompetitor.payoutFrequency}
                    </span>
                    <span className="w-full px-4 py-6 font-light text-white">
                        <small className="text-[#A2ACCF]">Trailing Max Drawdown</small> <br />

                        {selectedCompetitor.maxDrawdown}
                    </span>
                </div>
            </article>
        </SectionLayout>
    )
}