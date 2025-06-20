"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-50 text-gray-800">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-14 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h2 className="text-lg uppercase tracking-widest text-indigo-900 mb-2">
            Multiskilled Professional
          </h2>

          <h1 className="sm:text-5xl text-3xl mb-4 font-bold bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 bg-clip-text text-transparent leading-tight">
            <motion.span
              className="text-6xl font-bold bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 bg-clip-text text-transparent inline-block"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Hooria Fatima
            </motion.span>
            <br />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "E-commerce Manager",
                  "Digital Marketer",
                  "Virtual Assistant",
                  "Freelancer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="mb-6 text-base text-gray-700">
            I&apos;m a passionate and adaptable professional with hands-on experience
            in web development, e-commerce operations, digital marketing, content creation, and virtual assistance. I love working on real-world projects and am always eager to learn and grow in any role I take on.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            {/* Contact Me Button */}
            <motion.div whileHover={{ scale: 1.05, y: -2 }}>
              <Link href="#contact">
                <button className="inline-flex text-white bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 border-0 py-3 px-6 focus:outline-none hover:brightness-110 rounded-lg text-lg shadow-md transition-all duration-300">
                  Contact Me
                </button>
              </Link>
            </motion.div>

            {/* View Resume Button */}
            <motion.div whileHover={{ scale: 1.05, y: -2 }}>
              <a
                href="/asset/cv/hkcv.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center text-white bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950 border-0 py-3 px-6 rounded-lg hover:brightness-110 transition-all duration-300 shadow-md">
                  View Resume →
                </button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0"
        >
          <div className="relative w-[22rem] h-[22rem] mx-auto rounded-full overflow-hidden border-[6px] border-purple-500 shadow-[0_0_30px_5px_rgba(128,0,128,0.5)] animate-spin-slow">
            <Image
              className="rounded-full border-4 border-indigo-200 shadow-lg object-cover object-center mx-auto w-[22rem] h-[22rem] transition-all duration-500 hover:scale-105 animate-sway"
              src="/asset/picture/hkpic7.jpeg"
              alt="Hooria Fatima"
              fill
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
