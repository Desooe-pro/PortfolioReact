import React, { useState } from "react";
import Intro from "../Components/Intro";
import Loisirs from "../Components/Loisirs";
import Presentation from "../Components/Presentation";
import Competences from "../Components/Competences";
import DC from "../Components/D-C";
import Langages from "../Components/Langages";
import ExemplesDeProjets from "../Components/Exemples de projets";
import "../styles/Home.css";

function Home() {
  const [slide, setSlide] = useState(1);
  const [blocs, setblocs] = useState([
    { id: "1", side: "Right" },
    { id: "2", side: "Right" },
    { id: "3", side: "Right" },
    { id: "4", side: "Right" },
    { id: "5", side: "Right" },
    { id: "6", side: "Right" },
    { id: "7", side: "Right" },
  ]);

  function HandlePrecedent() {
    if (slide > 1) {
      setSlide(slide - 1);
      blocs[slide - 1].side = "Left";
    }
  }

  function HandleSuivant() {
    if (slide < 7) {
      setSlide(slide + 1);
      blocs[slide - 1].side = "Left";
      blocs[slide].side = "Right";
    }
  }

  return (
    <div>
      <main id="main-content">
        <div
          className={
            slide === 1
              ? `slideShow Slide${blocs[0].side}`
              : slide < 1
                ? "slideSui"
                : "slidePre"
          }
        >
          <Intro />
        </div>
        <div
          className={
            slide === 2
              ? `slideShow Slide${blocs[1].side}`
              : slide < 2
                ? "slideSui"
                : "slidePre"
          }
        >
          <Presentation />
        </div>
        <div
          className={
            slide === 3
              ? `slideShow Slide${blocs[2].side}`
              : slide < 3
                ? "slideSui"
                : "slidePre"
          }
        >
          <DC />
        </div>
        <div
          className={
            slide === 4
              ? `slideShow Slide${blocs[3].side}`
              : slide < 4
                ? "slideSui"
                : "slidePre"
          }
        >
          <Competences />
        </div>
        <div
          className={
            slide === 5
              ? `slideShow Slide${blocs[4].side}`
              : slide < 5
                ? "slideSui"
                : "slidePre"
          }
        >
          <Langages />
        </div>
        <div
          className={
            slide === 6
              ? `slideShow Slide${blocs[5].side}`
              : slide < 6
                ? "slideSui"
                : "slidePre"
          }
        >
          <ExemplesDeProjets />
        </div>
        <div
          className={
            slide === 7
              ? `slideShow Slide${blocs[6].side}`
              : slide < 7
                ? "slideSui"
                : "slidePre"
          }
        >
          <Loisirs />
        </div>
      </main>
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <button
          id={"Bouton"}
          className={slide > 1 ? "btn" : "btnDown"}
          style={{ width: "100px" }}
          onClick={HandlePrecedent}
        >
          ◀ Précédent
        </button>
        <button
          className={slide < 7 ? "btn" : "btnDown"}
          style={{ width: "100px" }}
          onClick={HandleSuivant}
        >
          Suivant ▶
        </button>
      </div>
    </div>
  );
}

export default Home;
