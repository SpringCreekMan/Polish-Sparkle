"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Naperville, IL",
    text: "Polish Sparkle did an incredible deep clean before we moved into our new home. Every surface was spotless. I couldn't believe the attention to detail — even the baseboards and inside the cabinets were perfect.",
    rating: 5,
  },
  {
    name: "James K.",
    location: "Woodridge, IL",
    text: "We've been using Polish Sparkle for our office cleaning for over a year now. They're always on time, thorough, and professional. Our workspace has never looked better, and our team notices the difference.",
    rating: 5,
  },
  {
    name: "Maria L.",
    location: "Orland Park, IL",
    text: "The pressure washing transformed our driveway and patio. It looks brand new! They also cleaned our windows — streak-free and sparkling. Highly recommend for any outdoor cleaning needs.",
    rating: 5,
  },
  {
    name: "David & Lisa R.",
    location: "Hinsdale, IL",
    text: "After our kitchen renovation, there was dust everywhere. Polish Sparkle's post-construction cleaning was exactly what we needed. They handled everything so we could enjoy our new space right away.",
    rating: 5,
  },
  {
    name: "Amanda T.",
    location: "Bolingbrook, IL",
    text: "I text them whenever I need a cleaning and they respond quickly with a quote. No pressure, just great service. My house has never been so consistently clean since I started working with them.",
    rating: 5,
  },
  {
    name: "Robert P.",
    location: "Downers Grove, IL",
    text: "Had my gutters and exterior windows done. The team was efficient and left everything looking pristine. Fair pricing too. Already booked them for spring cleaning.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding relative bg-gray-50/50">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real feedback from homeowners and businesses across Chicagoland.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col hover:border-accent/20 hover:shadow-md transition-all"
            >
              <Stars count={t.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white text-sm font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
