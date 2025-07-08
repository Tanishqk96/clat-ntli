import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black dark:bg-black text-white border-t border-gray-800 py-16 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & About */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="CLAT NLTI Logo" className="w-12 h-12 rounded-full shadow-lg" />
              <span className="text-2xl font-extrabold tracking-widest text-yellow-400">CLAT NLTI</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Premier CLAT coaching institute with expert mentors, comprehensive study material, and proven track record of success.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube" className="hover:text-yellow-400 transition text-xl"><i className="fab fa-youtube"></i></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400 transition text-xl"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <a href="/" className="text-gray-300 hover:text-yellow-400 transition font-medium">Home</a>
              <a href="/courses" className="text-gray-300 hover:text-yellow-400 transition font-medium">All Courses</a>
              <a href="/crash-course" className="text-gray-300 hover:text-yellow-400 transition font-medium">Crash Course</a>
              <a href="/testimonials" className="text-gray-300 hover:text-yellow-400 transition font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition font-medium">Contact Us</a>
              <a href="#faq" className="text-gray-300 hover:text-yellow-400 transition font-medium">FAQ</a>
            </nav>
          </div>

          {/* Course Highlights */}
          <div className="flex flex-col items-start">
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Our Courses</h3>
            <div className="flex flex-col gap-3">
              <div className="text-gray-300 text-sm">
                <span className="font-semibold text-yellow-400">Foundation Batch</span>
                <p className="text-gray-400">12-month comprehensive program</p>
              </div>
              <div className="text-gray-300 text-sm">
                <span className="font-semibold text-yellow-400">Crash Course</span>
                <p className="text-gray-400">3-month intensive preparation</p>
              </div>
              <div className="text-gray-300 text-sm">
                <span className="font-semibold text-yellow-400">Target Batch</span>
                <p className="text-gray-400">6-month focused program</p>
              </div>
              <div className="text-gray-300 text-sm">
                <span className="font-semibold text-yellow-400">AILET & SLAT</span>
                <p className="text-gray-400">Specialized coaching</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start">
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-yellow-400"></i>
                <div>
                  <a href="tel:+919999999999" className="text-gray-300 hover:text-yellow-400 transition text-sm">+91 99999 99999</a>
                  <p className="text-gray-400 text-xs">Mon-Sat: 9AM-8PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-yellow-400"></i>
                <div>
                  <a href="mailto:info@clatnlti.com" className="text-gray-300 hover:text-yellow-400 transition text-sm">info@clatnlti.com</a>
                  <p className="text-gray-400 text-xs">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-yellow-400"></i>
                <div>
                  <p className="text-gray-300 text-sm">Delhi, India</p>
                  <p className="text-gray-400 text-xs">Main Office</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-clock text-yellow-400"></i>
                <div>
                  <p className="text-gray-300 text-sm">Live Classes</p>
                  <p className="text-gray-400 text-xs">Daily 6PM-9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Success Stats */}
            <div className="text-center">
              <h4 className="text-yellow-400 font-bold text-lg mb-2">Success Rate</h4>
              <p className="text-3xl font-bold text-white">95%</p>
              <p className="text-gray-400 text-sm">Students placed in top NLUs</p>
            </div>
            <div className="text-center">
              <h4 className="text-yellow-400 font-bold text-lg mb-2">Expert Mentors</h4>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-gray-400 text-sm">Experienced faculty members</p>
            </div>
            <div className="text-center">
              <h4 className="text-yellow-400 font-bold text-lg mb-2">Happy Students</h4>
              <p className="text-3xl font-bold text-white">1000+</p>
              <p className="text-gray-400 text-sm">Successfully guided</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} CLAT NLTI. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Refund Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Disclaimer</a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-xs">
            <p>CLAT NLTI is not affiliated with any official CLAT conducting body. Results may vary based on individual effort and dedication.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 