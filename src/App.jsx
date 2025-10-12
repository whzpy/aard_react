import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import "./index.css"

function App() {
  return (
    <div className="app-container d-flex flex-column vh-100">
      <Header />
      <SideBar />
      <div className="d-flex flex-grow-1" style={{ marginTop: "70px" }}>
        {/* Main Content */}
        <main
          className="flex-grow-1 p-4 bg-light"
          style={{
            marginLeft: "200px",
            overflowY: "scroll",
            height: "calc(100vh - 70px)",
            width: "calc(100vw - 200px)",
            scrollbarWidth: "auto",
            scrollbarColor: "#888 #f1f1f1",
          }}
        >
          <div className="container">
            <h2 className="fw-bold mb-4 text-dark">Nobel Prize in chemistry</h2>
            <p className="lead text-secondary">
              STOCKHOLM (AP) — Three scientists won the Nobel Prize in chemistry
              Wednesday for their development of new molecular structures that
              can trap vast quantities of gas inside, laying the groundwork to
              potentially suck greenhouse gases out of the atmosphere or harvest
              moisture from desert environments.The chairperson of the committee
              that made the award compared the structures called metal-organic
              frameworks to the seemingly bottomless magical handbag carried by
              Hermione Granger in the “Harry Potter” series. Another example
              might be Mary Poppins’ enchanted carpet bag. These containers look
              small from the outside but are able to hold surprisingly large
              quantities within.The committee said Susumu Kitagawa, Richard
              Robson and Omar M. Yaghi were honored for “groundbreaking
              discoveries” that “may contribute to solving some of humankind’s
              greatest challenges,” from pollution to water scarcity. Robson,
              88, is affiliated with the University of Melbourne in Australia.
              Kitagawa, 74, is with Japan’s Kyoto University, and Yaghi, 60, is
              with the University of California, Berkeley.
            </p>

            <hr className="my-5" />

            <h2 className="fw-bold mb-4 text-dark">
              2025 Nobel Prize in chemistry
            </h2>
            <p className="lead text-secondary">
              The chemists worked separately but added to each other’s
              breakthroughs over decades, beginning with Robson’s work in the
              1980s. The scientists were able to devise stable atomic structures
              that preserved holes of specific sizes that allowed gas or liquid
              to flow in and out. The holes can be customized to match the size
              of specific molecules that scientists or engineers want to hold in
              place, such as water, carbon dioxide or methane. “That level of
              control is quite rare in chemistry,” said Kim Jelfs, a
              computational chemist at Imperial College London. “It’s really
              efficient for storing gases.” A relatively small amount of the
              structure — which combines metal nodes and organic rods, somewhat
              like the interchangeable building pieces in Tinker Toys — creates
              many organized holes and a huge amount of surface area inside.
            </p>

            <hr className="my-5" />

            <h2 className="fw-bold mb-4 text-dark">
              Who are the five Nobel Peace Prize judges?
            </h2>
            <p className="lead text-secondary">
              The Nobel Committee was established by the Norwegian Storting
              (Norway’s Parliament) in 1897 and is tasked with picking the
              laureates of the Nobel Peace Prize. The members of the committee
              are elected for a period of six years and can be re-elected.
              According to the Nobel Peace Prize’s rules, members of the
              committee represent the strength of the different political
              parties in Norway’s Parliament, but cannot be sitting members of
              the parliament. Once elected, the committee picks its own chairman
              and deputy chairman, and the director of the Norwegian Nobel
              Institute serves as the committee’s secretary.
            </p>
            <hr className="my-5" />
            <h2 className="fw-bold mb-4 text-dark">
              {" "}
              How have they voted in the past?{" "}
            </h2>
            <p>
              According to the rules of the Nobel Peace Prize, the Nobel
              Committee receives nominations from members of governments around
              the world, or the International Court of Justice in The Hague and
              university professors of of history, social sciences, law,
              philosophy, theology and religion, among others, by the end of
              January but are not permitted to reveal the names of the nominees
              until a winner is announced. In March, the committee prepares a
              short-list of candidates and announces the winner in October. The
              selection process takes place in complete secrecy. Information on
              how individual members vote is also not revealed. “We discuss, we
              argue, there is a high temperature,” Frydnes, the chairman of the
              Norwegian Nobel Committee, told the BBC, which got access to the
              final meeting of the committee this year. “But also, of course, we
              are civilised, and we try to make a consensus-based decision every
              year,” he added. Since Frydnes became chair of the committee in
              the group has given the Nobel Peace Prize to Maria Ressa and
              Dmitry Muratov in 2021 for their efforts to safeguard freedom of
              expression; Belarusian dissident Ales Bialiatski in 2022 for
              protecting fundamental rights, and Iran’s Narges Mohammadi in 2023
              for fighting for women’s rights. Last year, Frydnes and the
              committee announced Japan’s Nihon Hidankyo, a group of survivors
              of the 1945 US bombings of Hiroshima and Nagasaki, as the winner
              of the Peace Prize. “I grew up after the end of the Cold War, when
              democracy seemed unstoppable and nuclear disarmament realistic,”
              Frydnes said when he presented the award.
            </p>
          </div>
          <div
            className="fw-bold mb-4"
            style={{
              backgroundColor: "#760e0eff",
              bottom: "0",
              left: "250px",
              right: "0",
              height: "50px",
              textAlign: "center",
              color: "white",
              paddingTop: "10px",
            }}
          >
            <p>
              {" "}
              Welcome to Innobridge Institute _ One Broadway, Cambridge, MA
              02142 _ Email: info@innobridgeinstitute.org _ Phone: (617)
              955-1908
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
