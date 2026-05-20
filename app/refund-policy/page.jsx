"use client";

import React from "react";
import { 
  CalendarClock, 
  AlertCircle, 
  FileCheck, 
  Mail, 
  ShieldAlert, 
  BadgeDollarSign, 
  CalendarDays, 
  ShoppingBag,
  MessageSquareWarning,
  Clock,
  RefreshCcw,
  FileX,
  Gavel,
  Send,
  CheckCircle2,
  XCircle
} from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-800">
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/30 to-blue-500/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xl text-slate-300">
            Our commitment to transparency and fair business practices
          </p>
          <p className="text-slate-400 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Quick Summary Cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-100 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <CalendarDays className="w-5 h-5 text-green-700" />
            </div>
            <p className="text-sm text-green-700 font-medium">Cancellation Window</p>
            <p className="text-2xl font-bold text-green-800">24 Hours</p>
            <p className="text-xs text-green-600 mt-1">From order placement</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <RefreshCcw className="w-5 h-5 text-blue-700" />
            </div>
            <p className="text-sm text-blue-700 font-medium">Money-Back Guarantee</p>
            <p className="text-2xl font-bold text-blue-800">30 Days</p>
            <p className="text-xs text-blue-600 mt-1">From purchase date</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-xl border border-amber-100 shadow-sm">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-amber-700" />
            </div>
            <p className="text-sm text-amber-700 font-medium">Refund Processing</p>
            <p className="text-2xl font-bold text-amber-800">21 Days</p>
            <p className="text-xs text-amber-600 mt-1">After approval</p>
          </div>
        </div>

        {/* Important Notice Banner */}
        <div className="mb-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
          <div className="flex gap-4">
            <ShieldAlert className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-800 text-lg">Policy Overview</h3>
              <p className="text-blue-700 mt-1">
                Starway Web Digital is committed to customer satisfaction. This policy outlines the terms under which 
                cancellations and refunds may be processed. Please read carefully as terms vary based on service type 
                and time of request.
              </p>
            </div>
          </div>
        </div>

        {/* Cancellation Policy Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
            <div className="p-2 bg-red-100 rounded-lg">
              <FileX className="w-5 h-5 text-red-700" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Cancellation Policy</h2>
          </div>

          <div className="space-y-6">
            {/* Core Rules */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-red-50 px-5 py-3 border-b border-red-100">
                <h3 className="font-semibold text-red-800">Cancellation Guidelines</h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">1</span>
                  </div>
                  <p>Cancellation requests will be considered only if made within <strong className="text-red-700">24 hours</strong> of placing the order.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">2</span>
                  </div>
                  <p>Cancellation will <strong className="text-red-700">NOT</strong> be accepted if the order has already been processed or communicated to vendors/third-party service providers.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">3</span>
                  </div>
                  <p>Orders cannot be cancelled on the <strong className="text-red-700">day/date of delivery</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">4</span>
                  </div>
                  <p><strong>No cancellations</strong> for special occasion offers (e.g., Christmas, New Year, Black Friday, etc.).</p>
                </div>
              </div>
            </div>

            {/* Quality Issues */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-amber-50 px-5 py-3 border-b border-amber-100">
                <h3 className="font-semibold text-amber-800">Quality-Related Issues</h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p>
                    Replacement or refund may be considered if the customer proves that the delivered product/service is of poor quality. 
                    This must be reported within <strong className="text-amber-700">5 days</strong> of delivery.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquareWarning className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p>
                    If the service/product received is not as described in the proposal/agreement, notify customer support within 
                    <strong className="text-amber-700"> 24 hours</strong> of delivery. Our team will review and take appropriate action.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Terms */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
                <h3 className="font-semibold text-slate-700">Additional Cancellation Terms</h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>All outstanding dues must be cleared before cancellation is processed.</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p><strong>No prorated refunds</strong> for partial months of recurring services.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>All cancellation requests must be submitted <strong>in writing or via email</strong> and must be initiated by the original customer.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarClock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p><strong>No refunds</strong> will be issued for cancellation requests made after <strong className="text-red-700">7 days</strong> from the order date.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Gavel className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                  <p>
                    Any cancellation after the cooling-off period will result in <strong className="text-red-700">full payment liability</strong> 
                    and termination of the agreement.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShoppingBag className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <p>
                    For warranty-related product issues (third-party software, plugins, themes, etc.), customers should contact the 
                    respective manufacturer directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refund Policy Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <BadgeDollarSign className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Refund Policy</h2>
          </div>

          <div className="space-y-5">
            <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-6 border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">30-Day Money-Back Guarantee</h3>
              <p className="text-emerald-700 mb-3">
                All purchases are covered under a <strong>30-day money-back guarantee</strong>. If you are not satisfied with our service, 
                we may issue a refund after proper evaluation and mutual cooperation.
              </p>
              <div className="bg-white rounded-lg p-4 border border-emerald-100 mt-3">
                <p className="text-emerald-700 flex items-start gap-2">
                  <FileCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>To request a refund:</strong> Contact our support team within <strong>90 days</strong> of purchase. 
                    Please include your order/invoice number and optionally provide feedback to help us improve our services.
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                <p>Refunds are <strong>not applicable</strong> for fully delivered services (e.g., completed website installation, hosting setup, domain registration, completed SEO campaigns).</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></div>
                <p>Approved refunds are processed within <strong>21 business days</strong> via the original payment method.</p>
              </div>
            </div>

            {/* Important Note Box */}
            <div className="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-800">Important: Design Approval Policy</p>
                  <p className="text-yellow-700 text-sm mt-1">
                    Once a design (website layout, graphics, logo, or any visual asset) is <strong className="underline">explicitly approved in writing</strong> by the client, 
                    no refund requests will be accepted for that deliverable. However, reasonable modification requests within the scope of work are still allowed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Table */}
        <div className="mb-12 bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <CalendarClock className="w-5 h-5" />
            Refund Eligibility Summary
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 px-3 font-semibold text-slate-600">Scenario</th>
                  <th className="text-left py-2 px-3 font-semibold text-slate-600">Eligibility</th>
                  <th className="text-left py-2 px-3 font-semibold text-slate-600">Time Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 px-3">Order cancellation (not processed)</td>
                  <td className="py-2 px-3"><span className="text-green-600">✓ Eligible</span></td>
                  <td className="py-2 px-3">Within 24 hours</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Poor quality / Not as described</td>
                  <td className="py-2 px-3"><span className="text-yellow-600">Case-by-case</span></td>
                  <td className="py-2 px-3">Within 5 days</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Design approved by client</td>
                  <td className="py-2 px-3"><span className="text-red-600">✗ Not eligible</span></td>
                  <td className="py-2 px-3">N/A</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Fully delivered services</td>
                  <td className="py-2 px-3"><span className="text-red-600">✗ Not eligible</span></td>
                  <td className="py-2 px-3">N/A</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">General dissatisfaction</td>
                  <td className="py-2 px-3"><span className="text-green-600">✓ Eligible</span></td>
                  <td className="py-2 px-3">Within 30 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Need to Request a Cancellation or Refund?</h3>
          <p className="text-blue-100 mb-5">
            Our support team is ready to assist you with any questions or requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="mailto:support@starwayweb.com" 
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-medium px-6 py-2.5 rounded-xl transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@starwaywebdigital.com
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2.5 rounded-xl transition-colors border border-blue-500"
            >
              <Send className="w-4 h-4" />
              Submit Cancellation Request
            </a>
          </div>
          <p className="text-blue-200 text-xs mt-4">
            Please include your order/invoice number in all correspondence for faster processing.
          </p>
        </div>
      </div>
    </div>
  );
}
