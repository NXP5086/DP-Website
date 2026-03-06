import React from 'react'
import Bannersection from '../../components/Bannersection'
const page = () => {
    return (
        <main>
            <Bannersection
                image="/banners/banner1.jpg"
                title="Accessibility Statement"
                description=""
            />

            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="section-title text-center text-gray-800">Accessibility Statement for DestinationPick</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-700 mb-8 text-center">
                        This is an accessibility statement from DestinationPick.
                    </p>

                    <div className=" p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Measures to Support Accessibility</h3>
                                <p className="text-gray-600 mb-4">
                                    DestinationPick takes the following measures to ensure accessibility:
                                </p>
                                <ul className="list-disc pl-8 text-gray-600 space-y-2">
                                    <li>Include accessibility throughout our internal policies.</li>
                                    <li>Provide continual accessibility training for our staff.</li>
                                    <li>Assign clear accessibility goals and responsibilities.</li>
                                    <li>Employ formal accessibility quality assurance methods.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Conformance Status</h3>
                                <p className="text-gray-600 mb-4">
                                    The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. DestinationPick is fully conformant with WCAG 2.1 level AA. Fully conformant means that the content fully conforms to the accessibility standard without any exceptions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Feedback</h3>
                                <p className="text-gray-600 mb-4">
                                    We welcome your feedback on the accessibility of DestinationPick. Please let us know if you encounter accessibility barriers on DestinationPick:
                                </p>
                                <ul className="list-none pl-0 mb-6 text-gray-600 space-y-2">
                                    <li><strong>Phone:</strong> +1 917-913-4262</li>
                                    <li><strong>E-mail:</strong> <a href="mailto:info.us@destinationpick.com" className="text-blue-600">info.us@destinationpick.com</a></li>
                                    <li><strong>Visitor Address:</strong> 1039 I-35E Suite 306 Carrollton, Texas 75006, US</li>
                                    <li><strong>Postal Address:</strong> 3705 Crosby St, Irving TX, 75063 US</li>
                                </ul>
                                <p className="text-gray-600 mb-6">We try to respond to feedback within 24 Hours.</p>
                            </div>

                            <div>
                                <p className="text-gray-600">
                                    <strong>Date:</strong> This statement was created on 30 July 2021.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}

export default page