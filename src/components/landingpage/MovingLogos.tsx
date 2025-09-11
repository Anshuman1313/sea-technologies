import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
 
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
const logos = [
  { name: "KFC", img: "/logos/kfc.png" },
  { name: "Starbucks", img: "/logos/starbucks3.png" },
  { name: "Flipkart", img: "/logos/flipkart.png" },
  { name: "McDonald's", img: "/logos/mcdonalds.png" },
  { name: "Isuzu", img: "/logos/isuzu-seeklogo.png" },
];

const LogoCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="flex items-center justify-center w-32 h-20 grayscale hover:grayscale-0 transition">
      <img src={img} alt={name} className="max-h-18 object-contain" />
    </div>
  );
};

export function MovingLogos() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <h2 className="text-xl text-neutral-700 font-semibold pb-15">
        Trusted by fast-growing startups
      </h2>
      <Marquee  className="[--duration:25s]">
        {logos.map((logo) => (
          <LogoCard key={logo.name} {...logo} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

    {/* <h2 className="text-xl font-medium mb-3">TRUSTED BY TEAMS FROM AROUND THE WORLD</h2>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}