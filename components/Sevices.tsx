import {
  FaHome,
  FaBuilding,
  FaBriefcase,
  FaHardHat,
  FaUniversity,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaHome size={40} />,
      title: "Home Loan",
    },
    {
      icon: <FaBuilding size={40} />,
      title: "Loan Against Property",
    },
    {
      icon: <FaBriefcase size={40} />,
      title: "Business Loan",
    },
    {
      icon: <FaHardHat size={40} />,
      title: "Construction Finance",
    },
    {
      icon: <FaUniversity size={40} />,
      title: "Builder Funding",
    },
    {
      icon: <FaMoneyCheckAlt size={40} />,
      title: "Mortgage Loan",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Our Loan Services
        </h2>

        <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto">
          We provide a wide range of financial solutions with competitive
          interest rates, quick approvals, and complete documentation support.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 mx-auto mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-center text-gray-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}