import Image from "next/image";

export default function Partners() {
  const banks = [
    {
      name: "HDFC Bank",
      logo: "/banks/hdfc.jpg",
    },
    {
      name: "ICICI Bank",
      logo: "/banks/icici.png",
    },
    {
      name: "Axis Bank",
      logo: "/banks/axis.png",
    },
    {
      name: "State Bank of India",
      logo: "/banks/sbi.jpg",
    },
    {
      name: "LIC Housing Finance",
      logo: "/banks/lic.png",
    },
    {
      name: "Bajaj Finance",
      logo: "/banks/bajaj.png",
    },
    {
      name: "Kotak Mahindra Bank",
      logo: "/banks/kotak.png",
    },
    {
      name: "PNB Housing Finance",
      logo: "/banks/pnb.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Our Banking Partners
        </h2>

        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          We work with leading public and private sector banks,
          housing finance companies and NBFCs to help customers
          get the most suitable financing solutions.
        </p>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">

          <div className="bg-gray-50 rounded-xl p-6 text-center shadow">
            <h3 className="text-3xl font-bold text-blue-900">
              500+
            </h3>
            <p className="text-gray-600 mt-2">
              Happy Customers
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center shadow">
            <h3 className="text-3xl font-bold text-blue-900">
              20+
            </h3>
            <p className="text-gray-600 mt-2">
              Banking Partners
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center shadow">
            <h3 className="text-3xl font-bold text-blue-900">
              ₹100Cr+
            </h3>
            <p className="text-gray-600 mt-2">
              Loans Processed
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center shadow">
            <h3 className="text-3xl font-bold text-blue-900">
              99%
            </h3>
            <p className="text-gray-600 mt-2">
              Customer Satisfaction
            </p>
          </div>

        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {banks.map((bank, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <Image
                src={bank.logo}
                alt={bank.name}
                width={140}
                height={70}
                className="object-contain max-h-16 w-auto"
              />

              <p className="mt-4 text-sm font-medium text-blue-900 text-center">
                {bank.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}