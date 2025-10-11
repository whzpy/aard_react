import React from "react";
import { Button } from "react-bootstrap";
import LanguageSelector from "./LanguageSelector";

function Header() {
  return (
    <header 
      className="text-white py-3 shadow-sm" 
      style={{ 
        backgroundColor: "#741515ff",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "1000"
      }}
    >
      <div className="container d-flex align-items-left justify-content-center">
        {/* Logo */}
        <a href="https://innobridgeinstitute.org" className="me-4">
          <img
            src="/aard_logo.png"
            alt="ARRD Logo"
            style={{ 
              height: "46px",
              position: "absolute",
              top: "5px",
              left: "10px"
            }}
          />
        </a>

        {/* Navigation links */}
        <nav className="d-none d-md-flex">
          <a href="#" className="text-white text-decoration-none mx-3">ABOUT</a>
          <a href="#" className="text-white text-decoration-none mx-3">ADMISSION</a>
          <a href="#" className="text-white text-decoration-none mx-3">ACADEMICS</a>
          <a href="#" className="text-white text-decoration-none mx-3">RESEARCH</a>
          <a href="#" className="text-white text-decoration-none mx-3">TESTIMONIALS</a>
          <a href="#" className="text-white text-decoration-none mx-3">GIVE</a>
          <a href="#" className="text-white text-decoration-none mx-3">NEWS</a>
        </nav>
    
        {/* Right side components */}
        <div className="d-flex align-items-center gap-2" style={{ 
              height: "38px",
              position: "absolute",
              top: "5px",
              right: "10px"
            }}>
          < LanguageSelector />
          <Button variant="light" size="sm" className="py-0">Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
