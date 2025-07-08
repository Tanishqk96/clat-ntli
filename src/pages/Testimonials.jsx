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

const testimonials = [
  {
    name: "Aman S.",
    course: "CLAT Crash Course 2024",
    quote: "The crash course was a game-changer! The mentors are amazing and the mocks really helped me improve.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    highlight: true,
  },
  {
    name: "Priya K.",
    course: "CLAT Foundation Batch 2023",
    quote: "Loved the live classes and personal mentorship. Highly recommend to all CLAT aspirants!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    highlight: false,
  },
  {
    name: "Rahul T.",
    course: "Target Batch 2023",
    quote: "The strategy sessions and analytics gave me the edge I needed. Thank you NLTI!",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    highlight: false,
  },
  {
    name: "Simran P.",
    course: "CLAT Crash Course 2023",
    quote: "Mocks, mentorship, and the peer group made all the difference. I cracked CLAT!",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
    highlight: true,
  },
  {
    name: "Vikram S.",
    course: "AILET Booster 2024",
    quote: "The AILET booster batch was focused and result-oriented. The faculty's dedication is unmatched.",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
    highlight: false,
  },
  {
    name: "Megha R.",
    course: "SLAT Fast Track 2024",
    quote: "I loved the fast-paced learning and the constant support from mentors. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    highlight: false,
  },
  {
    name: "Arjun M.",
    course: "CLAT Foundation Batch 2022",
    quote: "The foundation batch built my concepts from scratch. The study material is top-notch.",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    highlight: false,
  },
  {
    name: "Sneha D.",
    course: "Target Batch 2023",
    quote: "Personal mentorship and regular mocks made all the difference. Thank you for the guidance!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    highlight: false,
  },
  {
    name: "Rohit K.",
    course: "CLAT Crash Course 2023",
    quote: "The crash course was intense but effective. I felt confident on exam day!",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
    highlight: false,
  }
];

export default function Testimonials() {
  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white py-20 px-4 transition-colors duration-500">
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <img src="/logo.png" alt="CLAT NLTI Logo" className="w-16 h-16 rounded-full shadow-lg" />
        <h1 className="text-5xl font-extrabold text-yellow-400 tracking-tight">
          Student Testimonials
        </h1>
      </motion.div>
      <motion.p
        className="text-xl text-left text-gray-700 dark:text-gray-200 mb-16 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", duration: 0.8 }}
      >
        Hear from our successful students and top performers.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            variants={fadeInUp}
            className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 ${t.highlight ? "ring-2 ring-yellow-400" : ""}`}
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow mb-4 object-cover"
            />
            <blockquote className="italic text-lg text-gray-700 dark:text-gray-200 mb-4">“{t.quote}”</blockquote>
            <div className="font-bold text-yellow-500 text-xl mb-1">{t.name}</div>
            <div className="text-gray-500 text-sm">{t.course}</div>
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </div>
  );
} 