// App.jsx
import {
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "serif" }}>
      <Header />

      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "url('https://www.roxburylatin.org/wp-content/uploads/2022/09/RL-Campus.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          position: "relative",
        }}
      >
        <div
          className="p-4 text-white"
          style={{
            backgroundColor: "#8B1C1C",
            position: "absolute",
            right: "2rem",
            top: "6rem",
            maxWidth: "400px",
          }}
        >
          <p>
            Here scholarly striving is celebrated, a boy’s character formation is
            paramount, and an intentionally intimate community helps to ensure
            the forging of sustaining relationships among the boys and between
            boys and teachers.
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <Container className="my-5">
        <h2 className="text-danger">Welcome to Roxbury Latin</h2>
        <p className="mt-3">
          Thank you for your interest in The Roxbury Latin School. Each year, we
          seek to admit boys who will thrive in a challenging, rewarding, and
          supportive environment that emphasizes character development, academic

        </p>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

