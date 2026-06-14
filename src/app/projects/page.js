'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'wordpress', name: 'WordPress Projects' },
    { id: 'javascript', name: 'JavaScript Projects' },
    { id: 'nextjs', name: 'Next.js Projects' },
    { id: 'mern', name: 'MERN Stack Projects' },
    { id: 'php', name: 'PHP Projects' },
  ];
  
const projects = [
   {
  title: "Mahalaxmi Tech Services",
  description:
    "A modern business website for technology and service solutions featuring responsive UI, service showcases, property listings, contact management, and seamless user experience.",
  image: "/projects/mahalaxmi.png",
  technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
  github: "", // Add your GitHub repo if available
  live: "", // Add deployed website link
  category: "nextjs"
},
  {
    title: "Telco Brush Ware",
    description:
      "A scalable e-commerce platform built with advanced filters, search, authentication, and a feature-rich admin dashboard.",
    image: "/projects/tbc.png",
    technologies: ["Next.js", "Node.js", "MySQL"],
    github: "", // Add your GitHub repo if available
    live: "", // Add live link if deployed
    category: "nextjs"
  },
  {
    title: "Backend Admin Panel",
    description:
      "A robust admin panel with full CRUD functionality, lead status tracking, and secure API authentication.",
    image: "/projects/panel.png",
    technologies: ["Next.js", "Node.js"],
    github: "", // Add your GitHub repo if available
    live: "", // Add live link if deployed
    category: "javascript"
  },
  {
    title: "Electricity Billing System",
    description:
      "A Java-based system to automate invoices, manage customer data, and process payments securely.",
    image: "/projects/ebc.png",
    technologies: ["Java", "MySQL"],
    github: "", // Add your GitHub repo if available
    live: "", // Add live link if deployed
    category: "java"
  },
  {
  title: "PHP Voting System",
  description:
    "A full-stack online voting platform developed using PHP and MySQL with secure login authentication, party management, voter registration, admin dashboard, vote counting, and real-time result tracking.",
  image: "/projects/voting.png",
  technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  github: "",
  live: "",
  category: "php"
}
 
];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen pt-24 pb-16  bg-gray-950 px-4">
      {/* Category Filters */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <h1 className="text-4xl font-bold text-center text-white mb-6 md:mb-8">My Projects</h1>
        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto -mx-4 px-4 md:px-0 pb-4 md:pb-0 justify-start md:justify-center gap-3 md:gap-4 hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-xl backdrop-blur-md border whitespace-nowrap transition duration-300 ${
                activeCategory === category.id
                ? 'bg-white/20 border-white/50 text-white'
                : 'bg-white/10 border-white/30 text-gray-300 hover:bg-white/15'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-48 w-full overflow-hidden bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-80' : 'opacity-60'}`}></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;