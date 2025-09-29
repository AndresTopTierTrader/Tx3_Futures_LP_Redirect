'use client'
import { Arrow } from "@/components/common/Buttons/Buttons";
import { SocialMedia } from "@/components/contact/socialMedia/Main";
import { track } from "@vercel/analytics/react";

const DiscordLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5145_1386)">
            <path d="M14.9835 3L15.1065 3.006C17.1205 3.22 18.6335 3.678 20.0725 4.679C20.2442 4.79882 20.374 4.96951 20.4435 5.167C22.3195 10.482 22.8165 15.154 21.8945 17.447C20.8915 19.452 19.2885 21 17.5005 21C16.7685 21 15.8075 20.032 15.1725 18.955C15.8813 18.826 16.5832 18.6614 17.2755 18.462C17.4018 18.4259 17.5198 18.3652 17.6227 18.2835C17.7256 18.2018 17.8114 18.1006 17.8752 17.9858C17.939 17.8709 17.9795 17.7446 17.9945 17.6141C18.0095 17.4835 17.9986 17.3513 17.9625 17.225C17.9264 17.0987 17.8657 16.9807 17.784 16.8778C17.7023 16.7749 17.6012 16.6891 17.4863 16.6253C17.3714 16.5615 17.2451 16.521 17.1146 16.506C16.984 16.491 16.8518 16.5019 16.7255 16.538C13.4055 17.488 10.5955 17.488 7.27551 16.538C7.02037 16.4651 6.74671 16.4965 6.51472 16.6253C6.28274 16.7541 6.11144 16.9699 6.03851 17.225C5.96557 17.4801 5.99698 17.7538 6.12581 17.9858C6.25465 18.2178 6.47037 18.3891 6.7255 18.462C7.4425 18.666 8.1415 18.832 8.8285 18.956C8.1935 20.031 7.2325 21 6.5005 21C4.71251 21 3.10951 19.452 2.07251 17.371C1.18451 15.154 1.68251 10.481 3.55751 5.167C3.62703 4.96951 3.7568 4.79882 3.92851 4.679C5.36751 3.678 6.88051 3.22 8.8945 3.006C9.07517 2.98673 9.25767 3.01704 9.4224 3.09368C9.58714 3.17032 9.72788 3.29039 9.8295 3.441L9.8925 3.548L10.5435 4.833L10.6805 4.817C11.5592 4.727 12.4448 4.727 13.3235 4.817L13.4575 4.833L14.1075 3.549C14.1802 3.40479 14.2868 3.28035 14.4181 3.18631C14.5494 3.09227 14.7016 3.03143 14.8615 3.009L14.9835 3ZM9.0005 10C8.52257 9.99998 8.06042 10.1711 7.69776 10.4824C7.3351 10.7937 7.09591 11.2246 7.0235 11.697L7.00551 11.851L7.0005 12L7.00551 12.15C7.03469 12.538 7.17645 12.9092 7.41341 13.2178C7.65036 13.5265 7.97222 13.7594 8.33955 13.8878C8.70687 14.0163 9.1037 14.0349 9.48139 13.9412C9.85909 13.8475 10.2013 13.6456 10.4659 13.3604C10.7306 13.0751 10.9064 12.7188 10.9716 12.3352C11.0368 11.9516 10.9887 11.5572 10.8331 11.2005C10.6776 10.8438 10.4213 10.5403 10.0958 10.327C9.7703 10.1138 9.38965 10.0001 9.0005 10ZM15.0005 10C14.5226 9.99998 14.0604 10.1711 13.6978 10.4824C13.3351 10.7937 13.0959 11.2246 13.0235 11.697L13.0055 11.851L13.0005 12L13.0055 12.15C13.0347 12.538 13.1764 12.9092 13.4134 13.2178C13.6504 13.5265 13.9722 13.7594 14.3395 13.8878C14.7069 14.0163 15.1037 14.0349 15.4814 13.9412C15.8591 13.8475 16.2013 13.6456 16.4659 13.3604C16.7306 13.0751 16.9064 12.7188 16.9716 12.3352C17.0368 11.9516 16.9887 11.5572 16.8331 11.2005C16.6776 10.8438 16.4213 10.5403 16.0958 10.327C15.7703 10.1138 15.3896 10.0001 15.0005 10Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_5145_1386">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export function ContactSection() {
    return (
        <>
            <div className="text-center max-w-xl mx-auto mt-8">
                <h2 className="text-3xl text-center mx-auto md:text-6xl max-w-3xl mb-8 font-light">Get Support <br />For Trading Success</h2>
                <p className="text-modest">Got a question, feedback, or just want to say hi? Reach out to us via phone or email, and we’ll get back to you ASAP.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center mx-auto w-fit flex-wrap md:p-12 rounded-xl border border-border bg-gradient-to-br from-white/10 via-white/0 to-transparent">
                <span className="px-12 py-6 text-center">
                    <p>Monday - Friday</p>
                    <a className="underline" href="">Chat Support</a>
                </span>
                <span className="px-12 py-6 text-center md:border-l border-border">
                    <p>Email Us</p>
                    <a className="underline" href="">support@tx3funding.com</a>
                </span>
            </div>

            <a href="https://discord.com/invite/fRUsCFuhUf" onClick={() => track('Discord - Contact Page')} className="w-fit px-4 py-3 rounded-md bg-[#5869EA] flex justify-center items-center gap-2 hover:brightness-125">
                Support on Discord
                <DiscordLogo />
            </a>

            <p>You can also answer your question in our FAQ section.</p>

            <a onClick={() => track('View FAQs - Contact Page')} href="https://help.tx3funding.com/en/" className='group border border-border font-medium flex items-center justify-center px-4 gap-2 py-2 w-fit text-nowrap rounded-lg bg-transparent text-white cursor-pointer transition-all hover:bg-white/20'>
                View FAQs
                <span className="transition-all group-hover:translate-x-1">
                    <Arrow />
                </span>
            </a>

            <SocialMedia />

            <div className="aspect-square rounded-full w-[300px] bg-[#4BE736]/20 absolute top-56 right-56 blur-[200px]"></div>
            <div className="aspect-square rounded-full w-[300px] bg-[#45D1FF33]/20 absolute top-56 left-56 blur-[200px]"></div>
        </>
    )
}