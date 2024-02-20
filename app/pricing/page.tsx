"use client";

const plans = [
  {
    index: 0,
    name: "Basic",
    price: " US $499",
    features: [
      "Fully responsive on all screens",

      "Design + Development",

      "Private communication channel",
      "1-3 days turnaround time",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Premium",
    price: "US $1299",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "24-hour support response time",
      "Private communication channel",
      "3-5 days turnaround time",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Enterprise",
    feature: "Contact Us",
    price: "Let's Talk!",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "Unlimited Revisions",
      "24-hour support response time",
      "Private communication channel",
      "Priority Development Queue",
      "Dedicated Project Manager",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <div className="w-full md:justify-center md:items-center bg-black/[0.96] bg-grid-white/[0.02] antialiased overflow-x-hidden">
      Pricing
    </div>
  );
};

export default Pricing;
