import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Parcours() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      origin: "bottom",
      interval: 150,
      reset: false,
    });
  }, []);

  const parcours = [
    {
      year: "2025",
      title: "The foundation of Xhypher Tech",
      desc: "The journey began with the vision of building a modern digital company. We explored web technologies, automation tools, and communication platforms to lay the foundations of what would become Xhypher Tech.",
    },
    {
      year: "2025",
      title: "First automation & WhatsApp bots creation",
      desc: "We developed our first intelligent bot called Pretty-md, allowing businesses to automate their customer communication, manage sessions, and interact with users in real time through WhatsApp.",
    },
    {
      year: "2025",
      title: "Launch of professional websites",
      desc: "We built and launched multiple professional websites, including educational platforms and company portfolios. These projects demonstrated our expertise in responsive, modern, and user-focused web development.",
    },
    {
      year: "2025",
      title: "Official launch of Xhypher Tech",
      desc: "Xhypher Tech was officially launched as a digital solutions company, offering advanced web development, automation systems, and custom bot solutions for businesses.",
    },
    {
      year: "2026",
      title: "Growth, innovation and future vision",
      desc: "We are continuously developing new technologies, including smarter bots and scalable platforms. We built our own hosting site to make deployment much more easier.Our mission is to help businesses save time, increase efficiency, and grow through powerful digital automation.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-slate-900 dark:text-slate-100 reveal">
          Our Journey
        </h2>

        <div className="space-y-12">
          {parcours.map((step, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-start gap-6 reveal"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg md:text-xl">
                {step.year}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                  {step.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
              }
