import { Navbar } from "../components/Navbar";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

function Contact() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#0F172A,#1E1B4B,#312E81)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;