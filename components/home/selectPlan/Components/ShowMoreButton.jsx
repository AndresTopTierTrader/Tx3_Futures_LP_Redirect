"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ShowMoreButton = React.memo(({ isExpanded, onToggle, locale }) => {
  const getButtonText = () => {
    const lang = locale?.split("-")[0] || "en";
    const texts = {
      en: isExpanded ? "Show Less" : "Show More",
      es: isExpanded ? "Mostrar menos" : "Mostrar más",
      fr: isExpanded ? "Voir Moins" : "Voir Plus",
    };
    return texts[lang] || texts.en;
  };

  const handleToggle = () => {
    if (isExpanded) {
      const challengeSelector = document.querySelector('.max-w-4xl.mx-auto[class*="mt-8"]') ||
                               document.querySelector('[class*="flex-row"][class*="justify-center"][class*="mt-8"]') ||
                               document.querySelector('button[class*="gradient"]')?.closest('div[class*="flex-row"]');

      if (challengeSelector) {
        challengeSelector.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
        
        setTimeout(() => {
          onToggle();
        }, 300);
      } else {
        window.scrollBy({ 
          top: -500, 
          behavior: 'smooth' 
        });
        
        setTimeout(() => {
          onToggle();
        }, 200);
      }
    } else {
      onToggle();
    }
  };

  return (
    <motion.div
      className="relative flex justify-center -mt-6 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={handleToggle}
        className="relative z-10 flex items-center gap-2 px-6 py-3 text-white bg-[#0B0F1A] border border-[#4D516A] rounded-lg hover:bg-[#131927] transition-all duration-200 shadow-lg"
      >
        <span className="text-sm font-medium">{getButtonText()}</span>
        {isExpanded ? (
          <FaChevronUp className="w-3 h-3" />
        ) : (
          <FaChevronDown className="w-3 h-3" />
        )}
      </button>
    </motion.div>
  );
});

ShowMoreButton.displayName = "ShowMoreButton";

export default ShowMoreButton;