export interface Testimonial {
  quote: string
  author: string
  role: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The detailing, execution, and finish reflect true engineering precision. Every frame was perfect.",
    author: "Aditya Verma",
    role: "Residential Client",
    location: "Raipur",
  },
  {
    quote:
      "Every corner was handled with care. A seamless experience from the first consultation to final installation.",
    author: "Priya Mehta",
    role: "Commercial Client",
    location: "Nagpur",
  },
  {
    quote:
      "Their work speaks for itself — timeless quality, flawless delivery, and a team that stands by their craft.",
    author: "Sameer Joshi",
    role: "Interior Architect",
    location: "Mumbai",
  },
  {
    quote:
      "We expected good. We received something that exceeded every benchmark we set for the project.",
    author: "Rohit Agarwal",
    role: "Real Estate Developer",
    location: "Pune",
  },
  {
    quote:
      "Craftsmanship at this level is rare. They set a new standard for what we expect on every future project.",
    author: "Nisha Kapoor",
    role: "Hospitality Client",
    location: "Hyderabad",
  },
]
