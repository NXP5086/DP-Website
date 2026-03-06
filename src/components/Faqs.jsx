"use client"

import React, { useState } from 'react';

const Faqs = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <div className="max-w-7xl mx-auto px-6">
            {/* Accordion for FAQs */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border border-border rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-secondary/30' : 'bg-card hover:bg-secondary/20'
                            }`}
                    >
                        <button
                            className="w-full px-6 py-5 cursor-pointer flex items-center justify-between text-left"
                            onClick={() => toggleFaq(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span className="font-medium text-foreground pr-4">{faq.question}</span>
                            <div
                                className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand' : ''
                                    }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    height="16"
                                    width="16"
                                >
                                    <path d="M8 10l4-4H4l4 4z" />
                                </svg>
                            </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                            <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Faqs;
