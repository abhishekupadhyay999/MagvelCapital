"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-900">
          MAGVEL{" "}
          <span className="text-yellow-500">
            Capital
          </span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-yellow-500 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-700 hover:text-yellow-500 transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            className="text-gray-700 hover:text-yellow-500 transition duration-300"
          >
            Services
          </a>

          <a
            href="#contact"
            className="text-gray-700 hover:text-yellow-500 transition duration-300"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-medium transition duration-300"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-4 gap-4">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-500"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-500"
            >
              About
            </a>

            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-500"
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-500"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-yellow-500 text-white text-center py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}