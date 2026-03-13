import React from 'react';
import Image from 'next/image';

const OurteamCard = ({ teamMembers }) => {
    return (
        <div className="max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
                <div key={index} className='flex flex-col md:flex-row justify-center mb-10 items-center gap-8 bg-white p-4 rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)]'>
                    <div className="w-full md:w-[30%] relative h-72">
                        <Image
                            src={member.image}
                            alt={`${member.name} from DestinationPick`}
                            fill
                            sizes="(max-width: 768px) 100vw, 30vw"
                            className='object-contain rounded-lg'
                        />
                    </div>
                    <div className="w-full md:w-[70%]">
                        <h5 className='text-[32px] font-bold mb-2 font-serif'>{member.name}</h5>
                        <div className="h-px w-20 bg-accent rounded-full mb-4"></div>
                        <p className='mb-3 text-base text-gray-900'>{member.position}</p>
                        <p className='text-[15px] text-gray-700'>{member.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurteamCard;
