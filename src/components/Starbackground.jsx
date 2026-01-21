"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

function generateStars(count, starColor) {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(", ");
}

function StarLayer({
  count = 1000,
  size = 1,
  transition = { repeat: Infinity, duration: 50, ease: "linear" },
  starColor = "#000",
  className,
  ...props
}) {
  const [boxShadow, setBoxShadow] = React.useState("");

  React.useEffect(() => {
    setBoxShadow(generateStars(count, starColor));
  }, [count, starColor]);

  return (
    <motion.div
      animate={{ y: [0, -2000] }}
      transition={transition}
      className={cn("absolute top-0 left-0 w-full h-[2000px]", className)}
      {...props}
    >
      <div
        className="absolute bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow,
        }}
      />
      {/* Duplicate layer for seamless looping */}
      <div
        className="absolute bg-transparent rounded-full top-[2000px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow,
        }}
      />
    </motion.div>
  );
}

export function StarsBackground({
  children,
  className,
  factor = 0.04,
  speed = 60,
  springConfig = { stiffness: 70, damping: 25 },
  starColor = "#000000",
  ...props
}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, springConfig);
  const springY = useSpring(offsetY, springConfig);

  const handleMouseMove = React.useCallback(
    (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newX = (centerX - e.clientX) * factor;
      const newY = (centerY - e.clientY) * factor;
      offsetX.set(newX);
      offsetY.set(newY);
    },
    [factor, offsetX, offsetY]
  );

  return (
    <div
      className={cn(
        "relative h-screen w-full overflow-hidden bg-white",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="absolute inset-0"
        style={{ x: springX, y: springY }}
      >
        <StarLayer
          count={1200}
          size={1}
          transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
          starColor={starColor}
        />
        <StarLayer
          count={500}
          size={2}
          transition={{
            repeat: Infinity,
            duration: speed * 1.8,
            ease: "linear",
          }}
          starColor={starColor}
        />
        <StarLayer
          count={180}
          size={3}
          transition={{
            repeat: Infinity,
            duration: speed * 3.2,
            ease: "linear",
          }}
          starColor={starColor}
        />
      </motion.div>

      {/* Content layer */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}