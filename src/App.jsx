import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Location from "./components/Location/Location";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState, useEffect, useRef } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1023);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1023);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    ["chi-siamo", "menu", "dove-siamo", "contatti"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="h-screen">
      {isMobile 
      ? <Sidebar activeSection={activeSection} setActiveSection={setActiveSection}/> 
      : <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
      }
      <Hero isMobile={isMobile} />
      
      <About />

      <Menu />

      <Location />

      <Contact />

      <Footer activeSection={activeSection} setActiveSection={setActiveSection}/>
    </main>
  )
}

export default App
