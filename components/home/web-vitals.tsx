"use client";

import CountingNumbers from "@/components/shared/counting-numbers";
import { motion } from "framer-motion";

export default function WebVitals({ title }: { title: string }) {
  return (
    <div className="relative h-full w-full">
      <motion.svg className="absolute inset-0 m-auto" viewBox="0 0 100 100" width={100} height={100}>
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
          strokeWidth={7}
          strokeDasharray="0 1"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          cx="50"
          cy="50"
          r="45"
          fill="#DCFCE7"
          stroke="#22C55E"
        />
      </motion.svg>
      <CountingNumbers
        value={100}
        duration={2500}
        className="absolute inset-0 mx-auto flex items-center justify-center font-display text-3xl text-green-500"
      />
      <div className="mt-2 pt-2 text-center font-display text-xl text-gray-700">{title}</div>
    </div>
  );
}
