import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const crashCourses = [
  {
    title: "CLAT Crash Course 2026",
    description: "Fast-track your CLAT preparation with our intensive crash course. Limited seats available!",
    price: "₹9,999",
    oldPrice: "₹14,999",
    features: [
      "2 Live Classes per Subject",
      "Personal Mentorship",
      "Full-Length Mocks & Analysis",
      "Doubt Solving Sessions",
      "Study Material & Notes",
      "Schedule: Starts 15th July 2024",
    ],
  },
  {
    title: "AILET Crash Course 2026",
    description: "Specialized crash course for AILET aspirants. Covers all sections with expert guidance and practice mocks.",
    price: "₹8,499",
    oldPrice: "₹12,999",
    features: [
      "Live & Recorded Classes",
      "AILET-Focused Practice",
      "Mentor Support",
      "Sectional Tests",
      "Doubt Clearing Sessions",
      "Starts 1st August 2025",
    ],
  },
  {
    title: "SLAT Fast Track 2026",
    description: "Accelerated preparation for Symbiosis Law Admission Test. Focus on speed, accuracy, and exam strategies.",
    price: "₹7,499",
    oldPrice: "₹11,999",
    features: [
      "Crash Course Format",
      "Expert Faculty",
      "Mock Test Series",
      "Study Notes",
      "24x7 Doubt Support",
      "Starts 15th September 2025",
    ],
  },
];

const faqs = [
  {
    q: "Who can join the crash courses?",
    a: "Any law aspirant preparing for CLAT, AILET, or SLAT can join. Courses are suitable for repeaters and freshers alike.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "All crash courses offer both live and recorded classes for maximum flexibility.",
  },
  {
    q: "Is there personal mentorship?",
    a: "Yes, every student gets access to personal mentorship and doubt-solving sessions.",
  },
  {
    q: "How do I enroll?",
    a: "Click the 'Book Now' button on your preferred course and fill out the inquiry form. Our team will contact you soon!",
  },
];

export default function CrashCourse() {
  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white py-20 px-4 transition-colors duration-500">
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <img src="/logo.png" alt="CLAT NLTI Logo" className="w-20 h-20 rounded-full shadow-2xl" />
      </motion.div>
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        Crash Courses for Law Entrance 2026
      </motion.h1>
      {/* Crash Course Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        {crashCourses.map((course, idx) => (
          <motion.div
            key={course.title}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-start justify-between min-h-[420px]"
          >
            <div>
              <div className="flex items-center justify-between w-full mb-2">
                <h2 className="text-2xl font-bold text-yellow-500">{course.title}</h2>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">2026</span>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-4">{course.description}</p>
              <ul className="mb-6 text-gray-800 dark:text-gray-100 text-base list-disc pl-5 grid grid-cols-1 gap-1">
                {course.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
              <span className="text-2xl font-extrabold text-yellow-400">
                {course.price} <span className="text-base font-normal line-through text-gray-400 ml-2">{course.oldPrice}</span>
              </span>
              <a
                href="#inquiry"
                className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 transition text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Inquiry Form */}
      <motion.div
        className="max-w-xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <form
          id="inquiry"
          className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg flex flex-col gap-4 border border-gray-200 dark:border-gray-800"
          onSubmit={e => { e.preventDefault(); alert('Inquiry submitted!'); }}
        >
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Quick Inquiry</h2>
          <input type="text" placeholder="Your Name" className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <input type="tel" placeholder="Your Phone" className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          <button type="submit" className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow hover:bg-yellow-300 transition-transform">Submit Inquiry</button>
        </form>
      </motion.div>
      {/* FAQ Section */}
      <motion.section
        className="max-w-4xl mx-auto mb-20"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <h2 className="text-2xl font-bold text-yellow-400 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow p-6"
            >
              <div className="font-semibold text-lg text-black dark:text-yellow-300 mb-2">{faq.q}</div>
              <div className="text-gray-700 dark:text-gray-200">{faq.a}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
} 