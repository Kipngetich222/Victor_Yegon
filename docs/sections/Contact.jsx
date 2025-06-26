import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const sectionRef = useRef();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animation setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-element", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual email integration)
    setTimeout(() => {
      const mailtoLink = `mailto:your.email@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AReply to: ${formData.email}`;
      window.location.href = mailtoLink;

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/victor-yegoo/",
      icon: "👔",
    },
    { name: "GitHub", url: "https://github.com/Kipngetich222", icon: "💻" },
    { name: "WhatsApp", url: "https://wa.me/+254759213531", icon: "💬" },
    { name: "Twitter", url: "https://twitter.com/victoryegon222", icon: "🐦" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-500 contact-element"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 contact-element">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-white p-8 rounded-xl shadow-md contact-element"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="contact-element">
            <div className="bg-white p-8 rounded-xl shadow-md h-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Connect With Me
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Email Directly
                  </h4>
                  <a
                    href="mailto:your.email@gmail.com"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    victoryegon@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Social Profiles
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-2xl mr-3">{social.icon}</span>
                        <span>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Availability
                  </h4>
                  <p className="text-gray-600">
                    I'm currently available for freelance work and
                    collaborations. Typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
