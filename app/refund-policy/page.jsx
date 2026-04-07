"use client";

import React from "react";

export default function RefundPolicyPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Refund & Cancellation Policy
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Please read our cancellation and refund terms carefully before using our services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">

        {/* Cancellation Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>

          <p className="mb-4">
            Starway Web Digital believes in helping and cooperating with its customers as far as possible. 
            We follow a flexible cancellation policy. Customers are required to follow the guidelines below 
            to place a valid cancellation request:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Cancellation requests will be considered only if made within <strong>72 hours</strong> of placing the order.
            </li>
            <li>
              Cancellation will not be accepted if the order has already been processed or communicated to vendors.
            </li>
            <li>
              Orders cannot be cancelled on the <strong>day/date of delivery</strong>.
            </li>
            <li>
              No cancellations for special occasion offers (e.g., Christmas, New Year, etc.).
            </li>
          </ul>

          <p className="mt-4">
            However, replacement or refund may be considered if the customer proves that the delivered product/service is of poor quality. 
            This must be reported within <strong>5 days</strong>.
          </p>

          <p className="mt-4">
            If the service/product received is not as described, notify customer support within <strong>24 hours</strong> of delivery. 
            Our team will review and take appropriate action.
          </p>

          <p className="mt-4">
            All outstanding dues must be cleared before cancellation is processed. No prorated refunds for partial months.
          </p>

          <p className="mt-4">
            All cancellation requests must be submitted <strong>in writing or via email</strong> and must be initiated by the original customer.
          </p>

          <p className="mt-4">
            No refunds will be issued for cancellation requests made after <strong>7 days</strong> from the order date.
          </p>

          <p className="mt-4">
            Any cancellation after the cooling-off period will result in <strong>full payment liability</strong> and termination of the agreement.
          </p>

          <p className="mt-4">
            For warranty-related product issues, customers should contact the respective manufacturer directly.
          </p>
        </section>

        {/* Refund Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>

          <p className="mb-4">
            All purchases are covered under a <strong>30-day money-back guarantee</strong>. If you are not satisfied, 
            we may issue a refund after proper evaluation and mutual cooperation.
          </p>

          <p className="mb-4">
            To request a refund, contact our support team within <strong>90 days</strong> of purchase. 
            Please include your order/invoice number and optionally provide feedback.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Refunds are not applicable for fully delivered services (e.g., installation, hosting setup).</li>
            <li>Refunds are processed within <strong>21 days</strong>.</li>
          </ul>

          <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
            <p className="text-sm">
              <strong>Note:</strong> Once a design (website or graphics) is approved by the client, 
              no refund requests will be accepted. However, modification requests are allowed.
            </p>
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