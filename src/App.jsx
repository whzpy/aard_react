import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import AppRoutes from "./router/AppRoutes"
import "./index.css"

function App() {
  return (
    <Router basename="/aard_react">
      <div className="app-container d-flex flex-column vh-100">
        <Header />
        <SideBar />
        <div className="d-flex flex-grow-1" style={{ marginTop: "70px" }}>
          {/* Main Content */}
          <main
            className="flex-grow-1 p-2 p-md-4 bg-light"
            style={{
              marginLeft: "clamp(200px, 20vw, 250px)",
              overflowY: "scroll",
              height: "calc(100vh)",
              width: "calc(100vw - clamp(200px, 20vw, 250px))",
              scrollbarWidth: "auto",
              scrollbarColor: "#888 #f1f1f1",
              minWidth: "300px",
            }}
          >
            <div className="container">
              <AppRoutes />
            </div>

            <div
              className="fw-bold mb-4"
              style={{
                backgroundColor: "#760e0eff",
                height: "80px",
                textAlign: "center",
                color: "white",
                paddingTop: "12px",
                marginTop: "2rem",
              }}
            >
              <p>
                For more information about Innobridge Institute, click the
                Inquire button at the top left.
                <br />
                Innobridge Institute _address: One Broadway, Cambridge, MA 02142
                _Email: info@innobridgeinstitute.org _Phone: (617) 955-1908
              </p>
            </div>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
