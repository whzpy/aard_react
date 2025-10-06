// Header.jsx
import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";

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
          <a href="https://www.roxburylatin.org/" className="me-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/3e/Roxbury_Latin_School_Shield.png"
              alt="Roxbury Latin School Logo"
              style={{ height: "40px" }}
            />
          </a>
        </div>

        {/* Navigation links, INQUIRE button, and icons grouped together on the right */}
        <div className="d-flex align-items-center gap-3">
          {/* Navigation links */}
          <div className="d-flex gap-3">
            <a 
              href="https://roxburylatin.myschoolapp.com/app#login" 
              className="text-decoration-none"
              style={{ color: "#666" }}
            >
              Parents
            </a>
            <a 
              href="https://roxburylatin.myschoolapp.com/app#login" 
              className="text-decoration-none"
              style={{ color: "#666" }}
            >
              RL Login
            </a>
            <a 
              href="https://www.roxburylatin.org/alumni/" 
              className="text-decoration-none"
              style={{ color: "#666" }}
            >
              Alumni
            </a>
            <a 
              href="https://www.roxburylatin.org/about/calendar/" 
              className="text-decoration-none"
              style={{ color: "#666" }}
            >
              Calendar
            </a>
          </div>

          {/* INQUIRE button and icons */}
          <div className="d-flex flex-column align-items-end">
            <Button 
              variant="danger" 
              size="sm"
              className="mb-1"
              style={{ 
                backgroundColor: "#8B1C1C", 
                borderColor: "#8B1C1C",
                fontWeight: "600",
                fontSize: "12px",
                padding: "6px 16px"
              }}
            >
              INQUIRE
            </Button>
            
            {/* Social Media and Utility Icons */}
            <div className="d-flex gap-2">
              <a href="#" className="text-decoration-none" style={{ color: "#666" }}>
                🔍
              </a>
              <a href="https://www.facebook.com/RoxburyLatin/" className="text-decoration-none" style={{ color: "#666" }}>
                📘
              </a>
              <a href="https://www.instagram.com/roxburylatin/" className="text-decoration-none" style={{ color: "#666" }}>
                📷
              </a>
              <a href="https://www.flickr.com/photos/roxburylatin/" className="text-decoration-none" style={{ color: "#666" }}>
                📸
              </a>
              <a href="https://www.youtube.com/user/roxburylatintube" className="text-decoration-none" style={{ color: "#666" }}>
                📺
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
              title="About"
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
              title="Admission"
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
              title="Academics"
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

            {/* Arts Dropdown */}
            <NavDropdown
              title="Arts"
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

            {/* Athletics Dropdown */}
            <NavDropdown
              title="Athletics"
              id="athletics-dropdown"
              show={showAthletics}
              onMouseEnter={() => setShowAthletics(true)}
              onMouseLeave={() => setShowAthletics(false)}
              className="me-3"
            >
              <NavDropdown.Item href="https://www.roxburylatin.org/athletics/">Athletics Overview</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/athletics/teams/">Team Pages</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/athletics/staff/">Athletics Staff</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/athletics/calendar/">Full Calendar</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/athletics/recent/">Game Results</NavDropdown.Item>
              <NavDropdown.Item href="https://www.islsports.org/">ISL Website</NavDropdown.Item>
            </NavDropdown>

            {/* Student Life Dropdown */}
            <NavDropdown
              title="Student Life"
              id="student-life-dropdown"
              show={showStudentLife}
              onMouseEnter={() => setShowStudentLife(true)}
              onMouseLeave={() => setShowStudentLife(false)}
              className="me-3"
            >
              <NavDropdown.Item href="https://www.roxburylatin.org/student-life/">Student Life Overview</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/student-life/clubs/">Clubs & Activities</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/student-life/traditions/">Traditions</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/student-life/community-service/">Community Service</NavDropdown.Item>
            </NavDropdown>

            {/* Supporting RL Dropdown */}
            <NavDropdown
              title="Supporting RL"
              id="supporting-rl-dropdown"
              show={showSupportingRL}
              onMouseEnter={() => setShowSupportingRL(true)}
              onMouseLeave={() => setShowSupportingRL(false)}
            >
              <NavDropdown.Item href="https://www.givecampus.com/campaigns/15168/donations/new">Make A Gift</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/supporting-rl/annual-fund/">Annual Fund</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/supporting-rl/planned-giving/">Planned Giving</NavDropdown.Item>
              <NavDropdown.Item href="https://www.roxburylatin.org/supporting-rl/volunteer/">Volunteer</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;