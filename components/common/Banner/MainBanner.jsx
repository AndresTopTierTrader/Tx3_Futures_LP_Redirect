'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NowLive } from './LiveNow';
import { InitialProfits } from './InitalProfits';
import { ForexVsFutures } from './ForexVsFutures';
import { NewInFutures } from './NewInFutures';
import { LaborDayPromo } from './LaborDayPromo'; 

function MainBanner({ }) {

    // ========================================================================
    // BANNER SCHEDULING CONFIGURATION
    // ========================================================================

    /**
     * HOW TO USE:
     * 1. Add your banner with:
     *    {
     *      id: 'uniqueName',
     *      component: YourBannerComponent,
     *      props: { translations: translations.section, locale },
     *      start: 'YYYY-MM-DD',
     *      end: 'YYYY-MM-DD' ADD ONE DAY MORE TO ENSURE PROMO THE ENTIRE LAST DAY
     *    }
     * 2. The component will be rendered automatically when active
     * 3. Props are passed directly to the component
     * 4. Banners are automatically activated/deactivated based on dates
     * 5. (PROMO ENDS THE FIRST MINUTE OF THE DAY ==> 00:01) example:
     *    * if promo ends the day 30, the banner will stop rendering the 29th at 00:00 (Add one day more if you want to include the last day on the promo)
     */

    const bannerSchedule = [
        {
            id: 'LaborDayPromo',
            component: LaborDayPromo,
            start: '2025-08-21',
            end_plus_one: '2025-09-03'
        },
        {
            id: 'nowLive',
            component: NowLive,
            start: '2025-06-01',
            end_plus_one: '2025-12-30'
        },
        {
            id: 'initialProfits',
            component: InitialProfits,
            start: '2025-06-01',
            end_plus_one: '2025-12-30'
        },
        {
            id: 'forexVsFutures',
            component: ForexVsFutures,
            start: '2025-06-01',
            end_plus_one: '2025-12-30'
        },
        {
            id: 'newInFutures',
            component: NewInFutures,
            start: '2025-06-01',
            end_plus_one: '2025-12-30'
        },

    ];

    // ========================================================================
    // LOGIC AND STATE
    // ========================================================================

    const [activeBanners, setActiveBanners] = useState([]);
    const [currentBanner, setCurrentBanner] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Get active banners based on current date
    const getActiveBanners = () => {
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

        return bannerSchedule.filter(banner =>
            today >= banner.start && today <= banner.end_plus_one
        );
    };

    // Update active banners (runs on mount and daily)
    useEffect(() => {
        const updateBanners = () => {
            const active = getActiveBanners();

            setActiveBanners(active);
            if (active.length > 0 && (!currentBanner || !active.find(b => b.id === currentBanner.id))) {
                setCurrentBanner(active[0]);
                setCurrentIndex(0);
            }
        };

        updateBanners();

        // Check for changes every hour (in case date changes)
        const interval = setInterval(updateBanners, 3600000); // 1 hour
        return () => clearInterval(interval);
    }, [currentBanner]);

    // Automatic carousel (maintains original functionality)
    useEffect(() => {
        if (activeBanners.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const newIndex = (prevIndex + 1) % activeBanners.length;
                setCurrentBanner(activeBanners[newIndex]);
                return newIndex;
            });
        }, 7000); // 7 seconds

        return () => clearInterval(interval);
    }, [activeBanners]);

    // If no banners are active, don't show anything
    if (activeBanners.length === 0 || !currentBanner) {
        return null;
    }

    // ========================================================================
    // RENDERING - CLEAN AND DYNAMIC
    // ========================================================================

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };

    // Dynamic component rendering
    const BannerComponent = currentBanner.component;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='z-50'
            exit="hidden"
            key={currentBanner.id}
            variants={contentVariants}
        >
            <BannerComponent {...currentBanner.props} />
        </motion.div>
    );
}

export default MainBanner;