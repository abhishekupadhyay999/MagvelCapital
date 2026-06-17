"use client";

import { useState } from "react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState<number | null>(null);

  const calculateEMI = () => {
    const principal = Number(loanAmount);
    const monthlyRate = Number(interestRate) / 12 / 100;
    const months = Number(tenure) * 12;

    if (!principal || !monthlyRate || !months) return;

    const emiValue =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(Math.round(emiValue));
  };

  return (
    <section id="emi"
       className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          EMI Calculator
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Estimate your monthly EMI instantly.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">

          <input
            type="number"
            placeholder="Loan Amount (₹)"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Interest Rate (%)"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Loan Tenure (Years)"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            onClick={calculateEMI}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold"
          >
            Calculate EMI
          </button>

          {emi && (
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-blue-900">
                Monthly EMI
              </h3>

              <p className="text-3xl font-bold text-yellow-500 mt-2">
                ₹ {emi.toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}