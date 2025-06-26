import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const SkillBar = ({ name, level, color }) => {
  const barRef = useRef();
  const levelRef = useRef();

  useEffect(() => {
    gsap.from(levelRef.current, {
      width: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: barRef.current,
        start: "top 80%",
      },
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-800">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          ref={levelRef}
          className={`h-full rounded-full ${color}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, icon, skills }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
      },
      ease: "back.out(1.2)",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
            <span className="text-gray-700">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Skills() {
  const sectionRef = useRef();
  const headingRef = useRef();

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

      // Animate decorative elements
      gsap.from(".skill-wave", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        scaleX: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative wave */}
      <div className="skill-wave absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 transform origin-left"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headingRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-indigo-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Backend development focus with growing 3D capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Skill Bars */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Core Proficiencies
            </h3>
            <SkillBar name="Node.js" level={85} color="bg-indigo-500" />
            <SkillBar name="Python" level={75} color="bg-blue-500" />
            <SkillBar name="PostgreSQL" level={80} color="bg-purple-500" />
            <SkillBar name="Docker" level={70} color="bg-cyan-500" />
            <SkillBar name="Three.js" level={45} color="bg-green-500" />
            <SkillBar name="Blender" level={40} color="bg-yellow-500" />
          </div>

          {/* Right Column - Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              title="Backend"
              icon="⚙️"
              skills={[
                "REST APIs",
                "Microservices",
                "Database Design",
                "Authentication",
              ]}
            />
            <SkillCard
              title="DevOps"
              icon="🔧"
              skills={[
                "CI/CD Pipelines",
                "Cloud Deployment",
                "Containerization",
                "Monitoring",
              ]}
            />
            <SkillCard
              title="3D Basics"
              icon="🎨"
              skills={["Modeling", "Texturing", "Lighting", "Web Integration"]}
            />
            <SkillCard
              title="Other"
              icon="📚"
              skills={[
                "Git",
                "Agile Methodologies",
                "Technical Writing",
                "Mentoring",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
