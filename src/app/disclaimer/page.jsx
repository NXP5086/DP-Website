import React from 'react'
import Bannersection from '../../components/Bannersection'

export const metadata = {
    title: "Disclaimer | DestinationPick",
    description: "Read the DestinationPick disclaimer regarding the accuracy of information provided on our website and the limitations of our liability for travel-related content.",
    alternates: { canonical: "https://www.destinationpick.com/disclaimer/" },
    robots: { index: false, follow: false },
}

const page = () => {
    return (
        <main>
            <Bannersection
                title="Disclaimer"
                description=""
                image=""
            />


            <section className='section-padding'>
                <div className='container'>
                    <h5 className='section-title text-center'>Disclaimer</h5>
                    <div className="h-1 w-20 bg-accent  rounded-full mb-6 mx-auto"></div>

                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-xl font-semibold mt-16">User Agreement between Customers and DestinationPick.com</h2>
                        <p>Welcome to DestinationPick.com. This website is provided solely to assist customers in gathering travel information, determining the availability of travel-related goods and services. We at DestinationPick.com make legitimate travel reservations or otherwise transacting business with the travel suppliers and for no other purposes.</p>

                        <p>DestinationPick.com website is offered to you on condition of your acceptance and every effort is made to ensure our website’s users accept that the information, terms, conditions, and notices contained on this website are complete, correct and without modification. This disclaimer policy refers to the customers visiting our website and/or booking a travel reservation via this website, or through our customer service agents.</p>

                        <p>DestinationPick.com may at any time modify this user Agreement and your continued use of the DestinationPick.com service will be conditioned upon the terms and conditions in force at the time of your use. Additionally, the website of DestinationPick.com may contain the terms and conditions related to govern any particular feature of a particular offer. In the event that any of the terms & conditions contained herein conflict with the additional terms or guidelines contained within DestinationPick.com website, then these terms shall prevail.</p>

                        <p>Please read the terms & conditions of use carefully given on the website. While accessing or using DestinationPick.com website, booking any travel product or service on the website, or contacting our travel executives, you agree that the Terms & Conditions of Use then in force shall apply. Our website constitutes a user agreement that is expressly conditioned on user acceptance and by using DestinationPick.com Service; you signify your agreement to all such information, terms, conditions and notices. If you do not agree with any aspect of the following terms, conditions and notices, you must not use and make reservations through DestinationPick.com.</p>

                        <h3 className="text-lg font-semibold mt-16">Ownership and Copyrights Policy</h3>
                        <p>DestinationPick.com module, together with its content arrangement and content compilation on the website are subject to copyright property. All these are making a part of DestinationPick.com services. On the website there is some Data that is related to schedule its copyrighted work of third-party information providers.</p>

                        <p>At DestinationPick.com, we provide the users some content such as trademarks, logo, sound, graphics, videos or any other material or information that is displayed on the website are registered or may be protected by copyrights, trademarks, or other intellectual property rights and laws. All the users acknowledge and agree about the condition that they shall not copy, transmit, upload, post, reproduce, or distribute any content or create derivative works of such material without express authorization.</p>

                        <p>The use of such materials on any other website, application or in any environment of networked computers is prohibited. Thus a user may use any copyrighted or other proprietary content with the consent of the owner and must retain all copyright and trademark notices, including any other proprietary notices, contained in the available materials, and the user must not alter, obscure or obliterate any of such notices.</p>

                        <h3 className="text-lg font-semibold mt-16">Limited Users</h3>
                        <p>All the content, information on this website or the infrastructure used to provide such content and information, is proprietary to us or our suppliers and providers. DestinationPick.com website is specifically meant for personal use only. The website is not for commercial use, unless otherwise specified. As per the terms and conditions or under the copyright law, the website’s user shall not modify, copy, transmit, distribute, display, perform, reproduce, publish, create derivative works from, transfer, or sell any information, software, product or services obtained from this site. You acknowledge that you did not acquire any ownership rights by downloading copyrighted material.</p>

                        <p>Additionally, you may also agree not to:</p>
                        <ul className="mt-5">
                            <li>Use website’s content or any material for any commercial purpose.</li>
                            <li>Conduct any speculative, false, or fraudulent activity, booking or any reservation in anticipation of demand.</li>
                            <li>Access, monitor or copy any content or information of this website using any robot, spider, scraper or other automated means or any manual process for any purpose without our written permission.</li>
                            <li>Violate the restrictions in any robot exclusion headers on this website or bypass or circumvent other measures employed to prevent or limit access to this website.</li>
                            <li>Take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure.</li>
                            <li>Deep-link to any portion of this website (including, without limitation, the purchase path for any travel services) for any purpose without our written permission.</li>
                            <li>"Frame", "mirror" or otherwise incorporate any part of this website into any other website without our prior written authorization.</li>
                        </ul>

                        <p>As per the agreement with the website's user, DestinationPick.com reserves all rights to cancel your booking if DestinationPick.com finds any suspicious activity or your booking shows any sign of fraud or abuse action. DestinationPick.com may also take legal action if the user conducts any fraudulent activity, he or she may be liable for monetary losses to DestinationPick.com, including the litigation cost and damage.</p>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default page