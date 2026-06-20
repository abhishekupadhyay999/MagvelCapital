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

            <div>
              <h4 className="font-semibold text-blue-900">
                Directors
              </h4>
              <p>Ranju Divedi</p>
              <p>Ajay Tiwari</p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900">
                Vice President
              </h4>
              <p>Jitendra Dubey</p>
            </div>

            <p>
              📍 41, 1st Floor, Sunshine Commercial Complex,
              <br />
              Near Railway Station,
              <br />
              Nalasopara East – 401209, Maharashtra
            </p>

            <p>
              📞 +91 9076910998
            </p>

            <p>
              📧{" "}
              <a
                href="mailto:info@magvelcapital.com"
                className="text-blue-700 hover:underline"
              >
                info@magvelcapital.com
              </a>
            </p>

            <p>
              🌐 www.magvelcapital.in
            </p>
          </div>

          {/* Right Side Form */}
          <div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
              <p className="text-blue-900 font-medium">
                ✓ Fast Approval Assistance
              </p>

              <p className="text-blue-900 font-medium">
                ✓ Multiple Bank Options
              </p>

              <p className="text-blue-900 font-medium">
                ✓ End-to-End Documentation Support
              </p>
            </div>

            <form className="space-y-4">
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
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Loan Requirement</option>
                <option>Home Loan</option>
                <option>Loan Against Property</option>
                <option>Education Loan</option>
                <option>Business Loan</option>
                <option>Construction Finance</option>
                <option>Car Loan</option>
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
      </div>
    </section>
  );
}