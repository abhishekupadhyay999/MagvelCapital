export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          About MAGVEL
        </h2>

        <p className="mt-6 text-center text-gray-600 max-w-4xl mx-auto">
          MAGVEL CAPITAL SERVICES PVT LTD is a professional financial
          consultancy and Direct Selling Associate (DSA) organization
          dedicated to helping customers obtain the best loan products
          available in the market.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl text-blue-900">
              Expert Guidance
            </h3>
            <p className="mt-3 text-gray-600">
              Professional financial advice for every customer.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl text-blue-900">
              Multiple Bank Tie-Ups
            </h3>
            <p className="mt-3 text-gray-600">
              Access to leading banks and financial institutions.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl text-blue-900">
              Fast Processing
            </h3>
            <p className="mt-3 text-gray-600">
              Quick sanction and disbursement support.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}