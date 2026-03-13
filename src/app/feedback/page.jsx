import React from 'react'
import Bannersection from '../../components/Bannersection'
import Feedbackform from '../../components/forms/Feedbackform'

export const metadata = { robots: { index: false, follow: false } }
const page = () => {
    return (
        <main>
            <Bannersection
                image="/banners/banner1.jpg"
                title="Feedback"
                description=""
            />

            <section className="section-padding">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="section-title text-center text-gray-800">Feedback Form</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-700 mb-8 text-center">
                        We value your feedback! Please use the form below to share your thoughts, suggestions, or any comments you may have.
                    </p>

                    <div className=" p-8 rounded-lg shadow-lg max-w-lg mx-auto bg-white">
                        <Feedbackform />
                    </div>
                </div>
            </section>


        </main>
    )
}

export default page