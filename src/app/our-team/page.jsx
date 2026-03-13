import React from 'react'
import Bannersection from '../../components/Bannersection'
import OurteamCard from '../../components/OurteamCard'

export const metadata = {
    title: "Meet Our Team | Destination Wedding & Travel Specialists",
    description: "Meet the DestinationPick team — experienced destination wedding planners, travel specialists, and operations professionals dedicated to crafting unforgettable experiences worldwide.",
    keywords: "destination wedding team, travel management specialists, DestinationPick team, wedding planners USA",
    alternates: {
        canonical: "https://www.destinationpick.com/our-team/",
    },
    openGraph: {
        title: "Meet Our Team | DestinationPick",
        description: "Meet the people behind DestinationPick — destination wedding planners, travel specialists, and operations professionals serving clients across the USA.",
        images: [{ url: "/banners/banner1.jpg", width: 1200, height: 630, alt: "DestinationPick Team" }],
    },
}

const page = () => {

    const teamMembers = [
        {
            image: "/members/StanleyAlexander.webp",
            name: "Stanley Alexander",
            position: "FOUNDER & CEO",
            description: "Stanley Alexander founded DestinationPick headquartered in Irving, Texas, USA. He built his success on the belief that the world must be traveled and be enjoyed by all and that every customer should be given the same level of service that he expects to receive. A visionary strategist in global travel, and as a brand champion Stanley is an extremely aggressive goal-oriented super achiever. His management strategies are a unique blend of entrepreneurial fervor, innovation, inspiration, and independence.",
        },

        {
            image: "/members/abhishek-pappu-small-img.jpg",
            name: "Abhishek Pappu",
            position: "CLIENT SERVICE MANAGER",
            description: "Abhishek Pappu, who also goes by his nickname Shake, is an expert with over 6 years of experience in the areas of public relations and customer service. He moved from India to the United States in the year of 2012 to attend college at Columbia International University where he pursuedhisBachelor's degree in Youth Ministry,Family&Culture. He also played soccer for his college. He also servedas a youth pastor/worship leaderat multipleChurches. After graduating, Shakewas hiredto coach at a Soccer Training Franchise called Soccer Shots. Within months he wasappointed asthe Director of Coaches.",
        },

        {
            image: "/members/Wendy.jpg",
            name: "Wendy Del Rosario",
            position: "OPERATIONS ASSOCIATE",
            description: "Wendy Del Rosario's journey began in Higüey, Dominican Republic, where she was raised as the eldest in a family of five. Even from a young age, Wendy exhibited a profound interest in quality, a trait that would shape her life's trajectory. This innate curiosity led her to pursue higher education at Broome Community College in New York, where she majored in Quality Assurance.Upon completing her studies, Wendy returned to her homeland, but her heart yearned for something beyond the bustling city life.",
        },
        {
            image: "/members/nathan-img.webp",
            name: "Nathan Paul",
            position: "TECHNICAL SUPPORT & OPERATIONS ASSOCIATE",
            description: "Nathan developed a passion for travelling at a young age and is still a frequent traveler to this day. His love for travel has taken him to other countries for mission humanitariantrips. Nathan loves experiencing new and unique cultures all around the world and has a desire to continue doing so.Nathan is currently pursuing a bachelors degree in electrical engineering at the University of North Texas with a minor in business foundations.",
        },


        {
            image: "/members/lucy-img.webp",
            name: "Lucy-martinez",
            position: "Operations Associate - Cancun",
            description: "Luz Martinez, had a passion for the hospitality world. She started working in her family restaurant in Fort Myers FL. Having moved to Cancun in 1996, she worked as a corporate director for events with The Ritz Carlton, Palace Resorts, HardRock Melia Hotels International. She first became passionate about weddings/events during her tenure at Palace Resorts where she created the Weddings Call center and went on educating herself. ",
        },

        {
            image: "/members/joseph-mallory.webp",
            name: "Joseph Mallory",
            position: "Creative Content",
            description: "Joseph developed a deep appreciation to travel following his first visit to the Bahamas in the summer of his senior year of high school. Being born American but of bi-ethnicity, African American and Bahamian descent, he had not yet until this time experienced his other culture of Bahamian living. His trip to the islands allowed him to discover his very own culture and awaken a sense of pride in his deep-rooted identity. Since then, he continues to advocate for people to travel and experience culture. Joseph loves to express his thoughts through different mediums of art including music, poetry, painting, and his latest interest, photography. ",
        },
    ]


    const AdvisoryBoard = [
        {
            image: "/members/melinda-drewry-chapman.webp",
            name: "Lindy Drew Chapman",
            position: "ADVISOR",
            description: "Lindys spirit for adventure began her first trip to Europe at the age of 8. Shes been moving ever since including twice to Vienna before her now husband David came and proposed. Since then, his work created numerous opportunities for corporate relocation throughout the US and internationally which allowed them the opportunity to travel the world with their 4 kids (who now reside in San Francisco, New York City, Boston, and Auburn, AL)",
        },

        {
            image: "/members/glenda-miller.webp",
            name: "Glenda Miller",
            position: "ADVISOR",
            description: "Glenda Miller is a native Texan who has been planning and executing events for over 20 years. Throughout her career, she has coordinated hundreds of Weddings as well as countless corporate and charitable events. She has developed an understanding of logistics and flow in special event planning. In the Private Club atmosphere, Glenda instantly felt at home as she understood Club Membership amplified familial connections in a digital world. Glenda believes a well-planned space combined with top notch hospitality, great food, and good belly laugh are tantamount to executing impeccable events.",
        },

        {
            image: "/members/jemi-alexander.webp",
            name: "Jemi Alexander",
            position: "ADVISOR & MANAGER - FINANCE & PAYROLL",
            description: "Dr. Jemi Alexander, PharmD, is a licensed pharmacist who possesses more than 7 years of progressive experience in the field of pharmacy. Her passion for patient care and her interest in chemistry allowed her to pursue her degree in pharmacy. She graduated with a Doctor of Pharmacy degree from Long Island University, NY in 2012. Her professional history includes positions such as Pharmacy Intern and Registered Staff Pharmacist at CVS Pharmacy. She brings a high degree of professionalism and efficiency to this position, along with her sincere passion for providing excellent patient care.",
        },

        {
            image: "/members/anil-joseph.webp",
            name: "ANIL JOSEPH",
            position: "ADVISOR",
            description: "Anil Joseph has 20 years of entrepreneurial experience in such varied fields as information technology, healthcare & telecommunications. Equally impressive is his strong understanding of developing technologies that address significant, untapped markets & bring products/services to market. He holds a Bachelors's in Mechanical Engineering from India & an MBA from Pace University in New York. Additionally, he holds the position of CEO/President of Careplus Health Services, Erez Holdings & also served as the NAC commissioner for the City of Carrollton, Texas. Anil holds the Series 7 license.",
        },

    ]

    return (
        <main>
            <Bannersection
                image="/banners/banner1.jpg"
                title="Our Team"
                description="DestinationPick, a proud subsidiary of SJ Group of Companies, is dedicated to crafting bespoke travel experiences with a strong focus on personalized service and competitive wholesale pricing"
            />
            <section className='section-padding bg-white'>
                <div className="container">
                    <h1 className='section-title mb-4 text-center'>Our Team</h1>
                    <div className="h-1 w-20 bg-accent mx-auto  rounded-full mb-6"></div>
                </div>


                <div className="max-w-5xl mx-auto">
                    <OurteamCard teamMembers={teamMembers} />
                </div>
            </section>



            <section className='section-padding bg-background'>
                <div className="container">
                    <h1 className='section-title mb-4 text-center'>Advisory Board</h1>
                    <div className="h-1 w-20 bg-accent mx-auto  rounded-full mb-6"></div>
                </div>


                <div className="max-w-5xl mx-auto">
                    <OurteamCard teamMembers={AdvisoryBoard} />
                </div>
            </section>


        </main>
    )
}

export default page