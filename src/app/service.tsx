"use client";
import React from "react";
import { Monitor, FileText, Palette } from "lucide-react";
import Link from "next/link";

const services = [
  {
    slug: "website-development",
    title: "Website Design & Development",
    icon: <Monitor className="h-10 w-10 text-yellow-300" />,
    description: "Modern, mobile-responsive websites using HTML, CSS, JavaScript, and Next.js.",
    price: "Rs. 8,000+",
  },
  {
    slug: "resume-writing",
    title: "Professional Resume Writing",
    icon: <FileText className="h-10 w-10 text-green-300" />,
    description: "Clean, ATS-friendly resumes for jobs, internships, or freelancing.",
    price: "Rs. 1,500",
  },
  {
    slug: "canva-design",
    title: "Canva Pro Design Services",
    icon: <Palette className="h-10 w-10 text-pink-300" />,
    description: "Custom thumbnails, social posts, flyers, business cards using Canva Pro.",
    price: "Rs. 500 – 2,000",
  },
];

const MyServicesWithPricingSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-indigo-950 to-violet-950 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-yellow-200 mb-3">My Services & Pricing</h2>
          <p className="text-violet-100 max-w-xl mx-auto">
            Professional services to build your online presence — with clear and affordable pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link
              href={`/services/${service.slug}`}
              key={index}
              className="block group transition-transform hover:-translate-y-1"
            >
              <div className="bg-gray-900 border border-purple-700 rounded-2xl p-8 shadow-xl group-hover:shadow-yellow-500 transition-shadow duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-100 mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-right text-pink-400 font-semibold text-lg">
                  {service.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServicesWithPricingSection;
