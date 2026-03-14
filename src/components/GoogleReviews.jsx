import { Star } from 'lucide-react'

const reviews = [
    {
        name: "Nikita Jayswal",
        date: "Nov 2024",
        rating: 5,
        text: "If we could give more than 5 stars, we would! Destination Pick, led by the incredible Stan and Abhishek, literally saved our wedding. After a year of planning with a team that abandoned us just 14 days before our 5-day wedding in Mexico, we were in complete distress. Stan and Abhishek stepped in and transformed our nightmare into the most unforgettable experience of our lives. Their expertise, transparency, and impeccable hospitality turned everything around.",
    },
    {
        name: "Christine Bartlett",
        date: "Sept 2022",
        rating: 5,
        text: "We celebrated our friend's 40th birthday in Los Cabos and it was excellent. From staying at the Ziva Hyatt, tequila tasting to dinner at Jazz on the Rocks! Stanley and his company did amazing work to pull it all off and make it look flawless. Thanks for hosting us and making G's birthday everything it was meant to be!! We will be back — hopefully all 50+ people again!!",
    },
    {
        name: "Kunjamma Chacko",
        date: "Sept 2022",
        rating: 5,
        text: "Amazing as always! Stanley from DestinationPick organized a group travel cruise to Alaska. I was unable to attend last-minute due to personal circumstances. Stanley without hesitation made it his priority to help me get my travel cost reimbursed. After several phone calls and hours spent with Royal Caribbean management, he came through way ahead of time. I am grateful for his personal attention.",
    },
    {
        name: "Serena Bhela",
        date: "Dec 2021",
        rating: 5,
        text: "Stan was amazing!! He not only helped our guests book hotel rooms for a destination wedding in Cancun but he helped ensure the events went smoothly and brought energy to the crowd! Would highly recommend him and his team!",
    },
    {
        name: "Liz George",
        date: "Aug 2021",
        rating: 5,
        text: "We had the most amazing experience working with Stanley and DestinationPick. He went above and beyond to help our bachelorette party be the most relaxing and fun. He picked an amazing hotel with a great view and an amazing spa for us girls to feel like complete royalty. I would definitely recommend Stanley and DestinationPick for all your travel needs.",
    },
    {
        name: "Darshan Patel",
        date: "Feb 2023",
        rating: 5,
        text: "Worked with Stanley multiple times to plan vacations for my wife and myself. He is excellent and would highly recommend using him! Your trip will be seamlessly planned from getting picked up at the airport to having an excellent stay based on your travel needs.",
    },
]

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                />
            ))}
        </div>
    )
}

export default function GoogleReviews() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="section-title text-center mb-2">What Couples Are Saying</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-4"></div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <StarRating rating={4} />
                        <span className="font-semibold text-gray-800">4.3</span>
                        <span>· 12 reviews on Google</span>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.name} className="bg-white p-6 rounded-lg shadow-sm flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold shrink-0">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
                                    <p className="text-xs text-muted-foreground">{review.date}</p>
                                </div>
                            </div>
                            <StarRating rating={review.rating} />
                            <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
