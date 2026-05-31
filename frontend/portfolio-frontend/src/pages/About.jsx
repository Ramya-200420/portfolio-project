import "../styles/About.css";

function About() {
  return (
    <section className="about">

      <div className="about-card">

        <h1>About Me</h1>

        <p>
          Hello! I'm Ramyasri, a passionate Full Stack Developer
          interested in creating responsive and user-friendly
          web applications.
        </p>

        <p>
          I enjoy working with React, Node.js, Express.js and
          MongoDB to build modern applications.
        </p>

        <div className="info">

          <div>
            <strong>Name:</strong>
            <p>Ketha Ramya sri</p>
          </div>

          <div>
            <strong>Role:</strong>
            <p>Full Stack Developer</p>
          </div>

          <div>
            <strong>Location:</strong>
            <p>Andhra Pradesh, India</p>
          </div>

          <div>
            <strong>Email:</strong>
            <p>ketharamyasri9989@gmail.com</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;