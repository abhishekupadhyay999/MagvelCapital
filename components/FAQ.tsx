"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "What documents are required for a Home Loan?",
      answer:
        "Basic documents include PAN Card, Aadhaar Card, Income Proof, Bank Statements, and Property Documents.",
    },
    {
      question: "How long does loan approval take?",
      answer:
        "Depending on eligibility and documentation, approvals can be processed within a few days.",
    },
    {
      question: "Can self-employed individuals apply for loans?",
      answer:
        "Yes, both salaried and self-employed individuals can apply, subject to eligibility criteria.",
    },
    {
      question: "What is Loan Against Property (LAP)?",
      answer:
        "A Loan Against Property allows you to use your residential or commercial property as collateral to secure funding.",
    },
    {
      question: "Do you assist with balance transfers?",
      answer:
        "Yes, we help customers transfer existing loans to lenders offering better interest rates and lower EMIs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions about our loan services.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-blue-900 bg-gray-50"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {faq.question}

                {openIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {openIndex === index && (
                <div className="p-5 text-gray-600 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}