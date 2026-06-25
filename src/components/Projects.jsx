export function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600",
      desc: "Modern shopping website built using React JS.",
    },

    {
      title: "YouTube Clone",
      image:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800",
      desc: "Video streaming platform using React.",
    },

    {
      title: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      desc: "Personal portfolio showcasing skills and projects.",
    },
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
        My Projects
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              width: "320px",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>{project.title}</h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                }}
              >
                {project.desc}
              </p>

              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg,#6366F1,#8B5CF6)",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}