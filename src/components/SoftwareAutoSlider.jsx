// src/components/SoftwareAutoSlider.jsx
import React, { useState, useEffect } from 'react';

export default function SoftwareAutoSlider() {
  const images = [
    {
      src: "/images/jnan-vexa-logo.png",
      alt: "Jnan-Vexa Technologies Official Logo & Emblem",
      caption: "Jnan-Vexa Technologies • Premier Training & Placement Institute",
      isLogo: true
    },
    {
      src: "/images/software/software-lab-1.jpg",
      alt: "Software Developers in Enterprise Lab",
      caption: "Interactive Coding & System Design Labs"
    },
    {
      src: "/images/software/software-coding-3.jpg",
      alt: "Full Stack & Microservices Code Development",
      caption: "Hands-on Enterprise Architecture & Clean Code"
    },
    {
      src: "/images/software/software-lab-2.jpg",
      alt: "Students in Collaborative Tech Session",
      caption: "1-on-1 Mentorship from Ex-FAANG Leads"
    },
    {
      src: "/images/software/software-dev-4.jpg",
      alt: "Modern Software Engineer at Work",
      caption: "Production Cloud Deployments & CI/CD Pipelines"
    },
    {
      src: "/images/software/software-ai-5.jpg",
      alt: "Generative AI & Data Science Engineering",
      caption: "Applied AI, LLMs & Autonomous Agents"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-black/5 aspect-[4/5] bg-[#07090e] select-none">
      {images.map((img, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Enlarged image that cleanly fits and fills the container */}
            <img
              src={img.src}
              alt={img.alt}
              className={`w-full h-full ${
                img.isLogo
                  ? 'object-cover scale-105'
                  : 'object-cover transition-transform duration-700 hover:scale-105'
              }`}
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20"></div>

            {/* Clean caption overlay at bottom */}
            <div className="absolute bottom-5 left-5 right-5 z-20">
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-lime-400 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-lime-400/30 inline-block mb-1">
                {img.isLogo ? "Official Academy Emblem" : "Jnan-Vexa Tech Labs"}
              </span>
              <p className="text-sm font-bold text-white drop-shadow-md">
                {img.caption}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
