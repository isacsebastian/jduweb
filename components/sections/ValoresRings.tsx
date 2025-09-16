"use client";

import { motion, type Variants, easeInOut } from "framer-motion";

type Label = { text: string; bg?: string };
type Pos = number;

// tiempos compartidos para sincronía
const RING_DUR = 1.05;
const RING_STAGGER = 0.10;

const ringVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: RING_DUR, delay: RING_STAGGER * i, ease: easeInOut },
  }),
};

const labelVariant: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 24 } },
};

export default function ValoresSection({
  labels = ["Pasión", "Disciplina", "Liderazgo", "Respeto"],
  centro = "EQUIPO",
  labelBg = "bg-black",
  positions = [0.12, 0.32, 0.68, 0.88],
}: {
  labels?: (string | Label)[];
  centro?: string;
  labelBg?: string;
  positions?: Pos[];
}) {
  const parsed = labels.map((l) => (typeof l === "string" ? { text: l, bg: labelBg } : { bg: labelBg, ...l }));
  const bandY = (1073.3 / 1997.7) * 100;

  return (
    <section className="relative w-full bg-black py-10 sm:py-14">
      <motion.h2
        className="text-white text-center font-semibold tracking-wide"
        style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.5 }}
      >
        VALORES
      </motion.h2>

      <motion.div
        className="relative mx-auto aspect-square w-full max-w-[980px]"
        initial={{ scale: 0.992, opacity: 0 }}
        whileInView={{ scale: [0.992, 1.004, 1], opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: easeInOut }}
      >
        {/* Glow sincronizado y sutil */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full -z-10"
          style={{
            background:
              "radial-gradient( circle, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.0) 70% )",
            filter: "blur(2px)",
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: [0, 1, 0.85], scale: [0.96, 1.0, 0.995] }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            // comienza cuando el último anillo termina
            delay: RING_DUR + RING_STAGGER * 3 - 0.1,
            duration: 0.9,
            ease: easeInOut,
          }}
        />

        {/* SVG intacto */}
        <svg viewBox="0 0 1997.7 1997.7" className="absolute inset-0 h-full w-full">
          {[
            "M1482.9,1109.5c-23,217.9-207.4,387.6-431.4,387.6s-408.2-169.6-431.3-387.4",
            "M620.2,1026.9c23.2-217.7,207.4-387.4,431.3-387.4s408.2,169.6,431.3,387.4",
            "M1773.8,1109.5c-18.8,382.6-335,687-722.2,687s-703.4-304.4-722.2-687",
            "M329.9,1026.9c23.9-377.7,337.9-676.7,721.7-676.7s697.7,299,721.7,676.7",
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="#fff"
              fill="none"
              strokeMiterlimit={10}
              strokeWidth={0.8}
              variants={ringVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            />
          ))}
          <motion.circle
            cx="1051.6"
            cy="1073.3"
            r="174.9"
            fill="#fff"
            initial={{ scale: 0.94, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: RING_DUR + RING_STAGGER * 2 - 0.05,
              duration: 0.45,
              ease: easeInOut,
            }}
          />
          <motion.text
            x="1051.6"
            y="1083"
            textAnchor="middle"
            className="fill-black"
            style={{ fontSize: 56, fontWeight: 600 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: RING_DUR + RING_STAGGER * 2 + 0.15 }}
          >
            {centro}
          </motion.text>
        </svg>

        {/* Banda de rótulos alineada al centro */}
        <div
          className="absolute left-0 right-0"
          style={{ top: `${bandY}%`, transform: "translateY(-50%)" }}
        >
          {parsed.map((l, i) => (
            <motion.div
              key={i}
              className={`absolute -translate-x-1/2 ${l.bg ?? labelBg} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base font-medium`}
              style={{ left: `${positions[i] * 100}%` }}
              variants={labelVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.02 }}
            >
              {l.text}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
