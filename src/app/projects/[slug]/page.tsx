import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Footer from "@/components/Footer"
import { getProjectBySlug, projects } from "@/data/projects"

interface ProjectCaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectCaseStudyPage({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-background text-foreground pt-24 pb-0">
      <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <Link
          href="/projects"
          className="inline-flex text-xs uppercase tracking-[0.2em] text-primary/80 hover:text-primary transition-colors font-poppins"
        >
          Back to Projects
        </Link>

        <header className="mt-5 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-poppins">
            Case Study
          </p>
          <h1
            className="mt-3 text-primary"
            style={{
              fontFamily: "var(--font-cinzel), Cinzel, serif",
              fontSize: "clamp(1.9rem, 4.4vw, 3.5rem)",
              lineHeight: 1.12,
            }}
          >
            {project.title}, {project.location}
          </h1>
          <p className="mt-3 text-muted-foreground font-poppins text-[0.98rem] leading-relaxed">
            {project.system}
          </p>
          <p className="mt-4 text-muted-foreground font-poppins text-[0.98rem] leading-relaxed">
            {project.summary}
          </p>
        </header>

        <div className="relative mt-8 rounded-xl overflow-hidden border border-border aspect-[16/8]">
          <Image
            src={project.coverImage}
            alt={`${project.title} case study cover`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <InfoCard title="Challenge" value={project.challenge} />
          <InfoCard title="Solution" value={project.solution} />
          <InfoCard title="Outcome" value={project.outcome} />
        </section>

        <section className="mt-12">
          <h2
            className="text-primary mb-4"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif", fontSize: "1.6rem" }}
          >
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((imagePath, index) => (
              <div
                key={`${project.slug}-${index}`}
                className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border"
              >
                <Image
                  src={imagePath}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </section>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  )
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <article className="rounded-lg border border-border bg-card p-5">
      <h3 className="text-primary text-sm uppercase tracking-[0.2em] font-poppins font-semibold">
        {title}
      </h3>
      <p className="mt-3 text-muted-foreground text-sm leading-relaxed font-poppins">{value}</p>
    </article>
  )
}

