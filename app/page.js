"use client";

import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] h-full w-full p-3 items-center justify-center relative z-50">
      <Snowfall />
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
