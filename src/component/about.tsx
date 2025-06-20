"use client";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
<section className="text-gray-800 bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-50 py-20 transition-all duration-500" id="about">
  <div className="container mx-auto flex px-6 md:px-12 lg:px-20 flex-col md:flex-row items-center gap-12">

    {/* Image Section */}
    <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded-xl shadow-xl border-4 border-indigo-200 transition-transform duration-500 hover:scale-105"
        alt="About Image"
        src={"/asset/picture/hkpic1.jpeg"}
        width={450}
        height={350}
      />
    </div>

    {/* Text Section */}
    <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
      <h2 className="text-4xl font-extrabold bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 bg-clip-text text-transparent mb-4 tracking-wide">
        About Me
      </h2>

      <p className="mb-4 leading-relaxed text-gray-700 text-base">
        I&apos;m a passionate and self-motivated <b className="text-indigo-900">Web Development student</b> with a growing interest in <b className="text-purple-900">Python programming</b> and <b className="text-violet-900">Agentic AI technologies</b>. I enjoy building real-world digital solutions using <b>JavaScript</b>, <b>TypeScript</b>, and <b>Next.js</b>, and I&apos;m actively expanding my knowledge in full-stack development.
      </p>

      <p className="mb-4 leading-relaxed text-gray-700 text-base">
        Beyond coding, I have hands-on experience with <b className="text-indigo-900">Shopify store setup</b>, <b className="text-purple-900">product listing optimization</b>, <b>SEO</b>, and <b>basic graphic design</b> using tools like Canva. I&apos;m also exploring the potential of automation and AI tools for smart business solutions.
      </p>

      <p className="mb-6 leading-relaxed text-gray-700 text-base">
        I believe in continuous learning and turning creative ideas into functional, user-centered products. Whether it&apos;s <b>developing websites</b>, <b>managing e-commerce operations</b>, or <b>designing digital content</b>, I&apos;m always eager to grow, contribute, and connect with like-minded professionals.
      </p>

      {/* View CV Button */}
      <div className="flex justify-center md:justify-start">
        <a
          href="/asset/cv/hkcv.jpeg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-purple-800    hover:scale-65 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-500 hover:scale-105">
            View CV
          </button>
        </a>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default About;
