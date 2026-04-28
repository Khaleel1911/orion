'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

// Fade-up animation helper
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground overflow-hidden">

        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
          {/* Background placeholder image */}
          <div className="absolute inset-0 z-0">
            <img
              src="./about2.avif"
              alt="Hero background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight"
            >
              Exceptional System <br />
              Aluminium Windows & Doors
            </motion.h1>
            <motion.div variants={fadeUp} className="h-1 w-20 bg-primary mx-auto my-6 rounded-full" />
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
             Orion World brings premium Italian-inspired fenestration solutions,
              specializing in high-end System Aluminium and uPVC.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-md text-muted-foreground/80 max-w-xl mx-auto italic"
            >
              Built on clarity. Driven by execution.
            </motion.p>
          </motion.div>
        </section>

        {/* ===== VISION SECTION ===== */}
        <section className="py-20 px-6 md:px-16 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm uppercase tracking-wider text-primary font-semibold">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-heading mt-2">OUR VISION</h2>
              <div className="h-0.5 w-16 bg-primary/40 mx-auto my-4" />
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                "To redefine the way people experience their living spaces by seamlessly blending the
                outdoors with the indoors through technologically advanced and aesthetically superior
                fenestration systems."
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== THE MINDS BEHIND ORION WORLD (CO-FOUNDERS) ===== */}
        <section className="py-20 px-6 md:px-16 bg-background">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold">The Minds Behind Orion World</h2>
              <div className="h-0.5 w-16 bg-primary/40 mx-auto my-3" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-2">
                Built on clarity. Driven by execution.
              </p>
            </motion.div>

            {/* Intro statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                Orion World was not created to follow an industry standard — it was built to redefine it.
                At its core are two founders who saw a gap where most overlooked it: the absence of structure,
                consistency, and engineering-led thinking in fenestration.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                What began as observation evolved into intent — and eventually, into Orion World.
              </p>
            </motion.div>

            {/* Co-Founders Grid */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-20">
              {/* Vidhan Agrawal */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-md mb-5">
                      <img
                        src="https://placehold.co/400x400/e2e8f0/2d6799?text=Vidhan"
                        alt="Vidhan Agrawal"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">Vidhan Agrawal</h3>
                    <p className="text-primary font-medium mt-1">Co-Founder | Strategy & Systems</p>
                    <div className="h-0.5 w-12 bg-primary/40 my-4" />
                    <p className="text-muted-foreground leading-relaxed">
                      Vidhan brings a systems-first approach to Orion World — focusing on how things should work,
                      not just how they are done. Early in his journey, he recognized a recurring problem across
                      projects: lack of standardization, inconsistent execution, and solutions driven more by
                      shortcuts than by design. Instead of accepting this as industry reality, he chose to question it.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      His focus has since been on building clarity into complexity — creating structured processes,
                      defining product systems, and ensuring that every solution delivered is engineered, not improvised.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Rishav Dahlan */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-md mb-5">
                      <img
                        src="https://placehold.co/400x400/e2e8f0/2d6799?text=Rishav"
                        alt="Rishav Dahlan"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">Rishav Dahlan</h3>
                    <p className="text-primary font-medium mt-1">Co-Founder | Execution & Delivery</p>
                    <div className="h-0.5 w-12 bg-primary/40 my-4" />
                    <p className="text-muted-foreground leading-relaxed">
                      Rishav leads execution with a deep understanding of what it takes to translate design into
                      reality. With hands-on involvement across sites, fabrication, and installation, he has seen
                      firsthand where most projects fail — not in design, but in execution. Misalignment between
                      planning and on-ground delivery often leads to compromised outcomes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      His approach is simple: eliminate that gap. At Orion World, he ensures that every system is
                      not only designed with intent but also executed with accuracy — from coordinating teams to
                      overseeing installations, without compromise.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Shared Vision & What This Means For You */}
            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary/5 rounded-xl border border-border p-6 md:p-8"
              >
                <h3 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <span className="text-primary">✦</span> A Shared Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Together, they built Orion World on a clear belief: Good design is not enough — it must be backed
                  by engineering, and delivered with precision. By combining structured thinking with hands-on
                  execution, Orion World operates as a complete system — not just a supplier.
                </p>
                <div className="mt-5 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">✔</span>
                    <span className="text-muted-foreground">Thought through</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">✔</span>
                    <span className="text-muted-foreground">Technically sound</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">✔</span>
                    <span className="text-muted-foreground">Precisely executed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/5 rounded-xl border border-border p-6 md:p-8"
              >
                <h3 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <span className="text-secondary-foreground">⤴</span> What This Means For You
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you work with Orion World, you’re not just choosing a product. You’re choosing a team that:
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span className="text-muted-foreground">Understands design intent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span className="text-muted-foreground">Engineers every solution</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span className="text-muted-foreground">Executes without compromise</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic mt-5 border-t border-border pt-4">
                  Because in modern spaces, every opening matters — and how it is built defines how it performs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US (4 FEATURE GRID) ===== */}
        <section className="py-20 px-6 md:px-16 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading">Why Choose Us?</h2>
              <div className="h-0.5 w-16 bg-primary/40 mx-auto my-3" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Engineered for performance, designed for elegance
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="text-4xl mb-4 inline-block p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            
          </div>
        </section>

        {/* ===== CTA + STATS + EXPERIENCE CENTER ===== */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary/5 via-background to-primary/5 rounded-2xl border border-border shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side: Visit experience center */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-heading">Visit Our Experience Center</h3>
                <p className="text-muted-foreground flex items-start gap-2">
                 Raipur - see our systems in action and experience the Orion World difference.
                </p>
                <button className="mt-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-md flex items-center gap-2">
                  Contact Us
                </button>
              </div>

              {/* Right side: Stats & achievements */}
              <div className="flex flex-wrap justify-center md:justify-end gap-8 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-8">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary">10+</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary">500+</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary">100%</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Precision Fit</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL BOTTOM CTA / CONTACT SECTION ===== */}
        <section className="py-16 text-center border-t border-border bg-background">
          <div className="max-w-2xl mx-auto px-6 space-y-4">
            <h3 className="text-2xl font-heading">Ready to transform your space with exceptional fenestration?</h3>
            <p className="text-muted-foreground">
              Let's build engineered window and door systems tailored to your vision.
            </p>
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition font-medium cursor-pointer font-semibold">
              Request a Quote
            </button>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

// Feature data for "Why Choose Us" grid
const features = [
  {
    icon: "🇮🇹",
    title: "Italian Design",
    description: "Minimalist profiles, maximum glass area for a sleek modern look."
  },
  {
    icon: "⚙️",
    title: "Precision Engineering",
    description: "High-performance hardware ensuring smooth, reliable operation."
  },
  {
    icon: "🌧️",
    title: "Weather Resistance",
    description: "Tested for Indian climatic conditions — waterproof and durable."
  },
  {
    icon: "🛠️",
    title: "Expert Installation",
    description: "Trained teams ensuring perfect fit, finish, and long-term performance."
  }
];