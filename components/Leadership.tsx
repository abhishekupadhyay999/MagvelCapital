import Image from "next/image";

export default function Leadership() {
  const team = [
    {
      name: "Ranju Divedi",
      role: "Director",
      image: "/team/ranju.jpeg",
    },
    {
      name: "Ajay Tiwari",
      role: "Director",
      image: "/team/ajay.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-900">
            Meet Our Leadership Team
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team is committed to delivering
            trusted financial solutions with transparency, integrity,
            and customer-focused service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-[420px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-yellow-500 font-semibold">
                  {member.role}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}