import HeroSection from "@/components/HeroSection"
import WhyOrionSection from "@/components/WhyOrionSection"
import ProcessSection from "@/components/ProcessSection"
import EngineeringSection from "@/components/EngineeringSection"
import PhilosophySection from "@/components/PhilosophySection"
import ExperienceCenterSection from "@/components/ExperienceCenterSection"
import TestimonialSection from "@/components/TestimonialSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyOrionSection />
      <ProcessSection />
      <EngineeringSection />
      <PhilosophySection />
      <ExperienceCenterSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}
