export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold">
              MAGVEL <span className="text-yellow-400">Capital</span>
            </h2>

            <p className="mt-4 text-gray-300">
              MAGVEL CAPITAL SERVICES PVT LTD is committed to helping
              customers secure the best loan products with transparency,
              competitive rates, and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="hover:text-yellow-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400 transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-400 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Information
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>
                📍 41, 1st Floor, Sunshine Commercial Complex,
                Nalasopara East, Maharashtra - 401209
              </p>

              <p>
                📞 +91 87999 74949
              </p>

              <p>
                📧{" "}
                <a
                  href="mailto:info@magvelcapital.com"
                  className="hover:text-yellow-400"
                >
                  info@magvelcapital.in
                </a>
              </p>

              <p>
                🌐 www.magvelcapital.in
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-10 pt-6 text-center">
          <p className="text-gray-300">
            © 2026 MAGVEL CAPITAL SERVICES PVT LTD. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Disclaimer: Loan approvals, interest rates, and disbursements
            are subject to the policies and eligibility criteria of
            respective banks and financial institutions.
          </p>
        </div>

      </div>
    </footer>
  );
}