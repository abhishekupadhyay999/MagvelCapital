export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Request a free consultation and our team will get back to you shortly.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-900">
              MAGVEL CAPITAL SERVICES PVT LTD
            </h3>

            <p>
              <strong>Director:</strong> Jitendra Dubey
            </p>

            <p>
              📍 41, 1st Floor, Sunshine Commercial Complex,
              Near Railway Station,
              Nalasopara East – 401209, Maharashtra
            </p>

            <p>
              📞 +91 87999 74949
            </p>

            <p>
              📧 info@magvelcapital.com
            </p>

            <p>
              📧 jitendra@magvelcapital.com
            </p>

            <p>
              🌐 www.magvelcapital.com
            </p>
          </div>

          

          {/* Right Side Form */}
          <form className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg"
            />

            <select className="w-full border p-3 rounded-lg">
              <option>Select Loan Requirement</option>
              <option>Home Loan</option>
              <option>Loan Against Property</option>
              <option>Mortgage Loan</option>
              <option>Business Loan</option>
              <option>Construction Finance</option>
            </select>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              Submit Inquiry
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}