"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCloudDownloadAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-800 to-violet-900 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-6 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
            <Image
              src="/asset/picture/hkpic6.jpeg"
              alt="HK Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-wide hover:text-yellow-300 transition-colors duration-300">
            My Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative group transition duration-300"
            >
              <span className="text-white group-hover:text-yellow-300 transition">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-300 transition-all group-hover:w-full duration-500"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Download Button */}
        <div className="hidden md:block ml-4">
          <a
            href="/asset/cv/hkcv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center bg-white text-purple-900 font-semibold border border-gray-200 px-4 py-2 rounded-md shadow-md hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-pink-200 transition-all duration-300">
              Download CV
              <FaCloudDownloadAlt className="ml-2 transition-transform duration-300 group-hover:translate-y-[-2px]" />
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-900 via-purple-800 to-violet-900 text-white px-6 py-6 space-y-4 animate-slide-down">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={closeMenu}
              className="block text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="/asset/cv/hkcv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <button className="mt-4 w-full flex items-center justify-center bg-white text-purple-900 font-semibold px-4 py-2 rounded-md hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-pink-200 transition-all duration-300">
              Download CV
              <FaCloudDownloadAlt className="ml-2" />
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
