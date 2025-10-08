// Header.jsx
import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { FaFacebookF } from 'react-icons/fa';

function Header() {
  const [showAdmission, setShowAdmission] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showAcademics, setShowAcademics] = useState(false);
  const [showArts, setShowArts] = useState(false);
  const [showAthletics, setShowAthletics] = useState(false);
  const [showStudentLife, setShowStudentLife] = useState(false);
  const [showSupportingRL, setShowSupportingRL] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div 
        className="d-flex justify-content-between align-items-center px-4 py-2 small"
        style={{ 
          backgroundColor: "#f8f9fa", 
          borderBottom: "1px solid #dee2e6",
          fontSize: "13px"
        }}
      >
        {/* Logo on the left */}
        <div className="d-flex align-items-center">
          <a href="https://innobridgeinstitute.org/news-and-events" className="me-4">
            <img
              src="/aard_logo.png"
              alt="ARRD Logo"
              style={{ height: "70px" }}
            />
          </a>
        </div>

        {/* Navigation links, INQUIRE button, and icons grouped together on the right */}
        <div className="d-flex align-items-center gap-3" >
          <div className="d-flex gap-3" style={{ fontSize: "18px" }}>
            <a 
              href="https://innobridgeinstitute.org/news-and-events" 
              className="text-decoration-none"
              style={{ color: "#000000" }}
            >
              Inquire
            </a>
            <span style={{ color: "#666" }}>|</span>
            <a 
              href="https://innobridgeinstitute.org/news-and-events" 
              className="text-decoration-none"
              style={{ color: "#050505ff" }}
            >
              Parents
            </a>
            <span style={{ color: "#666" }}>|</span>
            <a 
              href="https://innobridgeinstitute.org/news-and-events" 
              className="text-decoration-none"
              style={{ color: "#050505ff" }}
            >
              Students
            </a>
            <span style={{ color: "#666" }}>|</span>
            <a 
              href="https://innobridgeinstitute.org/news-and-events" 
              className="text-decoration-none"
              style={{ color: "#050505ff" }}
            >
              Alumni
            </a>
            <span style={{ color: "#666" }}>|</span>
            <a 
              href="https://innobridgeinstitute.org/news-and-events" 
              className="text-decoration-none"
              style={{ color: "#050505ff" }}
            >
              Advisors
            </a>
            <span style={{ color: "#666" }}>|</span>
            <a 
              href="https://innobridgeinstitute.org/news-and-events" 
              className="text-decoration-none"
              style={{ color: "#050505ff" }}
            >
              Admin
            </a>
              <span style={{ color: "#666" }}>|</span>
          </div>

          {/* INQUIRE button and icons */}
          <div className="d-flex flex-column align-items-end">

            {/* Social Media and Utility Icons */}
            <div className="d-flex gap-2">
              <a href="#" className="text-decoration-none" style={{ color: "#666" }}>
                🔍
              </a>
              <a href="https://www.youtube.com" className="text-decoration-none" style={{ color: "#666", border: "1px solid #666", borderRadius: "3px", padding: "2px 4px" }}>
                ▶
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar 
        expand="lg" 
        className="px-4 py-3"
        style={{ backgroundColor: "#8B1C1C" }}
        variant="dark"
      >
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">{/* Changed from ms-auto to mx-auto to center the navigation */}
            
            {/* About Dropdown */}
            <NavDropdown
              title="ABOUT"
              id="about-dropdown"
              show={showAbout}
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
              className="me-3"
            >
              <NavDropdown.Item href="https://www.roxburylatin.org/about/mission/">Mission & History</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/about/leadership/">Leadership</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/about/faculty/">Faculty & Staff</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/about/directory/">Directory</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/about/contact/">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/about/careers/">Careers</NavDropdown.Item>
            </NavDropdown>

            {/* Admission Dropdown */}
            <NavDropdown
              title="ADMISSION"
              id="admission-dropdown"
              show={showAdmission}
              onMouseEnter={() => setShowAdmission(true)}
              onMouseLeave={() => setShowAdmission(false)}
              className="me-3"
            >
              <NavDropdown.Item href="https://www.roxburylatin.org/admission/">Admission Overview</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/admission/events/">Admission Events</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/admission/why-roxbury-latin/">Why Roxbury Latin?</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/admission/applying/">Applying</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/admission/tuition-financial-aid/">Tuition & Financial Aid</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/admission/need-blind/">Need-blind Enrollment</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/admission/faqs/">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/admission/team/">Admission Team</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/admission/interactive-campus-tour/">Interactive Campus Tour</NavDropdown.Item>
            </NavDropdown>

            {/* Academics Dropdown */}
            <NavDropdown
              title="ACADEMICS"
              id="academics-dropdown"
              show={showAcademics}
              onMouseEnter={() => setShowAcademics(true)}
              onMouseLeave={() => setShowAcademics(false)}
              className="me-3"
            >
              <NavDropdown.Item href="https://www.roxburylatin.org/academics/">Academic Overview</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/academics/curriculum/">Curriculum</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/academics/departments/">Departments</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/academics/college-counseling/">College Counseling</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="R & D"
              id="arts-dropdown"
              show={showArts}
              onMouseEnter={() => setShowArts(true)}
              onMouseLeave={() => setShowArts(false)}
              className="me-3"
            >
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/">Arts Overview</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/music/">Music</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/visual-arts/">Visual Arts</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/theater/">Theater</NavDropdown.Item>
            </NavDropdown>
   

            <NavDropdown
              title="TESTIMONIALS"
              id="arts-dropdown"
              show={showArts}
              onMouseEnter={() => setShowArts(true)}
              onMouseLeave={() => setShowArts(false)}
              className="me-3"
            >
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/">Arts Overview</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/music/">Music</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/visual-arts/">Visual Arts</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/theater/">Theater</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="SUPPORTING"
              id="arts-dropdown"
              show={showArts}
              onMouseEnter={() => setShowArts(true)}
              onMouseLeave={() => setShowArts(false)}
              className="me-3"
            >
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/">Arts Overview</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/music/">Music</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/visual-arts/">Visual Arts</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/theater/">Theater</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="NEWS"
              id="arts-dropdown"
              show={showArts}
              onMouseEnter={() => setShowArts(true)}
              onMouseLeave={() => setShowArts(false)}
              className="me-3"
            >
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/">Arts Overview</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/music/">Music</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/visual-arts/">Visual Arts</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/arts/theater/">Theater</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;