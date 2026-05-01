"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"
import { projects } from "@/data/projects"

const FILTERS = ["All", "Residential", "Commercial", "Interior"] as const
type FilterType = (typeof FILTERS)[number]

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <>
    <main className="bg-background text-foreground pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <header className="text-center max-w-4xl mx-auto">
          <p
            className="uppercase text-muted-foreground"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.28em",
            }}
          >
            Our Work
          </p>
          <h1
            className="mt-3 text-primary"
            style={{
              fontFamily: "var(--font-cinzel), Cinzel, serif",
              fontSize: "clamp(2rem, 4.8vw, 4rem)",
              lineHeight: 1.12,
            }}
          >
            Projects across
            <br />
            Raipur and Chhattisgarh.
          </h1>
          <p
            className="mt-5 text-muted-foreground"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(0.95rem, 1.2vw, 1.06rem)",
              lineHeight: 1.8,
            }}
          >
            From luxury residences in Rama World and Crest Greens to commercial facades across
            the city, every project in our portfolio was built to a written specification,
            installed by our own team, and backed by our warranty.
          </p>
        </header>

        <div className="mt-7 flex items-center justify-center gap-2 flex-wrap">
          {FILTERS.map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={() => setActiveFilter(pill)}
              className={`rounded-full border px-3.5 py-1 text-xs transition-colors ${
                activeFilter === pill
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:bg-muted"
              }`}
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              aria-pressed={activeFilter === pill}
            >
              {pill}
            </button>
          ))}
        </div>

        <section className="mt-12">
          <div className="flex items-end justify-between gap-4 mb-5">
            <h2
              className="text-primary"
              style={{ fontFamily: "var(--font-cinzel), Cinzel, serif", fontSize: "1.75rem" }}
            >
              Case Studies
            </h2>
            <p className="hidden md:block text-xs text-muted-foreground font-poppins">
              {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"} in{" "}
              {activeFilter === "All" ? "all categories" : activeFilter.toLowerCase()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group border border-border bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={`${project.title}, ${project.location}, ${project.system}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-black/55 border border-white/25 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-white font-poppins">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-sm font-semibold font-poppins">
                      {project.title}, {project.location}
                    </p>
                    <p className="text-xs text-white/85 font-poppins mt-0.5">{project.system}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground font-poppins leading-relaxed">
                    {project.summary}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-primary/80 font-poppins">
                    View Case Study
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="mt-8 rounded-lg border border-border bg-card p-5 text-center text-muted-foreground font-poppins">
              No projects available in this category right now.
            </div>
          )}
        </section>

        <section className="mt-14">
          <h3
            className="text-primary mb-4"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif", fontSize: "1.45rem" }}
          >
            Project Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
            {filteredProjects.map((project, index) => (
              <Link
                key={`${project.slug}-gallery`}
                href={`/projects/${project.slug}`}
                className={`group relative rounded-lg overflow-hidden border border-border ${
                  index % 3 === 0 ? "md:col-span-2 md:row-span-2" : "md:row-span-1"
                }`}
              >
                <Image
                  src={project.gallery[0]}
                  alt={`${project.title} gallery image`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale-[25%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-poppins text-sm font-semibold">{project.title}</p>
                  <p className="font-poppins text-xs text-white/85">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>


        <Footer />
    </main>
        </>
  )
}

