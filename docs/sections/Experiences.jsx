import { useEffect, useRef, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Box } from "@react-three/drei";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 3D Badge Component with error fallback
function ExperienceBadge() {
  const { scene, error } = useGLTF("/teamugblend.glb");

  if (error) {
    console.error("3D model failed to load:", error);
    return (
      <Box args={[2, 2, 2]}>
        <meshStandardMaterial color="#4F46E5" />
      </Box>
    );
  }

  return <primitive object={scene} scale={0.8} rotation={[0, 0.2, 0]} />;
}

const experiences = [
  {
    role: "Backend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Built scalable APIs, optimized database queries, and led backend architecture.",
    skills: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    icon: "💻",
  },
  {
    role: "3D Artist",
    company: "Creative Studio",
    period: "2020 - 2022",
    description:
      "Designed 3D models for games, animations, and AR/VR experiences.",
    skills: ["Blender", "Substance Painter", "Unity", "ZBrush"],
    icon: "🎨",
  },
  {
    role: "Full-Stack Intern",
    company: "Startup Labs",
    period: "2019 - 2020",
    description:
      "Developed full-stack applications and assisted in UI/UX design.",
    skills: ["React", "MongoDB", "Express", "Figma"],
    icon: "🚀",
  },
];

export default function Experience() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animation cleanup function
    const ctx = gsap.context(() => {
      // Animate experience cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false, // Set to true for debugging
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
        });
      });

      // Animate the 3D badge
      gsap.from(".experience-badge-container", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
        scale: 0.5,
        opacity: 0,
        rotationY: 180,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      });
    }, sectionRef); // Scope animations to sectionRef

    return () => ctx.revert(); // Cleanup animations
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-indigo-600">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From backend systems to 3D artistry, here's my path so far.
          </p>
        </div>

        {/* 3D Experience Badge (Floating) */}
        <div className="experience-badge-container absolute -right-20 -top-20 w-48 h-48 opacity-70 md:opacity-100">
          <Canvas>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <ExperienceBadge />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={1.5}
            />
          </Canvas>
        </div>

        {/* Timeline Experience Cards */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`exp-${index}`}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative group ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                {/* Card */}
                <div
                  className={`p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{exp.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-600 font-medium">
                        {exp.company} · {exp.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={`skill-${index}-${i}`}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className={`absolute top-6 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-md ${
                    index % 2 === 0
                      ? "md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:-translate-x-1/2"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}