"use client"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  // State to manage the adjusted radius
  const [adjustedRadius, setAdjustedRadius] = useState(radius);

  useEffect(() => {
    // Function to update the radius based on screen size
    const updateRadius = () => {
      const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;
      setAdjustedRadius(isMediumScreen ? radius + 30 : radius);
    };

    // Call on initial render
    updateRadius();

    // Add event listener for window resize
    window.addEventListener("resize", updateRadius);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateRadius);
  }, [radius]);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={adjustedRadius}
            fill="none"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": adjustedRadius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border [animation-delay:calc(var(--delay)*1000ms)] bg-white/10",
          {
            "[animation-direction:reverse]": reverse,
          },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
