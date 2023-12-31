"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Memory game build with react js",
    image: "projectsImages/memory_game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TOMLUCA7/memory-game",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Nike shoes web build with react js and next.js 13",
    image: "projectsImages/nike_shoes.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TOMLUCA7/nike_shop",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Travel Application",
    description:
      "travel app show different places you can choose from the app build with React Native",
    image: "projectsImages/travel_app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/TOMLUCA7/travel-app",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Weather Application",
    description:
      "The weather app will be able to show different places from which you can know the weatherion the app build with React Native",
    image: "projectsImages/weather_app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/TOMLUCA7/Weather-App",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              imagURL={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
