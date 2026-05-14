"use client";

import React from "react";
import { 
  FileText, 
  Shield, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  Mail, 
  Globe, 
  CreditCard, 
  HelpCircle, 
  Scale, 
  RefreshCw, 
  Server,
  FileSignature,
  Send
} from "lucide-react";

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-800">
      
      {/* Hero Section - Modern with accent */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-xl text-slate-300">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="text-slate-400 mt-4">
            Please read these terms carefully. By accessing our services, you agree to be bound by these terms.
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Important Notice Banner */}
        <div className="mb-12 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 shadow-sm">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 text-lg">Important Legal Notice</h3>
              <p className="text-amber-700 mt-1">
                These Terms & Conditions constitute a legally binding agreement between you ("Client") and Starway Web Digital ("Company"). 
                Please review all sections thoroughly before engaging our services.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <FileText className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Introduction</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600 leading-relaxed">
            <p>
              Welcome to Starway Web Digital. By continuing to browse, access, or use this website and our digital marketing services, 
              you acknowledge that you have read, understood, and agree to comply with the following terms and conditions, 
              together with our Privacy Policy.
            </p>
            <p>
              These terms apply to all services including but not limited to website development, SEO, social media management, 
              PPC campaigns, content marketing, and branding services offered by Starway Web Digital.
            </p>
          </div>
        </section>

        {/* NDA & Contract Auto-Approval - NEW CLAUSE */}
        <section className="mb-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FileSignature className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">NDA & Contract Approval Policy</h2>
          </div>
          <div className="pl-10 space-y-3">
            <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-indigo-900 text-lg">48-Hour Auto-Approval Clause</p>
                  <p className="text-indigo-800 mt-2">
                    Any Non-Disclosure Agreement (NDA), Service Contract, Statement of Work (SOW), or Agreement 
                    sent to the Client via email or official communication channel shall be considered 
                    <span className="font-bold underline mx-1">APPROVED</span> 
                    if the Client does not provide written objections, requested modifications, or explicit rejection 
                    within <span className="font-bold">forty-eight (48) hours</span> from the time of delivery.
                  </p>
                  <p className="text-indigo-700 text-sm mt-3 bg-white/60 rounded-lg p-3">
                    <strong>Note:</strong> It is the Client&apos;s responsibility to review all documents promptly. 
                    Starway Web Digital recommends setting up email notifications to avoid missing critical communications. 
                    For urgent matters, please contact us directly at <strong>support@starwayweb.com</strong>.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              This policy ensures project timelines are maintained and prevents unnecessary delays in service delivery.
            </p>
          </div>
        </section>

        {/* Agreement Terms */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Shield className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Agreement Terms</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>
              The Terms of this Agreement commence on the date the Client enrolls for our services (whether via signed proposal, 
              online checkout, or verbal confirmation followed by payment) and continue until terminated by either party 
              in accordance with the terms herein.
            </p>
            <p>
              Starway Web Digital reserves the right to display its identifying mark (logo, design, URL, or brand identity) 
              on all produced websites, marketing materials, or deliverables as a testament to our work, unless a separate 
              white-label agreement has been signed.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Globe className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Description of Services</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>
              Services may include, but are not limited to: business websites, e-commerce solutions, hosting, email services, 
              cloud storage, SEO optimization, social media management, PPC campaign management, content creation, 
              analytics reporting, and ongoing maintenance, depending on the selected service package.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any service due to non-payment, client delays, 
              non-cooperation, or violation of these terms, without incurring any liability.
            </p>
          </div>
        </section>

        {/* Access & Communication */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Mail className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Access to Information & Communication</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>
              Clients must provide accurate, complete, and current registration and project details. Failure to do so 
              may result in service suspension or termination. Clients are responsible for maintaining the confidentiality 
              of their account credentials.
            </p>
            <p>
              For quality assurance, training, and dispute resolution purposes, all calls, video conferences, and other 
              communications with Starway Web Digital representatives may be recorded. Clients will be notified at the 
              start of any such recording.
            </p>
          </div>
        </section>

        {/* Post Delivery Support */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Post Delivery Support</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600 mb-3">
              Upon final project delivery and sign-off, Starway Web Digital provides complimentary technical support 
              for a period of <strong>thirty (30) days</strong>. Support includes:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>Resolution of errors, bugs, or technical glitches</li>
              <li>Technical troubleshooting and performance optimization</li>
              <li>Minor content or layout changes (up to 2 hours of work)</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Any support requests beyond this 30-day window or outside the scope described above will be billed at our 
              standard hourly rate of <strong>$75/hour</strong> or as otherwise agreed in writing.
            </p>
          </div>
        </section>

        {/* Renewal Policy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <RefreshCw className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Renewal Policy</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600">
              All recurring service agreements (including hosting, maintenance, SEO retainers, and marketing subscriptions) 
              require renewal at least <strong>seven (7) calendar days</strong> prior to the expiration date. 
              Failure to renew within this timeframe may result in service interruption, data loss, or permanent termination 
              of services. Starway Web Digital is not responsible for any losses incurred due to lapsed renewals.
            </p>
          </div>
        </section>

        {/* Domain & Hosting Transfer */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Server className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Domain & Hosting Transfer</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600 font-medium mb-3">To transfer domain or hosting services to another provider:</p>
            <ol className="list-decimal ml-6 space-y-2 text-slate-600">
              <li>Clear all outstanding dues and invoices with Starway Web Digital</li>
              <li>Submit a written transfer request to support@starwayweb.com</li>
              <li>Receive EPP/Auth code and transfer instructions within 3 business days</li>
              <li>Initiate transfer with your new provider</li>
            </ol>
            <p className="text-slate-600 mt-3">
              Domain transfers typically complete within 5-7 business days. Hosting migrations take 3-5 business days. 
              Starway Web Digital is not responsible for downtime during the transfer process.
            </p>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <CreditCard className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Payment Terms</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>
              Clients agree to pay all applicable fees, including taxes, transaction fees, and any third-party costs, 
              as per the selected service plan or proposal. Payments may be processed via automatic recurring debits 
              or manual invoices depending on the agreement.
            </p>
            <div className="bg-red-50 rounded-lg p-4 border border-red-100">
              <p className="text-red-700 font-medium">
                Late Payment: A late fee of <strong>5% per month</strong> (or the maximum allowed by law) will be applied 
                to any overdue balance. Services may be suspended after 15 days of non-payment and terminated after 30 days.
              </p>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <AlertCircle className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Limitation of Liability</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600">
              To the fullest extent permitted by law, Starway Web Digital, its directors, employees, partners, and affiliates 
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including 
              but not limited to loss of profits, data, goodwill, or other intangible losses, arising from:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-slate-600">
              <li>Use or inability to use our services</li>
              <li>Any inaccuracies, errors, or omissions in content or deliverables</li>
              <li>Unauthorized access to or alteration of your transmissions or data</li>
              <li>Statements or conduct of any third party on our platforms</li>
            </ul>
            <p className="text-slate-600 mt-3">
              Our total liability shall not exceed the total fees paid by you to us in the 6 months preceding the claim.
            </p>
          </div>
        </section>

        {/* Legal & Intellectual Property */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Scale className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Legal & Intellectual Property</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <ul className="list-disc ml-6 space-y-2">
              <li>Unauthorized use, reproduction, or distribution of our content or deliverables may result in legal action</li>
              <li>All website content, designs, code, graphics, and marketing materials are protected by copyright, trademark, and other intellectual property laws</li>
              <li>External links provided are for convenience only; we do not endorse or control third-party content</li>
              <li>Any disputes shall be governed by the laws of [Your State/Country] and resolved through binding arbitration</li>
            </ul>
          </div>
        </section>

        {/* Agreement Acceptance */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold">Agreement Acceptance</h2>
          </div>
          <div className="pl-10">
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <p className="text-emerald-800 font-medium text-lg">
                By using this website, engaging our services, making a payment, or signing a proposal, 
                you affirm that you have read, understood, and voluntarily agree to be bound by these 
                Terms & Conditions, including the 48-hour auto-approval clause for NDAs and contracts.
              </p>
              <p className="text-emerald-700 mt-4 text-sm">
                If you do not agree with any part of these terms, you must immediately discontinue use of our 
                website and services. For questions or to request modifications, please contact support@starwayweb.com.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12 pt-4">
          <div className="bg-slate-100 rounded-2xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Have Questions About Our Terms?</h3>
            <p className="text-slate-600 mb-4">
              Our legal team is available to clarify any section of this agreement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="mailto:support@starwayweb.com" 
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors"
              >
                <Send className="w-4 h-4" />
                support@starwayweb.com
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium px-6 py-2.5 rounded-xl transition-colors"
              >
                Schedule Legal Consultation
              </a>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
}