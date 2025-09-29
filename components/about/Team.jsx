'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowDimensions } from '@/utils/getWindowDimensions';

const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
)

const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
)

function Team() {

    const [isLoading, setIsLoading] = useState(false);
    const [teamMembers, setTeamMembers] = useState([]);
    const [visibleMembers, setVisibleMembers] = useState([]);

    const fetchTeamMembers = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_MAIN_DB_KEY}/global-team-members?populate=image`);
            if (!response.ok) throw new Error("Network response was not ok");
            const result = await response.json();
            const data = result.data;

            const newList = data.map((item) => ({
                name: item.attributes.name,
                role: item.attributes.role,
                img: item.attributes.image.data.length > 0 ? item.attributes.image.data[0].attributes.url : "",
            }));

            setTeamMembers(newList);
        } catch (error) {
            console.error("Error fetching images", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const windowSize = useWindowDimensions();
    const [membersToShow, setMembersToShow] = useState(3);

    useEffect(() => {
        if (windowSize.width < 640) {
            setMembersToShow(1); // Mobile view
        } else {
            setMembersToShow(3); // Desktop view
        }
    }, [windowSize.width]);

    // Update visibleMembers whenever the relevant states change
    useEffect(() => {
        const updateVisibleMembers = () => {
            const members = [];
            for (let i = 0; i < membersToShow; i++) {
                members.push(teamMembers[(currentIndex + i) % teamMembers.length]);
            }
            setVisibleMembers(members.filter(Boolean)); // Filter out undefined entries
        };

        updateVisibleMembers();
    }, [currentIndex, membersToShow, teamMembers]);

    const paginate = (newDirection) => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) {
                return teamMembers.length - 1;
            } else if (newIndex >= teamMembers.length) {
                return 0;
            }
            return newIndex;
        });
    };

    const transitionSettings = {
        type: "spring",
        stiffness: 300,
        damping: 30
    };

    return (
        <div className='flex flex-col'>
            <div className="mx-10 py-20 relative">
                <h2 className="text-center text-3xl mb:text-center mb:text-4xl font-light text-white">Meet our Team</h2>
                <h2 className="mt-3 text-center text-base mb:px-0 mb:text-center text-[#A2ACCF]">Meet the Tx3 Funding Futures Leadership Team.</h2>

                <div className="h-[100px] rounded-full w-[300px] bg-[#45D1FF33]/80 absolute left-[1 0%] md:left-[40%] top-16 blur-[200px] -z-10"></div>

            </div>
            {isLoading ? (
                <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <p className="text-ttblue ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">
                        Loading Team memebers...
                    </p>
                </div>
            ) : <div className="flex items-center justify-center pb-24 -mt-10 mb:mt-0 ">
                <button onClick={() => paginate(-1)} className='hover:scale-110 cursor-pointer transition-all text-white w-8 h-8 -mr-16 mb:mr-0'>
                    <ChevronLeft />
                </button>
                <AnimatePresence>
                    <motion.div className="flex"
                        initial={{ opacity: 0, scale: 0.8, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0, transition: transitionSettings }}
                        exit={{ opacity: 0, scale: 0.5, x: -30, transition: transitionSettings }}>
                        {visibleMembers.map((member, index) => (
                            <motion.div key={index * 235} className="flex flex-col px-20 items-center">
                                <Image src={member.img} alt={member.name} className='mb:w-60 w-48' width={200} height={200} />
                                <p className='font-light text-white text-xl mt-10'>{member.name}</p>
                                <p className='text-[#A2ACCF]' >{member.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                <button onClick={() => paginate(1)} className='hover:scale-110 cursor-pointer transition-all text-white w-8 h-8 -ml-16 mb:ml-0'>
                    <ChevronRight />
                </button>
            </div>}

        </div>
    );
}

export default Team;
