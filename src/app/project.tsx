"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  liveLink: string;
  github: string;
}

const projectData = {
  "Advanced Projects": [
    {
      title: "EmbedSocial Clone Website",
      subtitle: "Responsive HTML + CSS UI",
      description: "A visually accurate clone of EmbedSocial with full responsiveness and clean UI structure.",
      image: "/asset/picture/embedsocialadvproject1.png",
      liveLink: "https://website-embedsocial-byhk.netlify.app/",
      github: "https://github.com/HKMentor/Assignment-4_embedSocial",
    },
    {
      title: "Gadget Groove Mobile UI",
      subtitle: "Mobile-First HTML, CSS, JS",
      description: "Mobile-friendly product showcase website with animated sections and interactive layout.",
      image: "/asset/picture/mobilwebadvproject2.jpg",
      liveLink: "https://assignment3byhk.netlify.app/",
      github: "https://github.com/HKMentor/Assignment-3_gadegGroove",
    },
    {
      title: "Nexcent Landing Page",
      subtitle: "Modern Business UI (HTML + CSS)",
      description: "Sleek UI landing page built in a hackathon, styled for corporate presentation and branding.",
      image: "/asset/picture/nexcentadvproj3.PNG",
      liveLink: "https://hk-mini-hackathon-website.netlify.app/",
      github: "https://github.com/HKMentor/Mini-Hackathon_27-04-2k25_MWAD",
    },
    {
      title: "Custom Resume UI Design",
      subtitle: "TypeScript + HTML + CSS",
      description: "Stylish custom resume design using HTML & CSS with TypeScript structure.",
      image: "/asset/picture/htmlcssresume.PNG",
      liveLink: "https://hk-resume-ui-design.netlify.app/",
      github: "https://github.com/HKMentor",
    }
  ],
  "Intermediate Projects": [
    {
      title: "Quiz App UI",
      subtitle: "JavaScript + CSS Animations",
      description: "A sleek quiz interface using JS with animated transitions and score logic.",
      image: "/asset/project/quiz.jpg",
      liveLink: "https://hkmentor.github.io/Quiz-Website-Attempt/",
      github: "#",
    },
    {
      title: "Simple Calculator",
      subtitle: "JS-Powered UI",
      description: "Basic calculator built with JavaScript and interactive UI layout.",
      image: "/asset/project/aaaqaq.jpg",
      liveLink: "https://hkmentor.github.io/Logical-Calculator_HK/",
      github: "#",
    },
    {
      title: "Live Digital Clock",
      subtitle: "JavaScript Real-Time App",
      description: "Real-time clock display using JS with modern digital clock styling.",
      image: "/asset/project/clcl.jpg",
      liveLink: "https://hkmentor.github.io/clock-by-HooriaKhan/",
      github: "#",
    },
    {
      title: "Word Counter Utility",
      subtitle: "Text Stats Analyzer",
      description: "Counts words and characters live — helpful for writers and editors.",
      image: "/asset/project/wordcounter.png",
      liveLink: "https://hkmentor.github.io/Word-Counter/",
      github: "#",
    }
  ],
  "Python Projects": [
    {
      title: "Unit Converter Tool",
      subtitle: "Python + Streamlit",
      description: "Convert units like distance, temperature, and weight using a neat Streamlit UI.",
      image: "/asset/picture/pythonproj1.png",
      liveLink: "https://hkmentor-python-unitconvertor-01unitconvertormain-xyfw7g.streamlit.app/",
      github: "https://github.com/HKMentor/sirZia_python_6Assignments/tree/master/Assignment01/01UnitConvertor",
    },
    {
      title: "Secure Password Generator",
      subtitle: "Python + Streamlit",
      description: "Generate and evaluate secure passwords using built-in strength logic.",
      image: "/asset/picture/pythonproj2.png",
      liveLink: "https://hkmentor-python-pr-secure-password-checkerpassword-meter-tw78pc.streamlit.app/",
      github: "https://github.com/HKMentor/Python-Projects/tree/master/secure_password_checker",
    },
    {
      title: "Greeting & Graph Visualizer",
      subtitle: "Streamlit UI with Matplotlib",
      description: "Enter your name and get a greeting message with live graph plotting.",
      image: "/asset/picture/pythonproj3.png",
      liveLink: "https://assignment04assignment01-09-projectp-kdtc36.streamlit.app/",
      github: "https://github.com/HKMentor/Python-Projects/tree/master/data_cleaner",
    },
    {
      title: "Guess the Number Game",
      subtitle: "Next.js Mini Game",
      description: "Fun guessing game with logical hints and React interactivity.",
      image: "/asset/picture/guesingame.jpg",
      liveLink: "https://nextjs-number-guessing-game-beta.vercel.app/",
      github: "https://github.com/HKMentor/nextjs-number-guessing-game",
    }
  ]
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, description, image, liveLink, github }) => (
  <div id="project" className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-800 transition-transform duration-500 hover:-translate-y-1">
    <div className="relative">
      <Image
        src={image}
        alt={title || "Project Image"}
        width={500}
        height={300}
        unoptimized={true}
        className="w-full h-60  transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 transition duration-300" />
    </div>
    <div className="p-6 flex flex-col justify-between min-h-[260px]">
      <div>
        <h3 className="text-sm text-indigo-400 font-semibold uppercase tracking-wide mb-1">{subtitle}</h3>
        <h2 className="text-xl font-bold text-yellow-100 mb-3 group-hover:text-pink-400 transition">{title}</h2>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-5 flex gap-4">
        <Link href={liveLink || "#"} target="_blank" className="flex-1 text-center bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm transition duration-300 shadow-md">
          Live Demo
        </Link>
        <Link href={github || "#"} target="_blank" className="flex-1 text-center bg-gray-700 hover:bg-black text-white px-4 py-2 rounded-lg text-sm transition duration-300 shadow-md">
          GitHub
        </Link>
      </div>
    </div>
  </div>
);


const ProjectSection = () => {
  return (
    <section id="projects" className="bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 py-20 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-200 mb-4">My Projects</h2>
          <p className="text-violet-100 max-w-2xl mx-auto">
            Categorized collection of my practical and creative work — ranging from beginner to advanced, and even Python streamlit apps.
          </p>
        </div>

        {Object.entries(projectData).map(([category, projects], idx) => (
          <div key={idx} className="mb-14">
            <h3 className="text-2xl font-bold text-pink-300 mb-6 border-l-4 border-yellow-400 pl-3">{category}</h3>
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((proj, i) => (
                <ProjectCard key={i} {...proj} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
