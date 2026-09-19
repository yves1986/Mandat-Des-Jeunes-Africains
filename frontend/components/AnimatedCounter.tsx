"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

function parseTarget(value: string) {
  const match = value.match(/^([\d\s]+)(.*)$/);
  if (!match) return { number: 0, suffix: value, formatted: value };
  const number = parseInt(match[1].replace(/\s/g, ""), 10) || 0;
  return { number, suffix: match[2], formatted: match[1].trim() };
}

export default function AnimatedCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { number, suffix, formatted } = parseTarget(value);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, number, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest).toLocaleString("fr-FR")),
      onComplete: () => setDisplay(formatted),
    });
    return () => controls.stop();
  }, [inView, number, formatted]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
