import Layout from "./components/Layout";
import './index.css';
import { ReactTyped } from "react-typed";

function App() {
  return (
    <Layout>
    
    <section className="container bg-shade-800 min-h-screen py-28" id="home">
      <h1 className="text-6xl font-bold text-shade-100">
        Hi, I'm <span className="text-primary">Soz</span>
      </h1>

      <p className="text-3xl font-bold text-shade-100 mt-3">
         I'm a{" "}
          <span className="text-primary">
            <ReactTyped
              strings={[
                "Fullstack Developer",
                "Web Designer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </span>
      </p>

      <p
        className="text-base font-medium text-shade-100 mt-4">
        I’m an aspiring Fullstack Developer student graduating in 2026, with a focus on open source technologies.
        I enjoy working on both frontend and backend projects and take pride in building user friendly, well structured applications. 

      </p>

      <p className="text-base font-medium text-shade-100 mt-4">
        I'm currently looking for an LIA internship for November 2025 where I can apply my skills, collaborate with a development team, and continue growing as a developer. 
        I'm motivated, curious, and eager to contribute to meaningful tech solutions!
      </p>
      </section>

      <section className="bg-shade-700 w-full min-h-screen py-28" id="about-me">
      {/* About Me */}
      </section>

      <section className="bg-shade-800 min-h-screen py-28" id="education-projects">
      {/* Education & Projects */}
      </section>

      <section className="bg-shade-700 min-h-screen py-28 text-white" id="skills">
        {/* Skills */}
      </section>

      <section className="bg-shade-800 min-h-screen py-28" id="contact">
        {/* Contact */}
      </section>

    </Layout>
  );
}

export default App;