export default function Process() {
  const steps = [
    {
      title: "Consultation",
      desc: "Discuss your financial requirements with our experts.",
    },
    {
      title: "Documentation",
      desc: "Submit required documents for eligibility assessment.",
    },
    {
      title: "Loan Approval",
      desc: "We coordinate with banks and NBFCs for quick sanction.",
    },
    {
      title: "Disbursement",
      desc: "Receive funds directly into your account with complete support.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Simple 4-Step Loan Process
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Quick, transparent and hassle-free loan assistance.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}