import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsYoutube, BsInstagram, BsGithub, BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 text-white py-12 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Floating Gradient Animation */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-600 rounded-full opacity-20 blur-2xl animate-pulse" />

      {/* Footer Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/asset/picture/hkpic6.jpeg"
              alt="logo"
              width={80}
              height={80}
              className="rounded-full border border-white"
            />
            <h2 className="text-xl font-bold tracking-wide">Hooria Fatima</h2>
          </div>
          <p className="text-sm text-indigo-100 leading-relaxed">
            Empowering brands with code, content, and creativity. Web Dev, AI & Digital Business Solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-200 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["about", "skills", "projects", "contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`#${link}`}
                  className="transition-all hover:pl-2 hover:text-indigo-400 duration-300 ease-in-out block"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-200 mb-4">Connect</h3>
          <div className="flex space-x-4 flex-wrap">
            <Link
              href="https://www.youtube.com/@Hooria_CodeHub12"
              target="_blank"
              className="group text-white transition-all duration-300"
            >
              <BsYoutube className="text-3xl group-hover:text-[#ff0000] group-hover:-translate-y-1 transition-all duration-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hooria-fatima-54753927b/"
              target="_blank"
              className="group text-white transition-all duration-300"
            >
              <FaLinkedin className="text-3xl group-hover:text-[#0e76a8] group-hover:-translate-y-1 transition-all duration-300" />
            </Link>
            <Link
              href="https://www.instagram.com/hooria_codehub/"
              target="_blank"
              className="group text-white transition-all duration-300"
            >
              <BsInstagram className="text-3xl group-hover:text-[#d62976] group-hover:-translate-y-1 transition-all duration-300" />
            </Link>
            <Link
              href="https://github.com/HKMentor"
              target="_blank"
              className="group text-white transition-all duration-300"
            >
              <BsGithub className="text-3xl group-hover:text-gray-400 group-hover:-translate-y-1 transition-all duration-300" />
            </Link>
            <Link
              href="https://twitter.com/hooria_codehub"
              target="_blank"
              className="group text-white transition-all duration-300"
            >
              <BsTwitterX className="text-3xl group-hover:text-[#1DA1F2] group-hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-sm text-indigo-200 border-t border-indigo-700 pt-6">
        © {new Date().getFullYear()} Hooria_Codehub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

