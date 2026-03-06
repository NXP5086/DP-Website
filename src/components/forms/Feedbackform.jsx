"use client"
import React, { useState } from 'react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzTO-1MaxJsvSB3qwU7HQ6p_ZNcboJFXlPvseDNtGJvLSpbtwijEBJ_atSfIa8VVtdNaw/exec';

const Feedbackform = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [submitMessage, setSubmitMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        services: [],
        otherServices: '',
        rating: 0,
        satisfaction: {
            responsiveness: '',
            knowledge: '',
            friendliness: '',
            attentionToDetail: '',
            venueTravel: '',
            logistics: '',
        },
        likeMost: '',
        areasToImprove: '',
        recommendation: '',
        testimonialWilling: '',
        testimonialText: '',
    });

    const [errors, setErrors] = useState({});

    const services = [
        'Destination Wedding Planning',
        'Guest Travel Coordination',
        'Resort and Venue Booking',
        'Corporate Travel',
        'Private Travel',
        'Touring and Events',
        'Holy Land Tour'
    ];

    const handleChange = (e) => {
        const { id, name, value } = e.target;
        const fieldId = id || name; // Use id if available, otherwise use name (for radio buttons)
        setFormData({
            ...formData,
            [fieldId]: value,
        });
        if (errors[fieldId]) {
            setErrors({
                ...errors,
                [fieldId]: '',
            });
        }
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setFormData({
                ...formData,
                services: [...formData.services, value],
            });
        } else {
            setFormData({
                ...formData,
                services: formData.services.filter(s => s !== value),
            });
        }
        if (errors.services) {
            setErrors({
                ...errors,
                services: '',
            });
        }
    };

    const handleRatingChange = (value) => {
        setFormData({
            ...formData,
            rating: value,
        });
        if (errors.rating) {
            setErrors({
                ...errors,
                rating: '',
            });
        }
    };

    const handleSatisfactionChange = (aspect, value) => {
        setFormData({
            ...formData,
            satisfaction: {
                ...formData.satisfaction,
                [aspect]: value,
            },
        });
        if (errors[aspect]) {
            setErrors({
                ...errors,
                [aspect]: '',
            });
        }
    };

    const validateStep = (step) => {
        let stepErrors = {};
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (step === 1) {
            if (!formData.name.trim()) {
                stepErrors.name = 'Name is required';
            }
            if (!formData.email.trim()) {
                stepErrors.email = 'Email is required';
            } else if (!emailPattern.test(formData.email)) {
                stepErrors.email = 'Please enter a valid email address';
            }
            if (!formData.phone.trim()) {
                stepErrors.phone = 'Phone number is required';
            } else if (formData.phone.length < 10) {
                stepErrors.phone = 'Phone number must be at least 10 digits';
            }
        } else if (step === 2) {
            if (formData.services.length === 0) {
                stepErrors.services = 'Please select at least one service';
            }
        } else if (step === 3) {
            if (!formData.rating) {
                stepErrors.rating = 'Please rate your experience';
            }
        } else if (step === 4) {
            if (!formData.satisfaction.responsiveness) {
                stepErrors.responsiveness = 'Responsiveness rating is required';
            }
            if (!formData.satisfaction.knowledge) {
                stepErrors.knowledge = 'Knowledge rating is required';
            }
            if (!formData.satisfaction.friendliness) {
                stepErrors.friendliness = 'Friendliness rating is required';
            }
            if (!formData.satisfaction.attentionToDetail) {
                stepErrors.attentionToDetail = 'Attention to Detail rating is required';
            }
            if (!formData.satisfaction.venueTravel) {
                stepErrors.venueTravel = 'Venue/Travel Quality rating is required';
            }
            if (!formData.satisfaction.logistics) {
                stepErrors.logistics = 'Logistics rating is required';
            }
        } else if (step === 6) {
            if (!formData.recommendation) {
                stepErrors.recommendation = 'Please select a recommendation option';
            }
        } else if (step === 7) {
            if (!formData.testimonialWilling) {
                stepErrors.testimonialWilling = 'Please select an option';
            }
            if (formData.testimonialWilling === 'yes' && !formData.testimonialText.trim()) {
                stepErrors.testimonialText = 'Please share your testimonial';
            }
        }

        setErrors(stepErrors);
        return Object.keys(stepErrors).length === 0;
    };

    const handleNextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep(currentStep)) return;

        setSubmitStatus('loading');
        setSubmitMessage('');

        const payload = {
            feedbackdate: new Date().toISOString(),
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            services: Array.isArray(formData.services) ? formData.services.join(', ') : '',
            otherServices: (formData.otherServices || '').trim(),
            rating: String(formData.rating || ''),
            responsiveness: formData.satisfaction?.responsiveness || '',
            knowledge: formData.satisfaction?.knowledge || '',
            friendliness: formData.satisfaction?.friendliness || '',
            attentionToDetail: formData.satisfaction?.attentionToDetail || '',
            venueTravel: formData.satisfaction?.venueTravel || '',
            logistics: formData.satisfaction?.logistics || '',
            likeMost: (formData.likeMost || '').trim(),
            areasToImprove: (formData.areasToImprove || '').trim(),
            recommendation: formData.recommendation || '',
            testimonialWilling: formData.testimonialWilling || '',
            testimonialText: (formData.testimonialText || '').trim(),
        };

        try {
            const formBody = new URLSearchParams(payload).toString();
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formBody,
            });
            setSubmitStatus('success');
            setSubmitMessage('Thank you! Your feedback has been saved.');
            setCurrentStep(1);
            setFormData({
                name: '',
                email: '',
                phone: '',
                services: [],
                otherServices: '',
                rating: 0,
                satisfaction: {
                    responsiveness: '',
                    knowledge: '',
                    friendliness: '',
                    attentionToDetail: '',
                    venueTravel: '',
                    logistics: '',
                },
                likeMost: '',
                areasToImprove: '',
                recommendation: '',
                testimonialWilling: '',
                testimonialText: '',
            });
        } catch (err) {
            setSubmitStatus('error');
            setSubmitMessage(err?.message || 'Could not save feedback. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className=" ">
            <div className="max-w-2xl mx-auto">

                {/* Step Indicator */}
                <div className="mb-3 bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-center">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
                            <div key={step} className="flex items-center flex-1">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${step === currentStep
                                        ? 'bg-red-600 text-white shadow-lg scale-110'
                                        : step < currentStep
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-200 text-gray-700'
                                        }`}
                                >
                                    {step < currentStep ? '✓' : step}
                                </div>
                                {step < 8 && (
                                    <div
                                        className={`h-1 flex-1 mx-2 transition-colors duration-300 rounded-full ${step < currentStep ? 'bg-green-500' : 'bg-gray-300'
                                            }`}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs font-medium text-gray-600 flex-wrap gap-2">
                        <span>Info</span>
                        <span>Services</span>
                        <span>Rating</span>
                        <span>Satisfaction</span>
                        <span>Feedback</span>
                        <span>Recommend</span>
                        <span>Testimonial</span>
                        <span>Review</span>
                    </div>
                </div>

                {/* Form Content */}
                <div className="bg-white rounded-xl  mb-8">

                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                        <div>
                            <div className="mb-4">
                                <h2 className='text-2xl font-bold text-gray-800 mb-2'>Personal Information</h2>
                                <p className="text-gray-600">Help us know who you are</p>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'
                                            }`}
                                        placeholder="Enter your name"
                                        name="name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-2 font-medium">{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'
                                            }`}
                                        placeholder="Enter your email"
                                        name="email"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-2 font-medium">{errors.email}</p>}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'
                                            }`}
                                        placeholder="Enter your phone number"
                                        name="phone"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-2 font-medium">{errors.phone}</p>}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Services */}
                    {currentStep === 2 && (
                        <div>
                            <div className="mb-8">
                                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Which services did you use?</h2>
                                <p className="text-gray-600">Select all that apply</p>
                            </div>
                            <div className="space-y-3">
                                {services.map((service) => (
                                    <label key={service} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                                        <input
                                            type="checkbox"
                                            value={service}
                                            checked={formData.services.includes(service)}
                                            onChange={handleCheckboxChange}
                                            className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-400"
                                            name="services"
                                        />
                                        <span className="ml-3 text-gray-700 font-medium">{service}</span>
                                    </label>
                                ))}

                                {/* Others field */}
                                <div className="mt-6 pt-6 border-t-2">
                                    <label htmlFor="otherServices" className="block text-gray-700 font-semibold mb-2">Others</label>
                                    <input
                                        type="text"
                                        id="otherServices"
                                        value={formData.otherServices}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 transition-all`}
                                        placeholder="Specify other services if any"
                                        name="otherServices"
                                    />
                                </div>
                            </div>
                            {errors.services && <p className="text-red-500 text-sm mt-6 font-medium">{errors.services}</p>}
                        </div>
                    )}

                    {/* Step 3: Rating */}
                    {currentStep === 3 && (
                        <div className="text-center">
                            <div className="mb-8">
                                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Overall, how would you rate your experience?</h2>
                                <p className="text-gray-600">Your honest feedback helps us improve</p>
                            </div>
                            <div className="flex justify-center mb-8">
                                <div className="flex gap-6">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => handleRatingChange(star)}
                                            className={`text-8xl cursor-pointer transition-all duration-200 transform hover:scale-150 ${formData.rating >= star ? 'text-yellow-400 drop-shadow-lg' : 'text-gray-300 hover:text-yellow-200'
                                                }`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {formData.rating > 0 && (
                                <div className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-semibold">
                                    You rated: {formData.rating} out of 5 stars
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 4: Satisfaction */}
                    {currentStep === 4 && (
                        <div>
                            <div className="mb-8">
                                <h2 className='text-3xl font-bold text-gray-800 mb-2'>How satisfied were you with the following?</h2>
                                <p className="text-gray-600">Rate each aspect from 1 to 5</p>
                            </div>
                            <div className="overflow-x-auto rounded-lg border-2 border-gray-200">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-blue-500 to-indigo-600">
                                            <th className="px-6 py-4 text-left text-white font-semibold">Aspect</th>
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <th key={rating} className="px-4 py-4 text-center text-white font-semibold">{rating}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { key: 'responsiveness', label: 'Responsiveness' },
                                            { key: 'knowledge', label: 'Knowledge' },
                                            { key: 'friendliness', label: 'Friendliness' },
                                            { key: 'attentionToDetail', label: 'Attention to Detail' },
                                            { key: 'venueTravel', label: 'Venue/Travel Quality' },
                                            { key: 'logistics', label: 'Logistics' },
                                        ].map((aspect, idx) => (
                                            <tr key={aspect.key} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                                <td className="px-6 py-4 text-gray-900 font-medium border-b border-gray-200">{aspect.label}</td>
                                                {[1, 2, 3, 4, 5].map((rating) => (
                                                    <td key={rating} className="px-4 py-4 text-center border-b border-gray-200">
                                                        <input
                                                            type="radio"
                                                            name={aspect.key}
                                                            value={rating}
                                                            checked={formData.satisfaction[aspect.key] === String(rating)}
                                                            onChange={(e) => handleSatisfactionChange(aspect.key, e.target.value)}
                                                            className="cursor-pointer w-5 h-5 accent-blue-500"
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {Object.keys(errors).length > 0 && (
                                <p className="text-red-500 text-sm mt-4 font-medium">Please rate all aspects before proceeding</p>
                            )}
                        </div>
                    )}

                    {/* Step 5: Feedback */}
                    {currentStep === 5 && (
                        <div>
                            <div className="mb-8">
                                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Additional Feedback</h2>
                                <p className="text-gray-600">Help us understand what we're doing right and where we can improve</p>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <label htmlFor="likeMost" className="block text-gray-700 font-semibold mb-2">What did you like most?</label>
                                    <textarea
                                        id="likeMost"
                                        name="likeMost"
                                        value={formData.likeMost}
                                        onChange={handleChange}
                                        rows="4"
                                        className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 resize-none transition-all`}
                                        placeholder="Share what you enjoyed the most about your experience"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="areasToImprove" className="block text-gray-700 font-semibold mb-2">Areas to improve:</label>
                                    <textarea
                                        id="areasToImprove"
                                        name="areasToImprove"
                                        value={formData.areasToImprove}
                                        onChange={handleChange}
                                        rows="4"
                                        className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 resize-none transition-all`}
                                        placeholder="Tell us what we can improve"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 6: Recommendation */}
                    {currentStep === 6 && (
                        <div className="text-center">
                            <div className="mb-8">
                                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Would you recommend us?</h2>
                                <p className="text-gray-600">Your recommendation means everything to us</p>
                            </div>
                            <div className="flex flex-col gap-4 max-w-md mx-auto">
                                {[
                                    { value: 'yes', label: 'Yes, absolutely!' },
                                    { value: 'maybe', label: 'Maybe' },
                                    { value: 'not_now', label: 'Not at this time' }
                                ].map((option) => (
                                    <label key={option.value} className={`flex items-center p-5 border-2 rounded-lg cursor-pointer transition-all transform hover:scale-105 ${formData.recommendation === option.value
                                        ? 'border-blue-500 bg-blue-50 shadow-md'
                                        : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50'
                                        }`}>
                                        <input
                                            type="radio"
                                            name="recommendation"
                                            value={option.value}
                                            checked={formData.recommendation === option.value}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-blue-600 cursor-pointer"
                                        />
                                        <span className="ml-3 text-gray-700 font-semibold">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.recommendation && <p className="text-red-500 text-sm mt-6 font-medium">{errors.recommendation}</p>}
                        </div>
                    )}

                    {/* Step 7: Testimonial */}
                    {currentStep === 7 && (
                        <div className="text-center">
                            <div className="mb-8">
                                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Would you share a testimonial?</h2>
                                <p className="text-gray-600">Your words inspire us and help others discover us</p>
                            </div>
                            <div className="flex flex-col gap-4 max-w-md mx-auto mb-8">
                                {[
                                    { value: 'yes', label: 'Yes, absolutely!' },
                                    { value: 'no', label: 'No' }
                                ].map((option) => (
                                    <label key={option.value} className={`flex items-center p-5 border-2 rounded-lg cursor-pointer transition-all transform hover:scale-105 ${formData.testimonialWilling === option.value
                                        ? 'border-blue-500 bg-blue-50 shadow-md'
                                        : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50'
                                        }`}>
                                        <input
                                            type="radio"
                                            name="testimonialWilling"
                                            value={option.value}
                                            checked={formData.testimonialWilling === option.value}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-blue-600 cursor-pointer"
                                        />
                                        <span className="ml-3 text-gray-700 font-semibold">{option.label}</span>
                                    </label>
                                ))}
                            </div>

                            {formData.testimonialWilling === 'yes' && (
                                <div className="animate-fadeIn">
                                    <label htmlFor="testimonialText" className="block text-gray-700 font-semibold mb-2">Your Testimonial</label>
                                    <textarea
                                        id="testimonialText"
                                        name="testimonialText"
                                        value={formData.testimonialText}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 resize-none transition-all`}
                                        placeholder="Please share your testimonial about your experience with us"
                                    />
                                    {errors.testimonialText && <p className="text-red-500 text-sm mt-2 font-medium">{errors.testimonialText}</p>}
                                </div>
                            )}
                            {errors.testimonialWilling && <p className="text-red-500 text-sm mt-4 font-medium">{errors.testimonialWilling}</p>}
                        </div>
                    )}

                    {/* Step 8: Review */}
                    {currentStep === 8 && (
                        <div>
                            <div className="mb-8">
                                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Review Your Feedback</h2>
                                <p className="text-gray-600">Please verify all information before submitting</p>
                            </div>
                            <div className="space-y-6 bg-gray-50 p-4 rounded-xl">
                                <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-gray-800 font-bold mb-4 flex items-center"><span className="text-blue-600 mr-2 text-xl">👤</span> Personal Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600">Name</p>
                                            <p className="text-gray-900 font-semibold">{formData.name}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Email</p>
                                            <p className="text-gray-900 font-semibold">{formData.email}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Phone</p>
                                            <p className="text-gray-900 font-semibold">{formData.phone}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-lg">
                                    <h3 className="text-gray-800 font-bold mb-4 flex items-center"><span className="text-purple-600 mr-2 text-xl">✓</span> Services Used</h3>
                                    <p className="text-gray-900 font-semibold">
                                        {formData.services.length > 0 ? formData.services.join(', ') : 'No services selected'}
                                    </p>
                                    {formData.otherServices && (
                                        <p className="text-gray-900 font-semibold mt-2"><span className="text-gray-600">Others:</span> {formData.otherServices}</p>
                                    )}
                                </div>

                                <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-lg">
                                    <h3 className="text-gray-800 font-bold mb-4 flex items-center"><span className="text-yellow-600 mr-2 text-xl">⭐</span> Experience Rating</h3>
                                    <p className="text-yellow-500 text-2xl font-bold">
                                        {formData.rating > 0 ? '★'.repeat(formData.rating) : 'Not rated'}
                                    </p>
                                </div>

                                <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-gray-800 font-bold mb-4 flex items-center"><span className="text-green-600 mr-2 text-xl">📊</span> Satisfaction Ratings</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                        <div>
                                            <p className="text-gray-600">Responsiveness</p>
                                            <p className="text-gray-900 font-semibold">{formData.satisfaction.responsiveness || '-'}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Knowledge</p>
                                            <p className="text-gray-900 font-semibold">{formData.satisfaction.knowledge || '-'}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Friendliness</p>
                                            <p className="text-gray-900 font-semibold">{formData.satisfaction.friendliness || '-'}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Attention to Detail</p>
                                            <p className="text-gray-900 font-semibold">{formData.satisfaction.attentionToDetail || '-'}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Venue/Travel Quality</p>
                                            <p className="text-gray-900 font-semibold">{formData.satisfaction.venueTravel || '-'}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Logistics</p>
                                            <p className="text-gray-900 font-semibold">{formData.satisfaction.logistics || '-'}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-lg">
                                    <h3 className="text-gray-800 font-bold mb-4 flex items-center"><span className="text-indigo-600 mr-2 text-xl">💬</span> Additional Feedback</h3>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <p className="text-gray-600 font-semibold">What did you like most?</p>
                                            <p className="text-gray-900 whitespace-pre-wrap">{formData.likeMost || '-'}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 font-semibold">Areas to improve:</p>
                                            <p className="text-gray-900 whitespace-pre-wrap">{formData.areasToImprove || '-'}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-4 border-pink-500 bg-pink-50 p-6 rounded-lg">
                                    <h3 className="text-gray-800 font-bold mb-4 flex items-center"><span className="text-pink-600 mr-2 text-xl">👍</span> Recommendation</h3>
                                    <p className="text-gray-900 font-semibold">
                                        {formData.recommendation === 'yes' ? 'Yes, absolutely!' : formData.recommendation === 'maybe' ? 'Maybe' : formData.recommendation === 'not_now' ? 'Not at this time' : '-'}
                                    </p>
                                </div>

                                <div className="border-l-4 border-cyan-500 bg-cyan-50 p-6 rounded-lg">
                                    <h3 className="text-gray-800 font-bold mb-4 flex items-center"><span className="text-cyan-600 mr-2 text-xl">💝</span> Testimonial</h3>
                                    <p className="text-gray-900 font-semibold capitalize mb-2">
                                        {formData.testimonialWilling === 'yes' ? 'Yes, absolutely!' : formData.testimonialWilling === 'no' ? 'No' : '-'}
                                    </p>
                                    {formData.testimonialWilling === 'yes' && formData.testimonialText && (
                                        <p className="text-gray-900 italic border-l-2 border-cyan-400 pl-4">"{formData.testimonialText}"</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submit status message */}
                    {(submitStatus === 'success' || submitStatus === 'error') && submitMessage && (
                        <div
                            className={`mt-4 p-4 rounded-lg font-medium ${submitStatus === 'success'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                                }`}
                        >
                            {submitMessage}
                        </div>
                    )}

                    {/* Button Navigation */}
                    <div className="flex gap-3 mt-8">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={handlePreviousStep}
                                disabled={submitStatus === 'loading'}
                                className="flex-1 bg-gray-400 hover:bg-gray-500 cursor-pointer text-white py-2 rounded-lg font-medium transition disabled:opacity-50"
                            >
                                Back
                            </button>
                        )}
                        {currentStep < 8 ? (
                            <button
                                type="button"
                                onClick={handleNextStep}
                                className="flex-1 bg-primary  cursor-pointer text-white py-2 rounded-lg font-medium transition"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={submitStatus === 'loading'}
                                className="flex-1 bg-green-600 hover:bg-green-700 cursor-pointer text-white py-2 rounded-lg font-medium transition disabled:opacity-50"
                            >
                                {submitStatus === 'loading' ? 'Sending...' : 'Submit'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Feedbackform;