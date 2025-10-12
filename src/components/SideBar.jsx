import React from "react"
import { Button } from "react-bootstrap"

function SideBar() {
  return (
    <aside
      className="bg-white border-end shadow-sm p-3 sidebar d-none d-md-block"
      style={{
        width: "250px",
        height: "calc(100vh - 40px)",
        position: "fixed",
        top: "40px",
        left: "0",
        zIndex: "999",
      }}
    >
      <div style={{ paddingBottom: "120px" }}>
        <div></div>

        <div className="mb-3">
          <h6 className="fw-bold text-uppercase mt-4 mb-2 text-muted">
            Search for ...
          </h6>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="What are you looking for?"
            style={{ border: "1px solid #333", borderRadius: "4px" }}
          />
        </div>

        <h6 className="fw-bold text-uppercase mt-4 mb-2 text-muted">
          Registered Users
        </h6>
        <ul className="list-unstyled small">
          <li>
            <a href="#" className="text-decoration-none text-dark">
              _ Parents
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-dark">
              _ Students
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-dark">
              _ Alumni
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-dark">
              _ Advisors
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-dark">
              _ Administrators
            </a>
          </li>
        </ul>

        <h6 className="fw-bold text-uppercase mt-4 mb-2 text-muted">
          Highlights
        </h6>
        <div
          style={{
            overflowY: "scroll",
            maxHeight: "580px",
            scrollbarWidth: "thin",
            scrollbarColor: "#888 #f1f1f1",
            paddingRight: "12px",
          }}
        >
          <div className="mt-3 border border-danger rounded p-3 small">
            <h6 className="fw-bold text-dark">Nobel Prize: Physics</h6>
            <p
              className="mb-0 text-secondary"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Their experiments on a chip revealed quantum physics in action A
              major question in physics is the maximum size of a system that can
              demonstrate quantum mechanical effects. This year’s Nobel Prize
              laureates conducted experiments with an electrical circuit in
              which they demonstrated both quantum mechanical tunnelling and
              quantised energy levels in a system big enough to be held in the
              hand. This year’s Nobel Prize in Physics has provided
              opportunities for developing the next generation of quantum
              technology, including quantum cryptography, quantum computers, and
              quantum sensors.
            </p>
          </div>
          <div className="mt-3 border border-danger rounded p-3 small">
            <h6 className="fw-bold text-dark">Nobel Prize: Chemist</h6>
            <p
              className="mb-0 text-secondary"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Their molecular architecture contains rooms for chemistry The
              Nobel Prize laureates in chemistry 2025 have created molecular
              constructions with large spaces through which gases and other
              chemicals can flow. These constructions, metal–organic frameworks,
              can be used to harvest water from desert air, capture carbon
              dioxide, store toxic gases or catalyse chemical reactions. Through
              the development of metal–organic frameworks, the laureates have
              provided chemists with new opportunities for solving some of the
              challenges we face.
            </p>
          </div>
          <div className="mt-3 border border-danger rounded p-3 small">
            <h6 className="fw-bold text-dark">Nobel Prize: Physiolo</h6>
            <p
              className="mb-0 text-secondary"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              They understood how the immune system is kept in check The body’s
              powerful immune system must be regulated, or it may attack our own
              organs. Mary E. Brunkow, Fred Ramsdell and Shimon Sakaguchi made
              groundbreaking discoveries concerning peripheral immune tolerance
              that prevents the immune system from harming the body. Their
              discoveries have laid the foundation for a new field of research
              and spurred the development of new treatments, for example for
              cancer and autoimmune diseases.
            </p>
          </div>
          <div className="mt-3 border border-danger rounded p-3 small">
            <h6 className="fw-bold text-dark">Nobel Prize: Literatu</h6>
            <p
              className="mb-0 text-secondary"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              László Krasznahorkai The Nobel Prize in Literature for 2025 is
              awarded to the Hungarian author László Krasznahorkai, “for his
              compelling and visionary oeuvre that, in the midst of apocalyptic
              terror, reaffirms the power of art.” László Krasznahorkai is a
              great epic writer in the Central European tradition that extends
              through Kafka to Thomas Bernhard, and is characterised by
              absurdism and grotesque excess. But there are more strings to his
              bow, and he soon looks to the East in adopting a more
              contemplative, finely calibrated tone.
            </p>
          </div>
          <div className="mt-3 border border-danger rounded p-3 small">
            <h6 className="fw-bold text-dark">Nobel Peace Prize</h6>
            <p
              className="mb-0 text-secondary"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              “It was a choice of ballots over bullets” The Nobel Peace Prize
              for 2025 goes to a brave and committed champion of peace – to a
              woman who keeps the flame of democracy burning amid a growing
              darkness. As the leader of the democracy movement in Venezuela,
              Maria Corina Machado is one of the most extraordinary examples of
              civilian courage in Latin America in recent times. Ms Machado has
              been a key, unifying figure in a political opposition that was
              once deeply divided – an opposition that found common ground in
              the demand for free elections and representative government.
            </p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>

      <footer
        className="small text-muted"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          padding: "1rem",
          borderTop: "1px solid #dee2e6",
          backgroundColor: "white",
          zIndex: "1000",
        }}
      >
        <h6
          className="fw-bold text-uppercase mb-2"
          style={{
            color: "#0b18d6ff",
            marginTop: "5px",
          }}
        >
          Innobridge Institute
        </h6>
        <p className="mb-0">One Broadway, Cambridge, MA</p>
        <p className="mb-0">Email: admission@innobridge.org</p>
        <p className="mb-0">Phone: (617) 955-1908</p>
        <a
          href="https://innobridgeinstitute.org/terms-of-service"
          className="text-decoration-none"
        >
          Visit | Map | Terms of Use
        </a>
      </footer>
    </aside>
  )
}

export default SideBar
