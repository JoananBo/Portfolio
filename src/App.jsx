import "./App.css";
/*---------------------*/
/*------PHOTOS---------*/
/*---------------------*/
import computer from "./assets/img/computer.jpeg";

import html from "./assets/img/html.png";
import css from "./assets/img/css.png";
import js from "./assets/img/javascript.png";
import mongodb from "./assets/img/mongodb.png";
import react from "./assets/img/react.png";
import spiderverse from "./assets/img/spiderverse.jpg";
import mail from "./assets/img/mail.jpg";
import linkedin from "./assets/img/linkedin.png";
import github from "./assets/img/github.png";
import avatar from "./assets/img/11_02_2024.jpeg";
import chantier from "./assets/img/chantier.jpeg";
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
        <img className="comp" src={computer} alt="computer.jpeg" />
        <section id="about-me">
          <div className="profile">
            <img src={avatar} alt="" />
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
            <img className="logos" src={html} alt="html.jpeg" />
            <img className="logos" src={css} alt="css.jpg" />
            <img className="logos" src={js} alt="javascript.png" />
            <img className="logos" src={mongodb} alt="mongodb.png" />
            <img className="logos" src={react} alt="react.png" />
          </div>
          <p>
            J'ai suivi la formation développment web et mobile chez Le Reacteur
            afin d'apprendre à utiliser ces nouvelles technologies
          </p>
          <div className="technos">
            <img className="logos" src={mongodb} alt="mongodb.png" />
            <img className="logos" src={react} alt="react.png" />
          </div>
        </section>
        <section id="projects">
          <h2>Projets</h2>
          <p>
            Depuis ma formation de développeur web et mobile, je pratique et
            crée des sites originaux et des répliques de sites existants
          </p>
          <div className="project-main-bloc">
            <div className="project-bloc">
              <a href="https://marvel-initiative.netlify.app/" target="_blank">
                <img src={spiderverse} alt="into-the-spiderverse.jpg" />
              </a>
              <div className="project-text">
                <h3>Marvel initiative</h3>
                <h4>Projet Full-Stack</h4>
                <ul>
                  <li>Pagination </li>
                  <li>Barre de recherche</li>
                  <li>Responsive</li>
                </ul>
              </div>
            </div>
            <div className="project-bloc">
              <a href="" target="_blank">
                <img src={chantier} alt="chantier.jpeg" />
              </a>
              <div className="project-text">
                <h3>Copie de site e-commerce (à venir)</h3>
                <h4>Projet Full-Stack</h4>
                <ul>
                  <li>Création d'une BDD</li>
                  <li>Sign In/Log In</li>
                  {/* <li>Responsive</li> */}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2>Contactez-moi</h2>
          <div>
            <div className="contact-bloc">
              <img src={mail} alt="mail.jpg" />
              <p>boureille.joanan@gmail.com</p>
            </div>
            <div className="contact-bloc">
              <a
                href="https://www.linkedin.com/in/joanan-boureille-968711250/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin.png" />
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
                <img src={github} alt="github.png" />
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
