// App.jsx
import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageSelector from "./assets/LanguageSelector";

function App() {
  const [showAdmission, setShowAdmission] = useState(false);

  return (
    <div style={{ fontFamily: "serif" }}>
      {/* Top utility bar */}
      <div className="d-flex justify-content-between align-items-center px-4 py-2 border-bottom small">
        <div className="d-flex gap-3">
          <a href="#">Parents</a>
          <a href="#">RL Login</a>
          <a href="#">Alumni</a>
          <a href="#">Calendar</a>
        </div>
        <Button variant="danger" size="sm">
          Inquire
        </Button>
      </div>

      {/* Main Navbar */}
      <Navbar bg="danger" variant="dark" expand="lg" className="px-4">
        <Navbar.Brand href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/3/3e/Roxbury_Latin_School_Shield.png"
            alt="logo"
            style={{ height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-3">
            <Nav.Link href="#">About</Nav.Link>

            <NavDropdown
              title="Admission"
              id="admission-dropdown"
              show={showAdmission}
              onMouseEnter={() => setShowAdmission(true)}
              onMouseLeave={() => setShowAdmission(false)}
            >
              <NavDropdown.Item href="#">Admission Events</NavDropdown.Item>
              <NavDropdown.Item href="#">Why Roxbury Latin?</NavDropdown.Item>
              <NavDropdown.Item href="#">Applying</NavDropdown.Item>
              <NavDropdown.Item href="#">Tuition & Financial Aid</NavDropdown.Item>
              <NavDropdown.Item href="#">Need-blind Enrollment</NavDropdown.Item>
              <NavDropdown.Item href="#">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#">Admission Team</NavDropdown.Item>
              <NavDropdown.Item href="#">Getting to School</NavDropdown.Item>
              <NavDropdown.Item href="#">Interactive Campus Tour</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Academics</Nav.Link>
            <Nav.Link href="#">Arts</Nav.Link>
            <Nav.Link href="#">Athletics</Nav.Link>
            <Nav.Link href="#">Student Life</Nav.Link>
            <Nav.Link href="#">Supporting RL</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
          excellence, and broad extracurricular involvement. While we commend
          boys with outstanding talent in a defined extracurricular pursuit,
          each Roxbury Latin student must be able and eager not only to meet the
          school’s high academic standards, but also be willing to commit
          himself broadly to the generalist spirit that is purposeful and alive
          on our campus. Boys must show their desire to stretch their interests
          and engage fully in the program. We actively strive for racial,
          ethnic, religious, and socioeconomic diversity in our student body and
          admit boys of different backgrounds. That rich diversity—of
          backgrounds, experiences, and perspectives—enhances the learning
          environment for all.
        </p>
      </Container>

      {/* Footer */}
      <LanguageSelector />
    </div>
  );
}

export default App;

