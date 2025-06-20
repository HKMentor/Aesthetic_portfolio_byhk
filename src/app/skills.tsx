"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdCode, MdBuild, MdGroups } from "react-icons/md"; // Icon update

const skills = {
  tech: [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "Python", level: 65 },
    { name: "Agentic AI", level: 40 },
  ],
  tools: [
    { name: "Shopify", level: 90 },
    { name: "SEO", level: 85 },
    { name: "Canva", level: 95 },
    { name: "Excel", level: 75 },
  ],
  soft: [
    { name: "Team Collaboration", level: 90 },
    { name: "Good Communication", level: 95 },
    { name: "Time Management", level: 90 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [filled, setFilled] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setFilled(level), 400);
    return () => clearTimeout(timeout);
  }, [level]);

  return (
    <div className="mb-5" >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-indigo-900">{name}</span>
        <span className="text-sm font-semibold text-indigo-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${filled}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700"
        />
      </div>
    </div>
  );
};

const SkillCard = ({
  title,
  list,
  icon,
}: {
  title: string;
  list: { name: string; level: number }[];
  icon: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6"
  >
    <h3 className="text-xl font-bold text-violet-900 flex items-center gap-2 mb-4">
      <span className="text-indigo-700 text-2xl">{icon}</span>
      {title}
    </h3>
    {list.map((skill, idx) => (
      <SkillBar key={idx} name={skill.name} level={skill.level} />
    ))}
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skill"
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-50 transition-all duration-700"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20" >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 bg-clip-text text-transparent mb-3">
            My Skills
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A blend of technical, creative, and communication skills that help me build real-world solutions and manage digital projects effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SkillCard
            title="Technical Skills"
            list={skills.tech}
            icon={<MdCode />}
          />
          <SkillCard
            title="Tools & Platforms"
            list={skills.tools}
            icon={<MdBuild />}
          />
          <SkillCard
            title="Soft Skills"
            list={skills.soft}
            icon={<MdGroups />}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
