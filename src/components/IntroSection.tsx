export default function IntroSection() {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Eyebrow */}
        <span
          className="font-body text-accent uppercase block mb-10"
          style={{ fontSize: "10px", letterSpacing: "0.45em" }}
        >
          About Orion World
        </span>

        {/* Headline — full width, large */}
        <h2
          className="font-heading text-primary leading-tight mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", maxWidth: "18ch" }}
        >
          Built for How Spaces Function
        </h2>

        {/* Body text — offset right, editorial layout */}
        <div
          className="flex flex-col md:flex-row md:items-start md:justify-end"
        >
          <div
            style={{ maxWidth: "520px" }}
            className="space-y-6"
          >
            <p
              className="font-body text-foreground/60 leading-loose"
              style={{ fontSize: "1.0625rem" }}
            >
              Every opening defines how a space feels, performs, and connects. The window or door
              you choose is not a finish — it is a system that shapes light, air, and structure.
            </p>
            <p
              className="font-body text-foreground/60 leading-loose"
              style={{ fontSize: "1.0625rem" }}
            >
              At Orion World, we engineer window and door systems that balance structure, durability,
              and design — built for long-term performance across residential and commercial projects.
            </p>
          </div>
        </div>

        {/* Decorative rule */}
        <div
          className="mt-20 h-px"
          style={{
            background:
              "linear-gradient(to right, rgba(25,43,69,0.25), rgba(45,103,153,0.35), transparent)",
          }}
        />
      </div>
    </section>
  )
}
