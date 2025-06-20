import React from "react";
import Image from "next/image";

const certificateImages = [
  "/asset/certificates/cart1.PNG",
  "/asset/certificates/cart2.PNG",
  // "/asset/certificates/cart1.PNG",
  // add more image paths here
];

const CertificateSection = () => {
  return (
    <section id="certificates" className="bg-gradient-to-br from-violet-950 to-indigo-900 py-20 text-white">
      <div className="container mx-auto px-6 lg:px-12  ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-200 mb-4">My Certificates</h2>
          <p className="text-violet-100 max-w-xl mx-auto">
            A proud collection of my earned certificates — showing dedication, learning, and growth across tech fields.
          </p>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-3 gap-8">
          {certificateImages.map((img, index) => (
            <div key={index} className="overflow-hidden shadow-lg hover:scale-105 transform transition duration-500 ">
              <Image
                src={img}
                alt={`Certificate ${index + 1}`}
                width={500}
                height={350}
                className="object-contain w-full h-72"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
