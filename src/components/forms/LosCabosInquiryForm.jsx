"use client"

import { useEffect, useState } from "react"
import { Calendar, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"


const defaultContent = {
  title: "Wedding Inquiry Form",
  ctaText: "Get My Custom Los Cabos Wedding Plan",
}

export default function LosCabosInquiryForm({ content = defaultContent }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneWhatsapp: "",
    preferredWeddingMonth: null,
    estimatedGuestCount: "",
    ceremonyStylePreference: "",
    additionalDetails: "",
    pageUrl: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  useEffect(() => {
    setFormData((prev) => ({ ...prev, pageUrl: window.location.href }))
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, preferredWeddingMonth: date }))
    setErrors((prev) => ({ ...prev, preferredWeddingMonth: "" }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required."

    if (!formData.email.trim()) nextErrors.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address."
    }

    if (!formData.phoneWhatsapp.trim()) nextErrors.phoneWhatsapp = "Phone / WhatsApp is required."

    if (!formData.preferredWeddingMonth) {
      nextErrors.preferredWeddingMonth = "Preferred wedding month is required."
    }

    if (!formData.estimatedGuestCount) nextErrors.estimatedGuestCount = "Estimated guest count is required."
    else if (Number(formData.estimatedGuestCount) < 1) {
      nextErrors.estimatedGuestCount = "Guest count must be at least 1."
    }

    if (!formData.ceremonyStylePreference.trim()) {
      nextErrors.ceremonyStylePreference = "Ceremony style preference is required."
    }

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validateForm()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitStatus(null)
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Los Cabos Inquiry",
          fullName: (formData.fullName || "").trim(),
          email: (formData.email || "").trim(),
          phoneWhatsapp: (formData.phoneWhatsapp || "").trim(),
          preferredWeddingMonth: formData.preferredWeddingMonth ? formData.preferredWeddingMonth.toISOString() : "",
          estimatedGuestCount: (formData.estimatedGuestCount || "").trim(),
          ceremonyStylePreference: (formData.ceremonyStylePreference || "").trim(),
          additionalDetails: (formData.additionalDetails || "").trim(),
          pageUrl: (formData.pageUrl || "").trim(),
        }),
      })
      if (!res.ok) throw new Error("Failed")
      setSubmitStatus("success")
      setFormData({
        fullName: "",
        email: "",
        phoneWhatsapp: "",
        preferredWeddingMonth: null,
        estimatedGuestCount: "",
        ceremonyStylePreference: "",
        additionalDetails: "",
        pageUrl: formData.pageUrl || "",
      })
    } catch (err) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-lg space-y-5"
      noValidate
    >
      {submitStatus === "success" && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center gap-2 border border-green-200">
          <CheckCircle2 size={20} />
          <p>Thank you! Your inquiry has been sent successfully.</p>
        </div>
      )}
      {submitStatus === "error" && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-2 border border-red-200">
          <AlertCircle size={20} />
          <p>Something went wrong. Please try again later.</p>
        </div>
      )}
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
        .react-datepicker__month-text--selected,
        .react-datepicker__month-text--keyboard-selected {
          background-color: #c5a28e !important;
          color: #ffffff !important;
          border-radius: 0.5rem;
        }
      `}</style>
      <h3 className="font-serif text-2xl text-foreground">{content.title || defaultContent.title}</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name</label>
          <Input id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
          <Input id="email" name="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="phoneWhatsapp" className="text-sm font-medium text-foreground">Phone / WhatsApp</label>
          <Input id="phoneWhatsapp" name="phoneWhatsapp" type="tel" placeholder="Enter your phone or WhatsApp" value={formData.phoneWhatsapp} onChange={handleChange} />
          {errors.phoneWhatsapp && <p className="text-sm text-destructive">{errors.phoneWhatsapp}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="preferredWeddingMonth" className="text-sm font-medium text-foreground">Preferred Wedding Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={16} />
            <DatePicker
              selected={formData.preferredWeddingMonth}
              onChange={handleDateChange}
              placeholderText="Select wedding date"
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              id="preferredWeddingMonth"
              name="preferredWeddingMonth"
              className="w-full flex h-10 rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-accent"
            />
          </div>
          {errors.preferredWeddingMonth && <p className="text-sm text-destructive">{errors.preferredWeddingMonth}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="estimatedGuestCount" className="text-sm font-medium text-foreground">Estimated Guest Count</label>
          <Input id="estimatedGuestCount" name="estimatedGuestCount" type="number" min="1" placeholder="e.g. 120" value={formData.estimatedGuestCount} onChange={handleChange} />
          {errors.estimatedGuestCount && <p className="text-sm text-destructive">{errors.estimatedGuestCount}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="ceremonyStylePreference" className="text-sm font-medium text-foreground">Ceremony Style Preference</label>
          <Input id="ceremonyStylePreference" name="ceremonyStylePreference" placeholder="e.g. Beachfront, Cliffside, Garden" value={formData.ceremonyStylePreference} onChange={handleChange} />
          {errors.ceremonyStylePreference && <p className="text-sm text-destructive">{errors.ceremonyStylePreference}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="additionalDetails" className="text-sm font-medium text-foreground">Additional Details</label>
        <Textarea id="additionalDetails" name="additionalDetails" className="min-h-[120px]" placeholder="Share anything else that can help us plan your celebration" value={formData.additionalDetails} onChange={handleChange} />
        {errors.additionalDetails && <p className="text-sm text-destructive">{errors.additionalDetails}</p>}
      </div>

      <input type="hidden" name="pageUrl" value={formData.pageUrl} />

      <Button type="submit" className="w-full rounded-full py-6 bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          content.ctaText || defaultContent.ctaText
        )}
      </Button>
    </form>
  )
}
