"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center">
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
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">

          <a
            href="#home"
            className="hover:text-yellow-500 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-yellow-500 transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-yellow-500 transition duration-300"
          >
            Services
          </a>

          <a
            href="#emi"
            className="hover:text-yellow-500 transition duration-300"
          >
            EMI Calculator
          </a>

          <a
            href="#vision"
            className="hover:text-yellow-500 transition duration-300"
          > Our Vision
          </a>

          <a
            href="#contact"
            className="hover:text-yellow-500 transition duration-300"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md transition-all duration-300"
          >
            Apply Now
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-6 py-5 gap-5 font-medium">

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#emi" onClick={closeMenu}>
              EMI Calculator
            </a>

            <a href="#vision" onClick={closeMenu}>
              Our Vision
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-yellow-500 text-white text-center py-3 rounded-lg font-semibold"
            >
              Apply Now
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}