import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ScrollReveal from "scrollreveal";
import Parcours from "../components/Parcours";
import Skills from "../components/Skills";

export default function Home() {
  const author = {
    name: "XHYPHER TECH",
    email: "support@xhyphertech.com",
    phone: "+263788071106"
  };

  const projects = [
    {
      id: 1,
      title: "NEBULA & BLUEPRINT INFRASTRUCTURE",
      desc: "​The successful integration of the Nebula theme and Blueprint framework into our VPS panels. This project focused on creating a premium, responsive UI for our hosting clients to manage their servers effortlessly.",
      link: "https://panel.xhyphertech.com",
      tags: ["Vps", "Nebulatheme", "Pterodactyl"],
    },
    {
      id: 3,
      title: "XHYPHER HOST",
      desc: "Xhypher Host is a high-performance hosting platform utilizing the Pterodactyl panel to provide developers with a seamless, reliable environment for deploying Discord bots and web scripts. It focuses on high uptime and intuitive management to ensure your automation tools stay online and responsive 24/7.",
      link: "https://host.xhyphertech.com",
      tags: ["React", "Vite", "TypeScript"],
    },
    {
      id: 2,
      title: "XHYPHER TECH",
      desc: "Xhypher Tech is a professional development collective dedicated to delivering robust server infrastructure and innovative software solutions, from custom API integrations to advanced VPS hosting. The team bridges the gap between complex backend management and user-friendly web experiences, providing the essential tools developers need to scale their digital projects.",
      link: "https://xhyphertech.com",
      tags: ["React", "Tailwind", "Vite"],
    },
    {
      id: 4,
      title: "PRETTY MD MINI BOT",
      desc: "Pretty md mini free website bot is a modern WhatsApp automation tool designed for accessibility and ease of use. It features a professional web-based interface that allows users to quickly connect their accounts through an interactive pairing system, complete with real-time country code searching.",
      link: "https://free-bot.xhyphertech.com",
      tags: ["HTML", "CSS", "Node.js"],
    },
{
      id: 5,
      title: "PRETTY MD MINI BOT (TELEGRAM)",
      desc: "​A free streamlined, high-speed messaging bot built on Node.js. It features an advanced automated pairing system and custom API integrations to provide a seamless experience for our followers.We connect it directly from telegram",
      link: "https://t.me/prettymdbot",
      tags: ["TypeScript", "Telegram Bot"],
    },
{
      id: 6,
      title: "PRETTY MD",
      desc: "Pretty MD is a powerful, high-speed WhatsApp automation bot designed for efficiency and ease of use. By utilizing a Session ID authentication system, it allows users to link their accounts securely and instantly, eliminating the need for constant QR scanning and ensuring a stable, persistent connection for all automation tasks.",
      link: "https://github.com/superstar-zimtk/Pretty-md",
      tags: ["TypeScript", "Node.js"],
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
    });
    sr.reveal("section");
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 transition-colors duration-500">
      <Hero />
      <Parcours />
      <Skills />

      <Projects 
        projects={projects.slice(0, 4)} 
        author={author} 
        showAllLink={true} 
      />

      <Footer />
    </div>
  );
}
