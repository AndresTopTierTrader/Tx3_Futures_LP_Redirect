'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FilterMobile } from "../fiilterMobile/FilterMobile";
import AllBlogs from "../AllBlogs";

export function BlogsGrid() {

    const [selectedCategory, setSelectedCategory] = useState('Latest');
    const [filteredBlogs, setFilteredBlogs] = useState(AllBlogs)
    const categories = [
        'Latest',
        'Updates',
        'Tips',
        'Traders',
        'Meet Ups'
    ];

    const filterSelected = 'text-green ml-4 transition-all'
    const filterStyle = 'hover:text-green/50 transition-all'

    useEffect(() => {
        const filterBlogs = selectedCategory === 'Latest' ? AllBlogs : AllBlogs.filter(blog => blog.category === selectedCategory)
        setFilteredBlogs(filterBlogs)
    }, [selectedCategory])

    return (
        <SectionLayout noPadding>
            <section className="flex flex-col w-full mx-auto max-w-4xl md:grid grid-cols-[124px,1fr] gap-10 md:gap-24">
                <article>
                    <div className="flex-row flex-wrap items-start hidden gap-8 pl-6 border-l md:flex md:flex-col border-border">
                        {
                            categories.map(category => (
                                <button key={category} onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? filterSelected : filterStyle}>{category}</button>
                            ))
                        }
                    </div>

                    <div className="md:hidden">
                        <FilterMobile categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                    </div>
                </article>

                <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {
                        [...filteredBlogs].reverse().map(({ title, href, thumbnail, category }, index) => (
                            <li key={title}>
                                <a href={`/blog/${href}`} className="relative flex flex-col gap-2 group">
                                    <Image src={thumbnail} alt={`Thumbanil image for ${title}`} className="w-full border rounded-xl aspect-video border-slate-700" />
                                    <p className="group-hover:underline">{title}</p>

                                    <span className="absolute px-4 py-2 text-xs rounded-md bg-background/60 text-modest top-1 left-1">{category}</span>

                                    {
                                        index === 0 &&
                                        <small className="absolute px-1 text-white bg-red-500 rounded-md right-2 top-2">New</small>
                                    }
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </SectionLayout>
    )
}