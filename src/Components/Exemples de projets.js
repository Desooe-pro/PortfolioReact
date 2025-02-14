import React from "react";
import "../styles/Exemples.css";

function ExemplesDeProjets(props) {
  return (
    <section id="projets" className="main-b">
      <h2 className="titre-section">Exemples de projets</h2>
      <div className="projet-nom">
        <div id="DnD" className="main-b main-b-inv projet-nom-b">
          <p className="soustitre-section">D&D?</p>
          <ul className="text-start">
            <li>Python (+module random et time)</li>
            <br />
            <li>Jeu de rôle textuel en tour par tour</li>
            <br />
            <li>
              J'ai toujours eu envie de coder un jeu vidéo et au début de mon
              année de terminal, j'ai découvert la programmation orientée objet
              (POO). <br />
              C'était LA chose qu'il me manquait pour le faire. Je me suis donc
              mis à coder chez moi sur se projet que j'ai nommé D&D? pour car je
              me suis basé sur Donjons et dragons (Un jeu de rôle) pour le
              faire.
            </li>
            <br />
            <li>
              Seul avec le colaboratory de google (Pas forcement la meilleur
              idée que j'ai eu mais très pratique pour un premier test)
            </li>
          </ul>
          <div className="video-projets">
            <div className="video-projets2">
              <div className="download-projets">
                <p>
                  <a href="DnD.html">Vidéo de démo</a>
                </p>
              </div>
              <div className="download-projets">
                <p>
                  <a target="_blank" href="./assets/Projets_zip/DnD.zip">
                    Télécharger le projet
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="message">
                <p>
                  Il vous faudra très probablement installer le logiciel Python
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="RPG" className="main-b main-b-inv projet-nom-b">
          <p className="soustitre-section">Projet RPG</p>
          <ul className="text-start">
            <li>Python (+module random, pygame, sys et time)</li>
            <li>Jeu de rôle en tour par tour (avec une interface graphique)</li>
            <li>
              Au cours de mon année de terminale, un projet de groupe en rapport
              avec le thème du moment nous a été donné. Il nous fallait faire un
              jeu vidéo du style que nous souhaitions avec une interface
              graphique obligatoire. <br />
              Nous étions trois pour coder de zero un jeu vidéo avec une
              interface graphique fonctionnelle. Etant tous trois fan de jeu de
              rôle, nous avons décidé d'en faire un et même si ce n'était pas
              l'idée la plus simple à réaliser, ce n'est pas ça qui allait nous
              arrêter.
            </li>
            <li>
              En groupe de trois avec un éditeur de code python et replit qui
              nous permettait de nous partager le code aisément
            </li>
          </ul>
          <div className="video-projets">
            <div className="video-projets2">
              <div className="download-projets">
                <p>
                  <a href="Projet_RPG.html">Vidéo de démo</a>
                </p>
              </div>
              <div className="download-projets">
                <p>
                  <a target="_blank" href="./assets/Projets_zip/Projet RPG.zip">
                    Télécharger le projet
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="message">
                <p>
                  Il vous faudra très probablement installer le logiciel Python
                  ainsi que les modules adaptés
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExemplesDeProjets;
