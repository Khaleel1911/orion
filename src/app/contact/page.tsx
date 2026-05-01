import Footer from "@/components/Footer";
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from "react-icons/fa6"

const VISIT_POINTS = [
  {
    title: "Experience Center",
    lines: [
      "Shop no. Y2, Rama World",
      "Vidhan Sabha Road",
      "Raipur, Chhattisgarh",
    ],
  },
  {
    title: "Factory",
    lines: [
      "Orion World",
      "Sakri, Raipur",
      "Chhattisgarh, India",
    ],
  },
]

export default function ContactPage() {
  return (
    <>
    <main className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <h1
            className="text-primary"
            style={{
              fontFamily: "var(--font-cinzel), Cinzel, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
            }}
          >
            Get in Touch
          </h1>
          <p
            className="mt-3 text-muted-foreground"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
            }}
          >
            We&apos;d love to hear about your project.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_45px_rgba(12,20,38,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-primary px-6 py-8 sm:px-10 sm:py-10 text-primary-foreground">
              <h2
                className="text-white"
                style={{
                  fontFamily: "var(--font-cinzel), Cinzel, serif",
                  fontSize: "clamp(1.35rem, 2.5vw, 1.8rem)",
                  letterSpacing: "0.04em",
                }}
              >
                Visit Us
              </h2>

              <div className="mt-7 space-y-6">
                {VISIT_POINTS.map((point) => (
                  <div key={point.title} className="flex items-start gap-3.5">
                    <FaLocationDot className="mt-1 h-4 w-4 text-[#6fafd8]" />
                    <div>
                      <p
                        className="text-white"
                        style={{
                          fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          fontSize: "1.04rem",
                          fontWeight: 600,
                        }}
                      >
                        {point.title}
                      </p>
                  <p
                    className="mt-1 text-primary-foreground/80"
                        style={{
                          fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          fontSize: "0.93rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {point.lines.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <FaPhoneVolume className="mt-1 h-4 w-4 text-[#6fafd8]" />
                  <p
                    className="text-primary-foreground/90"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: "0.94rem",
                      lineHeight: 1.7,
                    }}
                  >
                    +91 70249 99199
                    <br />
                    +91 97760 50105
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <FaEnvelope className="mt-1 h-4 w-4 text-[#6fafd8]" />
                  <p
                    className="text-primary-foreground/90"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: "0.94rem",
                    }}
                  >
                    orionworld@gmail.com
                  </p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-white/20 bg-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7435.630009514766!2d81.69200219357907!3d21.278789200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e994c8b4d5f1%3A0xac2b82f83cacb4c8!2sRama%20World%20Raipur!5e0!3m2!1sen!2sin!4v1777634040382!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0, width: "100%", height: "260px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rama World Raipur map"
                />
              </div>
            </div>

            <div className="bg-background px-6 py-8 sm:px-10 sm:py-10">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="First Name *" />
                  <InputField label="Last Name *" />
                </div>

                <InputField label="Email Address *" />
                <InputField label="Phone Number *" defaultValue="+91 " />

                <div>
                  <label className="mb-1.5 block text-[#253449]" style={labelStyle}>
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    className="h-32 w-full resize-none rounded-lg border border-[#dce3ec] bg-white px-3.5 py-3 text-[#0f1f33] outline-none transition-colors focus:border-[#2d6799]/55"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-secondary"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    fontSize: "0.93rem",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  )
}

function InputField({ label, defaultValue }: { label: string; defaultValue?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-foreground" style={labelStyle}>
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        className="h-11 w-full rounded-lg border border-input bg-card px-3.5 text-foreground outline-none transition-colors focus:border-secondary/60"
        style={inputStyle}
      />
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-poppins), Poppins, sans-serif",
  fontSize: "0.9rem",
  fontWeight: 500,
}

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-poppins), Poppins, sans-serif",
  fontSize: "0.94rem",
}
