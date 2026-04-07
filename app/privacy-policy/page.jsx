"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Learn how we collect, use, and protect your information.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">

        {/* Intro */}
        <section>
          <p className="text-lg leading-relaxed">
            This privacy policy explains how Starway Web Digital collects, uses,
            and protects any information that you provide while using our website
            and services. We are committed to ensuring that your privacy is
            protected.
          </p>
          <p className="mt-4">
            We may update this policy from time to time. Please review this page
            periodically to stay informed about any changes.
          </p>
        </section>

        {/* What we collect */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Customer name (individual or business) and job title</li>
            <li>Contact details (address, phone number, email)</li>
            <li>Demographic information (postcode, preferences, interests)</li>
            <li>Information related to surveys, offers, or feedback</li>
          </ul>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            What We Do With the Information
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Maintain internal records</li>
            <li>Improve our products and services</li>
            <li>
              Send promotional emails about new services, offers, or updates
            </li>
            <li>
              Conduct market research via email, phone, or other communication
              methods
            </li>
            <li>Customize website experience based on user preferences</li>
          </ul>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p>
            We are committed to ensuring that your information is secure. We use
            appropriate physical, electronic, and managerial procedures to
            safeguard and protect the data collected online.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Use of Cookies</h2>
          <p>
            We use cookies to analyze website traffic and improve user experience.
            Cookies help us understand which pages are useful and which are not.
          </p>
          <p className="mt-3">
            Cookies do not give us access to your computer or personal data
            beyond what you choose to share.
          </p>
          <p className="mt-3">
            You can choose to accept or decline cookies through your browser
            settings.
          </p>
        </section>

        {/* External Links */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Links to Other Websites
          </h2>
          <p>
            Our website may contain links to other websites. Once you leave our
            site, we are not responsible for the privacy practices of those
            external sites. Please review their privacy policies separately.
          </p>
        </section>

        {/* Control Info */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Controlling Your Personal Information
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              You can opt out of direct marketing by selecting the appropriate
              option in forms.
            </li>
            <li>
              You can withdraw consent at any time by contacting us via email.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, you can contact
            us at:
          </p>

          <div className="mt-4 p-4 bg-white rounded-xl shadow border">
            <p className="font-medium">Starway Web Digital</p>
            <p>Email: info@starwaywebdigital.com</p>
          </div>
        </section>

        {/* Footer */}
        <div className="pt-10 border-t text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Starway Web Digital. All rights reserved.
        </div>
      </div>
    </div>
  );
}