import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};
const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

const courses = [
  {
    title: "CLAT Foundation Batch 2026",
    overview: "A comprehensive 12-month program for Class 11th & 12th students, covering all CLAT subjects with live classes, mentorship, and full-length mocks.",
    features: [
      "Live Interactive Classes",
      "Personal Mentorship",
      "Full-Length Mocks & Analysis",
      "Doubt Solving Sessions",
      "Study Material & Notes",
      "Weekly Progress Tracking",
      "Peer Group Discussions",
      "Current Affairs & GK Modules",
    ],
    eligibility: "Class 11th & 12th students or anyone preparing for CLAT 2026.",
    duration: "12 Months",
    cta: "Book Foundation Batch",
    icon: "🎓",
    badge: "Most Popular",
    mentor: {
      name: "Aman S.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      handle: "aman_clat",
      status: "Lead Mentor",
    },
  },
  {
    title: "CLAT Crash Course 2026",
    overview: "An intensive 3-month fast-track batch for last-minute CLAT prep. Includes 2 classes per subject, rapid revision, and mentorship.",
    features: [
      "2 Classes per Subject",
      "Personal Mentorship",
      "Rapid Revision",
      "Mocks & Analysis",
      "Doubt Sessions",
      "Starts 15th July 2024",
      "Strategy Sessions",
      "Performance Analytics",
    ],
    eligibility: "Anyone targeting CLAT 2026 who wants a quick, effective revision.",
    duration: "3 Months",
    cta: "Book Crash Course",
    icon: "⚡️",
    badge: "Fast Track",
    mentor: {
      name: "Rahul T.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      handle: "rahul_crash",
      status: "Crash Course Expert",
    },
  },
  {
    title: "CLAT Target Batch 2026",
    overview: "A focused 6-month batch for repeaters and serious aspirants, with advanced practice, strategy sessions, and analytics.",
    features: [
      "Advanced Practice",
      "Strategy Sessions",
      "Performance Analytics",
      "Mentorship",
      "Mocks & Feedback",
      "Peer Group Discussions",
      "Current Affairs & GK",
      "Doubt Solving Sessions",
    ],
    eligibility: "Repeaters or those who want to maximize their CLAT score.",
    duration: "6 Months",
    cta: "Book Target Batch",
    icon: "🎯",
    badge: "For Repeaters",
    mentor: {
      name: "Priya K.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      handle: "priya_clat",
      status: "Senior Mentor",
    },
  },
  {
    title: "AILET & SLAT Booster Batch",
    overview: "A 4-month booster program for AILET, SLAT, and other law entrance exams. Includes mocks, revision, and expert guidance.",
    features: [
      "AILET/SLAT Focused Classes",
      "Expert Faculty",
      "Full-Length Mocks",
      "Rapid Revision",
      "Doubt Sessions",
      "Study Material",
      "Exam Strategy Workshops",
    ],
    eligibility: "Aspirants targeting AILET, SLAT, and other law exams.",
    duration: "4 Months",
    cta: "Book Booster Batch",
    icon: "🚀",
    badge: "Booster",
    mentor: {
      name: "Simran P.",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
      handle: "simran_booster",
      status: "Booster Batch Mentor",
    },
  },
];

function InquiryForm({ course, onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onSuccess();
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-3xl mb-2">✅</div>
        <div className="text-lg font-bold text-yellow-400">Thank you! We'll contact you soon.</div>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="px-4 py-2 rounded-lg border border-gray-800 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="px-4 py-2 rounded-lg border border-gray-800 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        className="px-4 py-2 rounded-lg border border-gray-800 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="course"
        value={form.course}
        readOnly
        className="px-4 py-2 rounded-lg border border-gray-800 bg-gray-900 text-gray-400 cursor-not-allowed"
      />
      <button
        type="submit"
        className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow hover:bg-yellow-300 transition-transform"
      >
        Submit Inquiry
      </button>
    </form>
  );
}

function injectCourseSchema() {
  const scriptId = "course-schema-jsonld";
  if (document.getElementById(scriptId)) return;
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((c, i) => ({
      "@type": "Course",
      "position": i + 1,
      "name": c.title,
      "description": c.overview,
      "provider": {
        "@type": "Organization",
        "name": "CLAT NLTI",
        "sameAs": "https://www.clatnlti.com/"
      }
    }))
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = scriptId;
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

export default function Courses() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");

  useEffect(() => {
    document.title = "CLAT Courses | CLAT NLTI";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Explore all CLAT courses, crash courses, mentorship, and more at CLAT NLTI. Find the perfect batch for your law entrance prep.");
    injectCourseSchema();
  }, []);

  const openModal = (course) => {
    setModalCourse(course);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalCourse("");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white py-20 px-4 transition-colors duration-500">
      <Modal isOpen={modalOpen} onClose={closeModal} title={`Inquiry for ${modalCourse}`}>
        <InquiryForm course={modalCourse} onSuccess={closeModal} />
      </Modal>
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <img src="/logo.png" alt="CLAT NLTI Logo" className="w-16 h-16 rounded-full shadow-lg" />
        <h1 className="text-5xl font-extrabold text-yellow-400 tracking-tight">
          Our Premium CLAT Courses
        </h1>
      </motion.div>
      <motion.p
        className="text-xl text-left text-gray-700 dark:text-gray-200 mb-16 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", duration: 0.8 }}
      >
        Choose the perfect batch for your law entrance journey. All courses include live classes, mentorship, mocks, and more!
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-10"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        {courses.map((course, idx) => (
          <motion.div
            key={course.title}
            variants={fadeInUp}
            className="relative flex flex-col items-stretch bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-2xl max-w-sm w-full p-7 border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-105 focus-within:scale-105"
            tabIndex={0}
          >
            {/* Badge */}
            {course.badge && (
              <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider animate-bounce">
                {course.badge}
              </span>
            )}
            {/* Icon */}
            <div className="text-4xl mb-2 text-yellow-400">{course.icon}</div>
            {/* Title */}
            <h2 className="text-2xl font-extrabold mb-2 text-yellow-500">{course.title}</h2>
            {/* Mentor */}
            <div className="flex items-center gap-3 mb-3">
              <img src={course.mentor.avatar} alt={course.mentor.name} className="w-10 h-10 rounded-full border-2 border-yellow-400" />
              <div>
                <div className="font-bold text-sm text-black dark:text-yellow-300">{course.mentor.name}</div>
                <div className="text-xs text-gray-500">{course.mentor.status}</div>
              </div>
            </div>
            {/* Overview */}
            <p className="text-gray-700 dark:text-gray-200 mb-4">{course.overview}</p>
            {/* Features */}
            <ul className="mb-4 text-gray-800 dark:text-gray-100 text-base list-disc pl-5 grid grid-cols-1 gap-1">
              {course.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            {/* Eligibility & Duration */}
            <div className="mb-2 w-full flex flex-col items-start">
              <span className="block text-xs font-bold text-yellow-400 mb-1">Eligibility:</span>
              <span className="block text-sm text-gray-700 dark:text-gray-200 mb-2">{course.eligibility}</span>
              <span className="block text-xs font-bold text-yellow-400 mb-1">Duration:</span>
              <span className="block text-sm text-gray-700 dark:text-gray-200 mb-2">{course.duration}</span>
            </div>
            {/* CTA */}
            <button
              className="mt-auto bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow hover:bg-yellow-300 focus:bg-yellow-500 focus:outline-none transition"
              onClick={() => openModal(course.title)}
              tabIndex={0}
            >
              {course.cta}
            </button>
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </div>
  );
}
