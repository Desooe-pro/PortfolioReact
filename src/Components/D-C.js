import React from "react";
import "../styles/D-C.css";

function DC(props) {
  return (
    <section id="D-C">
      <div id="dip" className="main-b">
        <h2 className="soustitre-section">Diplômes</h2>
        <p className="text-start">Baccalauréat général</p>
        <ul>
          <li className="text-start">Mathématiques</li>
          <li className="text-start">
            NSI (Numérique et Sciences de l'Informatique)
          </li>
        </ul>
      </div>
      <div id="cert" className="main-b">
        <h2 className="soustitre-section">Certifications</h2>
        <p className="text-start">DWWM</p>
      </div>
    </section>
  );
}

export default DC;
