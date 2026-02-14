import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Polish Sparkle",
  description: "Privacy policy for Polish Sparkle cleaning services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
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
            <span className="text-xl font-bold text-gray-900">
              Polish<span className="text-accent"> Sparkle</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-accent transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">
          Last updated: February 2026
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Information We Collect
            </h2>
            <p>
              When you contact Polish Sparkle via text message, phone call, website
              chat, or web form, we collect personal information you provide, including
              your name, phone number, email address, and details about your cleaning
              request. This information is collected solely for the purpose of
              responding to your inquiry and providing our cleaning services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-500">
              <li>Respond to your cleaning service inquiries</li>
              <li>Provide quotes and schedule appointments</li>
              <li>Communicate about your service requests via text or phone</li>
              <li>Improve our services and customer experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              We Do Not Sell Your Data
            </h2>
            <p>
              Polish Sparkle does not sell, trade, rent, or otherwise share your
              personal information with third parties for marketing purposes. Your phone
              number and personal details are used exclusively to communicate with you
              about your service requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Text Message (SMS) Consent
            </h2>
            <p>
              End users opt in by initiating contact with Polish Sparkle via text
              message to our business phone number listed on our website and marketing
              materials. By texting us first, the user provides consent to receive
              replies related to their cleaning inquiry.
            </p>
            <p className="mt-3">
              Additionally, users may opt in via a website chat or web form on{" "}
              <span className="text-accent font-medium">www.polishsparkle.com</span> where they
              provide their phone number and agree to receive text messages from Polish
              Sparkle regarding their service request.
            </p>
            <p className="mt-3">
              <strong className="text-gray-900">Opting Out:</strong> Users may opt out at
              any time by replying <strong className="text-gray-900">STOP</strong> to any
              text message from Polish Sparkle. Upon receiving a STOP request, we will
              immediately cease sending text messages to that number.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect the personal information you
              provide from unauthorized access, use, or disclosure. However, no method
              of electronic storage or transmission is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary to
              fulfill the purposes for which it was collected, including to satisfy any
              legal or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
            <p>
              If you have questions about this privacy policy or wish to request the
              deletion of your personal data, please contact us:
            </p>
            <ul className="mt-3 space-y-2 text-gray-500">
              <li>
                Phone:{" "}
                <a
                  href="tel:6304134002"
                  className="text-accent hover:text-accent-dark transition-colors"
                >
                  (630) 413-4002
                </a>
              </li>
              <li>
                Text:{" "}
                <a
                  href="sms:6304134002"
                  className="text-accent hover:text-accent-dark transition-colors"
                >
                  (630) 413-4002
                </a>
              </li>
              <li>
                Website:{" "}
                <span className="text-accent font-medium">www.polishsparkle.com</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Polish Sparkle. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-accent transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
