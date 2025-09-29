'use client'
import { SectionLayout } from "@/components/common/SectionLayout";
import { useState } from "react";

const accounts = {
    beginner: [  // Fixed the typo here from 'begginer' to 'beginner'
        {
            title: 'Payout Requests',
            desc: 'Request payouts every 5 winning days (minimum $100/$200/$300, based on account size) with a 40% consistency rule.'
        },
        {
            title: 'Payout Processing',
            desc: 'Payouts within 1-3 business days.'
        },
    ],
    pro: [
        {
            title: 'Payout Requests',
            desc: 'Request payouts bi-weekly above the buffer, with a $1,000 minimum.'
        },
        {
            title: 'Payout Processing',
            desc: 'Payouts within 24 hours, Monday to Friday, if requested before 3:00 PM CT.'
        },
        {
            title: <>Buffer Zone <span className="text-green">(Pro Only)</span></>,
            desc: <ul className="flex flex-col gap-3 list-disc pl-6">
                <li>Buffer amounts: 50K ($52,100), 100K ($103,100), 150K ($154,600).</li>
                <li>Withdraw up to 60% of profits in the buffer zone. Each withdrawal resets the buffer to $0.</li>
            </ul>
        },
        {
            title: <>Account Lifespan <span className="text-green">(Pro Only)</span></>,
            desc: <ul className="flex flex-col gap-3 list-disc pl-6">
                <li>Withdraw 60% of profits before reaching the full buffer zone ($1,000 minimum).</li>
                <li>Remaining 40% stays in the account to support future trading.</li>
            </ul>
        },
        {
            title: <>Closing Payouts <span className="text-green">(Pro Only)</span></>,
            desc: <ul className="flex flex-col gap-3 list-disc pl-6">
                <li>Under 45 days: Receive 20% of net reserves.</li>
                <li>46 to 90 days: Receive 50%.</li>
                <li>90+ days: Receive 90%.</li>
            </ul>
        },
        {
            title: <>Icing on The Cake <span className="text-green">(Pro Only)</span></>,
            desc: <ul className="flex flex-col gap-3 list-disc pl-6">
                <li>No scaling requirements or Daily Loss Limit</li>
            </ul>
        },
    ]
}

export function BigPayouts() {

    const [account, setAccount] = useState('beginner')

    return (
        <SectionLayout className='mb-32'>
            <span>
                <h2 className="text-center grid place-items-center text-3xl md:text-5xl text-white">Big Payouts</h2>
                <p className="text-modest text-center mt-8">First $10,000 in profits is 100% yours. After that, a 90/10 profit split applies.</p>
            </span>

            <span className="grid grid-cols-2 max-w-4xl mx-auto mt-16">
                <button onClick={() => setAccount('beginner')} className={`text-xl md:text-2xl text-center w-full pb-4 ${account === 'beginner' ? 'border-b-4 border-green font-semibold' : 'border-b-2 border-border font-light'}`}>Starter</button>
                <button onClick={() => setAccount('pro')} className={`text-xl md:text-2xl text-center w-full pb-4 ${account === 'pro' ? 'border-b-4 border-green font-semibold' : 'border-b-2 border-border font-light'}`}>Pro</button>
            </span>

            <ul className="flex w-full flex-wrap gap-8 justify-center mt-16">
                {
                    account === 'beginner'
                        ? accounts.beginner.map((accountItem, index) => (  // Updated from 'begginer' to 'beginner'
                            <Beginner key={`beginner-${index}`} {...accountItem} />  // Fixed the key to avoid potential duplicates
                        ))
                        : accounts.pro.map((accountItem, index) => (
                            <ProAccount key={`pro-${index}`} {...accountItem} />  // Fixed the key to avoid potential duplicates
                        ))
                }
            </ul>
        </SectionLayout>
    )
}

function Beginner({ title, desc }) {
    return (
        <li className="rounded-xl w-full border border-border bg-gradient-to-br from-white/10 via-white/0 to-transparent px-6 py-3 max-w-xs">
            <strong className="font-bold text-white">{title}</strong>
            <div className="text-sm mt-4 text-modest">
                {desc}
            </div>
        </li>
    )
}

function ProAccount({ title, desc }) {
    return (
        <li className="rounded-xl border border-green/50 bg-gradient-to-br from-white/10 via-white/0 to-transparent px-6 py-3 max-w-xs">
            <strong className="font-bold text-white">{title}</strong>
            <div className="text-sm mt-4 text-modest">
                {desc}
            </div>
        </li>
    )
}