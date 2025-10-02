'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import logo from './assets/tx3_futures_bigger.png'
import Image from 'next/image'
const bgImageStyle = {
    backgroundColor: '#0B111D',
    backgroundImage: `
      radial-gradient(at 92% 99%, hsla(219,45%,7%,1) 0px, transparent 50%),
       radial-gradient(at 18% 42%, hsla(219,45%,7%,1) 0px, transparent 50%),
       radial-gradient(at 91% 0%, hsla(218,44%,7%,1) 0px, transparent 50%),
       radial-gradient(at 100% 81%, hsla(218,44%,7%,1) 0px, transparent 50%),
       radial-gradient(at 81% 50%, hsla(108,97%,65%,0.23) 0px, transparent 50%),
       radial-gradient(at 65% 41%, hsla(212,100%,35%,0.41) 0px, transparent 50%)
      `
}

function LoadingRedirection() {
    const router = useRouter()
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Show loading for a brief moment, then redirect
        const timer = setTimeout(() => {
            // Ensure pathname starts with / and handle edge cases
            const targetUrl = `https://funding.tx3markets.com`
            
            // Use window.location.replace for better UX (no back button history)
            window.location.replace(targetUrl)
        }, 200) // 200ms delay to show the loading screen
        

        return () => clearTimeout(timer)
    }, [pathname])

    return (
        <div
            className={`min-h-[900px] w-full flex items-center justify-center fixed inset-0 z-50 transition-all duration-[1200ms] ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            style={bgImageStyle}
        >
            <div className={`text-center transition-all duration-[800ms] ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                <div className="relative animate-fade-in">
                    <div className="skeleton-pulse">
                        <Image
                            src={logo}
                            alt="Tx3Funding Logo"
                            width={200}
                            height={80}
                            className="mx-auto"
                        />
                    </div>
                    {/* Small spinner below the logo */}
                    <div className="mt-6 flex justify-center">
                        <div className="w-6 h-6 border-2 border-textSecondary border-t-transparent rounded-full animate-spin opacity-80"></div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes skeleton-pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .skeleton-pulse {
          animation: skeleton-pulse 1.2s ease-in-out infinite;
          animation-delay: 0.3s;
        }
      `}</style>
        </div>
    )
}

export default LoadingRedirection