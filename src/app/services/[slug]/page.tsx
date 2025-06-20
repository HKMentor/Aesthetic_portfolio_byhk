import { notFound } from "next/navigation";
import { type Metadata } from "next";

// ✅ Define structure
type Plan = {
  price: string;
  duration: string;
  includes: string[];
};

type Service = {
  title: string;
  basic: Plan;
  advanced: Plan;
};

// ✅ Static data
const serviceDetails: Record<string, Service> = {
  "website-development": {
    title: "Website Design & Development",
    basic: {
      price: "Rs. 8,000",
      duration: "5 days",
      includes: [
        "1 Landing Page",
        "Responsive Design",
        "Contact Form Integration",
        "Hosting Guidance",
      ],
    },
    advanced: {
      price: "Rs. 15,000+",
      duration: "7-10 days",
      includes: [
        "Multi-Page Website",
        "SEO Optimization",
        "Admin Dashboard",
        "Next.js & Tailwind Setup",
      ],
    },
  },
  "resume-writing": {
    title: "Professional Resume Writing",
    basic: {
      price: "Rs. 1,500",
      duration: "2 days",
      includes: [
        "1-page Resume",
        "ATS Optimization",
        "Editable File",
      ],
    },
    advanced: {
      price: "Rs. 2,500",
      duration: "3 days",
      includes: [
        "2-page Resume + Cover Letter",
        "Design Layout",
        "Editable + PDF File",
      ],
    },
  },
  "canva-design": {
    title: "Canva Pro Design Services",
    basic: {
      price: "Rs. 500",
      duration: "1 day",
      includes: [
        "1 Thumbnail / Post",
        "Basic Revisions",
        "HD Quality Export",
      ],
    },
    advanced: {
      price: "Rs. 2,000",
      duration: "2-3 days",
      includes: [
        "Up to 5 Designs",
        "Custom Dimensions",
        "Full Rights + Source File",
      ],
    },
  },
};

type Props = {
  params: { slug: string };
};

// ✅ Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceDetails[params.slug];
  return {
    title: service?.title || "Service Details",
    description: service
      ? `Detailed pricing and features for ${service.title}.`
      : "Service not found",
  };
}

// ✅ Page component
export default function ServiceDetailPage({ params }: Props) {
  const service = serviceDetails[params.slug];

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-indigo-950 text-white py-16 px-8">
      <h1 className="text-3xl font-bold text-yellow-300 mb-6 text-center">{service.title}</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-gray-900 p-6 rounded-xl border border-yellow-400 shadow-md">
          <h2 className="text-xl font-semibold text-yellow-200 mb-2">Basic Plan</h2>
          <p className="text-sm mb-2 text-gray-300">Price: {service.basic.price}</p>
          <p className="text-sm mb-4 text-gray-300">Delivery: {service.basic.duration}</p>
          <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
            {service.basic.includes.map((item, idx) => (
              <li key={idx}>✅ {item}</li>
            ))}
          </ul>
        </div>

        {/* Advanced Plan */}
        <div className="bg-purple-950 p-6 rounded-xl border border-pink-400 shadow-md">
          <h2 className="text-xl font-semibold text-pink-200 mb-2">Advanced Plan</h2>
          <p className="text-sm mb-2 text-gray-300">Price: {service.advanced.price}</p>
          <p className="text-sm mb-4 text-gray-300">Delivery: {service.advanced.duration}</p>
          <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
            {service.advanced.includes.map((item, idx) => (
              <li key={idx}>🚀 {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}



