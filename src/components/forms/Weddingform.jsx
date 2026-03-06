import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { ArrowRight, Calendar, User, Mail, Phone, Globe, ChevronDown, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { useParams } from "next/navigation"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz4a6LDEAtEhnHekmzHfCVmQPfjCRNLakM_G_SUAV1Lyhu6O0SbUiXB9CgbMJ1wP7KR/exec'

const Weddingform = () => {
    const params = useParams()
    const pageurl = usePathname();
    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        eventdate: null,
        location: "",
        message: "",
        totalbudget: "",
        events: "",
        hearabout: "",
        lovestory: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

    const countryMap = {
        "mexico": "Mexico",
        "dominican-republic": "Dominican Republic",
        "bahamas": "Bahamas"
    };

    const countries = Object.values(countryMap);

    useEffect(() => {
        const countrySlug = params?.destination;
        const selectedCountry = countryMap[countrySlug] || "";

        if (selectedCountry) {
            setFormState(prev => ({
                ...prev,
                location: selectedCountry
            }));
        }
    }, [params]);

    const handleChange = (e) => {
        const { id, value, name } = e.target;
        const fieldName = id || name;
        setFormState(prev => ({ ...prev, [fieldName]: value }));
    }

    const handleDateChange = (date) => {
        setFormState(prev => ({ ...prev, eventdate: date }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitStatus(null)
        setIsSubmitting(true)

        try {
            const formBody = new URLSearchParams({
                firstname: (formState.firstname || '').trim(),
                lastname: (formState.lastname || '').trim(),
                email: (formState.email || '').trim(),
                phone: (formState.phone || '').trim(),
                eventdate: formState.eventdate ? formState.eventdate.toISOString() : '',
                location: (formState.location || '').trim(),
                message: (formState.message || '').trim(),
                totalbudget: (formState.totalbudget || '').trim(),
                events: (formState.events || '').trim(),
                hearabout: (formState.hearabout || '').trim(),
                lovestory: (formState.lovestory || '').trim(),
                pageurl: (pageurl || '').toString(),
                querydate: new Date().toISOString(),
            }).toString()

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formBody,
            })

            setSubmitStatus('success')
            setFormState({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                eventdate: null,
                location: "",
                message: "",
                totalbudget: "",
                events: "",
                hearabout: "",
                lovestory: "",
            })
        } catch (err) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    // Framer Motion variants for scroll animations
    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    }
    return (
        <div>
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
                    background-color: #C5A28E !important;
                    border-radius: 0.5rem;
                }
                .react-datepicker__day:hover {
                    border-radius: 0.5rem;
                }
            `}</style>
            {/* Form */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={revealVariants}
            >
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 lg:p-8 shadow-xl border border-border">

                    <input type="hidden" name="pageurl" value={pageurl} />

                    {submitStatus === 'success' && (
                        <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-700 flex items-center gap-2 border border-green-200">
                            <CheckCircle2 size={20} />
                            <p>Thank you! Your request has been submitted successfully.</p>
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 flex items-center gap-2 border border-red-200">
                            <AlertCircle size={20} />
                            <p>Something went wrong. Please try again later.</p>
                        </div>
                    )}

                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                            <Calendar size={20} className="text-accent" />
                        </div>
                        <div>
                            <h3 className="font-medium text-foreground">Fill the below form to start your wedding planning!</h3>
                            {/* <p className="text-sm text-muted-foreground">Free 30-minute call</p> */}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="relative">
                                <label htmlFor="firstname" className="text-sm font-medium text-foreground mb-2 block">
                                    First Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                    <Input
                                        id="firstname"
                                        placeholder="First Name"
                                        value={formState.firstname}
                                        onChange={handleChange}
                                        required
                                        className="bg-background border-border focus:border-accent pl-10"
                                        name="firstname"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastname" className="text-sm font-medium text-foreground mb-2 block">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                    <Input
                                        id="lastname"
                                        placeholder="Last Name"
                                        value={formState.lastname}
                                        onChange={handleChange}
                                        required
                                        className="bg-background border-border focus:border-accent pl-10"
                                        name="lastname"

                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-background border-border focus:border-accent pl-10"
                                        name="email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="date" className="text-sm font-medium text-foreground mb-2 block">
                                    Preferred Date
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={16} />
                                    <DatePicker
                                        selected={formState.eventdate}
                                        onChange={handleDateChange}
                                        placeholderText="Event Date"
                                        dateFormat="MMMM d, yyyy"
                                        minDate={new Date()}
                                        required
                                        className="w-full flex h-10 rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-accent"
                                        name="eventdate"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        required
                                        className="bg-background border-border focus:border-accent pl-10"
                                        name="phone"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="location" className="text-sm font-medium text-foreground mb-2 block">
                                    Country
                                </label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={16} />
                                    <select
                                        id="location"
                                        value={formState.location}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-10 rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed appearance-none focus:border-accent"
                                        name="location"
                                    >
                                        <option value="" disabled>Select Country</option>
                                        {countries.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="totalbudget" className="text-sm font-medium text-foreground mb-2 block">
                                    Total Budget
                                </label>
                                <div className="relative">
                                    <Input
                                        id="totalbudget"
                                        placeholder="Total Budget (USD)"
                                        value={formState.totalbudget}
                                        onChange={handleChange}
                                        className="bg-background border-border focus:border-accent"
                                        name="totalbudget"
                                        type="number"
                                        min="0"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="events" className="text-sm font-medium text-foreground mb-2 block">
                                    Number of Events (Type of Events)?
                                </label>
                                <div className="relative">
                                    <Input
                                        id="events"
                                        placeholder="e.g. Ceremony, Reception, Welcome Party"
                                        value={formState.events}
                                        onChange={handleChange}
                                        className="bg-background border-border focus:border-accent"
                                        name="events"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="hearabout" className="text-sm font-medium text-foreground mb-2 block">
                                How did you hear about us?
                            </label>
                            <div className="relative">
                                <Input
                                    id="hearabout"
                                    placeholder="e.g. Google, Instagram, Friend, etc."
                                    value={formState.hearabout}
                                    onChange={handleChange}
                                    className="bg-background border-border focus:border-accent"
                                    name="hearabout"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lovestory" className="text-sm font-medium text-foreground mb-2 block">
                                We'd love to hear your love story. How did y'all meet?
                            </label>
                            <div className="relative">
                                <Textarea
                                    id="lovestory"
                                    placeholder="Share your love story..."
                                    rows={4}
                                    value={formState.lovestory}
                                    onChange={handleChange}
                                    className="bg-background border-border focus:border-accent resize-none"
                                    name="lovestory"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-full py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={18} className="mr-2 animate-spin" />
                                    <span>Submitting...</span>
                                </>
                            ) : (
                                <>
                                    <span>Submit</span>
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                            By submitting, you agree to our privacy policy. We'll never share your information.
                        </p>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default Weddingform
