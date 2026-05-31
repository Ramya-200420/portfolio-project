import "../styles/Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "MongoDB",
    "GitHub",
    "Bootstrap",
    "Responsive Design"
  ];

  return (
    <section className="skills">
      <div className="skills-container">

        <h1>My Skills</h1>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;