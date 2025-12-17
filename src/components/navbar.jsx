import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-9xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-orange-400 rounded-full"></span>
          <div className=" flex">
            <h1 className="text-lg font-semibold text-gray-900">
              Greeshma B
            </h1>
            <span className="px-3 py-1 text-sm text-gray-600">
              Software Developer
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
          <a href="#resume" className="hover:text-black transition">
            Resume
          </a>
          <a href="#projects" className="hover:text-black transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 text-sm font-medium">
          <a href="#resume" onClick={() => setIsOpen(false)}>
            Resume
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
