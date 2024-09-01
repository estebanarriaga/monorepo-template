"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface WordPullUpProps {
  text: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
	as?: ElementType;
}

export default function WordPullUp({
  text,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
	as = "h1",
}: WordPullUpProps) {
	const MotionComponent = motion[as as keyof typeof motion];
  return (
    <MotionComponent
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "drop-shadow-sm",
        className,
      )}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
