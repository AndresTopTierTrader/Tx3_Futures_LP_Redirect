'use client'

import React, { useState } from 'react';
import { SectionLayout } from '@/components/common/SectionLayout';
import { BsCheckCircleFill, BsArrowClockwise } from 'react-icons/bs';

export function StayInTheLoop() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubmitting(false);
        setIsSuccess(true);
        setEmail('');

        // Reset success message after 3 seconds
        setTimeout(() => {
            setIsSuccess(false);
        }, 3000);
    };

    return (
        <SectionLayout bgColor='bg-[#00161D]' className='grid place-items-center'>
            <div className='flex flex-col items-center gap-4 text-center text-balance'>
                <span className='text-xl md:text-3xl text-center max-w-sm'>
                    Level Up your Futures Trading with Tx3 Funding Futures
                </span>
                <p className='text-green'>Stay in the Loop</p>
                <p className='max-w-lg text-modest'>
                    Get exclusive updates, industry insights, and exciting offers. 
                    Join 100,000+ other traders staying always updated.
                </p>

                <form 
                    onSubmit={handleSubmit} 
                    className='flex gap-2 max-w-lg w-full mt-4 relative'
                >
                    <input
                        placeholder='Your Email Here'
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='outline-none w-full px-4 py-2 bg-[#252832] rounded-lg'
                        disabled={isSubmitting || isSuccess}
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className={`rounded-lg px-4 py-2 w-fit transition-all duration-200 
                            ${isSuccess 
                                ? 'bg-green-500 text-white' 
                                : 'bg-[#1769E5] hover:brightness-125'
                            } 
                            ${isSubmitting ? 'opacity-50' : ''}
                        `}
                    >
                        {isSubmitting ? (
                            <BsArrowClockwise className="w-6 h-6 animate-spin" />
                        ) : isSuccess ? (
                            <BsCheckCircleFill className="w-6 h-6" />
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>
                
                {isSuccess && (
                    <div className="absolute mt-16 bg-green-500 text-white px-4 py-2 rounded-lg transition-all duration-300 animate-fade-in">
                        Thanks for subscribing!
                    </div>
                )}
            </div>
        </SectionLayout>
    );
}

export default StayInTheLoop;