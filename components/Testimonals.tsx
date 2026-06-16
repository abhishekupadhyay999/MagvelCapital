export default function Testimonials() {
  const testimonials = [
    {
      title: "Excellent Service",
      text: "The team guided me throughout the home loan process and ensured quick approval.",
    },
    {
      title: "Highly Professional",
      text: "Smooth documentation and timely disbursement. Highly recommended.",
    },
    {
      title: "Best Loan Assistance",
      text: "They helped me get the best mortgage loan option available.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Trusted by customers for transparent and hassle-free loan assistance.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}