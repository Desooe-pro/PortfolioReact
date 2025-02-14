import React from "react";
import "../styles/Loisirs.css";

function Loisirs() {
  return (
    <section id="L-I" className="main-b">
      <h2 className="titre-section">Loisirs et Interêts</h2>
      <div className="projet-nom">
        <div className="main-b main-b-inv projet-nom-b">
          <p className="soustitre-section">Loisirs</p>
          <ul className="text-start">
            <li>Programmation</li>
            <li>Dessin</li>
            <li>Lecture</li>
            <li>Jeux vidéos</li>
            <li>Cuisine</li>
          </ul>
        </div>
        <div className="main-b main-b-inv projet-nom-b">
          <p className="soustitre-section">Interêts</p>
          <ul className="text-start">
            <li>Physiques quantiques</li>
            <li>Astrophysiques</li>
            <li>Psychologie</li>
            <li>Mathématiques</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Loisirs;
