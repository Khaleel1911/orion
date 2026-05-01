export interface ProjectItem {
  slug: string
  title: string
  location: string
  category: "Residential" | "Commercial" | "Interior"
  system: string
  summary: string
  coverImage: string
  gallery: string[]
  challenge: string
  solution: string
  outcome: string
}

export const projects: ProjectItem[] = [
  {
    slug: "luxury-villa-vip-road-raipur",
    title: "Luxury Villa",
    location: "VIP Road, Raipur",
    category: "Residential",
    system: "Thermally Broken Aluminium",
    summary:
      "Large-format sliding systems and slim aluminium frames designed for heat control, uninterrupted views, and clean architectural lines.",
    coverImage: "/hero/pexels-artbovich-8134818.jpg",
    gallery: [
      "/hero/pexels-artbovich-8134818.jpg",
      "/hero/pexels-clubhouseconvos-13620069.jpg",
      "/hero/pexels-worldofmtc-36519371.jpg",
    ],
    challenge:
      "Maintain panoramic openings while controlling thermal gain and preserving facade minimalism.",
    solution:
      "Specified thermally broken profiles with performance glass and precision-engineered corner transitions.",
    outcome:
      "Sharper detailing, improved thermal comfort, and seamless indoor-outdoor continuity across primary living zones.",
  },
  {
    slug: "penthouse-shankar-nagar",
    title: "Penthouse",
    location: "Shankar Nagar, Raipur",
    category: "Residential",
    system: "UPVC + Acoustic Glass",
    summary:
      "Acoustic-focused window and door package balancing city noise reduction, energy efficiency, and smooth daily operation.",
    coverImage: "/hero/pexels-worldofmtc-36519371.jpg",
    gallery: [
      "/hero/pexels-worldofmtc-36519371.jpg",
      "/hero/pexels-naimbic-2030037.jpg",
      "/hero/pexels-clubhouseconvos-13620065.jpg",
    ],
    challenge:
      "High-floor exposure to traffic and wind required better acoustic and air-tightness performance.",
    solution:
      "Used multi-chamber UPVC systems with acoustic glass combinations and calibrated hardware sealing.",
    outcome:
      "Noticeably quieter interiors, better envelope performance, and consistent long-term hardware behavior.",
  },
  {
    slug: "commercial-office-avanti-vihar",
    title: "Commercial Office",
    location: "Avanti Vihar, Raipur",
    category: "Commercial",
    system: "Aluminium Curtain Wall",
    summary:
      "Facade package combining aluminium curtain wall modules with interior glazing for contemporary corporate environments.",
    coverImage: "/hero/pexels-clubhouseconvos-13620065.jpg",
    gallery: [
      "/hero/pexels-clubhouseconvos-13620065.jpg",
      "/hero/pexels-clubhouseconvos-13620069.jpg",
      "/hero/pexels-naimbic-2030037.jpg",
    ],
    challenge:
      "Deliver a high-clarity commercial facade with consistent module alignment over a fast project schedule.",
    solution:
      "Pre-defined curtain wall specifications and controlled installation sequencing by Orion World teams.",
    outcome:
      "Clean vertical/horizontal lines, faster closure milestones, and a premium corporate visual identity.",
  },
  {
    slug: "heritage-bungalow-civil-lines",
    title: "Heritage Bungalow",
    location: "Civil Lines, Raipur",
    category: "Interior",
    system: "Custom Aluminium + Skylights",
    summary:
      "Custom aluminium systems with skylight integration to modernize comfort while respecting heritage proportions.",
    coverImage: "/hero/pexels-naimbic-2030037.jpg",
    gallery: [
      "/hero/pexels-naimbic-2030037.jpg",
      "/hero/pexels-artbovich-8134818.jpg",
      "/hero/pexels-worldofmtc-36519371.jpg",
    ],
    challenge:
      "Upgrade performance without compromising existing architectural language and natural lighting intent.",
    solution:
      "Developed custom profile selections and skylight details matched to original opening rhythms.",
    outcome:
      "Better daylight quality, improved weather performance, and preserved character with contemporary execution.",
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

