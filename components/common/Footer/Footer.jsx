import Logo from "@/app/[locale]/Logo";
import LogoImg from './assets/logo.webp'
import Image from "next/image";
import Link from "next/link";

import NewsletterSignup from "../NewsletterSignup/Main";

const InstagramIcon = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6168 20.6634C10.5497 20.6634 10.4826 20.6634 10.4151 20.663C8.8276 20.6669 7.36074 20.6264 5.93418 20.539C4.62633 20.459 3.43249 20.0043 2.48158 19.2243C1.564 18.4718 0.937455 17.4542 0.619295 16.2002C0.342394 15.1084 0.327718 14.0367 0.313636 13.0001C0.30343 12.2565 0.292947 11.3751 0.290771 10.4789C0.292947 9.57897 0.30343 8.69765 0.313636 7.95393C0.327718 6.91751 0.342394 5.84584 0.619295 4.75391C0.937455 3.49988 1.56404 2.48228 2.48158 1.72969C3.43249 0.949716 4.62633 0.495111 5.93434 0.415053C7.36085 0.327873 8.82804 0.287127 10.419 0.291027C12.007 0.287605 13.4734 0.327873 14.8999 0.415053C16.2078 0.495111 17.4017 0.949756 18.3526 1.72973C19.2703 2.48228 19.8967 3.49988 20.2149 4.75391C20.4918 5.84564 20.5064 6.91751 20.5205 7.95393C20.5307 8.69765 20.5414 9.57897 20.5433 10.4752V10.4789C20.5414 11.3751 20.5307 12.2564 20.5205 13.0001C20.5064 14.0366 20.4919 15.1082 20.2149 16.2002C19.8967 17.4542 19.2702 18.4718 18.3526 19.2244C17.4016 20.0044 16.2078 20.459 14.8999 20.539C13.5338 20.6227 12.1305 20.6634 10.6168 20.6634ZM10.4151 19.0714C11.9768 19.0752 13.4108 19.0355 14.8038 18.9503C15.7928 18.8899 16.6502 18.567 17.3526 17.9909C18.0019 17.4582 18.4492 16.7233 18.6817 15.8066C18.9122 14.8978 18.9255 13.922 18.9383 12.9784C18.9484 12.2396 18.9589 11.3646 18.961 10.477C18.9589 9.58935 18.9484 8.71444 18.9383 7.97569C18.9255 7.03207 18.9122 6.05625 18.6817 5.14732C18.4491 4.23055 18.0019 3.4957 17.3526 2.96303C16.6502 2.38702 15.7928 2.06416 14.8038 2.00368C13.4108 1.91837 11.9769 1.87906 10.4188 1.88248C8.85739 1.87874 7.42332 1.91837 6.0303 2.00372C5.04137 2.0642 4.18393 2.38702 3.48147 2.96307C2.83217 3.4957 2.38498 4.23059 2.15242 5.14732C1.92188 6.05625 1.90859 7.03191 1.89577 7.97569C1.88572 8.71508 1.8752 9.59062 1.87306 10.4789C1.87524 11.3633 1.88572 12.239 1.89577 12.9784C1.90859 13.922 1.92188 14.8978 2.15242 15.8066C2.38502 16.7234 2.83217 17.4582 3.48147 17.9909C4.18393 18.5669 5.04137 18.8897 6.0303 18.9502C7.42332 19.0355 8.8577 19.0753 10.4151 19.0714V19.0714ZM10.3774 15.4508C7.65105 15.4508 5.43275 13.2196 5.43275 10.477C5.43275 7.73444 7.65105 5.50324 10.3774 5.50324C13.1039 5.50324 15.3221 7.73444 15.3221 10.477C15.3221 13.2196 13.1039 15.4508 10.3774 15.4508ZM10.3774 7.09486C8.52348 7.09486 7.01504 8.61218 7.01504 10.477C7.01504 12.3419 8.52348 13.8592 10.3774 13.8592C12.2315 13.8592 13.7398 12.3419 13.7398 10.477C13.7398 8.61218 12.2315 7.09486 10.3774 7.09486ZM15.8759 3.91163C15.2206 3.91163 14.6892 4.44601 14.6892 5.10534C14.6892 5.76466 15.2206 6.29905 15.8759 6.29905C16.5314 6.29905 17.0626 5.76466 17.0626 5.10534C17.0626 4.44601 16.5314 3.91163 15.8759 3.91163Z" fill="currentColor" />
    </svg>
)

const DiscordIcon = () => (
    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6174 2.02187C14.4484 1.47492 13.1984 1.07742 11.8916 0.851074C11.7311 1.14124 11.5436 1.53151 11.4143 1.84197C10.0251 1.63306 8.64874 1.63306 7.28512 1.84197C7.15587 1.53151 6.96411 1.14124 6.80218 0.851074C5.49396 1.07742 4.24256 1.47638 3.07354 2.02477C0.715622 5.5879 0.0764285 9.06252 0.396026 12.4878C1.95992 13.6557 3.47553 14.3651 4.96555 14.8294C5.33345 14.3231 5.66156 13.7848 5.94422 13.2176C5.40588 13.013 4.89027 12.7606 4.40308 12.4675C4.53233 12.3718 4.65875 12.2716 4.7809 12.1686C7.75243 13.5585 10.9811 13.5585 13.9171 12.1686C14.0407 12.2716 14.1671 12.3718 14.2949 12.4675C13.8063 12.762 13.2893 13.0144 12.751 13.219C13.0336 13.7848 13.3603 14.3245 13.7296 14.8308C15.2211 14.3666 16.7381 13.6571 18.302 12.4878C18.677 8.51703 17.6614 5.07431 15.6174 2.02187ZM6.34905 10.3813C5.45703 10.3813 4.72549 9.54853 4.72549 8.53443C4.72549 7.52033 5.44141 6.68614 6.34905 6.68614C7.25672 6.68614 7.98823 7.51887 7.97261 8.53443C7.97402 9.54853 7.25672 10.3813 6.34905 10.3813ZM12.349 10.3813C11.4569 10.3813 10.7254 9.54853 10.7254 8.53443C10.7254 7.52033 11.4413 6.68614 12.349 6.68614C13.2566 6.68614 13.9881 7.51887 13.9725 8.53443C13.9725 9.54853 13.2566 10.3813 12.349 10.3813Z" fill="currentColor" />
    </svg>
)

const YoutubeIcon = () => (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5002 2.72404C19.2728 1.87022 18.6064 1.19716 17.7613 0.967255C16.2175 0.540527 10.0419 0.540527 10.0419 0.540527C10.0419 0.540527 3.86648 0.540527 2.32261 0.951076C1.49377 1.18074 0.811127 1.87034 0.583779 2.72404C0.17749 4.28352 0.17749 7.51767 0.17749 7.51767C0.17749 7.51767 0.17749 10.7681 0.583779 12.3113C0.811368 13.165 1.47752 13.8381 2.32273 14.068C3.88274 14.4948 10.0421 14.4948 10.0421 14.4948C10.0421 14.4948 16.2175 14.4948 17.7613 14.0843C18.6065 13.8545 19.2728 13.1814 19.5004 12.3277C19.9066 10.7681 19.9066 7.53409 19.9066 7.53409C19.9066 7.53409 19.9228 4.28352 19.5002 2.72404V2.72404ZM8.07567 10.5055V4.52985L13.211 7.51767L8.07567 10.5055Z" fill="currentColor" />
    </svg>
)

const TwitterIcon = () => (
    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5503 2.84794C19.7905 3.17562 18.9809 3.39281 18.1369 3.49827C19.0052 2.98855 19.6679 2.18756 19.9795 1.22211C19.1699 1.69667 18.2761 2.03188 17.3234 2.21895C16.5547 1.41419 15.4591 0.915771 14.2638 0.915771C11.9449 0.915771 10.0779 2.76633 10.0779 5.03497C10.0779 5.36139 10.106 5.67526 10.175 5.97406C6.69271 5.80708 3.61139 4.16618 1.54143 1.66654C1.18005 2.28298 0.968078 2.98855 0.968078 3.74811C0.968078 5.17433 1.7151 6.43859 2.82861 7.17052C2.15565 7.15797 1.49546 6.96588 0.936154 6.66332V6.70851C0.936154 8.70973 2.38806 10.372 4.29202 10.7549C3.95107 10.8465 3.57947 10.8905 3.19383 10.8905C2.92566 10.8905 2.65495 10.8754 2.40083 10.8202C2.94354 12.451 4.48356 13.65 6.31473 13.6889C4.88964 14.785 3.08018 15.4453 1.12131 15.4453C0.77781 15.4453 0.448353 15.4303 0.118896 15.3888C1.97433 16.5652 4.17326 17.2369 6.54458 17.2369C14.2523 17.2369 18.4663 10.9595 18.4663 5.51833C18.4663 5.33628 18.4599 5.16052 18.451 4.98601C19.2823 4.40598 19.9808 3.68157 20.5503 2.84794V2.84794Z" fill="currentColor" />
    </svg>
)

const FacebookIcon = () => (
    <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.69386 22.1071V12.3655H11.0066L11.5036 8.56791H7.69386V6.1437C7.69386 5.04455 8.00194 4.29549 9.60125 4.29549L11.6377 4.29466V0.89795C11.2855 0.852795 10.0766 0.749268 8.6696 0.749268C5.73149 0.749268 3.72001 2.51873 3.72001 5.76758V8.56791H0.397217V12.3655H3.72001V22.1071H7.69386Z" fill="currentColor" />
    </svg>
)

const TikTokIcon = () => (
    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6823 9.39016C17.5143 9.40712 17.3456 9.41601 17.1768 9.41679C16.2656 9.41693 15.3686 9.1813 14.5669 8.73119C13.7652 8.28108 13.084 7.63064 12.5848 6.8386V15.618C12.5848 16.9014 12.2185 18.1559 11.5322 19.223C10.8458 20.2901 9.87035 21.1218 8.72904 21.6129C7.58773 22.104 6.33186 22.2325 5.12026 21.9822C3.90865 21.7318 2.79571 21.1138 1.92219 20.2063C1.04867 19.2988 0.453796 18.1426 0.212792 16.8839C-0.0282121 15.6252 0.0954794 14.3205 0.568226 13.1348C1.04097 11.9491 1.84154 10.9357 2.86869 10.2227C3.89584 9.50971 5.10345 9.12914 6.33879 9.12914C6.46918 9.12914 6.59663 9.14132 6.72482 9.14969V12.3473C6.59663 12.3313 6.47064 12.307 6.33879 12.307C5.49333 12.307 4.68249 12.6559 4.08465 13.277C3.48682 13.8981 3.15096 14.7404 3.15096 15.6188C3.15096 16.4971 3.48682 17.3395 4.08465 17.9605C4.68249 18.5816 5.49333 18.9305 6.33879 18.9305C8.09972 18.9305 9.65481 17.4892 9.65481 15.6598L9.68558 0.749268H12.6302C12.7648 2.07846 13.3448 3.31622 14.2688 4.24614C15.1928 5.17606 16.4021 5.73895 17.6852 5.8364V9.39016" fill="currentColor" />
    </svg>
)

const TelegramIcon = () => (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.78265 7.10237C6.77314 4.91403 10.109 3.49961 11.7903 2.80574C16.5406 0.830896 17.5281 0.483963 18.1686 0.457275C18.302 0.457275 18.6222 0.483963 18.8357 0.644086C18.9959 0.777521 19.0492 0.964332 19.0759 1.09777C19.1026 1.2312 19.1293 1.52476 19.1026 1.76495C18.8357 4.46035 17.7416 11.0521 17.1544 14.0677C16.9143 15.3487 16.4339 15.7757 15.9802 15.8291C14.9928 15.9091 14.2189 15.1619 13.2581 14.5481C11.7636 13.5607 10.9097 12.9469 9.44186 11.9861C7.76057 10.8653 8.85474 10.2515 9.81548 9.26403C10.0557 8.99716 14.459 5.02078 14.5391 4.64716C14.5391 4.59378 14.5658 4.43366 14.459 4.3536C14.3523 4.27354 14.2189 4.30022 14.1121 4.32691C13.952 4.3536 11.5501 5.95483 6.87989 9.10391C6.18603 9.58428 5.57222 9.79778 5.01179 9.79778C4.39799 9.79778 3.22375 9.45084 2.34308 9.15728C1.27559 8.81035 0.421604 8.62354 0.501665 8.03642C0.555039 7.74287 0.982033 7.42262 1.78265 7.10237Z" fill="currentColor" />
    </svg>
)

const social = [
    {
        icon: <InstagramIcon />,
        href: 'https://www.instagram.com/tx3funding?igsh=MTM5a2RwbHlldDg1Yg=='
    },
    {
        icon: <DiscordIcon />,
        href: 'https://discord.gg/fRUsCFuhUf'
    },
    // {
    //     icon: <YoutubeIcon />,
    //     href: ''
    // },
    {
        icon: <TwitterIcon />,
        href: 'https://x.com/tx3funding?s=21&t=_BWk6eOLrVtbr0xENajeFA'
    },
    {
        icon: <FacebookIcon />,
        href: 'https://www.facebook.com/share/1C95DbebGX/?mibextid=wwXIfr'
    },
    // {
    //     icon: <TikTokIcon />,
    //     href: ''
    // },
    // {
    //     icon: <TelegramIcon />,
    //     href: ''
    // },
]

const disclaimers = [
    {
        label: 'AML Policy',
        href: '/aml-policy'
    },
    {
        label: 'Privacy Policy',
        href: '/privacy-policy'
    },
    {
        label: 'Cancelation Policy',
        href: '/cancelation-policy'
    },
    {
        label: 'Refund Policy',
        href: '/refund-policy'
    },
    {
        label: 'Terms and Conditions',
        href: '/terms-and-conditions'
    },
    {
        label: 'Terms of Use',
        href: '/terms-of-use'
    },
]

export default function Footer() {
    return (
        <footer className="bg-background pt-16 md:pt-24 pb-6 md:pb-12 px-7 md:px-[72px] overflow-x-hidden">

            <NewsletterSignup />
            <div className="flex flex-col gap-8 md:gap-12 mx-auto max-w-[1800px]">
                <Logo />

                <div className="flex flex-wrap items-center gap-6 md:gap-10">
                    {
                        social.map(({ icon, href }, index) => (
                            <Link key={index} className="transition-colors hover:text-cyan" href={href} target="_blank">{icon}</Link>
                        ))
                    }
                </div>

                <nav className="flex flex-wrap gap-8 underline">
                    {
                        disclaimers.map(({ label, href }, index) => (
                            <Link key={index} className="transition-colors hover:text-cyan" href={href}>{label}</Link>
                        ))
                    }
                </nav>

                <span>2025 © Copyright. Tx3 Funding Futures, LLC</span>

                <article className="text-[#717892]">
                    <strong className="text-lg font-bold text-slate-300">TX3 FUNDING RISK DISCLOSURE</strong><br /><br />

                    <p>
                        Trading futures and forex involves significant risk and is not suitable for all investors. There is a possibility of losing all or more than your initial investment. Only risk capital—money you can afford to lose without impacting your financial stability or lifestyle—should be used for trading. Individuals without sufficient risk capital should not engage in trading. Past performance is not a reliable indicator of future results.
                    </p> <br />

                    <strong className="italic font-bold text-slate-400 text-md">HYPOTHETICAL PERFORMANCE DISCLOSURE</strong><br />

                    <p>
                        Hypothetical performance results have inherent limitations, some of which are outlined below. There is no assurance that any account will achieve profits or losses similar to those presented on our website or in promotional materials.
                    </p> <br />

                    <strong className="italic font-bold text-slate-400 text-md">CFTC Rule 4.41</strong><br />

                    <p>
                        Hypothetical or Simulated performance results have certain limitations. Unlike an actual performance record, simulated results do not represent actual trading. Also, because the trades have not actually been executed, the results may have under-or-over compensated for the impact, if any, of certain market factors, such as lack of liquidity. Simulated trading programs, in general, are also subject to the fact that they are designed with the benefit of hindsight. No representation is being made that any account will or is likely to achieve profit or losses similar to those shown.
                    </p> <br />

                    <p>
                        Testimonials featured on this website may not reflect the experiences of other clients or customers and are not indicative of future performance or success. No guarantee is made that any evaluation account will achieve results comparable to those displayed here.
                    </p> <br />

                    <p>
                        All materials published or distributed by TX3 Funding LLC and its affiliates (collectively referred to as the &quot;Company&quot;) are for informational purposes only. The content provided does not constitute investment advice, an offer to buy or sell any financial instrument, or a recommendation, endorsement, or sponsorship of any security, company, or fund.
                    </p> <br />

                    <p>
                        Trading leveraged products such as CFDs and forex involves significant risks due to their complexity. These products are designed for use by professional and retail traders who understand the risks involved. Please note that trading accounts may incur losses up to or exceeding the amount of funds initially deposited
                    </p> <br />

                    <strong className="italic font-bold text-slate-400 text-md">Jurisdictional Advisory</strong><br />

                    <p>
                        The information provided on this website is not intended for use in any jurisdiction where such use would conflict with local laws or regulations. TX3 Funding LLC is registered in Dubai, UAE and operates in compliance with all applicable legal requirements.
                    </p>


                </article>

                <div className="relative grid place-items-center">
                    {/* <Tx3Funding /> */}
                    <Image src={LogoImg} alt="logo heading fot tx3 funding" className="w-[80%] mx-auto" />

                    <div className="rounded-full h-[50px] w-[500px] bottom-0 right-24 bg-green/80 absolute blur-[100px]"></div>
                    <div className="rounded-full h-[50px] w-[500px] bottom-0 left-24 bg-[#0052B4]/80 absolute blur-[100px]"></div>
                </div>
            </div>
        </footer>
    )
}
