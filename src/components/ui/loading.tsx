import { motion } from "motion/react";

const dots = [...Array(3)];

const LoadingUI = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-gray-100">
      <div className="flex space-x-2">
        {dots.map((_, index) => (
          <motion.span
            key={index}
            className="bg-WEATHER-neutral-300 h-3 w-3 rounded-full"
            animate={{
              y: [0, -10, 0], // Animate up and down
              opacity: [1, 0.5, 1], // Animate oeate a fade effectpacity to cr
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity, // Loop the animation infinitely
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.2, // Stagger the animation of each dot
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingUI;
