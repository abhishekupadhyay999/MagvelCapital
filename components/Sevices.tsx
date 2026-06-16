export default function Services() {
  const services = [
    {
      title: "Home Loans",
      description: "Own your dream home with attractive interest rates.",
    },
    {
      title: "Loan Against Property",
      description: "Unlock the value of your property.",
    },
    {
      title: "Mortgage Loans",
      description: "Customized funding for your financial needs.",
    },
    {
      title: "Business Loans",
      description: "Fuel your business growth and expansion.",
    },
    {
      title: "Balance Transfer",
      description: "Reduce EMI and interest burden.",
    },
    {
      title: "Construction Finance",
      description: "Funding support for construction projects.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Comprehensive financial solutions tailored to your needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}