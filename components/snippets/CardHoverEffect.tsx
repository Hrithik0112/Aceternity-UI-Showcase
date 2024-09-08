import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";
import { HoverEffect } from "../ui/CardHover-Effect";

export function CardHoverEffectDemo() {
  return (
    <div className=" px-1 md:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Website Development",
    description:
      "We build fully responsive websites that look great on all devices.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "UI/UX Design",
    description:
      "We Focus on attracting customers and having great user experience.",
  },

  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "App Development",
    description:
      "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",
  },

  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiLock className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Authentication",
    description:
      "Secure authentication solutions for your website or app.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiStorefront className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Backend Development",
    description:
      "From small stores to large online retailers, we have the expertise to build a seemless backend that will help works relentlessly.",
  },

  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "SEO Optimized",
    description:
      "We offer social media management and ad creation services. We can help you grow your social media presence",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiLock className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Deployement",
    description:
      "Smooth hosting and hand-over of the project ",
  },

  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Support",
    description:
      "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
  },
];
