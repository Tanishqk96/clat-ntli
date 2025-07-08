import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white px-4">
      <img src="/logo.png" alt="CLAT NLTI Logo" className="w-24 h-24 rounded-full shadow-2xl mb-8" />
      <h1 className="text-7xl font-extrabold text-yellow-400 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
        Oops! The page you are looking for does not exist or has been moved.<br />
        Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition text-lg"
      >
        Go to Home
      </Link>
    </div>
  );
} 