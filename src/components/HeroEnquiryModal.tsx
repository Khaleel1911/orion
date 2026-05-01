"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

type HeroEnquiryModalProps = {
  isOpen: boolean
  onClose: () => void
}

type EnquiryFormState = {
  name: string
  email: string
  phone: string
  location: string
  profile: string
  requirement: string
}

const INITIAL_FORM_STATE: EnquiryFormState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  profile: "House Owner",
  requirement: "Construction",
}

const WHATSAPP_NUMBER = "917024999199"

export default function HeroEnquiryModal({ isOpen, onClose }: HeroEnquiryModalProps) {
  const [formState, setFormState] = useState<EnquiryFormState>(INITIAL_FORM_STATE)

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const handleFieldChange =
    (field: keyof EnquiryFormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormState((previousState) => ({
        ...previousState,
        [field]: event.target.value,
      }))
    }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const message = [
      "Hello! I would like to enquire about your window and door solutions.",
      "",
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      `Phone: ${formState.phone}`,
      `Location: ${formState.location}`,
      `I am a: ${formState.profile}`,
      `Looking for: ${formState.requirement}`,
      "",
      "Please connect with me for the next steps.",
    ].join("\n")

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")

    setFormState(INITIAL_FORM_STATE)
    onClose()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[12000] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-[#02060f]/75 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close enquiry form"
      />

      <div className="relative w-full max-w-2xl rounded-2xl border border-[#2d6799]/35 bg-[#0b1422]/95 p-5 sm:p-7 text-white shadow-2xl shadow-black/45">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#6fafd8]">Enquiry Form</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold uppercase tracking-[0.06em]" style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}>
              Let&apos;s Build Your Space
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/5 text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close form"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <input
            required
            type="text"
            value={formState.name}
            onChange={handleFieldChange("name")}
            placeholder="Name"
            className="h-11 rounded-md border border-[#2d6799]/35 bg-[#07101b]/90 px-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[#6fafd8]/45"
          />
          <input
            required
            type="email"
            value={formState.email}
            onChange={handleFieldChange("email")}
            placeholder="Email"
            className="h-11 rounded-md border border-[#2d6799]/35 bg-[#07101b]/90 px-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[#6fafd8]/45"
          />
          <input
            required
            type="tel"
            value={formState.phone}
            onChange={handleFieldChange("phone")}
            placeholder="Phone"
            className="h-11 rounded-md border border-[#2d6799]/35 bg-[#07101b]/90 px-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[#6fafd8]/45"
          />
          <input
            required
            type="text"
            value={formState.location}
            onChange={handleFieldChange("location")}
            placeholder="Location"
            className="h-11 rounded-md border border-[#2d6799]/35 bg-[#07101b]/90 px-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[#6fafd8]/45"
          />

          <select
            value={formState.profile}
            onChange={handleFieldChange("profile")}
            className="h-11 rounded-md border border-[#2d6799]/35 bg-[#07101b]/90 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6fafd8]/45"
          >
            <option>House Owner</option>
            <option>Builder</option>
            <option>Architect</option>
            <option>Dealer</option>
            <option>Other</option>
          </select>

          <select
            value={formState.requirement}
            onChange={handleFieldChange("requirement")}
            className="h-11 rounded-md border border-[#2d6799]/35 bg-[#07101b]/90 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6fafd8]/45"
          >
            <option>Construction</option>
            <option>Renovation</option>
            <option>Consultation</option>
            <option>Other</option>
          </select>

          <div className="sm:col-span-2 mt-1 flex flex-col-reverse sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-xs text-white/55">
              Form submission opens WhatsApp with your prefilled enquiry.
            </p>
            <Button
              type="submit"
              className="h-11 rounded-md bg-[#2d6799] px-6 text-xs uppercase tracking-[0.2em] text-white hover:bg-[#3a77ad]"
            >
              Submit Enquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
