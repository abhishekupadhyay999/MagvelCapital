"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="mt-10 grid grid-cols-3 gap-6 max-w-lg"
    >
      <div>
        <h3 className="text-2xl font-bold text-blue-900">
          {inView && <CountUp end={50000} duration={3} separator="," />}+
        </h3>
        <p className="text-gray-600 text-sm">
          Happy Customers
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-blue-900">
          {inView && <CountUp end={150} duration={3} />}+
        </h3>
        <p className="text-gray-600 text-sm">
          Banking Partners
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-blue-900">
          ₹{inView && <CountUp end={100} duration={3} />}Cr+
        </h3>
        <p className="text-gray-600 text-sm">
          Loans Processed
        </p>
      </div>
    </div>
  );
}