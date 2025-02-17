import React from "react";
import "../styles/Presentation.css";

function Mentions() {
  return (
    <main>
      <div className="main-b">
        <h1 className="text-light quick-s">Mentions légales</h1>
      </div>
      <div className="main-b text-light">
        <h2 className="quick-s-2">Identité et coordonnées</h2>
        <p>ALLARDIN Sacha</p>
        <p>21 rue des hautes granges</p>
        <p>sacha.allardin06@gmail.com</p>
      </div>
      <div id="source" className="flex main-b text-light">
        <h2 className="quick-s-2">Sources</h2>
        <div id="source2">
          <div className="main-b main-b-inv text-start">
            <p style={{ padding: "0 40px" }}>Images : </p>
            <ul>
              <li style={{ padding: "0 40px" }}>
                Google images (Libres de droits)
              </li>
            </ul>
          </div>
          <div className="main-b main-b-inv text-start">
            <p style={{ padding: "0 40px" }}>Pictograms : </p>
            <ul>
              <li style={{ padding: "0 40px" }}>Fontello</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-b text-light">
        <h2 className="quick-s-2" style={{ padding: "0 40px" }}>
          Les mentions relatives à l'hébergement du site
        </h2>
        <p className="text-start" style={{ padding: "0 40px" }}>
          Le site https://sacha.allardin.v70208.campus-centre.fr/ est hébergé
          par plesk sis au Vordergasse 59, 8200 Schaffhausen
        </p>
      </div>
      <div className="main-b text-light">
        <h2 className="quick-s-2" style={{ padding: "0 40px" }}>
          Protection des données personnelles
        </h2>
        <p className="text-start" style={{ padding: "0 40px" }}>
          Le site n'est pas déclaré à la CNIL, car il ne recueille pas
          d'informations personnelles.
        </p>
      </div>
    </main>
  );
}

export default Mentions;
