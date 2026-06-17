"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="#home">
          <Image
            src="/logo.jpeg"
            alt="MAGVEL Capital"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#home" className="hover:text-yellow-500 transition">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-500 transition">
            About
          </a>

          <a href="#services" className="hover:text-yellow-500 transition">
            Services
          </a>

          <a href="#emi" className="hover:text-yellow-500 transition">
            EMI Calculator
          </a>

          <a href="#eligibility" className="hover:text-yellow-500 transition">
            Eligibility
          </a>

          <a href="#contact" className="hover:text-yellow-500 transition">
            Contact
          </a>

          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col p-5 gap-4">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>

            <a href="#emi" onClick={() => setIsOpen(false)}>
              EMI Calculator
            </a>

            <a href="#eligibility" onClick={() => setIsOpen(false)}>
              Eligibility
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-yellow-500 text-white text-center py-3 rounded-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}