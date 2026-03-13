import React from 'react'
import Bannersection from '../../components/Bannersection'

export const metadata = { robots: { index: false, follow: false } }

const page = () => {
    return (
        <main>
            <Bannersection
                title="User Agreement"
                description=""
                image="/banners/pp.webp"
            />

            <section className='section-padding'>
                <div className="container">
                    <h1 className='section-title mb-4 text-center'>User Agreement</h1>
                    <div className="h-1 w-20 bg-accent mx-auto  rounded-full mb-6"></div>
                </div>
                <div className="max-w-5xl mx-auto p-8 rounded-lg ">
                    {/* Modification of Terms Section */}
                    <h2 className="text-3xl font-semibold mb-6">Modification of Terms</h2>
                    <p className="text-gray-700 mb-6">
                        DestinationPick reserves the right to change the terms, conditions and notices under which the Services are offered through the Website, including but not limited to the charges for the Services provided through the Website. The User shall be responsible for regularly reviewing these terms and conditions.
                    </p>

                    {/* Privacy Policy Section */}
                    <h2 className="text-3xl font-semibold mb-6">Privacy Policy</h2>
                    <p className="text-gray-700 mb-6">
                        The User hereby consents, expresses and agrees that he has read and fully understands the Privacy Policy of DestinationPick. The User further consents that the terms and contents of such Privacy Policy are acceptable to him.
                    </p>

                    {/* Limited User Section */}
                    <h2 className="text-3xl font-semibold mb-6">Limited User</h2>
                    <p className="text-gray-700 mb-6">
                        The User agrees and undertakes not to sell, trade or resell or exploit for any commercial purposes, any portion of the Service. For the removal of doubt, it is clarified that DestinationPick Services, including the use of the Website, is not for commercial use but is specifically meant for personal use only.
                    </p>

                    {/* Disclaimer of Warranties/Limitation of Liability Section */}
                    <h2 className="text-3xl font-semibold mb-6">Disclaimer of Warranties/Limitation of Liability</h2>
                    <p className="text-gray-700 mb-6">
                        DestinationPick has endeavored to ensure that all the information provided by it is correct, but DestinationPick neither warrants nor makes any representations regarding the quality, accuracy or completeness of any data or information. DestinationPick makes no warranty, express or implied, concerning the Website and/or its contents and disclaims all warranties of fitness for a particular purpose and warranties of merchantability in respect of services, including any liability, responsibility or any other claim, whatsoever, in respect of any loss, whether direct or consequential, to any User or any other person, arising out of or from the use of any such information.
                    </p>

                    {/* Links to Third Party Sites Section */}
                    <h2 className="text-3xl font-semibold mb-6">Links to Third Party Sites</h2>
                    <p className="text-gray-700 mb-6">
                        The Website may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of DestinationPick or the Website and DestinationPick is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. DestinationPick is not responsible for any form of transmission, whatsoever, received by the User from any Linked Site. DestinationPick is providing these links to the User only as a convenience, and the inclusion of any link does not imply endorsement by DestinationPick or the Website of the Linked Sites or any association with its operators or owners including the legal heirs or assigns thereof.
                    </p>

                    {/* Termination/Access Restriction Section */}
                    <h2 className="text-3xl font-semibold mb-6">Termination/Access Restriction</h2>
                    <p className="text-gray-700 mb-6">
                        DestinationPick reserves the right, in its sole discretion, to terminate the access to the website and the related services or any portion thereof at any time, without notice.
                    </p>

                    {/* Important Information Section */}
                    <h2 className="text-3xl font-semibold mb-6">Important Information</h2>
                    <p className="text-gray-700 mb-6">
                        Please be advised that conforming to the passport and visa requirements, and providing us with the correct name as per the passport is the sole responsibility of the person traveling or designated guardian. You must make sure that they are in order prior to booking the ticket. Failing to do so will result in heavy rebooking fees, fare differences, and in some cases, completely non-refundable bookings.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Your passport must be valid for at least 6 months from the date of travel and an applicable valid visa must be obtained before travel. The airfares displayed above are subject to availability. Fares are not guaranteed until tickets are issued. Please note that we are not holding any booking for you.
                    </p>
                    <p className="text-gray-700 mb-6">
                        While replying to this email, please mark a copy to all so that your query is answered even in my absence. Few seats are available, so please revert with the Last Name/First Name of the passenger(s) with Date of Birth, so that we can send you an itinerary. Please call the respective embassy for transit visa requirements. Cancellation and Refunds are subject to Airline Rules, and it can be non-refundable.
                    </p>
                </div>
            </section>
        </main>

    )
}
export default page