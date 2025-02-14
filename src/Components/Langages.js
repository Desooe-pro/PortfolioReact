import React from "react";
import HTML from "../img/logo-html-5.png";
import CSS from "../img/logo-css-3.png";
import PY from "../img/python_logo.png";
import SQL from "../img/Logo_MySQL.png";
import WP from "../img/logo-wordpress.png";
import JS from "../img/Logo_JS.png";
import PHP from "../img/Logo_php.png";
import "../styles/Langages.css";

function Langages(props) {
  return (
    <section id="langage" className="main-b">
      <h2 className="titre-section">Langages de programmation</h2>
      <div className="grid">
        <div className="box2 front">
          <p>Front End</p>
        </div>
        <div className="box2 back">
          <p>Back End</p>
        </div>
        <div className="box2 SGBD">
          <p>Gestion de bases de données</p>
        </div>
        <div className="box one">
          <img src={HTML} alt="Logo HTML 5" width="50" height="50" />
          <p>
            <a
              target="_blank"
              href="https://developer.mozilla.org/fr/docs/Glossary/HTML5"
              rel="noreferrer"
            >
              HTML 5
            </a>
          </p>
        </div>
        <div className="box two">
          <img src={CSS} alt="Logo CSS 3" width="50" height="50" />
          <p>
            <a
              target="_blank"
              href="https://developer.mozilla.org/fr/docs/Web/CSS"
              rel="noreferrer"
            >
              CSS 3
            </a>
          </p>
        </div>
        <div className="box three">
          <img src={PY} alt="Logo Python" width="50" height="50" />
          <p>
            <a target="_blank" href="https://www.python.org/" rel="noreferrer">
              Python
            </a>
          </p>
        </div>
        <div className="box four">
          <img src={SQL} alt="Logo MySQL" width="50" height="48" />
          <p>
            <a
              target="_blank"
              href="https://dev.mysql.com/doc/"
              rel="noreferrer"
            >
              MySQL
            </a>
          </p>
        </div>
        <div className="box five">
          <img src={WP} alt="Logo Wordpress" width="50" height="50" />
          <p>
            <a
              target="_blank"
              href="https://wordpress.org/documentation/"
              rel="noreferrer"
            >
              Wordpress
            </a>
          </p>
        </div>
        <div className="box six">
          <img src={JS} alt="Logo JavaScript" width="50" height="50" />
          <p>
            <a
              target="_blank"
              href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
              rel="noreferrer"
            >
              JavaScript
            </a>
          </p>
        </div>
        <div className="box seven">
          <img src={PHP} alt="Logo PHP" width="50" height="50" />
          <p>
            <a
              target="_blank"
              href="https://www.php.net/manual/fr/"
              rel="noreferrer"
            >
              PHP
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Langages;
