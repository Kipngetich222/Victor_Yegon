import { useRef, useEffect, useState, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 3D Project Card Component
function ProjectCard3D({ modelPath, isHovered }) {
  const meshRef = useRef();
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += isHovered ? 0.02 : 0.005;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={1.2}
      position={[0, -0.5, 0]}
    />
  );
}

// Project Card Component
function ProjectCard({ project, index }) {
  const cardRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    gsap.to(cardRef.current, {
      y: isHovered ? -10 : 0,
      scale: isHovered ? 1.03 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl shadow-2xl group ${
        index % 2 === 0 ? "bg-gradient-to-br" : "bg-gradient-to-bl"
      } from-indigo-500 to-purple-600 p-0.5`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full bg-gray-600 rounded-[calc(1rem-2px)] p-6">
        {/* 3D Preview */}
        <div className="h-48 mb-4 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Environment preset="city" />
            <Suspense fallback={null}>
              <ProjectCard3D
                modelPath={project.modelPath}
                isHovered={isHovered}
              />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={!isHovered}
              autoRotateSpeed={2}
            />
          </Canvas>
        </div>

        {/* Project Info */}
        <div className="relative z-10">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">{project.icon}</span>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-indigo-900/50 text-indigo-100 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex space-x-3">
            <a
              href={project.demoUrl}
              className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Live Demo
            </a>
            <a
              href={project.codeUrl}
              className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              View Code
            </a>
          </div>
        </div>

        {/* Glow Effect */}
        <div
          className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            index % 2 === 0 ? "bg-gradient-to-br" : "bg-gradient-to-bl"
          } from-indigo-400/30 to-purple-500/30`}
        ></div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "3D E-Commerce Platform",
      description: "Interactive 3D product configurator with Node.js backend",
      tags: ["Three.js", "Node.js", "WebGL", "MongoDB"],
      icon: "🛍️",
      modelPath: "/teamugblend.glb",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "API Microservices Suite",
      description:
        "Scalable backend architecture with Kubernetes orchestration",
      tags: ["Node.js", "Docker", "Kubernetes", "PostgreSQL"],
      icon: "⚙️",
      modelPath: "/teamugblend.glb",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Procedural 3D World Generator",
      description: "Algorithmic terrain generation with Blender integration",
      tags: ["Blender", "Python", "Three.js", "GLSL"],
      icon: "🌋",
      modelPath: "/teamugblend.glb",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Real-time Dashboard",
      description: "WebSocket-powered analytics with 3D data visualization",
      tags: ["React", "WebSockets", "D3.js", "Three.js"],
      icon: "📊",
      modelPath: "/teamugblend.glb",
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  const sectionRef = useRef();
  const headingRef = useRef();
  const projectsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate project cards
      projectsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
          y: 80,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.2)",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gray-100 relative overflow-hidden rounded-2xl"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headingRef}>
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-500">
              Projects
            </span>
          </h2>
          <p className="text-lg  max-w-2xl mx-auto">
            Where code meets creativity - explore my technical and artistic work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}
