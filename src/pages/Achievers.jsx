import React from "react";
import Footer from "../components/Footer";

const achievers = [
  {
    name: "Riya Sharma",
    year: "2024",
    rank: "AIR 5 (CLAT)",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    info: "Secured a top 5 rank in CLAT 2024. Known for her dedication and consistent hard work. Now studying at NLSIU Bangalore.",
  },
  {
    name: "Aman Verma",
    year: "2023",
    rank: "AIR 12 (AILET)",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    info: "Excelled in AILET 2023 with a disciplined study plan. Passionate about constitutional law.",
  },
  {
    name: "Sneha Patel",
    year: "2024",
    rank: "AIR 18 (CLAT)",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    info: "Balanced school and CLAT prep, showing that smart work pays off. Now at NALSAR Hyderabad.",
  },
  {
    name: "Rahul Singh",
    year: "2023",
    rank: "AIR 25 (SLAT)",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    info: "Focused on mock tests and time management. Admitted to Symbiosis Law School, Pune.",
  },
  {
    name: "Megha Joshi",
    year: "2022",
    rank: "AIR 9 (CLAT)",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
    info: "Avid reader and quizzer. Her analytical skills helped her crack CLAT with a single-minded focus.",
  },
  {
    name: "Arjun Rao",
    year: "2022",
    rank: "AIR 15 (AILET)",
    img: "https://randomuser.me/api/portraits/men/53.jpg",
    info: "Transitioned from science to law and excelled. Now a moot court enthusiast at NLU Delhi.",
  },
  // More achievers
  {
    name: "Priya Mehta",
    year: "2023",
    rank: "AIR 22 (CLAT)",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    info: "Managed school, sports, and CLAT prep. Her time management skills were key to her success.",
  },
  {
    name: "Karan Gupta",
    year: "2024",
    rank: "AIR 30 (AILET)",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
    info: "Focused on current affairs and legal reasoning. Now at NLU Jodhpur.",
  },
  {
    name: "Simran Kaur",
    year: "2022",
    rank: "AIR 11 (SLAT)",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
    info: "Excelled in SLAT with a strategic approach to mocks and revision. Loves debating and public speaking.",
  },
  {
    name: "Aditya Rao",
    year: "2023",
    rank: "AIR 19 (CLAT)",
    img: "https://randomuser.me/api/portraits/men/80.jpg",
    info: "Known for his analytical skills and calm under pressure. Now at GNLU Gandhinagar.",
  },
  {
    name: "Neha Sinha",
    year: "2024",
    rank: "AIR 8 (AILET)",
    img: "https://randomuser.me/api/portraits/women/90.jpg",
    info: "Her focus on fundamentals and regular practice tests helped her secure a top AILET rank.",
  },
  {
    name: "Rohit Jain",
    year: "2022",
    rank: "AIR 14 (CLAT)",
    img: "https://randomuser.me/api/portraits/men/90.jpg",
    info: "Balanced academics and extracurriculars. Now a student leader at NLU Kolkata.",
  },
];

export default function Achievers() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white py-20 px-4 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <img src="/logo.png" alt="CLAT NLTI Logo" className="w-14 h-14 rounded-full shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 tracking-tight">Our Achievers</h1>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-12 max-w-2xl">
          Meet our top achievers who have secured outstanding ranks in CLAT, AILET, and SLAT. We are proud of their hard work and success!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {achievers.map((a) => (
            <div key={a.name} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <img src={a.img} alt={a.name} className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400 shadow mb-4" />
              <div className="font-extrabold text-xl text-yellow-500 mb-1">{a.name}</div>
              <div className="text-gray-700 dark:text-gray-200 text-base font-medium mb-1">{a.rank}</div>
              <div className="text-gray-500 text-sm mb-2">Batch {a.year}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm italic">{a.info}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
} 