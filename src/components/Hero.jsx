import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 1200,
      easing: "ease-out",
      origin: "bottom",
      interval: 150,
      reset: false,
    });
  }, []);

  return (
    <section className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-20 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Main text */}
        <div className="space-y-6 reveal">
       {/*   <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full font-semibold text-sm shadow-sm">
            🚀 Infrastructure • Automation • Innovation
          </div>*/}

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-blue-600 dark:text-blue-400">
              XHYPHER TECH
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-blue-700 dark:text-blue-400">
              Xhypher Tech
            </strong>{" "}
             is a technology service provider and development team specializing in VPS management, custom bot development, and modern web applications. The brand focuses on building high-performance hosting environments—notably via the Pterodactyl panel—and creating specialized tools like the Pretty MD Mini Bot to support a growing developer community.
          </p>

          <div className="flex flex-wrap gap-4 pt-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition"
            >
              🚀 View our projects
            </a>
            <a
              href="mailto:support@xhyphertech.com"
              className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition font-semibold"
            >
              📩 Contact us
            </a>
          </div>
        </div>

        {/* Logo or image */}
        <div className="flex justify-center reveal">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-all duration-500 hover:scale-105">
            {!imgError ? (
              <img
                src="https://n.uguu.se/zKwMMGvh.jpg"
                className="w-full h-full object-contain p-6"
                onError={() => setImgError(true)}
                alt="XHYPHER TECH"
              />
            ) : (
              <div className="text-center text-3xl font-extrabold text-slate-300 dark:text-slate-500">
                <br />XHYPHER<br />TECH
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
