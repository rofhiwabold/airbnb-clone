import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "80px",
            color: "#ff385c",
            marginBottom: "10px",
          }}
        >
          404
        </h1>

        <h2>Page Not Found</h2>

        <p style={{ color: "#666", marginBottom: "25px" }}>
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          style={{
            background: "#ff385c",
            color: "white",
            padding: "12px 25px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;