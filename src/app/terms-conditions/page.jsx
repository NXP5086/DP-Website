import React from 'react'
import Bannersection from '../../components/Bannersection'
const page = () => {
    return (
        <main>
            <Bannersection
                title="Terms & Conditions"
                description=""
                image="/banners/pp.webp"
            />

            <section className='section-padding'>
                <div className="container">
                    <h1 className='section-title mb-4 text-center'>Terms & Conditions</h1>
                    <div className="h-1 w-20 bg-accent mx-auto  rounded-full mb-6"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6">Terms for Using the Website</h2>
                    <p className="text-gray-700 mb-6">
                        As per the terms and conditions given for the use of the website, every user must affirm the following:
                    </p>
                    <ul className="list-decimal ml-6 text-gray-700 mb-6">
                        <li>Each user possesses the lawful authority to create a binding legal obligation.</li>
                        <li>The user will use this website in accordance with these Terms of Use.</li>
                        <li>The user will only use this website to make legitimate reservations for themselves or another person for whom they are legally authorized to act.</li>
                        <li>The user will inform such other persons about the Terms of Use that apply to the reservations made on their behalf, including all rules and restrictions applicable thereto.</li>
                        <li>All information supplied by the user on this website is true, accurate, current, and complete.</li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                        At DestinationPick.com, we reserve the right to deny access to anyone to our website and the products and services that we offer, at any time and for any reason, including, but not limited to, violation of these Terms of Use.
                    </p>

                    {/* Using the Services of DestinationPick */}
                    <h2 className="text-3xl font-semibold mb-6 mt-12">Using the Services of DestinationPick.com</h2>
                    <p className="text-gray-700 mb-6">
                        We are only responsible for the transactions made by the website's user through DestinationPick.com. We are not responsible for screening, censoring, or controlling transactions, including whether the transaction is legal and valid as per the laws of the user's jurisdiction.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Users of the website agree to abide by all additional procedures and guidelines, as modified from time to time, in connection with the use of services. Users must comply with all applicable laws and regulations regarding the use of services provided. In case of disagreement with the additional terms or any particular website guidelines, these terms will take precedence.
                    </p>

                    {/* Alteration & Modification of Terms of Use */}
                    <h2 className="text-3xl font-semibold mb-6 mt-12">Alteration & Modification of Terms of Use</h2>
                    <p className="text-gray-700 mb-6">
                        All the modules and content on this website, including its arrangement and compilation, are the copyrighted property of DestinationPick.com. We retain the right to change the terms, conditions, and notices under which the DestinationPick.com website is offered, including but not limited to the charges associated with its use.
                    </p>
                    <p className="text-gray-700 mb-6">
                        The terms and conditions are regularly reviewed and updated. While we aim to ensure that all information on the website is accurate, we cannot guarantee the accuracy or completeness of the content. We reserve the right to correct any errors, including pricing errors, and will offer users the opportunity to proceed with their reservation at the correct price or cancel their booking without penalty.
                    </p>

                    {/* Supplier’s Policy Rules and Restrictions */}
                    <h2 className="text-3xl font-semibold mb-6 mt-12">Supplier’s Policy Rules and Restrictions</h2>
                    <p className="text-gray-700 mb-6">
                        By using the website, you must familiarize yourself with the additional terms and conditions that apply to your purchase of any travel-related goods, services, or reservations. The user must comply with these terms and conditions of purchase imposed by DestinationPick.com.
                    </p>
                    <p className="text-gray-700 mb-6">
                        The fulfillment of any supplier’s rules and restrictions related to the availability and use of fares, products, or services is not covered under these terms and conditions. Airline fares and services are only guaranteed once the purchase has been completed and the tickets issued. Airline companies and other travel suppliers may change their prices without prior notice, and we reserve the right to cancel bookings if full payment is not received in a timely manner.
                    </p>
                    <p className="text-gray-700 mb-6">
                        To cover additional expenses during your stay, some hotel suppliers may require you to present a credit card or cash upon check-in. These payments are separate from any payments received by DestinationPick.com for your booking.
                    </p>

                    {/* Reviews and Submissions Section */}
                    <h2 className="text-3xl font-semibold mb-6">Reviews, Comments, and Other Submissions</h2>
                    <p className="text-gray-700 mb-6">
                        We are always keen to know your views and appreciate hearing from you. DestinationPick.com also provides terms and conditions regarding journals, recommendations, reviews, queries, opinions, suggestions, ideas, news articles, directories, guides, text, images, photographs, illustrations, graphics, logos, information, data, software, applications, messages, comments, testimonials, questions, or other materials received from you.
                    </p>
                    <p className="text-gray-700 mb-6">
                        All these terms and conditions apply to all content submitted to the website through email, posting on the website, or otherwise. By submitting content, you grant DestinationPick.com and its subsidiaries, corporate affiliates, co-branded or linked website partners a non-exclusive, royalty-free, perpetual, transferable, irrevocable, and fully sub-licensable right to:
                    </p>
                    <ul className="list-decimal ml-6 mb-6 text-gray-700">
                        <li>Use and create derivative works from, publicly display, and perform such submissions throughout the world in any media.</li>
                        <li>Reproduce, modify, translate, distribute, and publish all such submissions.</li>
                        <li>Use the name and email ID associated with such submissions.</li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                        By submitting your opinion, comments, or reviews, you agree that DestinationPick.com may provide attribution of your submissions at our discretion, and that such submissions may be shared with our supplier partners.
                    </p>
                    <p className="text-gray-700 mb-6">
                        In case of violation of these Terms of Use by you or the DestinationPick.com rights in the submissions, we reserve the right to take legal action. All submissions and postings are non-proprietary and non-confidential. DestinationPick.com assumes no responsibility or liability for any submission posted or submitted by users. We reserve the right in our absolute discretion to determine which comments are published on the website.
                    </p>
                    <p className="text-gray-700 mb-6">
                        If you do not agree to these Terms of Use, please do not provide us with any submissions. Violation of these Terms may lead to legal action, and DestinationPick.com reserves all rights to enforce its policies.
                    </p>

                    {/* Privacy Policy Section */}
                    <h2 className="text-3xl font-semibold mb-6 mt-12">Privacy Policy</h2>
                    <p className="text-gray-700 mb-6">
                        DestinationPick.com is committed to protecting your privacy while you use our website or make any booking. We encourage you to review the current and updated privacy policy, which governs your use of this website to understand our practices.
                    </p>



                    <h2 className="text-3xl font-semibold mb-6">Prepaid Hotel Booking and Reservations</h2>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">
                        To facilitate booking or reservations for hotel accommodation with the best chance to stay during your travel, DestinationPick.com pre-negotiates certain hotel rooms with the hotel suppliers on your behalf.
                    </p>

                    <p className="text-gray-700 mb-6">
                        Displayed room rates on our website are a combination of these pre-negotiations and our recommendations. Whenever you choose DestinationPick.com to book your travel, you acknowledge that you authorize us to book your reservations for the total price, which includes the room rate displayed on the website, plus tax recovery charges, service fees (where applicable), and taxes on our services.
                    </p>

                    <p className="text-gray-700 mb-6">
                        Upon submitting your reservation request, you authorize DestinationPick.com to facilitate hotel reservations on your behalf, including making payment arrangements with the hotel suppliers.
                    </p>

                    <p className="text-gray-700 mb-6">
                        Except as provided below regarding tax responsibility for the amounts we retain for our services, DestinationPick.com does not collect any taxes for remittance to applicable taxing authorities. All tax recoveries charged on prepaid hotel transactions are a recovery of estimated taxes paid by DestinationPick.com to the hotel supplier for taxes due on the hotel's rental rate for the room.
                    </p>

                    <p className="text-gray-700 mb-6">
                        Hotel suppliers are solely responsible for remitting applicable taxes to the respective taxing jurisdictions. The displaying taxability and appropriate tax rate may vary greatly depending on the location of the hotel at the time of actual use by our customers.
                    </p>

                    <p className="text-gray-700 mb-6">
                        We retain service fees as additional compensation for servicing your travel booking or reservation. DestinationPick.com users may cancel or change their prepaid hotel reservations, subject to cancellation or change fees indicated in the rules and restrictions of the hotel reservation.
                    </p>

                    <p className="text-gray-700 mb-6">
                        If you do not show for the first night of your reservation but plan to check in for subsequent nights, you must confirm the reservation changes with us no later than the first night of your booking to prevent cancellation.
                    </p>

                    <h2 className="text-3xl font-semibold mb-6">DestinationPick.com Liability Disclaimer</h2>

                    <p className="text-gray-700 mb-6">
                        We are not taking any responsibility regarding the accuracy of and disclaim all liability for any error or other type of inaccuracies which relate to the information and description of the flight, vacation, cruise, hotel, cruise, car and other travel products and travel services displayed on DestinationPick.com Website.
                    </p>

                    <p className="text-gray-700 mb-6">
                        Information, software, application, our product and services that are published on this website may include inaccuracies or errors. In addition, DestinationPick.com reserves all rights to correct any pricing or any type of error on our website and/or pending bookings and reservations made under an incorrect price. In such a case, if available, DestinationPick.com will offer you the opportunity to keep your pending reservation at the correct price or we'll cancel your booking or reservation without any penalty.
                    </p>

                    <p className="text-gray-700 mb-6">
                        Hotel and resort ratings are displayed on our website and all those ratings are intended as only general guidelines. DestinationPick.com does not guarantee the accuracy of the ratings of such property.
                    </p>

                    <p className="text-gray-700 mb-6">
                        The service providers of hotel, carriers and other travel products and services are fully independent and they do not perform as agents or employees of DestinationPick.com. We are not liable for any act, errors, omissions, representations, warranties, breaches or negligence of any such supplier(s) or for any personal injury, death, property damage, or other damages or expenses resulting from these.
                    </p>

                    <p className="text-gray-700 mb-6">
                        Additionally, DestinationPick.com holds no liability and will make no money back in the event of any delay, cancellation, overbooking, strike, force majeure, or other reasons beyond our direct control. We are not responsible for any additional expenses, omissions, delays, re-routing, or acts of any government or authority.
                    </p>

                    <p className="text-gray-700 mb-6">
                        The terms and conditions with all limitations are for your acknowledgment regarding the allocation of risk between the parties. All these conditions and limitations specified in this segment will survive and apply even if any limited remedy specified in these Terms of Use is found to have failed of its essential purpose.
                    </p>

                    <p className="text-gray-700 mb-6">
                        The limitations of liability provided in these Terms of Use ensure to the benefit of DestinationPick.com and/or respective agents and suppliers.
                    </p>

                    <p className="text-gray-700 mb-6">
                        DestinationPick.com serves its customers only as a travel agent and acts only as a booking agent. We take no liability for any aspect of preparations and arrangements between the suppliers and the customers regarding the standard of the services. In no circumstances shall DestinationPick.com be responsible for the services offered by the supplier.
                    </p>


                    <h2 className="text-3xl font-semibold mb-6">Links to Third Party Sites</h2>
                    <p className="text-gray-700 mb-6">
                        On DestinationPick.com, you may find links to other websites operated by third parties. These links are not under the control of DestinationPick.com, and we are not responsible for the content, material, limitations, updates, or any form of transmission from these linked websites.
                    </p>
                    <p className="text-gray-700 mb-6">
                        We provide these links solely for your convenience. The inclusion of any web link does not imply endorsement by DestinationPick.com of the linked website or any association with its operators or owners, including their legal heirs or assigns.
                    </p>

                    <h2 className="text-3xl font-semibold mb-6">Currency Converter</h2>
                    <p className="text-gray-700 mb-6">
                        If a currency converter is available on the website, the following terms and conditions apply: Currency rates are based on various publicly available sources and should only be used as guidelines. Rates may not be accurate and are subject to change.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Currency quotes are not updated every day. The date of the last update is shown on the currency converter. While we believe the information provided is accurate, DestinationPick.com and its affiliates do not guarantee such accuracy. For any financial purpose, we advise you to consult a qualified professional to verify currency rates.
                    </p>
                    <p className="text-gray-700 mb-6">
                        The use of the currency information is only authorized for personal use. You are expressly prohibited from reselling, redistributing, or using the information for commercial purposes.
                    </p>

                    <h2 className="text-3xl font-semibold mb-6">Bank and Credit Card Fees</h2>
                    <p className="text-gray-700 mb-6">
                        Some banks and credit card companies may impose fees for international transactions. If you are making a booking from outside of the United States using a U.S. credit card, your bank may convert the payment amount to your local currency and charge a conversion fee.
                    </p>
                    <p className="text-gray-700 mb-6">
                        This means the amount shown on your credit or bank card statement may be in your local currency and could differ from the amount shown on the booking summary page. Additionally, a foreign transaction fee may be assessed by the bank if it is located outside of the U.S.
                    </p>
                    <p className="text-gray-700 mb-6">
                        The currency exchange rate and foreign transaction fee are determined solely by your bank on the day they process the transaction. If you have any questions regarding these fees or the exchange rate applied to your booking, please contact your bank.
                    </p>

                </div>
            </section>
        </main>

    )
}
export default page