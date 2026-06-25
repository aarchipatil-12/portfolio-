import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Projects } from "../components/Projects";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

function Home() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#0F172A,#1E1B4B,#312E81)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Hero />
      <AboutSection />
      <Skills />
      <Education />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;