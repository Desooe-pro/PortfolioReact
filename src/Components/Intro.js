import React from "react";
import CV from "../img/CV_La_fabrique.pdf";
import "../styles/Intro.css";

function Intro() {
  return (
    <section id={"intro"} className={"main-b"}>
      <p className="text-light quick-s">Sacha Allardin</p>
      <p className="text-light quick-s-2">
        Développeur Web et Web Mobile Junior
      </p>
      <p className="text-light quick-s-3">
        Actuellement en recherche d'alternance à Blois
      </p>
      <p className="text-light quick-s-3">22 avril 2025 - 24 avril 2026</p>
      <p className="text-light quick-s-3">16 mai 2025 - 16 mai 2026</p>
      <div id="CV">
        <p className="text-light">
          <a target="_blank" href={CV} rel="noreferrer">
            Téléchargez mon CV
          </a>
        </p>
      </div>
    </section>
  );
}

export default Intro;
