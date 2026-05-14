"use client";

import React from "react";
import { 
  Shield, 
  Eye, 
  Cookie, 
  Link, 
  Mail, 
  UserCheck, 
  Database, 
  Lock, 
  Share2, 
  FileText,
  Calendar,
  Globe,
  Smartphone,
  Send,
  CheckCircle2,
  AlertTriangle,
  ExternalLink
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-800">
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/30 to-indigo-500/30"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            How we collect, use, protect, and manage your personal information
          </p>
          <p className="text-slate-400 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-4 rounded-xl text-center border border-slate-100 shadow-sm">
            <Lock className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <p className="text-xs text-slate-600">SSL Encrypted</p>
          </div>
          <div className="bg-white p-4 rounded-xl text-center border border-slate-100 shadow-sm">
            <Database className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <p className="text-xs text-slate-600">Secure Storage</p>
          </div>
          <div className="bg-white p-4 rounded-xl text-center border border-slate-100 shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <p className="text-xs text-slate-600">GDPR Compliant</p>
          </div>
          <div className="bg-white p-4 rounded-xl text-center border border-slate-100 shadow-sm">
            <Shield className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <p className="text-xs text-slate-600">Data Protection</p>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FileText className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Introduction</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600 leading-relaxed">
            <p>
              Welcome to Starway Web Digital (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our website, 
              use our digital marketing services, or engage with our platforms.
            </p>
            <p>
              We are committed to protecting your privacy and ensuring transparency about our data practices. 
              Please read this policy carefully. If you do not agree with the terms, please do not access 
              or use our services.
            </p>
            <div className="bg-indigo-50 rounded-lg p-4 text-sm text-indigo-800">
              <strong>Scope:</strong> This policy applies to all visitors, clients, and users of Starway Web Digital 
              services, including website development, SEO, PPC, social media management, email marketing, 
              and consulting services.
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Database className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Information We Collect</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600 mb-4">We may collect the following types of information:</p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  Personal Identification Information
                </h3>
                <ul className="list-disc ml-5 space-y-1 text-slate-600 text-sm">
                  <li>Full name (individual or business representative)</li>
                  <li>Job title and company name</li>
                  <li>Billing and shipping address</li>
                  <li>Phone number and email address</li>
                  <li>Tax identification number (for invoicing)</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Technical & Usage Data
                </h3>
                <ul className="list-disc ml-5 space-y-1 text-slate-600 text-sm">
                  <li>IP address and browser type</li>
                  <li>Device information (OS, screen resolution)</li>
                  <li>Pages visited, time spent, click patterns</li>
                  <li>Referring website and exit pages</li>
                  <li>Geolocation data (country/city level)</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Project & Service Data
                </h3>
                <ul className="list-disc ml-5 space-y-1 text-slate-600 text-sm">
                  <li>Website credentials (with explicit permission)</li>
                  <li>Analytics and campaign performance data</li>
                  <li>Feedback, survey responses, and testimonials</li>
                  <li>Communication history (emails, chat, call recordings)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Eye className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">How We Use Your Information</h2>
          </div>
          <div className="pl-10">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Provide, operate, and maintain our services",
                "Process transactions and send invoices",
                "Improve, personalize, and expand our offerings",
                "Communicate with you about updates, promotions, and support",
                "Analyze website traffic and user behavior",
                "Prevent fraud and ensure security",
                "Comply with legal obligations",
                "Conduct market research and gather feedback"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Lock className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Data Security</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, 
              alteration, disclosure, or destruction. These include:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>256-bit SSL encryption for data transmission</li>
              <li>Secure servers with firewall protection</li>
              <li>Regular security audits and vulnerability scans</li>
              <li>Restricted employee access on a need-to-know basis</li>
              <li>Automatic off-site backups (retained for 30 days)</li>
            </ul>
            <div className="bg-amber-50 rounded-lg p-4 mt-3">
              <p className="text-amber-700 text-sm flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span><strong>Important:</strong> While we strive to protect your data, no transmission over the internet is 100% secure. You share information at your own risk. We are not liable for breaches beyond our reasonable control.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Cookies Policy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Cookie className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Cookies & Tracking Technologies</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>
              We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience, 
              analyze website traffic, and personalize content.
            </p>
            <p><strong>Types of cookies we use:</strong></p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Essential Cookies:</strong> Required for core website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand user behavior (Google Analytics, etc.)</li>
              <li><strong>Marketing Cookies:</strong> Track campaign performance and retargeting</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p>
              You can control cookie settings through your browser. Disabling cookies may affect website functionality.
            </p>
            <div className="bg-slate-100 rounded-lg p-3 text-sm">
              <p className="text-slate-600">📧 <strong>Cookie Consent:</strong> By continuing to use our website, you consent to our use of cookies as described in this policy.</p>
            </div>
          </div>
        </section>

        {/* Third-Party Sharing */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Share2 className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Information Sharing & Disclosure</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>We do <strong>not</strong> sell, trade, or rent your personal information to third parties. However, we may share data in these circumstances:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Service Providers:</strong> Hosting, payment processing, email delivery, analytics (under confidentiality agreements)</li>
              <li><strong>Legal Compliance:</strong> To comply with laws, court orders, or government requests</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale (with notice)</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
            </ul>
          </div>
        </section>

        {/* External Links */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Link className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Links to Third-Party Websites</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600">
              Our website may contain links to external sites (client websites, partner platforms, social media, etc.). 
              Once you leave our domain, we are <strong>not responsible</strong> for the privacy practices or content of those sites. 
              We encourage you to read their privacy policies.
            </p>
            <div className="flex items-center gap-1 text-indigo-600 text-sm mt-2">
              <ExternalLink className="w-3 h-3" />
              <span>Example: Facebook, Google, Twitter, LinkedIn, YouTube</span>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <UserCheck className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Your Privacy Rights</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>Depending on your location (e.g., GDPR for EU residents, CCPA for California), you may have the right to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
              <li><strong>Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Opt out of marketing communications</li>
              <li><strong>Withdraw Consent:</strong> Cancel previously granted permissions</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at <strong>info@starwaywebdigital.com</strong>. We will respond within <strong>30 days</strong>.
            </p>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Calendar className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Data Retention</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600">
              We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, 
              unless a longer retention period is required by law (e.g., tax records: 7 years). 
              After the retention period, your data will be securely deleted or anonymized.
            </p>
            <div className="mt-3 bg-slate-50 rounded-lg p-3">
              <p className="text-sm text-slate-500">
                <strong>Retention schedule:</strong> Client data — 5 years after contract end; Website analytics — 26 months; 
                Email marketing data — until unsubscribe request.
              </p>
            </div>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Smartphone className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Children&apos;s Privacy</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600">
              Our services are not directed to individuals under the age of <strong>16</strong>. We do not knowingly collect 
              personal information from children. If you believe a child has provided us with data, please contact us 
              immediately so we can delete it.
            </p>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FileText className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Updates to This Privacy Policy</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600">
              We may update this privacy policy periodically. Changes will be posted on this page with an updated 
              &quot;Last updated&quot; date. For significant changes, we will notify you via email or a prominent notice on our website.
            </p>
            <p className="text-slate-600 mt-3">
              Your continued use of our services after modifications constitutes acceptance of the revised policy.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Mail className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600 mb-4">
              If you have questions, concerns, or requests regarding this privacy policy or our data practices, 
              please reach out to our Data Protection Officer (DPO):
            </p>
            
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <p className="font-semibold text-indigo-800">Starway Web Digital</p>
                  <p className="text-sm text-slate-500 mt-2">
                    📍 59/c, Tiljara road, JBS, Gobra, <br />
                    Kolkata, West Bengal, 700046
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm"><strong>📧 Email:</strong> <a href="mailto:info@starwaywebdigital.com" className="text-indigo-600 hover:underline">info@starwaywebdigital.com</a></p>
                  <p className="text-sm mt-2"><strong>📞 Phone:</strong> <a href="tel:+918240669415" className="text-indigo-600 hover:underline">+91 8240669415</a></p>
                  <p className="text-sm mt-2"><strong>⏰ Response Time:</strong> 2-3 business days</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
}