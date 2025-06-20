"use client";
import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Ayesha Tariq",
    role: "Startup Founder",
    feedback:
      "Hooria did an amazing job building our business website. It's responsive, fast, and reflects our brand perfectly. Highly recommended!",
    image: "/asset/picture/reviwimg3.jpeg",
    rating: 5,
  },
  {
    name: "Zain Ul Abideen",
    role: "Freelancer",
    feedback:
      "The resume service really helped me land more interviews. Clean design, professional format — exactly what I needed!",
    image: "/asset/picture/reviwimg2.jpg",
    rating: 5,
  },
  {
    name: "Sarah Malik",
    role: "Content Creator",
    feedback:
      "I always get compliments on my thumbnails and social media designs. Hooria is so creative with Canva Pro!",
    image: "/asset/picture/reviwimg1.jpeg",
    rating: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 text-yellow-400 mt-2">
    {[...Array(count)].map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400" />
    ))}
  </div>
);

const ClientReviewsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-50 text-black">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-yellow-500 mb-3">Client Testimonials</h2>
          <p className="text-purple-800 max-w-xl mx-auto text-sm">
            Real feedback from amazing clients who trusted my skills and creativity.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl shadow-md border border-purple-400 hover:shadow-yellow-400 transition-all duration-300 "
            >
              {/* Side Ribbon */}
              <div className="absolute -left-3 top-2 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-r-full">
                Verified
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-yellow-400 object-cover w-[60px] h-[60px]"
                  priority
                />
                <div>
                  <h4 className="text-base font-semibold text-purple-950">{review.name}</h4>
                  <p className="text-sm text-purple-500">{review.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-700 text-sm italic mb-2 leading-relaxed">{review.feedback}</p>

              {/* Rating */}
              <StarRating count={review.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;
