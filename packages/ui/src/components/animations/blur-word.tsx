import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import React, { ElementType } from "react";

interface BlurWordProps {
  text: string;
  as?: ElementType;
  className?: string;
	duration?: number;
	delay?: number;
}

const BlurWord = ({
  text,
  className,
  as = "h1",
	duration = 0.8,
	delay = 0
}: BlurWordProps) => {
	const arrayText = text.split(" ");
	
	const charVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    reveal: { opacity: 1, filter: "blur(0px)" },
  }

  const MotionComponent = motion[as as keyof typeof motion];

  return (
    <MotionComponent
      initial="hidden"
      whileInView={"reveal"}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
      className={cn(
        className,
        "whitespace-normal max-w-full text-wrap overflow-hidden"
      )}
    >
      {arrayText.map((word, index) => {
        if (word === "br") {
          return <br key={index} />
        } else {
          return (
            <motion.span
              key={word}
              transition={{ duration, delay: delay + index / 10  }}
              variants={charVariants}
              className="inline-block overflow-hidden"
              >
              {word}&nbsp;
            </motion.span>
          )
        }
      })}
    </MotionComponent>
  );
};

export default BlurWord;
