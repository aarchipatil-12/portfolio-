import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

function ProjectsPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#0F172A,#1E1B4B,#312E81)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default ProjectsPage;