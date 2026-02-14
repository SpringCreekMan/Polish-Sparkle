"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cities = [
  { name: "Woodridge", zip: "60517" },
  { name: "Palos Park", zip: "60464" },
  { name: "Orland Park", zip: "60462" },
  { name: "Naperville", zip: "60540" },
  { name: "Burr Ridge", zip: "60527" },
  { name: "Bolingbrook", zip: "60440" },
  { name: "Hinsdale", zip: "60521" },
  { name: "Lemont", zip: "60439" },
  { name: "Downers Grove", zip: "60515" },
];

export default function ServiceArea() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="service-area" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Service Area
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Proudly Serving Chicago&apos;s Western Suburbs
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We bring our professional cleaning services directly to your door across these communities.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-900 font-semibold">{city.name}</h3>
              <p className="text-gray-400 text-xs mt-1">IL {city.zip}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Don&apos;t see your city? Text us&mdash;we may still be able to help.
        </motion.p>
      </div>
    </section>
  );
}
