import { HoverEffect } from "../ui/card-hover-effect";

export function Industries() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={industries} />
    </div>
  );
}
export const industries = [
  {
    title: "Real Estate",
    description:
      "Solutions for property management, smart housing, construction, and digital real estate platforms.",
    link: "/industries/real-estate",
  },
  {
    title: "Banking",
    description:
      "Digital banking, core banking solutions, fraud detection, and secure financial services.",
    link: "/industries/banking",
  },
  {
    title: "Healthcare",
    description:
      "Healthcare management systems, telemedicine, patient record management, and digital diagnostics.",
    link: "/industries/healthcare",
  },
  {
    title: "Insurance",
    description:
      "Smart insurance platforms, claims automation, risk assessment, and customer experience solutions.",
    link: "/industries/insurance",
  },
  {
    title: "Fintech",
    description:
      "Payment solutions, lending platforms, blockchain, wealth management, and financial analytics.",
    link: "/industries/fintech",
  },
  {
    title: "Travel & Hospitality",
    description:
      "Booking engines, hotel management, travel portals, and customer engagement solutions.",
    link: "/industries/travel-hospitality",
  },
  {
    title: "Software",
    description:
      "Enterprise software development, SaaS products, cloud-native apps, and AI-driven tools.",
    link: "/industries/software",
  },
  {
    title: "Media & Entertainment",
    description:
      "Streaming platforms, digital content management, gaming, and interactive media experiences.",
    link: "/industries/media-entertainment",
  },
];

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
