export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              MAGVEL Capital
            </h3>

            <p className="text-gray-300">
              Professional financial consultancy helping customers secure
              the best loan products with transparency and expert guidance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <div className="space-y-2 text-gray-300">
              <p>📞 +91 87999 74949</p>
              <p>📧 info@magvelcapital.com</p>
              <p>Nalasopara East, Maharashtra</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © 2026 MAGVEL CAPITAL SERVICES PVT LTD. All Rights Reserved.
        </div>

        <div className="mt-4 text-center text-xs text-gray-500 max-w-5xl mx-auto">
          Disclaimer: Loan approvals, interest rates, and disbursements are
          subject to the policies and eligibility criteria of respective
          banks and financial institutions.
        </div>

      </div>
    </footer>
  );
}