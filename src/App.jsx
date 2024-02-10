import { useState } from "react";

import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <h1>Mon portfolio</h1>
      </header>
      <main className="container">
        <nav>
          <a href="#about-me">À propos de moi</a>
          <a href="#education">Formation</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
        <img
          className="comp"
          src="/assets/img/computer.jpeg"
          alt="computer.jpg"
        />
        <section id="about-me">
          <div className="profile">
            <img src="src/assets/img/dog.jpeg" alt="" />
            <div>
              <p className="name">Joanan Boureille</p>
              <p className="city">Paris</p>
            </div>
          </div>
          <h3>À propos de moi</h3>
          <p className="myself">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, cupiditate doloribus! Nesciunt, repellat quae quod
            inventore provident, eaque tempore minima ratione assumenda iure
            consequatur nihil aliquid? Eos suscipit deleniti quia!
          </p>
        </section>
        <section id="education">
          <h2>Formation</h2>
          <p>Les technologies sur lesquelles je me forme actuellement</p>
          <div className="technos">
            <img
              className="logos"
              src="src/assets/img/html.png"
              alt="html.jpeg"
            />
            <img className="logos" src="src/assets/img/css.png" alt="css.jpg" />
            <img
              className="logos"
              src="src/assets/img/javascript.png"
              alt="javascript.png"
            />
          </div>
          <p>
            J'ai suivi la formation développment web et mobile chez Le Reacteur
            afin d'apprendre à utiliser ces nouvelles technologies
          </p>
          <div className="technos">
            <img
              className="logos"
              src="src/assets/img/mongodb.png"
              alt="mongodb.png"
            />
            <img
              className="logos"
              src="src/assets/img/react.png"
              alt="react.png"
            />
          </div>
        </section>
        <section id="projects">
          <h2>Projets</h2>
          <p>
            Depuis ma formation de développeur web et mobile, je pratique et
            crée des sites originaux et des répliques de sites existants
          </p>
          <div className="project-main-bloc">
            <a href="https://papaya-sawine-b8759d.netlify.app" target="_blank">
              <img
                src="src/assets/img/into-the-spider-verse-wallpaper-45b90b3ae7f799c3206beb1073e1e93a.jpg"
                alt="into-the-spiderverse.jpg"
              />
            </a>
            <div className="project-bloc">
              <h3>Marvel initiative</h3>
              <h4>Projet Full-Stack</h4>
              <ul>
                <li>Pagination </li>
                <li>Barre de recherche</li>
                <li>Responsive</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2>Contactez-moi</h2>
          <div>
            <div className="contact-bloc">
              <img src="src/assets/img/mail.jpg" alt="mail.jpg" />
              <p>boureille.joanan@gmail.com</p>
            </div>
            <div className="contact-bloc">
              <a
                href="https://www.linkedin.com/in/joanan-boureille-968711250/"
                target="_blank"
              >
                <img src="src/assets/img/linkedin.png" alt="linkedin.png" />
              </a>
              <a
                href="https://www.linkedin.com/in/joanan-boureille-968711250/"
                target="_blank"
              >
                linkedin.com
              </a>
            </div>
            <div className="contact-bloc">
              <a href="https://github.com/JoananBo" target="_blank">
                <img src="src/assets/img/github.png" alt="github.png" />
              </a>

              <a href="https://github.com/JoananBo" target="_blank">
                github.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>Projet réalisé par Joanan Boureille (2024)</p>
        <p>Présentation et entraînement pour mon projet professionnel</p>
      </footer>
    </>
  );
};

export default App;
