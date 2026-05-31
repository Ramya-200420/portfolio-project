import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="projects">
      <div className="projects-container">

        <h1>My Projects</h1>

        <div className="projects-grid">

          {projects.length === 0 ? (
            <p className="no-projects">
              No Projects Available
            </p>
          ) : (
            projects.map((project) => (
              <div className="project-card" key={project._id}>
                <h2>{project.title}</h2>

                <p>{project.description}</p>
              </div>
            ))
          )}

        </div>

      </div>
    </section>
  );
}

export default Projects;