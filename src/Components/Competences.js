import React from "react";
import "../styles/Competences.css";

function Competences() {
  return (
    <section id="competences" className="main-b">
      <h2 className="text-light titre-section">Compétences</h2>
      <div className="comp">
        <div id="soft" className="main-b main-b-inv">
          <div>
            <h3 className="soustitre-section">Soft skills</h3>
          </div>
          <div>
            <ul className="text-start">
              <li>Adaptabilité en équipe</li>
              <li>Pragmatisme</li>
              <li>Esprit d'analyse</li>
              <li>Esprit critique</li>
              <li>Esprit de synthèse</li>
              <li>Résolution de problèmes</li>
            </ul>
          </div>
        </div>
        <div id="hard" className="main-b main-b-inv">
          <div>
            <h3 className="soustitre-section">Hard skills</h3>
          </div>
          <div>
            <ul className="text-start">
              <li>Figma</li>
              <li>VSCode</li>
              <li>Vitesse de frappe : ~40 mots par minute</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competences;
