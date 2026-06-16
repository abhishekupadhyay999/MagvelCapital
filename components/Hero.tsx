import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="text-yellow-500 font-semibold uppercase tracking-wider">
            Trusted Financial Partner
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight">
            Get the Best Home Loan Deals
            <span className="block text-yellow-500">
              from Top Banks & NBFCs
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Compare loan offers from 20+ leading banks and NBFCs.
            Get competitive interest rates, quick approvals,
            and complete documentation support from our experts.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Apply for Loan
            </a>

            <a
              href="#services"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <h3 className="text-2xl font-bold text-blue-900">500+</h3>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900">20+</h3>
              <p className="text-gray-600 text-sm">Banking Partners</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900">₹100Cr+</h3>
              <p className="text-gray-600 text-sm">Loans Processed</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/logo.jpeg"
            alt="MAGVEL Capital"
            width={450}
            height={450}
            priority
            className="drop-shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </section>
  );
}