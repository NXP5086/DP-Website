"use client"

import { useEffect, useState } from "react"
import { Calendar, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxmkGT3AkmuDHKV4YlxE6v07Z5ff42GJGAIMoMCmrRHI9pt4JbdIi-4K9zm9I2tLefYbg/exec"

const defaultContent = {
  title: "Playa Resort Inquiry Form",
  ctaText: "Get My Custom Wedding Proposal",
}

const playaHotels = [
  "Hyatt Ziva Cancun",
  "Hyatt Ziva Los Cabos",
  "Hyatt Ziva Puerto Vallarta",
  "Dreams La Romana Resort & Spa",
]

export default function PlayaInquiryForm({ content = defaultContent }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: null,
    selectedHotel: "",
    guestCount: "",
    totalBudget: "",
    vision: "",
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
    setFormData((prev) => ({ ...prev, preferredDate: date }))
    setErrors((prev) => ({ ...prev, preferredDate: "" }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required."

    if (!formData.email.trim()) nextErrors.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address."
    }

    if (!formData.phone.trim()) nextErrors.phone = "Phone number is required."
    if (!formData.preferredDate) nextErrors.preferredDate = "Preferred wedding date is required."
    if (!formData.selectedHotel) nextErrors.selectedHotel = "Please select a resort."

    if (!formData.guestCount) nextErrors.guestCount = "Estimated guest count is required."
    else if (Number(formData.guestCount) < 1) nextErrors.guestCount = "Guest count must be at least 1."

    if (!formData.totalBudget.trim()) nextErrors.totalBudget = "Total budget is required."
    if (!formData.vision.trim()) nextErrors.vision = "Wedding vision is required."

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
      const formBody = new URLSearchParams({
        fullName: (formData.fullName || "").trim(),
        email: (formData.email || "").trim(),
        phone: (formData.phone || "").trim(),
        preferredDate: formData.preferredDate ? formData.preferredDate.toISOString() : "",
        selectedHotel: (formData.selectedHotel || "").trim(),
        guestCount: (formData.guestCount || "").trim(),
        totalBudget: (formData.totalBudget || "").trim(),
        vision: (formData.vision || "").trim(),
        pageUrl: (formData.pageUrl || "").trim(),
      }).toString()
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody,
      })
      setSubmitStatus("success")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredDate: null,
        selectedHotel: "",
        guestCount: "",
        totalBudget: "",
        vision: "",
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
        .react-datepicker__day--selected {
          background-color: #c5a28e !important;
          border-radius: 0.5rem;
        }
        .react-datepicker__day:hover {
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
          <Input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
          <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="preferredDate" className="text-sm font-medium text-foreground">Preferred Wedding Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={16} />
            <DatePicker
              selected={formData.preferredDate}
              onChange={handleDateChange}
              placeholderText="Select preferred date"
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              className="w-full flex h-10 rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-accent"
              id="preferredDate"
              name="preferredDate"
            />
          </div>
          {errors.preferredDate && <p className="text-sm text-destructive">{errors.preferredDate}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="selectedHotel" className="text-sm font-medium text-foreground">Preferred Playa Resort</label>
        <select
          id="selectedHotel"
          name="selectedHotel"
          value={formData.selectedHotel}
          onChange={handleChange}
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-accent"
        >
          <option value="">Select a resort</option>
          {playaHotels.map((hotel) => (
            <option key={hotel} value={hotel}>
              {hotel}
            </option>
          ))}
        </select>
        {errors.selectedHotel && <p className="text-sm text-destructive">{errors.selectedHotel}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="guestCount" className="text-sm font-medium text-foreground">Estimated Guest Count</label>
          <Input id="guestCount" name="guestCount" type="number" min="1" placeholder="e.g. 120" value={formData.guestCount} onChange={handleChange} />
          {errors.guestCount && <p className="text-sm text-destructive">{errors.guestCount}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="totalBudget" className="text-sm font-medium text-foreground">Total Budget</label>
          <Input id="totalBudget" name="totalBudget" placeholder="e.g. 50000 USD" value={formData.totalBudget} onChange={handleChange} />
          {errors.totalBudget && <p className="text-sm text-destructive">{errors.totalBudget}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="vision" className="text-sm font-medium text-foreground">Wedding Vision</label>
        <Textarea id="vision" name="vision" className="min-h-[120px]" placeholder="Tell us about your wedding vision" value={formData.vision} onChange={handleChange} />
        {errors.vision && <p className="text-sm text-destructive">{errors.vision}</p>}
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
