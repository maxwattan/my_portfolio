import "./App.css";
import image from "./profile2.jpg";
import projectOne from "./projectOne.png";

function App() {
  return (
    <div className="App">
      <aside className="sidebar">
        <div className="profile-picture">
          <img
            src={image}
            alt="headshot"
            height="125"
            width="125"
            className="profile-image"
          ></img>
        </div>
        <ul>
          <li>
            <a href="#background">Welcome</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#footer">Contact Me!</a>
          </li>
        </ul>
      </aside>

      <section className="background">
        <h1>Max W.</h1>
        <br></br>
        <h1> Background </h1>
        <p className="background_p">
          "Hello, My name is Max. I have a Bachelors in Hospitality Management
          and I am transitioning my skills into tech. As a full stack web
          developer I am passionate about creating platforms to better
          ourselves, our community and our environment."
        </p>

        <div className="background_contact_me">
          <section className="button">
            <button>
              <a href="#contact"> Contact Me! </a>
            </button>
            {/* <button className="code"> Code </button>
            <button className="live"> Live </button> */}
          </section>
        </div>
      </section>

      <section className="projects" id="projects">
        <ul>
          <li className="project-one">
            <img src={projectOne} height="320" width="300" alt=""></img>
            <section className="project-content">
              <h2 className="project-h"> Care Village </h2>
              <p className="project_p">
                Care Village is a four person capstone team. Where our mission
                is to empower parents and caregivers on their unique parenting
                journeys while fostering a compassionate and supportive
                community. We provide a platform that seamlessly connects
                individuals with diverse parenting methods and offers a
                dedicated space for the generosity of giving to children in
                need. We believe in the power of knowledge-sharing and
                collaboration among parents, grandparents, guardians, and loved
                ones.
              </p>
              <div className="contact-me">
                <button className="project-button">
                  <a
                    href="https://carevillage.netlify.app/"
                    className="care-live"
                  >
                    {" "}
                    Live Site!{" "}
                  </a>
                </button>
              </div>
            </section>
          </li>
        </ul>
      </section>

      <section className="skills">
        <h1> Skills</h1>
        <p></p>
      </section>

      <section className="footer">
        <h1> Footer</h1>
        <p></p>
      </section>
    </div>
  );
}

export default App;
