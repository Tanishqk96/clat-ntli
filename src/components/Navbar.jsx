import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Crash Course", path: "/crash-course" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Our Achievers", path: "/achievers" },
];

function DarkModeToggle() {
  // Default to light mode (false)
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme-dark');
    return stored === 'true';
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-dark', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-dark', 'false');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="mt-6 md:mt-0 px-3 py-2 rounded transition-colors bg-gray-900 text-yellow-400 hover:bg-gray-800 shadow"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <span role="img" aria-label="Light mode">🌞</span>
      ) : (
        <span role="img" aria-label="Dark mode">🌙</span>
      )}
    </button>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col fixed top-0 left-0 h-full w-64 bg-black border-r border-gray-800 z-50 px-8 py-10 justify-between transition-all">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-12">
            <img src="/logo.png" alt="CLAT NLTI Logo" className="w-12 h-12 rounded-full shadow-lg" />
            <span className="text-3xl font-extrabold tracking-widest text-yellow-400">CLAT NLTI</span>
          </Link>
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-semibold tracking-wide px-2 py-1 rounded transition-colors ${isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"}`
                }
                end={item.path === "/"}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <DarkModeToggle />
          <a href="#contact" className="w-full text-center bg-yellow-400 text-black font-bold py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition">Get in touch</a>
        </div>
      </nav>
      {/* Mobile Top Nav */}
      <nav className="md:hidden flex items-center justify-between w-full bg-black px-4 py-3 fixed top-0 left-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="CLAT NLTI Logo" className="w-8 h-8 rounded-full shadow-lg" />
          <span className="text-2xl font-extrabold tracking-widest text-yellow-400">CLAT NLTI</span>
        </Link>
        <button onClick={() => setOpen((o) => !o)} className="text-yellow-400 text-3xl focus:outline-none">
          ☰
        </button>
        {open && (
          <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 flex flex-col gap-4 px-4 py-6 z-50">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-semibold tracking-wide px-2 py-1 rounded transition-colors ${isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"}`
                }
                end={item.path === "/"}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <a href="#contact" className="w-full text-center bg-yellow-400 text-black font-bold py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition mt-4">Get in touch</a>
            <DarkModeToggle />
          </div>
        )}
      </nav>
      {/* Spacer for sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0" />
      {/* Spacer for mobile nav */}
      <div className="md:hidden h-16" />
    </>
  );
};

export default Navbar; 