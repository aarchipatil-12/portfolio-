import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "28px",
        }}
      >
        Aarchi Patil<span style={{ color: "#8B5CF6" }}></span>
      </h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>

        <Link
          to="/projects"
          style={{ color: "white", textDecoration: "none" }}
        >
          Projects
        </Link>

        <Link
          to="/contact"
          style={{ color: "white", textDecoration: "none" }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}