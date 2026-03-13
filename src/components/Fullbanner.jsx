"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Fullbanner = () => {
    return (
        <section className='w-full   h-[60vh] md:h-screen relative flex items-center justify-center'>
            <Image src='/images/destinations/hero-banner.jpg' alt='Luxury destination wedding venues — beach resorts in Mexico, Punta Cana & Caribbean' fill priority sizes="100vw" className='object-cover absolute ' />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className='max-w-5xl mx-auto relative text-center z-10'>
                <motion.h1
                    className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-[1.1] mb-3 md:mb-6 text-balance"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Our Destinations
                </motion.h1>

                <motion.p
                    className="text-white/90 text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    From Mexico to the Maldives, we orchestrate every detail of your dream celebration.
                    End-to-end luxury wedding planning for modern couples.
                </motion.p>
            </div>
        </section >
    )
}

export default Fullbanner

