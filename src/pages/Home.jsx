import React, { useState } from "react";
import { motion } from "framer-motion";
import GlassyAlert from "../components/GlassyAlert";
import SplashCursor from "../components/SplashCursor";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

// Animation variants
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

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const demoVideos = [
    {
      title: "Demo Class 1",
      src: "https://www.youtube.com/embed/UUwij5iQ6EE",
      thumb: "https://img.youtube.com/vi/UUwij5iQ6EE/hqdefault.jpg",
    },
    {
      title: "Demo Class 2",
      src: "https://www.youtube.com/embed/nALnZml6e34",
      thumb: "https://img.youtube.com/vi/nALnZml6e34/hqdefault.jpg",
    },
  ];

  // New: More Courses Section Data
  const moreCourses = [
    {
      title: "AILET 2026 Complete Course",
      description:
        "Comprehensive preparation for AILET with live classes, mocks, and expert mentorship. Covers all sections with updated material.",
      price: "₹11,999",
      oldPrice: "₹16,999",
      startDate: "1st August 2025",
      highlights: [
        "Live & Recorded Classes",
        "Personal Mentorship",
        "Sectional & Full-Length Mocks",
        "Latest Study Material",
        "Doubt Solving Sessions",
      ],
    },
    {
      title: "SLAT 2026 Fast Track",
      description:
        "Fast-track course for Symbiosis Law Admission Test. Focus on speed, accuracy, and exam strategies.",
      price: "₹7,999",
      oldPrice: "₹12,999",
      startDate: "15th September 2025",
      highlights: [
        "Crash Course Format",
        "Expert Faculty",
        "Mock Test Series",
        "Study Notes",
        "24x7 Doubt Support",
      ],
    },
    {
      title: "CUET Law 2026 Foundation",
      description:
        "Early starter program for CUET Law aspirants. Build strong fundamentals and exam confidence.",
      price: "₹8,499",
      oldPrice: "₹13,499",
      startDate: "10th October 2025",
      highlights: [
        "Foundation to Advanced",
        "Concept Classes",
        "Practice Sheets",
        "Mentor Guidance",
        "Weekly Assessments",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white transition-colors duration-500 font-sans">
      <SplashCursor />
      <GlassyAlert />

      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-32 px-8 md:px-24 min-h-[60vh] overflow-hidden"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <motion.div
          className="relative z-10 mb-8"
          variants={fadeInUp}
        >
          <img src="/logo.png" alt="CLAT NLTI Logo" className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-2xl mx-auto mb-6" />
        </motion.div>
        <motion.h1
          className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8 text-black dark:text-white"
          variants={fadeInUp}
        >
          Crack CLAT 2026<br />
          <span className="text-yellow-400 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-yellow-400 pr-2">
            with the Best Mentors
          </span>
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-8 mb-12 z-10">
          {/* Mentor Cards with Photos */}
          {[
            {
              name: "Aman S.",
              title: "Lead CLAT Mentor",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Priya K.",
              title: "Senior Mentor",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Rahul T.",
              title: "Crash Course Mentor",
              img: "https://randomuser.me/api/portraits/men/45.jpg",
            },
          ].map((mentor) => (
            <div
              key={mentor.name}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center justify-center min-w-[220px] max-w-xs transition-transform duration-300 hover:scale-105"
            >
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400 shadow mb-4"
              />
              <div className="font-extrabold text-2xl text-yellow-500 mb-2">{mentor.name}</div>
              <div className="text-gray-700 dark:text-gray-200 text-base font-medium">{mentor.title}</div>
            </div>
          ))}
        </div>
        <motion.p
          className="relative z-10 text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl"
          variants={fadeInUp}
        >
          Join our new <span className="font-bold text-yellow-400 underline underline-offset-2">Crash Course Batch</span> and boost your law entrance prep with top-notch guidance, live classes, and more!
        </motion.p>
        <motion.a
          href="#crash-course"
          className="relative z-10 inline-block bg-yellow-400 text-black font-bold px-10 py-4 rounded-full shadow-xl hover:bg-yellow-300 focus:bg-yellow-500 focus:outline-none transition text-lg ring-2 ring-yellow-300"
          variants={fadeInUp}
          tabIndex={0}
        >
          Explore Crash Course
        </motion.a>
      </motion.section>

      {/* Crash Course Batch Section */}
      <motion.section
        id="crash-course"
        className="w-full flex justify-center py-20 px-4 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-950"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div
          className="bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-10 relative overflow-hidden border border-gray-200 dark:border-gray-800 w-full max-w-4xl"
          variants={fadeInUp}
        >
          <motion.span
            className="absolute top-0 right-0 bg-yellow-400 text-black px-6 py-2 rounded-bl-3xl font-bold text-base animate-bounce shadow-lg"
            variants={fadeInUp}
          >
            Limited Time Offer!
          </motion.span>
          <motion.h2 className="text-3xl font-bold mb-2 text-black dark:text-yellow-400" variants={fadeInUp}>
            CLAT Crash Course 2026
          </motion.h2>
          <div className="mb-4">
            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full font-mono text-sm tracking-wider animate-pulse">
              Starts in: <span id="countdown-timer">08 days 12:34:56</span>
            </span>
          </div>
          <motion.p className="mb-6 text-gray-700 dark:text-gray-300 text-lg" variants={fadeInUp}>
            Fast-track your CLAT prep with our intensive crash course. <span className="font-semibold text-red-500">Limited seats only!</span>
          </motion.p>
          <motion.ul className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-800 dark:text-gray-100 text-lg" variants={stagger}>
            <motion.li variants={fadeInUp}>✅ 2 <span className="font-semibold">Live Classes</span> per Subject</motion.li>
            <motion.li variants={fadeInUp}>✅ <span className="font-semibold">Personal Mentorship</span></motion.li>
            <motion.li variants={fadeInUp}>✅ <span className="font-semibold">Full-Length Mocks</span> & Analysis</motion.li>
            <motion.li variants={fadeInUp}>✅ <span className="font-semibold">Doubt Solving Sessions</span></motion.li>
            <motion.li variants={fadeInUp}>✅ <span className="font-semibold">Study Material</span> & Notes</motion.li>
            <motion.li variants={fadeInUp}>✅ <span className="font-semibold">Schedule:</span> Starts 15th July 2024</motion.li>
          </motion.ul>
          <motion.div className="flex flex-col md:flex-row md:items-center gap-6" variants={fadeInUp}>
            <span className="text-3xl font-extrabold text-yellow-400">
              ₹9,999 <span className="text-lg font-normal line-through text-gray-400 ml-2">₹14,999</span>
            </span>
            <a
              href="#inquiry"
              className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 focus:bg-yellow-500 focus:outline-none transition ring-2 ring-yellow-300"
              tabIndex={0}
            >
              Book Now
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* More Courses Section */}
      <motion.section
        id="more-courses"
        className="w-full flex flex-col items-center py-20 px-4 bg-gradient-to-br from-white via-yellow-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-950"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-black dark:text-yellow-400"
          variants={fadeInUp}
        >
          More Law Prep Courses
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-10 w-full">
          {moreCourses.map((course, idx) => (
            <motion.div
              key={course.title}
              className="bg-white/90 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-sm flex flex-col items-start transition-transform duration-300 hover:scale-105 focus-within:scale-105 border border-gray-200 dark:border-gray-800"
              variants={fadeInUp}
              tabIndex={0}
            >
              <h3 className="text-2xl font-bold mb-2 text-yellow-500">{course.title}</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">{course.description}</p>
              <ul className="mb-4 text-gray-800 dark:text-gray-100 text-base list-disc pl-5">
                {course.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl font-extrabold text-yellow-400">{course.price}</span>
                <span className="text-base font-normal line-through text-gray-400">{course.oldPrice}</span>
              </div>
              <span className="text-sm text-gray-500 mb-4">Batch Starts: <span className="font-semibold text-yellow-600">{course.startDate}</span></span>
              <a
                href="#contact"
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300 focus:bg-yellow-500 focus:outline-none transition"
                tabIndex={0}
              >
                Enquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="w-full flex flex-col items-center py-20 px-4 bg-gradient-to-br from-yellow-50 via-white to-gray-100 dark:from-black dark:to-gray-900 border-t border-yellow-400/20"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-yellow-400">Frequently Asked Questions</h2>
        <div className="max-w-3xl w-full flex flex-col gap-6">
          {[
            {
              q: "What makes CLAT NLTI different from other coaching institutes?",
              a: "CLAT NLTI offers a luxury learning experience with top mentors, personalized mentorship, glassy UI, and a proven track record of toppers. Our batches are small, our approach is modern, and our results speak for themselves.",
            },
            {
              q: "Are there live classes or only recorded lectures?",
              a: "We offer both live interactive classes and high-quality recorded lectures for flexible learning. All live sessions are also available as recordings for revision.",
            },
            {
              q: "How do I enroll in a course or batch?",
              a: "Simply click the 'Book Now' or 'Enquire Now' button on any course, or fill out the contact form below. Our team will reach out to guide you through the process.",
            },
            {
              q: "Is there personal mentorship for every student?",
              a: "Yes! Every student gets access to personal mentorship, doubt-solving sessions, and regular progress tracking with our expert mentors.",
            },
            {
              q: "What is the refund policy?",
              a: "We offer a transparent refund policy. If you are not satisfied within the first 7 days of joining, you can request a full refund. See our terms for details.",
            },
            {
              q: "Are there scholarships or discounts?",
              a: "Yes, we offer merit-based scholarships and early-bird discounts for select batches. Contact us for current offers.",
            },
            {
              q: "Can I get a demo class before enrolling?",
              a: "Absolutely! Check out our Demo Classes section above or request a live demo via the contact form.",
            },
            {
              q: "How do I contact support?",
              a: "You can email us at info@clatnlti.com, call +91 99999 99999, or use the contact form below. Our team is available 7 days a week.",
            },
          ].map((item, idx) => (
            <FAQItem key={item.q} {...item} defaultOpen={idx === 0} />
          ))}
        </div>
      </section>

      {/* Demo Videos Section with modal pop-up */}
      <motion.section
        className="bg-white dark:bg-black py-20 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.h2 className="text-3xl font-bold text-left mb-10 text-black dark:text-yellow-400" variants={fadeInUp}>
          Demo Classes
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {demoVideos.map((video, idx) => (
            <motion.div
              key={video.title}
              className="w-full md:w-1/3 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 hover:scale-105 focus-within:scale-105 transition-transform cursor-pointer flex flex-col items-center group"
              variants={fadeInUp}
              tabIndex={0}
              onClick={() => { setActiveVideo(video); setVideoModalOpen(true); }}
              onKeyPress={e => { if (e.key === 'Enter') { setActiveVideo(video); setVideoModalOpen(true); } }}
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3">
                <img src={video.thumb} alt={video.title} className="w-full h-full object-cover rounded-xl group-hover:brightness-90 transition" loading="lazy" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-yellow-400 text-black rounded-full p-3 shadow-lg text-3xl opacity-90 group-hover:scale-110 transition-transform">▶</span>
                </span>
              </div>
              <p className="mt-1 font-semibold text-center text-gray-700 dark:text-gray-300">{video.title}</p>
            </motion.div>
          ))}
        </div>
        {/* Video Modal Pop-up */}
        <Modal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} title={activeVideo?.title}>
          {activeVideo && (
            <div className="w-full aspect-video rounded-xl overflow-hidden mb-2">
              <iframe
                className="w-full h-64 md:h-80 rounded-xl"
                src={activeVideo.src}
                title={activeVideo.title}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          )}
        </Modal>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-black dark:via-gray-900 dark:to-black py-20 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.h2 className="text-3xl font-bold text-left mb-10 text-black dark:text-yellow-400" variants={fadeInUp}>
          Student Testimonials
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-xs flex flex-col items-center hover:scale-105 focus-within:scale-105 transition-transform border border-gray-200 dark:border-gray-800"
            variants={fadeInUp}
            tabIndex={0}
          >
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aman S. - CLAT 2024 Topper" className="w-24 h-24 rounded-full mb-4 shadow-lg border-4 border-yellow-400" loading="lazy" />
            <p className="italic mb-3 text-gray-700 dark:text-gray-300 text-center">"The crash course was a game-changer! The mentors are amazing and the mocks really helped me improve."</p>
            <span className="font-bold text-yellow-400">Aman S. - CLAT 2024 Topper</span>
          </motion.div>
          <motion.div
            className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-xs flex flex-col items-center hover:scale-105 focus-within:scale-105 transition-transform border border-gray-200 dark:border-gray-800"
            variants={fadeInUp}
            tabIndex={0}
          >
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya K. - CLAT 2023" className="w-24 h-24 rounded-full mb-4 shadow-lg border-4 border-yellow-400" loading="lazy" />
            <p className="italic mb-3 text-gray-700 dark:text-gray-300 text-center">"Loved the live classes and personal mentorship. Highly recommend to all CLAT aspirants!"</p>
            <span className="font-bold text-yellow-400">Priya K. - CLAT 2023</span>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
      {/* Contact Section */}
      <motion.section
        id="contact"
        className="w-full flex justify-center py-20 px-4 bg-gradient-to-br from-yellow-50 via-white to-gray-100 dark:from-black dark:to-gray-900 border-t border-yellow-400/20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div
          className="bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-10 relative overflow-hidden border border-gray-200 dark:border-gray-800 w-full max-w-2xl"
          variants={fadeInUp}
        >
          <motion.h2 className="text-3xl font-extrabold mb-4 text-yellow-400 text-center" variants={fadeInUp}>
            Get in Touch
          </motion.h2>
          <motion.p className="mb-8 text-gray-700 dark:text-gray-200 text-lg text-center" variants={fadeInUp}>
            Have questions or want to join? Fill out the form and our team will reach out to you soon!
          </motion.p>
          <motion.form
            className="flex flex-col gap-4"
            variants={fadeInUp}
            onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you soon.'); }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow hover:bg-yellow-300 focus:bg-yellow-500 focus:outline-none transition-transform mt-2"
            >
              Send Message
            </button>
          </motion.form>
          <div className="mt-8 text-center text-gray-500 text-sm">
            <div className="mb-2">
              <span className="text-yellow-400 font-semibold">Email:</span> <a href="mailto:info@clatnlti.com" className="hover:text-yellow-400 transition">info@clatnlti.com</a>
            </div>
            <div>
              <span className="text-yellow-400 font-semibold">Phone:</span> <a href="tel:+919999999999" className="hover:text-yellow-400 transition">+91 99999 99999</a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

// FAQItem component (accordion)
function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className={`transition-all duration-300 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden ${open ? 'ring-2 ring-yellow-400' : ''}`}> 
      <button
        className="w-full flex justify-between items-center px-6 py-5 text-lg md:text-xl font-bold text-left text-white dark:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`faq-panel-${q.replace(/\s+/g, '-')}`}
      >
        <span>{q}</span>
        <span className={`ml-4 text-2xl transition-transform ${open ? 'rotate-45 text-yellow-400' : 'rotate-0 text-gray-400'}`}>+</span>
      </button>
      <div
        id={`faq-panel-${q.replace(/\s+/g, '-')}`}
        className={`px-6 pb-5 text-base md:text-lg text-gray-700 dark:text-gray-200 transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        style={{
          transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
        }}
      >
        {open && <div>{a}</div>}
      </div>
    </div>
  );
}
