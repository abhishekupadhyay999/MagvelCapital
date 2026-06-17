export default function EligibilityChecker() {
  return (
    <section
      id="eligibility"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Check Your Loan Eligibility
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Get a quick assessment of your loan eligibility with our experts.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              placeholder="Monthly Income"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              placeholder="Existing EMI (if any)"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Employment Type</option>
              <option>Salaried</option>
              <option>Self Employed</option>
              <option>Business Owner</option>
            </select>

            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
          >
            Check Eligibility
          </button>

          <p className="text-center text-gray-500 mt-4 text-sm">
            Our financial advisor will contact you shortly.
          </p>

        </div>
      </div>
    </section>
  );
}