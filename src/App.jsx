import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav.jsx";
import Footer from "./components/footer.jsx"; 
import Contact from "./components/contact.jsx"; 
import ChatBox from "./components/chat.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx";
import Resume from "./components/resume.jsx";
function App() {
  return (
    <div className="App bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <ChatBox />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
