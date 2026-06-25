import { Navbar } from "../components/Navbar";
import { AboutSection } from "../components/AboutSection";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";

function About() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#0F172A,#1E1B4B,#312E81)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <AboutSection />
      <Education />
      <Footer />
    </div>
  );
}

export default About;