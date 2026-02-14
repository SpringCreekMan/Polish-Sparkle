"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    title: "Attention to Detail",
    desc: "We don't cut corners. Every surface, edge, and crevice gets the care it deserves.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Trusted & Insured",
    desc: "Fully insured professionals you can trust in your home or business, every time.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Locally Owned",
    desc: "We live and work in the communities we serve. Your satisfaction is our reputation.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  },
  {
    title: "Eco-Friendly Options",
    desc: "Safe cleaning products that are effective on dirt but gentle on your family and the environment.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              About Polish Sparkle
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Built on Trust, Delivered with Pride
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Polish Sparkle was founded with a simple belief: everyone deserves to come
                home to a clean, healthy space. What started as a commitment to a few
                neighbors in Woodridge has grown into a trusted cleaning service across
                Chicago&apos;s western suburbs.
              </p>
              <p>
                We combine meticulous standards with modern techniques to deliver results
                you can see and feel. From routine home cleaning to large-scale commercial
                projects, we treat every job with the same dedication and care.
              </p>
              <p>
                Our team is fully insured, background-checked, and trained to handle
                everything from delicate interior surfaces to heavy-duty exterior work. We
                show up on time, communicate clearly, and leave your space spotless.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="sms:6304134002?body=Hi%20Polish%20Sparkle%2C%20I'd%20like%20to%20learn%20more%20about%20your%20services."
                className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-2"
              >
                Get in Touch
              </a>
              <a
                href="tel:6304134002"
                className="text-accent hover:text-accent-dark transition-colors text-sm font-medium"
              >
                (630) 413-4002
              </a>
            </div>
          </motion.div>

          {/* Right - Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-accent/20 hover:shadow-md transition-all"
              >
                <svg
                  className="w-6 h-6 text-accent mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                </svg>
                <h3 className="text-gray-900 font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
