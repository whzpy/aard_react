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
              <h2 className="text-danger"> InnoBridge Team</h2>
          <p>
           Our advisors, staff, and alumni all come from strong backgrounds in academia and higher learning, with extensive research experience in many different fields. Located in Cambridge, the Hub of MIT and Harvard, our advisors incorporate hybrid teaching to guide students with their learning.
            Nobel Prize winners (mentors to faculty team) 3 years experiences from MIT scientists & Harvard Postdocs (advisors) Alumni as RA ( solidly support students in projects)
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <Container className="my-5">
        <h2 className="text-danger">Our Mission</h2>
        <p className="mt-3">
         Innobridge Institute seeks to bridge the gaps within the world of academia by encouraging our students to venture beyond the school curriculum and develop solutions to real-world problems through research and higher learning. Our mission is to inspire students to create their own vision for the world, keep an open mind, and develop strong leadership skills, so that their vision can become reality.

        </p>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

