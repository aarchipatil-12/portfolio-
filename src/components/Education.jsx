export function Education() {
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
          marginBottom: "50px",
        }}
      >
        Education
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          display: "grid",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h3>🎓 Diploma in Computer Engineering</h3>
          <p>2023 - Present</p>
          <p>Your College Name</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h3>🏫 SSC (10th)</h3>
          <p>Completed in 2023</p>
          <p>Your School Name</p>
        </div>
      </div>
    </section>
  );
}