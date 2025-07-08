import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 md:ml-64 transition-all">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App; 