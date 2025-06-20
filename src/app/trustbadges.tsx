"use client";
import React from "react";
import Image from "next/image";

const logos = [
  { name: "Amazon", src: "/trusted/amazon6.png" },
  { name: "Google", src: "/trusted/google5.png" },
  { name: "Netlify", src: "/trusted/netlify4.png" },
  { name: "Vercel", src: "/trusted/vercel3.png" },
  { name: "Shopify", src: "/trusted/shopify2.png" },
  { name: "Meta", src: "/trusted/meta1.png" },
];

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-indigo-100">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl font-bold text-indigo-800 mb-8">Trusted By</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Proudly connected with platforms and tools used by the world’s leading professionals.
        </p>

        <div className="flex flex-wrap justify-center gap-6 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="w-28 h-14 relative   transition duration-300">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
