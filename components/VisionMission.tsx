import {
  FaBullseye,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-900">
            Vision, Mission & Values
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Building trust through transparency, innovation, and
            customer-focused financial solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 text-2xl mb-5">
              <FaBullseye />
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To become India most trusted and customer-centric financial
              services company by providing accessible, transparent, and
              innovative loan solutions. We aim to empower individuals,
              businesses, and entrepreneurs with the right financial support
              while building lasting relationships through integrity,
              excellence, and nationwide reach.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 text-2xl mb-5">
              <FaRocket />
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To simplify the borrowing journey by connecting customers with
              the most suitable financial solutions through expert guidance,
              fast approvals, extensive banking partnerships, and complete
              documentation support.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-2xl mb-5">
              <FaHandshake />
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Values
            </h3>

            <div className="space-y-3 text-gray-600">
              <p>✓ Integrity & Transparency</p>
              <p>✓ Customer First Approach</p>
              <p>✓ Excellence in Service</p>
              <p>✓ Trust & Reliability</p>
              <p>✓ Long-Term Relationships</p>
              <p>✓ Nationwide Financial Reach</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}