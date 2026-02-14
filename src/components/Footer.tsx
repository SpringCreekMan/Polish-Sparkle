"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3l3.057-3 6.914 4L21 3v18l-3.057-3L11.029 22 5 21z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">
                Polish<span className="text-accent-light"> Sparkle</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Professional indoor and outdoor cleaning services for homes and businesses
              across Chicago&apos;s western suburbs.
            </p>
            <a
              href="tel:6304134002"
              className="text-accent-light hover:text-accent transition-colors font-semibold"
            >
              (630) 413-4002
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Standard Cleaning",
                "Deep Cleaning",
                "Move In/Out Cleaning",
                "Window Cleaning",
                "Pressure Washing",
                "Commercial Cleaning",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/40 text-sm hover:text-accent-light transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {[
                "Naperville",
                "Woodridge",
                "Orland Park",
                "Bolingbrook",
                "Hinsdale",
                "Downers Grove",
                "Burr Ridge",
                "Lemont",
                "Palos Park",
              ].map((c) => (
                <li key={c}>
                  <a
                    href="#service-area"
                    className="text-white/40 text-sm hover:text-accent-light transition-colors"
                  >
                    {c}, IL
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-2.5 mb-6">
              <li>
                <a
                  href="sms:6304134002?body=Hi%20Polish%20Sparkle%2C%20I'd%20like%20to%20get%20a%20quote!"
                  className="text-white/40 text-sm hover:text-accent-light transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Text for Quote
                </a>
              </li>
              <li>
                <a
                  href="tel:6304134002"
                  className="text-white/40 text-sm hover:text-accent-light transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (630) 413-4002
                </a>
              </li>
            </ul>

            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/privacy"
                  className="text-white/40 text-sm hover:text-accent-light transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <span className="text-white/40 text-sm">
                  SMS Terms: Reply STOP to opt out
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {currentYear} Polish Sparkle. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Serving Chicagoland&apos;s western suburbs with pride.
          </p>
        </div>
      </div>
    </footer>
  );
}
