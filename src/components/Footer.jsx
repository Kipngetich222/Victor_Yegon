const Footer = () => {
  return (
    <footer className="bg-gray-600 rounded-xl  text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left: Branding */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-500">victor.dev</h2>
          <p className="text-sm text-gray-400 mt-2">
            Blending code & creativity to build future-ready systems.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/cv.pdf" className="hover:text-white transition">
                Download CV
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact/Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              Email:{" "}
              <a href="mailto:victor@example.com" className="hover:text-white">
                victoryegon@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/victor-yegoo/"
                className="hover:text-white"
              >
                victor
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/Kipngetich222"
                className="hover:text-white"
              >
                github.com/victor
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Victor Yegon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
