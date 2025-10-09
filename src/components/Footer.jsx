// Footer.jsx
import { Container, Row, Col, Button } from "react-bootstrap";
import LanguageSelector from "./LanguageSelector";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2c3e50", color: "white" }}>
      {/* Main Footer Content */}
      <Container className="py-5">
        <Row>
          {/* School Logo and Contact Info - Left Side */}
          <Col lg={6} className="mb-4">
            <div className="mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/3e/RRD_Shield.png"
                alt="RRD Logo"
                style={{ height: "80px" }}
              />
            </div>
            
            <div className="mb-4">
              <div style={{ fontSize: "18px", fontWeight: "500" }}>101 Saint Theresa Avenue</div>
              <div style={{ fontSize: "18px", fontWeight: "500" }}>West RRD, MA 02132</div>
              <div style={{ fontSize: "18px", fontWeight: "500" }}>617.325.4920</div>
            </div>

            {/* Action Buttons */}
            <div className="mb-4">
              <Button 
                variant="outline-light" 
                size="lg"
                className="me-3 mb-2"
                style={{ 
                  borderWidth: "2px",
                  fontWeight: "600",
                  padding: "12px 30px"
                }}
              >
                CONTACT US
              </Button>
              <Button 
                variant="danger" 
                size="lg"
                className="mb-2"
                style={{ 
                  fontWeight: "600",
                  padding: "12px 30px",
                  backgroundColor: "#8B1C1C",
                  borderColor: "#8B1C1C"
                }}
              >
                INQUIRE
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/RRDLatin/" className="text-white fs-4">
                📘
              </a>
              <a href="https://www.instagram.com/rrdlatin/" className="text-white fs-4">
                📷
              </a>
              <a href="https://www.flickr.com/photos/rrdlatin/" className="text-white fs-4">
                📸
              </a>
              <a href="https://www.youtube.com/user/rrdlatintube" className="text-white fs-4">
                📺
              </a>
            </div>
          </Col>

          {/* Links Section - Right Side */}
          <Col lg={6}>
            <Row>
              {/* First Column of Links */}
              <Col md={6} className="mb-4">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="https://innobridgeinstitute.org/about-usadmission/" className="text-white text-decoration-none">
                      Admission & Financial Aid
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://innobridgeinstitute.org/about-usadmission/interactive-campus-tour/" className="text-white text-decoration-none">
                      Virtual Campus Tour
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://innobridgeinstitute.org/about-usabout/directory/" className="text-white text-decoration-none">
                      Office Directory
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://innobridgeinstitute.org/about-usabout/contact/directions/" className="text-white text-decoration-none">
                      Directions
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://innobridgeinstitute.org/about-usabout/calendar/" className="text-white text-decoration-none">
                      Calendar
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://innobridgeinstitute.org/about-usfacility-rental/" className="text-white text-decoration-none">
                      Facility Rental
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://www.weatherlink.com/embeddablePage/show/b6ecac65520e4519841af74efc5ee3ee/summary" className="text-white text-decoration-none">
                      Weather at RL
                    </a>
                  </li>
                </ul>
              </Col>

              {/* Second Column of Links */}
              <Col md={6} className="mb-4">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="https://www.givecampus.com/campaigns/15168/donations/new" className="text-white text-decoration-none">
                      Make A Gift
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://innobridgeinstitute.org/about-usalumni/" className="text-white text-decoration-none">
                      Alumni
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://innobridgeinstitute.org/about-usathletics/recent/" className="text-white text-decoration-none">
                      Scoreboard
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://sideline.bsnsports.com/schools/massachusetts/westrrd/the-rrd-latin-school" className="text-white text-decoration-none">
                      School Store
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://innobridgeinstitute.org/about-usabout/careers/" className="text-white text-decoration-none">
                      Career Opportunities
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="http://www.rlsummer.org/" className="text-white text-decoration-none">
                      Summer Programs
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://innobridgeinstitute.org/about-usprivacy-policy/" className="text-white text-decoration-none">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Bottom Copyright Bar */}
      <div 
        className="py-3" 
        style={{ 
          backgroundColor: "rgba(0,0,0,0.2)", 
          borderTop: "1px solid rgba(255,255,255,0.1)" 
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <small>&copy; 2025 The RRD</small>
            </Col>
            <Col md={4} className="text-md-end">
              <small>
                <LanguageSelector />
              </small>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;