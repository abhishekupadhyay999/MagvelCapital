export default function WhyChooseUs() {
  const points = [
    "Expert Financial Guidance",
    "Multiple Bank Tie-Ups",
    "Fast Loan Processing",
    "Competitive Interest Rates",
    "Personalized Service",
    "End-to-End Documentation Support",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Why Choose MAGVEL?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-semibold text-blue-900">
                ✓ {point}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}