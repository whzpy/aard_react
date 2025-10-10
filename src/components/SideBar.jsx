import React from "react";

function SideBar() {
  return (
    <aside className="bg-white border-end shadow-sm p-3 sidebar d-none d-md-block" style={{ width: "260px", height: "calc(100vh - 70px)", overflowY: "auto" }}>
      <div className="mb-3">
        <h6 className="fw-bold text-uppercase mt-4 mb-2 text-muted">Search for ...</h6>
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="What are you looking for?"
          style={{ border: "1px solid #333", borderRadius: "4px" }}
        />
      </div>

      <h6 className="fw-bold text-uppercase mt-4 mb-2 text-muted">Top resources</h6>
      <ul className="list-unstyled small">
        <li><a href="#" className="text-decoration-none text-dark">_ Inquire</a></li>
        <li><a href="#" className="text-decoration-none text-dark">_ Parents</a></li>
        <li><a href="#" className="text-decoration-none text-dark">_ Students</a></li>
        <li><a href="#" className="text-decoration-none text-dark">_ Alumni</a></li>
        <li><a href="#" className="text-decoration-none text-dark">_ Advisors</a></li>
         <li><a href="#" className="text-decoration-none text-dark">_ Administrators</a></li>
      </ul>

      <h6 className="fw-bold text-uppercase mt-4 mb-2 text-muted">Highlight</h6>
      <div className="mt-3 border rounded p-3 small">
        <h6 className="fw-bold text-dark">Update-1 from AARD</h6>
        <p className="mb-0 text-secondary">
          Read the latest from AARD and its leaders regarding events on campus.
        </p>
      </div>

    <div className="mt-3 border rounded p-3 small">
        <h6 className="fw-bold text-dark">Update-2 from AARD</h6>
        <p className="mb-0 text-secondary">
          Read the latest from AARD and its leaders regarding events on campus.
        </p>
      </div>

      <footer className="mt-5 small text-muted">
        <p className="mb-0 fw-semibold">Massachusetts Institute of Technology</p>
        <p className="mb-0">77 Massachusetts Avenue, Cambridge, MA</p>
        <a href="#" className="text-decoration-none">Visit | Map | Events</a>
      </footer>
    </aside>
  );
}

export default SideBar;
