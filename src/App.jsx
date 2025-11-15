import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <div className="bg-[#171d32] min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
