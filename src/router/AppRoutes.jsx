import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Give from "../pages/Give"
// Import other pages when they're created
// import About from "../pages/About"
// import Admission from "../pages/Admission"
// import Education from "../pages/Education"
// import Research from "../pages/Research"
// import Testimonials from "../pages/Testimonials"
// import Contact from "../pages/Contact"
// import News from "../pages/News"
import Parents from "../pages/Parents"
import Students from "../pages/Students"
import Alumni from "../pages/Alumni"
import Advisors from "../pages/Advisors"
import AdminPage from "../pages/AdminPage"
// import Inquire from "../components/Inquire"
// import Login from "../auth/Login"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/give" element={<Give />} />

      {/* Uncomment these routes as you create the corresponding page components */}
      {/* <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/education" element={<Education />} />
      <Route path="/research" element={<Research />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} /> */}
      {/* <Route path="/inquire" element={<Inquire />} />
      <Route path="/login" element={<Login />} /> */}
      <Route path="/parents" element={<Parents />} />
      <Route path="/students" element={<Students />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/advisors" element={<Advisors />} />
      <Route path="/administrators" element={<AdminPage />} />
    </Routes>
  )
}

export default AppRoutes
