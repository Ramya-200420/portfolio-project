import profile from "../assets/profile.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <img
          src={profile}
          alt="Ramyasri"
          className="profile-image"
        />

        <h1>
          Hi, I'm <span>Ramyasri</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p>
          Passionate about creating modern, responsive and user-friendly
          websites with beautiful UI and powerful backend functionality.
        </p>

        <div className="hero-buttons">
          <a href="/projects">
            <button>View Projects</button>
          </a>

          <a href="/contact">
            <button>Contact Me</button>
          </a>
        </div>

      </div>

    </section>
  );
}

export default Home;