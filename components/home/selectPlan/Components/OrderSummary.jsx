"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/common/Buttons/Buttons";

const ANIMATION_VARIANTS = {
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  },
  button: {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  }
};

const LoadingSpinner = () => (
  <motion.div
    className="w-3 h-3 border-2 border-white border-t-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);


const OrderSummary = React.memo(
  ({
    challengeType,
    accountAmount,
    price,
    ctaUrl,
    ctaText = "Get Started Now",
    onCTAClick,
    isButtonDisabled = false,
    className = ""
  }) => {
    const [isLoading, setIsLoading] = useState(false);

    // Handle CTA click with loading state
    const handleCTAClick = async (e) => {
      setIsLoading(true);
      
      try {
        if (onCTAClick) {
          await onCTAClick(e);
        }
      } catch (error) {
        console.error("CTA click error:", error);
      }
      
      setTimeout(() => {
        setIsLoading(false);
      }, 6000);
    };

    const challengeTitle = `${challengeType.charAt(0).toUpperCase() + challengeType.slice(1)} Challenge - ${accountAmount}`;
    const formattedPrice = typeof price === 'number' ? `$${price}` : price || "$0";

    return (
      <div
        className={`w-full mt-6 p-4 md:p-6 ${className}`}
        style={{
          border: "1px solid #4D516A",
          borderRadius: "12px",
          background: "transparent",
        }}
      >
        <div className="p-0">
          {/* Header */}
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 29"
              fill="none"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                d="M0 0H27.6393V2.76393H24.8754V27.7499L22.6297 25.9533L20.0855 23.9191L17.8467 25.9091L16.9291 26.7245L16.0115 25.9091L13.8197 23.9591L11.6279 25.9077L10.7102 26.7231L9.79261 25.9077L7.55383 23.9177L5.00963 25.9533L2.76393 27.7499V2.76393H0V0ZM5.52786 2.76393V22.0009L6.73708 21.0335L7.6478 20.3038L8.51844 21.0777L10.7102 23.0263L12.902 21.0777L13.8197 20.2624L14.7373 21.0777L16.9291 23.0263L19.1209 21.0777L19.9915 20.3038L20.9022 21.0321L22.1115 21.9995V2.76393H5.52786ZM8.2918 6.90983H19.3475V9.67376H8.2918V6.90983ZM11.0557 12.4377H9.67376V15.2016H17.9656V12.4377H11.0557Z"
                fill="white"
              />
            </svg>
            <h2 className="text-white text-lg md:text-xl font-medium ml-2">
              Order Summary
            </h2>
          </div>

          {/* Selected Plan Summary */}
            <div className="flex items-start mb-6">
              <div
                className="flex items-center justify-center text-[#0B111D] w-5 h-5 md:w-6 md:h-6 rounded-full text-xs md:text-sm font-medium mr-3"
                style={{
                  background: "#17D934",
                }}
              >
                1
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-white text-lg md:text-xl font-base">
                    {challengeTitle}
                  </h3>
                  <span className="text-[#939BB5] text-lg md:text-xl font-base">
                    {formattedPrice}
                  </span>
                </div>
              </div>
            </div>

          {/* Total Section */}
          <div className="text-right mb-6">
            <div className="text-white text-sm md:text-base mb-1">
              Total
            </div>
            <div className="text-[#17D934] text-3xl md:text-5xl font-medium">
              {formattedPrice}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="flex flex-col items-center w-full"
            initial="initial"
            animate="animate"
            variants={ANIMATION_VARIANTS.item}
          >
            <PrimaryButton 
              href={ctaUrl || '#'}
              icon
              disabled={isButtonDisabled || isLoading}
              onClick={handleCTAClick}
              style={{
                borderRadius: '10.62px',
                background: (isLoading || isButtonDisabled) 
                  ? '#6B7280' 
                  : 'linear-gradient(91deg, #65FD51 1.18%, #4FB242 140.88%)',
                color: (isLoading || isButtonDisabled) ? 'white' : '#0B111D'
              }}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  <span className="ml-2">Processing...</span>
                </>
              ) : (
                ctaText
              )}
            </PrimaryButton>
          </motion.div>
        </div>
      </div>
    );
  }
);

OrderSummary.displayName = "OrderSummary";

export default OrderSummary;