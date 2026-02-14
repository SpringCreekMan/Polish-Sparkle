"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const residentialIndoor = [
  {
    name: "Standard Cleaning",
    desc: "Regular upkeep to maintain a fresh, tidy home week after week.",
  },
  {
    name: "Deep Cleaning",
    desc: "An intensive, top-to-bottom scrub for every corner and surface.",
  },
  {
    name: "Move In / Move Out",
    desc: "Start or leave your space spotless for a smooth transition.",
  },
  {
    name: "Post-Construction",
    desc: "Remove dust, debris, and residue after renovation projects.",
  },
  {
    name: "Custom Cleaning",
    desc: "Tailored service built around your specific needs and priorities.",
  },
];

const residentialOutdoor = [
  {
    name: "Window Cleaning",
    desc: "Crystal-clear windows inside and out for maximum curb appeal.",
  },
  {
    name: "Gutter Cleaning",
    desc: "Clear debris and ensure proper drainage to protect your home.",
  },
  {
    name: "House Washing",
    desc: "Gentle soft-wash to remove dirt, mold, and buildup from siding.",
  },
  {
    name: "Pressure Washing",
    desc: "Restore driveways, patios, and walkways to like-new condition.",
  },
];

const commercialServices = [
  "Office Cleaning",
  "Exterior & Interior Window Cleaning",
  "Gutter Cleaning",
  "Exterior Wall Cleaning",
  "Soft Washing",
  "Pressure & Power Washing",
  "Post-Construction Window Cleaning",
  "Hard Water Stain Removal",
  "Skylight & Glass Canopy Cleaning",
];

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

function ServiceCard({
  name,
  desc,
  index,
}: {
  name: string;
  desc: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
          <svg
            className="w-5 h-5 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold text-lg mb-1">{name}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const commercialRef = useRef(null);
  const commercialInView = useInView(commercialRef, { once: true, margin: "-50px" });

  return (
    <section id="services" className="section-padding relative bg-gray-50/50">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Residential Services */}
        <SectionHeader
          label="Residential Services"
          title="A Cleaner Home, Inside & Out"
          subtitle="From routine upkeep to complete restoration, we handle every surface so you don't have to."
        />

        {/* Indoor */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-700">Indoor Services</h3>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {residentialIndoor.map((s, i) => (
              <ServiceCard key={s.name} name={s.name} desc={s.desc} index={i} />
            ))}
          </div>
        </div>

        {/* Outdoor */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-700">Outdoor Services</h3>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {residentialOutdoor.map((s, i) => (
              <ServiceCard key={s.name} name={s.name} desc={s.desc} index={i} />
            ))}
          </div>
        </div>

        {/* Commercial Services */}
        <div className="border-t border-gray-200 pt-20">
          <SectionHeader
            label="Commercial Services"
            title="Professional-Grade Clean for Your Business"
            subtitle="Keep your commercial space pristine with our comprehensive cleaning solutions built for businesses."
          />

          <motion.div
            ref={commercialRef}
            initial={{ opacity: 0, y: 40 }}
            animate={commercialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {commercialServices.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={commercialInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                Need a custom commercial cleaning plan? We&apos;ll tailor it to your facility.
              </p>
              <a
                href="sms:6304134002?body=Hi%20Polish%20Sparkle%2C%20I%20need%20a%20commercial%20cleaning%20quote."
                className="btn-primary text-sm px-6 py-2.5 inline-flex items-center gap-2 shrink-0"
              >
                Get Commercial Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
