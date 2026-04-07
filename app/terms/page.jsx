"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Terms & Conditions
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Please read these terms carefully before using our services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        
        {/* Intro */}
        <section>
          <p className="text-lg leading-relaxed">
            Welcome to our website. By continuing to browse and use this website,
            you agree to comply with and be bound by the following terms and
            conditions of use, which together with our privacy policy govern
            Starway Web Digital’s relationship with you.
          </p>
        </section>

        {/* Agreement */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Agreement Terms</h2>
          <p>
            The Terms of the Agreement will commence on the date the Client
            enrolls for our services and will continue until terminated by either
            party as per the agreement.
          </p>
          <p className="mt-3">
            Starway Web Digital reserves the right to use its identifying mark
            (logo, design, URL, or brand identity) on all produced websites or
            products without requiring client consent.
          </p>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Description of Services</h2>
          <p>
            Services may include business websites, hosting, email services,
            storage, and maintenance depending on the selected package.
          </p>
          <p className="mt-3">
            We reserve the right to modify, suspend, or discontinue services due
            to non-payment, delays, or non-cooperation without liability.
          </p>
        </section>

        {/* Access */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Access to Information</h2>
          <p>
            Users may be required to provide accurate and complete registration
            details. Failure to do so may result in suspension or termination of
            access.
          </p>
          <p className="mt-3">
            Calls may be recorded for training and quality purposes.
          </p>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Post Delivery Support
          </h2>
          <p>
            Technical support is provided for up to 30 days after project
            delivery. Support includes:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>Error and bug fixing</li>
            <li>Technical troubleshooting</li>
            <li>Minor changes</li>
          </ul>
          <p className="mt-3">
            Any support beyond this period will be chargeable.
          </p>
        </section>

        {/* Renewal */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Renewal Policy</h2>
          <p>
            Clients must renew services at least 7 days before expiry. Failure to
            do so may result in service termination.
          </p>
        </section>

        {/* Transfer */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Domain & Hosting Transfer
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Clear dues before transfer</li>
            <li>Receive EPP/Auth code</li>
            <li>Initiate transfer with new provider</li>
            <li>Transfer completes within ~5 days</li>
          </ul>
        </section>

        {/* Payment */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
          <p>
            Clients agree to pay applicable fees, including taxes, as per the
            selected plan. Payments may be auto-debited.
          </p>
          <p className="mt-3">
            Failure to maintain valid payment methods may result in service
            suspension or termination.
          </p>
        </section>

        {/* Liability */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p>
            We are not liable for any inaccuracies, errors, or damages arising
            from the use of our website or services.
          </p>
        </section>

        {/* Legal */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Legal</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Unauthorized use may result in legal action</li>
            <li>All content is protected by copyright</li>
            <li>External links are not under our control</li>
          </ul>
        </section>

        {/* Final */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Agreement Acceptance
          </h2>
          <p>
            By using this website, you acknowledge that you have read,
            understood, and agree to these Terms & Conditions.
          </p>
        </section>

        {/* Footer */}
        <div className="pt-10 border-t text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Starway Web Digital. All rights reserved.
        </div>
      </div>
    </div>
  );
}