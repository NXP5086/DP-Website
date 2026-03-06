"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, Calendar, Phone, Mail, User, MessageSquare, Globe, ChevronDown, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/weddingPopupSlice";
import { useParams } from "next/navigation";

const POPUP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwX5jP2oilSt6nktUCcgOAO7y0AqpIJFcGM4kkIXJvl7VqhPjG_mNlu0qjtDp2X0grJkQ/exec";

const Weddingpopupform = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const pageurl = usePathname();
    const openModal = useSelector((state) => state.weddingPopup.isOpen);

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        eventdate: null,
        location: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const countryMap = {
        "mexico": "Mexico",
        "dominican-republic": "Dominican Republic",
        "bahamas": "Bahamas"
    };

    const countries = Object.values(countryMap);

    useEffect(() => {
        if (openModal) {
            const countrySlug = params?.destination;
            const selectedCountry = countryMap[countrySlug] || "";

            setFormData(prev => ({
                ...prev,
                location: selectedCountry
            }));
        }
    }, [openModal, params]);

    useEffect(() => {
        document.body.style.overflow = openModal ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openModal]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (date) => {
        setFormData(prev => ({ ...prev, eventdate: date }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);
        setIsSubmitting(true);

        try {
            const formBody = new URLSearchParams({
                firstname: (formData.firstname || "").trim(),
                lastname: (formData.lastname || "").trim(),
                email: (formData.email || "").trim(),
                phone: (formData.phone || "").trim(),
                eventdate: formData.eventdate ? formData.eventdate.toISOString() : "",
                location: (formData.location || "").trim(),
                message: (formData.message || "").trim(),
                pageurl: (pageurl || "").toString(),
                querydate: new Date().toISOString()
            }).toString();

            await fetch(POPUP_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formBody
            });

            setSubmitStatus("success");
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                eventdate: null,
                location: "",
                message: ""
            });
            dispatch(closeModal());
        } catch (err) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!openModal) return null;

    return (
        <>
            <style jsx global>{`
                .react-datepicker-wrapper {
                    width: 100%;
                }
                .react-datepicker {
                    font-family: inherit;
                    border-radius: 1rem;
                    border: 1px solid #e5e7eb;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .react-datepicker__header {
                    background-color: white;
                    border-bottom: 1px solid #e5e7eb;
                    padding-top: 1rem;
                }
                .react-datepicker__day--selected {
                    background-color: var(--primary) !important;
                    border-radius: 0.5rem;
                }
                .react-datepicker__day:hover {
                    border-radius: 0.5rem;
                }
            `}</style>

            <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 animate-fadeIn" onClick={() => dispatch(closeModal())}>
                <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
                    <div className="relative p-4 lg:p-7">
                        <button className="absolute cursor-pointer right-4 top-4 rounded-full p-2 text-white bg-primary transition hover:bg-primary/90" onClick={() => dispatch(closeModal())}>
                            <X size={18} />
                        </button>

                        <h2 className="text-2xl font-serif text-foreground mb-4">Wedding Inquiry</h2>

                        {submitStatus === "success" && (
                            <div className="mb-4 p-4 rounded-lg bg-green-50 text-green-700 flex items-center gap-2 border border-green-200">
                                <CheckCircle2 size={20} />
                                <p>Thank you! Your request has been submitted.</p>
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="mb-4 p-4 rounded-lg bg-red-50 text-red-700 flex items-center gap-2 border border-red-200">
                                <AlertCircle size={20} />
                                <p>Something went wrong. Please try again.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                            <input type="hidden" name="pageurl" value={pageurl} />
                            <div className="relative mb-4">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 z-10" size={16} />
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-10 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                                />
                            </div>

                            <div className="relative mb-4">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 z-10" size={16} />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-10 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                                />
                            </div>

                            <div className="relative mb-4">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 z-10" size={16} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-10 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                                />
                            </div>

                            <div className="relative mb-4">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 z-10" size={16} />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-10 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                                />
                            </div>

                            <div className="relative mb-4">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 z-10" size={16} />
                                <DatePicker
                                    selected={formData.eventdate}
                                    onChange={handleDateChange}
                                    placeholderText="Event Date"
                                    dateFormat="MMMM d, yyyy"
                                    minDate={new Date()}
                                    required
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-10 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none transition"
                                    name="eventdate"
                                />
                            </div>

                            <div className="relative mb-4">
                                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 z-10" size={16} />
                                <select
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-10 py-2 text-sm appearance-none focus:border-primary focus:bg-white focus:outline-none transition pr-10"

                                >
                                    <option value="" disabled>Select Country</option>
                                    {countries.map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 pointer-events-none" size={16} />
                            </div>

                            <div className="relative mb-4 md:col-span-2">
                                <MessageSquare className="absolute left-3 top-3 text-gray-700 z-10" size={16} />
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your dream wedding..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-10 py-2 text-sm resize-none focus:border-primary focus:bg-white focus:outline-none transition"
                                />
                            </div>

                            <div className="md:col-span-2 mt-2 text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-fit relative text-[15px] inline-flex items-center gap-2 mx-auto rounded-md bg-primary cursor-pointer py-2 pl-3 pr-7 text-white shadow-lg disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Inquiry
                                            <Send className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Weddingpopupform;
