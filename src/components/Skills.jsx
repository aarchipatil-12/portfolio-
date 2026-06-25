export function Skills() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React JS", icon: "⚛️" },
    { name: "GitHub", icon: "🐙" },
    { name: "Supabase", icon: "🟢" },
    { name: " Web Design", icon: "📱" },
    { name: "C Programming", icon: "💻" },
  ];

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
        My Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ fontSize: "40px" }}>
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}