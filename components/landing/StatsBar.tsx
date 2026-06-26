"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { STATS } from "./data";

function StatIcon({ type }: { type: string }) {
  const iconClass = "w-7 h-7 text-[#C4A468]";
  if (type === "users") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  if (type === "star") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  if (type === "leaf") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    );
  }
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function parseStatValue(value: string): { number: number; prefix: string; suffix: string } {
  const prefix = value.startsWith("+") ? "+" : "";
  const withoutPrefix = value.replace(/^\+/, "");
  const match = withoutPrefix.match(/^([\d.,]+)(.*)$/);
  if (!match) return { number: 0, prefix, suffix: value };

  let raw = match[1];
  const suffix = match[2] ?? "";

  if (raw.includes(",") && !raw.includes(".")) {
    raw = raw.replace(",", ".");
  } else {
    raw = raw.replace(/\./g, "").replace(/,/g, ".");
  }

  return { number: parseFloat(raw), prefix, suffix };
}

function AnimatedStat({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { number, prefix, suffix } = parseStatValue(stat.value);
  const isDecimal = !Number.isInteger(number);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center gap-2 px-4"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
    >
      <StatIcon type={stat.icon} />
      <span className="text-2xl font-black text-gray-900">
        {prefix}
        {isInView ? (
          <CountUp
            start={0}
            end={number}
            duration={2}
            decimals={isDecimal ? 1 : 0}
            separator="."
            decimal=","
            useEasing
          />
        ) : (
          isDecimal ? "0,0" : "0"
        )}
        {suffix}
      </span>
      <span className="text-xs text-gray-500">{stat.label}</span>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
          {STATS.map((stat, i) => (
            <AnimatedStat key={stat.value} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
