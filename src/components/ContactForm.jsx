export function ContactForm() {
  return (
    <section
      style={{
        padding: "80px 20px",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "40px",
        }}
      >
        Contact Me
      </h2>

      <form
        style={{
          maxWidth: "700px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          background: "rgba(255,255,255,0.08)",
          padding: "30px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "none",
          }}
        ></textarea>

        <button
          style={{
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            background:
              "linear-gradient(135deg,#6366F1,#8B5CF6)",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}