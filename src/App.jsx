import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 transition-all md:ml-64">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App; 