import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import LanguageSelector from "./LanguageSelector"

function Header() {
  return (
    <header
      className="text-white py-3 shadow-sm"
      style={{
        backgroundColor: "#760e0eff",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "1000",
      }}
    >
      <div className="container d-flex align-items-left justify-content-center">
        {/* Logo */}
        <a href="https://www.ardacademy.org/" className="me-4">
          <img
            src="/aard_react/aard_logo.png"
            alt="AARD - Home"
            style={{
              height: "46px",
              position: "absolute",
              top: "5px",
              left: "10px",
            }}
          />
        </a>
        <a
          href="https://innobridgeinstitute.org/student-registration"
          className="me-4"
        >
          <Button
            variant="success"
            size="sm"
            className="py-0"
            style={{
              height: "38px",
              position: "absolute",
              top: "8px",
              left: "150px",
            }}
          >
            <strong>Inquire</strong>
          </Button>
        </a>
        {/* Navigation links */}
        <nav className="d-none d-md-flex">
          <a
            href="https://innobridgeinstitute.org/about"
            className="text-white text-decoration-none mx-3"
          >
            ABOUT
          </a>
          <a
            href="https://innobridgeinstitute.org/student-registration"
            className="text-white text-decoration-none mx-3"
          >
            ADMISSION
          </a>
          <a
            href="https://innobridgeinstitute.org/education"
            className="text-white text-decoration-none mx-3"
          >
            EDUCATION
          </a>
          <a
            href="https://innobridgeinstitute.org"
            className="text-white text-decoration-none mx-3"
          >
            RESEARCH
          </a>
          <a
            href="https://innobridgeinstitute.org/testimonials"
            className="text-white text-decoration-none mx-3"
          >
            TESTIMONIALS
          </a>
          <a
            href="https://innobridgeinstitute.org/contact-us"
            className="text-white text-decoration-none mx-3"
          >
            CONTACT
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdb6wYjLXPppUYwx4mDD8Q9l4sIwOXphar1EbMOKzxjIi-I9Q/viewform"
            className="text-white text-decoration-none mx-3"
          >
            NEWS
          </a>
          <Link to="/give" className="text-white text-decoration-none mx-3">
            GIVE
          </Link>
        </nav>
        {/* Right side components */}
        <div
          className="d-flex align-items-center gap-2"
          style={{
            height: "38px",
            position: "absolute",
            top: "5px",
            right: "10px",
          }}
        >
          <LanguageSelector />
          <Button
            variant="light"
            size="sm"
            className="py-0"
            href="https://innobridgeinstitute.org/student-portal-login#"
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
