"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Now Booking Appointments
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
          Ready for a Spotless Space?
        </h2>

        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Text us your cleaning needs and we&apos;ll send you a personalized quote. No
          obligations, no pressure&mdash;just a cleaner home or business waiting for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="sms:6304134002?body=Hi%20Polish%20Sparkle%2C%20I'd%20like%20to%20get%20a%20quote!"
            className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Text Us for a Quote
          </a>
          <a
            href="tel:6304134002"
            className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call (630) 413-4002
          </a>
        </div>

        <p className="text-white/30 text-xs mt-8">
          By texting us, you consent to receive replies about your cleaning inquiry.
          Reply STOP to opt out anytime.
        </p>
      </motion.div>
    </section>
  );
}
