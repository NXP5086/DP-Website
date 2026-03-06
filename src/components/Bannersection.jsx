import React from 'react'

const Bannersection = (props) => {

    const { image, title, description } = props
    return (
        <section className="relative h-[60vh] min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                {image && <img
                    src={image}
                    alt="Cancun Destination Wedding"
                    className="w-full h-full object-cover"

                />}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl">
                {title && <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                    {title}
                </h2>}
                {description && <p className=" md:text-lg text-white/90 max-w-2xl mx-auto">
                    {description}
                </p>}
            </div>
        </section>
    )
}

export default Bannersection