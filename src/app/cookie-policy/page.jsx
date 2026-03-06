import React from 'react'
import Bannersection from '../../components/Bannersection'
const page = () => {
    return (
        <main>
            <Bannersection
                title="Cookie Policy"
                description=""
                image=""
            />
            <section className='section-padding'>
                <div className="max-w-6xl mx-auto">
                    <h1 className='section-title text-center'>Cookie Policy</h1>
                    <div className="h-1 w-20 bg-accent  rounded-full mb-6 mx-auto"></div>
                </div>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-semibold mt-16">Last updated: July 30, 2021</h2>
                    <p>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.</p>
                    <p>Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.</p>
                    <p>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</p>

                    <h3 className="text-lg font-semibold mt-16">INTERPRETATION AND DEFINITIONS</h3>
                    <h4 className="font-medium">Interpretation</h4>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                    <h4 className="font-medium">Definitions</h4>
                    <p>For the purposes of this Cookies Policy:</p>
                    <ul>
                        <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to DestinationPick, 1039 I-35E Suite 306 Carrollton.</li>
                        <li><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
                        <li><strong>Website</strong> refers to DestinationPick, accessible from destinationpick.com</li>
                        <li><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-16">THE USE OF THE COOKIES</h3>
                    <h4 className="font-medium">Type of Cookies We Use</h4>
                    <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
                    <p>We use both session and persistent Cookies for the purposes set out below:</p>

                    <ul>
                        <li className='mt-5'><strong>Necessary / Essential Cookies</strong><br />
                            Type: Session Cookies<br />
                            Administered by: Us<br />
                            Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                        </li>
                        <li className='mt-5'><strong>Functionality Cookies</strong><br />
                            Type: Persistent Cookies<br />
                            Administered by: Us<br />
                            Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-16">Your Choices Regarding Cookies</h3>
                    <p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</p>
                    <p>If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>
                    <p>If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>

                    <h3 className="text-lg font-semibold mt-16">MORE INFORMATION ABOUT COOKIES</h3>
                    <p>You can learn more about cookies here: <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">All About Cookies by TermsFeed</a>.</p>

                    <h3 className="text-lg font-semibold mt-10">CONTACT US</h3>
                    <p>If you have any questions about this Cookies Policy, You can contact us:</p>
                    <ul>
                        <li>By email: <a href="mailto:info.us@destinationpick.com">info.us@destinationpick.com</a></li>
                    </ul>
                </div>

            </section>
        </main>
    )
}

export default page