"use client"
import React, { useState } from 'react'
import { User, Mail, Phone, MessageSquare, Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

    const validate = () => {
        let tempErrors = {}
        if (!formData.name.trim()) tempErrors.name = "Name is required"

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            tempErrors.email = "Please enter a valid email address"
        }

        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required"
        } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
            tempErrors.phone = "Please enter a valid phone number"
        }

        if (!formData.message.trim()) tempErrors.message = "Message is required"

        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitStatus(null)

        if (!validate()) return

        setIsSubmitting(true)

        const scriptUrl = 'https://script.google.com/macros/s/AKfycbzTO-1MaxJsvSB3qwU7HQ6p_ZNcboJFXlPvseDNtGJvLSpbtwijEBJ_atSfIa8VVtdNaw/exec'

        try {
            const formBody = new URLSearchParams({
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                message: formData.message.trim(),
                querydate: new Date().toISOString()
            }).toString()

            const res = await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formBody
            })

            // no-cors means we can't read the response; assume success if no throw
            setSubmitStatus('success')
            setFormData({ name: '', email: '', phone: '', message: '' })
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center gap-2 border border-green-200">
                    <CheckCircle2 size={20} />
                    <p>Thank you! Your message has been sent successfully.</p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-2 border border-red-200">
                    <AlertCircle size={20} />
                    <p>Something went wrong. Please try again later.</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Please Enter Your Name"
                            className={cn("pl-10", errors.name && "border-red-500 focus-visible:ring-red-500")}
                        />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Please Enter Your Phone Number"
                            className={cn("pl-10", errors.phone && "border-red-500 focus-visible:ring-red-500")}
                        />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
            </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Please Enter Your Email Address"
                            className={cn("pl-10", errors.email && "border-red-500 focus-visible:ring-red-500")}
                        />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>



            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        className={cn("pl-10 min-h-[120px]", errors.message && "border-red-500 focus-visible:ring-red-500")}
                    />
                </div>
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <Button
                type="submit"
                className="w-full h-12 text-base font-medium"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    )
}

export default ContactForm
