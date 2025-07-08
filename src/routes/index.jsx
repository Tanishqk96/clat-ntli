import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import CrashCourse from "../pages/CrashCourse";
import Testimonials from "../pages/Testimonials";
import Achievers from "../pages/Achievers";
import NotFound from "../pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/crash-course" element={<CrashCourse />} />
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/achievers" element={<Achievers />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes; 