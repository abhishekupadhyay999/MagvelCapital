import {
  FaUsers,
  FaUniversity,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";

export default function TrustStrip() {
  const items = [
    {
      icon: <FaUsers />,
      title: "50,000+ Customers Served",
    },
    {
      icon: <FaUniversity />,
      title: "150+ Banking Partners",
    },
    {
      icon: <FaClock />,
      title: "Quick Loan Approval",
    },
    {
      icon: <FaFileAlt />,
      title: "End-to-End Documentation Support",
    },
  ];

  return (
    <section className="bg-blue-900 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 text-white text-center"
            >
              <span className="text-yellow-400 text-2xl">
                {item.icon}
              </span>

              <p className="font-medium text-sm md:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}