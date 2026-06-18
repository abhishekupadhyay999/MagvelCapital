import StatsCounter from "./StatsCounter";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="text-yellow-500 font-semibold uppercase tracking-wider">
            Trusted Financial Partner
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            Get the Best
            <span className="block">
              Home Loan Deals
            </span>

            <span className="block text-yellow-500">
              from Top Banks & NBFCs
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Compare loan offers from 150+ leading banks and NBFCs.
            Get competitive interest rates, quick approvals, and complete
            documentation support from our experts.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-7 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Apply For Loan
            </a>

            <a
              href="#services"
              className="border-2 border-blue-900 text-blue-900 px-7 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium">
              ✓ 50,000+ Customers
            </span>

            <span className="bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium">
              ✓ 150+ Banking Partners
            </span>

            <span className="bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium">
              ✓ Quick Approval
            </span>
          </div>

          {/* Animated Stats */}
          <StatsCounter />
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md border border-gray-100">

            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Why Choose MAGVEL?
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">✓</span>
                <p>Lowest Interest Rates Available</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">✓</span>
                <p>150+ Banking Partners</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">✓</span>
                <p>50,000+ Happy Customers</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">✓</span>
                <p>₹100Cr+ Loans Processed</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">✓</span>
                <p>End-to-End Documentation Support</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">✓</span>
                <p>Fast Loan Approval Assistance</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">✓</span>
                <p>Dedicated Financial Advisors</p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}