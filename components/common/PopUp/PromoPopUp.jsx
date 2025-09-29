'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { track } from '@vercel/analytics'
import bgImgEn from './assets/LaborDayPromo/PopUp.webp'
import { IoClose } from 'react-icons/io5'
import './animations.css'

function PromoPopUp({ locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const mainLang = locale.split('-')[0]

  useEffect(() => {
    const endDate = new Date(2025, 8, 3) //Month is 0-indexed, so 8 = September - Use endDate + 1 to include the full day
    const currentDate = new Date()
    const isBeforeEndDate = currentDate < endDate
    const popupState = localStorage.getItem('LaborDayPromo')

    if (popupState !== 'closed' && isBeforeEndDate) {
      setIsVisible(true)
    }
  }, [])

  const handleClosePopup = () => {
    setIsVisible(false)
    localStorage.setItem('LaborDayPromo', 'closed')
  }

  if (!isVisible) return null

  return (
    <div className="popup-container" data-visible="true">
      <div className="popup-content">
        <button
          className="close-button"
          aria-label="Close popup"
          onClick={handleClosePopup}
        >
          <IoClose size={24} />
        </button>

        <a
          href="https://www.tx3funding.com/en/challenges"
          target="_blank"
          alt="Promo PopUp by TopTierTrader"
          rel="noopener noreferrer"
          onClick={() => {track('PopUp - LaborDayPromo - TX3LD') }}
        >
          <Image
            src={bgImgEn}
            alt='popup-img'
            width='auto'
            height='auto'
            priority
            className='rounded-lg w-96'
          />
        </a>
      </div>
    </div>
  )
}

export default PromoPopUp