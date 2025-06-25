// // components/About.jsx
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// // 3D Model Component
// function Model() {
//   const { scene } = useGLTF("/teamugblend.glb");
//   return <primitive object={scene} scale={1.6} position={[0, -2.2, 0]} />;
// }

// function About() {
//   const textRef = useRef(null);
//   const modelRef = useRef(null);
//   const photoRef = useRef(null);

//   useEffect(() => {
//     // Text animation
//     if (textRef.current?.children) {
//       gsap.fromTo(
//         textRef.current.children,
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power3.out",
//           delay: 0.2,
//         }
//       );
//     }

//     // 3D Model animation
//     gsap.fromTo(
//       modelRef.current,
//       { scale: 0.85, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1.2,
//         ease: "power2.out",
//         delay: 0.6,
//       }
//     );

//     // Photo animation
//     gsap.fromTo(
//       photoRef.current,
//       { y: 30, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         ease: "power2.out",
//         delay: 0.8,
//       }
//     );
//   }, []);

//   return (
//     <section
//       id="about"
//       className="min-h-screen bg-white pt-8 pb-20 flex items-start text-black"
//     >
//       <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[calc(100vh-4rem)]">
//         {/* Left: Text Content */}
//         <div
//           ref={textRef}
//           className="md:w-1/2 max-w-xl h-full flex flex-col justify-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
//             Hi, I'm <span className="text-indigo-600">Victor</span>
//             <br />
//             <span className="text-2xl font-semibold text-gray-800">
//               Software Developer
//             </span>
//           </h1>
//           <p className="text-lg text-gray-800 leading-relaxed mb-4">
//             I specialize in backend development with expertise in building
//             scalable systems and APIs.
//           </p>
//           <p className="text-lg text-gray-800 leading-relaxed mb-6">
//             As a passionate 3D artist, I bridge the gap between technology and
//             creative visualization.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition shadow-md">
//               View My Work
//             </button>
//             <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition shadow-sm">
//               Download CV
//             </button>
//           </div>
//         </div>

//         {/* Right: Photo + 3D Model */}
//         <div className="md:w-1/2 flex flex-col items-center space-y-12">
//           {/* Animated Glow Profile Photo with Hover Card */}
//           <div className="relative w-56 h-56 md:w-64 md:h-64 group">
//             <div className="absolute inset-0 rounded-full glow-ring z-0"></div>

//             <div
//               ref={photoRef}
//               className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-white"
//             >
//               <img
//                 src="/myphoto.jpg"
//                 alt="Victor"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Hover Card */}
//             <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white text-black rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-500 z-20">
//               <h3 className="text-lg font-bold text-indigo-600 mb-1">
//                 Meet Victor
//               </h3>
//               <p className="text-sm text-gray-700">
//                 Software developer & 3D artist — building elegant, efficient
//                 systems that blend code and creativity.
//               </p>
//             </div>
//           </div>

//           {/* 3D Model Canvas (no background/container border) */}
//           <div ref={modelRef} className="w-full h-[24rem] relative z-0">
//             <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
//               <ambientLight intensity={1.5} />
//               <directionalLight position={[2, 2, 2]} intensity={1.8} />
//               <pointLight position={[-10, -10, -10]} intensity={1} />
//               <Environment preset="sunset" />
//               <Model />
//               <OrbitControls
//                 enableZoom={false}
//                 autoRotate
//                 autoRotateSpeed={1.5}
//                 minPolarAngle={Math.PI / 4}
//                 maxPolarAngle={Math.PI / 2}
//               />
//             </Canvas>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// 3D Model Component
function Model() {
  const { scene } = useGLTF("/teamugblend.glb");
  return <primitive object={scene} scale={1.3} position={[0, -1.8, 0]} />;
}

function About() {
  const textRef = useRef(null);
  const modelRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    if (textRef.current?.children) {
      gsap.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }

    gsap.fromTo(
      modelRef.current,
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.6,
      }
    );

    gsap.fromTo(
      photoRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.8,
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-white flex items-center text-black"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left: Text */}
        <div ref={textRef} className="md:w-1/2 max-w-xl pt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
            Hi, I'm <span className="text-indigo-600">Victor</span>
            <br />
            <span className="text-2xl font-semibold text-gray-800">
              Software Developer
            </span>
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            I specialize in backend development with expertise in building
            scalable systems and APIs.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            As a passionate 3D artist, I bridge the gap between technology and
            creative visualization.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition shadow-md">
              View My Work
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition shadow-sm">
              Download CV
            </button>
          </div>
        </div>

        {/* Right: Profile + 3D */}
        <div className="md:w-1/2 flex flex-col items-center space-y-8">
          {/* Hover Photo */}
          <div className="relative w-48 h-48 group">
            <div className="absolute inset-0 rounded-full glow-ring z-0"></div>
            <div
              ref={photoRef}
              className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-white"
            >
              <img
                src="/myphoto.jpg"
                alt="Victor"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Hover Card */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white text-black rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-500 z-20">
              <h3 className="text-lg font-bold text-indigo-600 mb-1">
                Meet Victor
              </h3>
              <p className="text-sm text-gray-700">
                Software developer & 3D artist — building elegant, efficient
                systems that blend code and creativity.
              </p>
            </div>
          </div>

          {/* 3D Model */}
          <div ref={modelRef} className="w-full h-[20rem] relative z-0">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[2, 2, 2]} intensity={1.8} />
              <pointLight position={[-10, -10, -10]} intensity={1} />
              <Environment preset="sunset" />
              <Model />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.5}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
