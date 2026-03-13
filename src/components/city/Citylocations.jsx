import React from 'react'
import Image from 'next/image'

const Citylocations = ({ data }) => {

    if (!data) return null;
    return (
        <section className="section-padding">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="section-header text-center">
                    <h2 className="section-title">City Locations</h2>
                    <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.map((city) => (
                        <div
                            key={city.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-96"
                        >
                            {/* Image */}
                            <Image
                                src={city.image}
                                alt={city.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 p-6 text-white">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {city.title}
                                </h3>
                                <p className="text-sm text-white/90 leading-relaxed max-w-md">
                                    {city.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Citylocations
