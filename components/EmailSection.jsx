"use client";

import React, { useRef } from "react";
import GithubIcon from "../public/images/github-icon.svg";
import LinkedinIcon from "../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EmailSection = () => {
  const inAnimtion = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      variants={inAnimtion}
      initial="initial"
      whileInView="animate"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2">Let`s Connect</h5>
        <p className="text-[#ADB7BE] text-lg mb-4 max-w-md">
          <br />
          Im currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I will try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/TOMLUCA7?tab=repositories">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/tom-luca-mizrahi">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <p className="text-gray-400 text-lg">
          Please contact me directly at{" "}
          <a
            href="mailto:tomluca937@gmail.com"
            className="underline text-white"
          >
            tomluca937@gmail.com
          </a>
        </p>
      </div>
    </motion.section>
  );
};

export default EmailSection;
