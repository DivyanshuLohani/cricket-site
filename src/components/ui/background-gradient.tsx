import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

// Helper function to lighten or darken a color
const lightenDarkenColor = (col: string, amt: number) => {
  let usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let g = ((num >> 8) & 0x00ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  let b = (num & 0x0000ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  return (
    (usePound ? "#" : "") +
    ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")
  );
};

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  baseColor = "#3b82f6", // Default base color
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  baseColor?: string; // Accept a base hex color as a prop
}) => {
  const lighterColor = lightenDarkenColor(baseColor, 60); // Lighten base color
  const darkerColor = lightenDarkenColor(baseColor, -60); // Darken base color

  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  console.log(
    `bg-[radial-gradient(circle_farthest-side_at_0_100%,${lighterColor},transparent),radial-gradient(circle_farthest-side_at_100%_0,${darkerColor},transparent),radial-gradient(circle_farthest-side_at_100%_100%,${baseColor},transparent),radial-gradient(circle_farthest-side_at_0_0,${baseColor},${darkerColor})]`
  );
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          backgroundImage: `radial-gradient(circle farthest-side at 0 100%, ${lighterColor}, transparent), 
                            radial-gradient(circle farthest-side at 100% 0, ${darkerColor}, transparent), 
                            radial-gradient(circle farthest-side at 100% 100%, ${baseColor}, transparent), 
                            radial-gradient(circle farthest-side at 0 0, ${baseColor}, ${darkerColor})`,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-lg z-[1] will-change-transform"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
