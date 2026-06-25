export function AboutSection() {
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
        About Me
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <p
          style={{
            lineHeight: "1.8",
            color: "#d1d5db",
            fontSize: "17px",
          }}
        >
          I am currently pursuing Diploma in Computer
          Engineering. I enjoy developing responsive websites
          using HTML, CSS, JavaScript and React JS.
          I am continuously learning new technologies and
          improving my frontend development skills.
        </p>
      </div>
    </section>
  );
}