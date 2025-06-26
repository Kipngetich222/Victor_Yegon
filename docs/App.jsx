// App.jsx
import Header from './components/Header';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from "./sections/Experiences";
import Contact from './sections/Contact';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-20">
        <About id="about" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />

        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
}

export default App;