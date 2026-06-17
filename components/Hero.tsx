import StatsCounter from "./StatsCounter";
import {
  FaHome,
  FaBuilding,
  FaBriefcase,
  FaHardHat,
  FaUniversity,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function Hero() {
  const services = [
    {
      icon: <FaHome size={28} />,
      title: "Home Loan",
    },
    {
      icon: <FaMoneyCheckAlt size={28} />,
      title: "Mortgage Loan",
    },
    {
      icon: <FaBriefcase size={28} />,
      title: "Business Loan",
    },
    {
      icon: <FaBuilding size={28} />,
      title: "Loan Against Property",
    },
    {
      icon: <FaHardHat size={28} />,
      title: "Construction Finance",
    },
    {
      icon: <FaUniversity size={28} />,
      title: "Builder Funding",
    },
  ];

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
            Compare loan offers from 150+ leading banks and NBFCs.
            Get competitive interest rates, quick approvals,
            and complete documentation support from our experts.
          </p>

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

          <StatsCounter />
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 mb-4">
                {service.icon}
              </div>

              <h3 className="font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}