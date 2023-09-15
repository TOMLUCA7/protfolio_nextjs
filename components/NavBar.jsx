"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Menu from "./Menu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [NavBarOpen, setNavBarOpen] = useState(false);

  const navbarAnimation = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90"
      variants={navbarAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="block md:hidden mobile-menu mt-2">
          {!NavBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {NavBarOpen ? <Menu links={navLinks} /> : null}
    </motion.nav>
  );
};

export default NavBar;
