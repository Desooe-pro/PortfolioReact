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
    { id: "2", side: "" },
    { id: "3", side: "" },
    { id: "4", side: "" },
    { id: "5", side: "" },
    { id: "6", side: "" },
    { id: "7", side: "" },
  ]);

  function HandlePrecedent() {
    if (slide > 1) {
      setSlide(slide - 1);
      blocs[slide - 1].side = "Left";
      blocs[slide - 1].side = "Right";
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
              : slide < 1 && blocs[0].side !== ""
                ? "slideSui"
                : blocs[0].side !== ""
                  ? "slidePre"
                  : "slideNone"
          }
        >
          <Intro />
        </div>
        <div
          className={
            slide === 2
              ? `slideShow Slide${blocs[1].side}`
              : slide < 2 && blocs[1].side !== ""
                ? "slideSui"
                : blocs[1].side !== ""
                  ? "slidePre"
                  : "slideNone"
          }
        >
          <Presentation />
        </div>
        <div
          className={
            slide === 3
              ? `slideShow Slide${blocs[2].side}`
              : slide < 3 && blocs[2].side !== ""
                ? "slideSui"
                : blocs[2].side !== ""
                  ? "slidePre"
                  : "slideNone"
          }
        >
          <DC />
        </div>
        <div
          className={
            slide === 4
              ? `slideShow Slide${blocs[3].side}`
              : slide < 4 && blocs[3].side !== ""
                ? "slideSui"
                : blocs[3].side !== ""
                  ? "slidePre"
                  : "slideNone"
          }
        >
          <Competences />
        </div>
        <div
          className={
            slide === 5
              ? `slideShow Slide${blocs[4].side}`
              : slide < 5 && blocs[4].side !== ""
                ? "slideSui"
                : blocs[4].side !== ""
                  ? "slidePre"
                  : "slideNone"
          }
        >
          <Langages />
        </div>
        <div
          className={
            slide === 6
              ? `slideShow Slide${blocs[5].side}`
              : slide < 6 && blocs[5].side !== ""
                ? "slideSui"
                : blocs[5].side !== ""
                  ? "slidePre"
                  : "slideNone"
          }
        >
          <ExemplesDeProjets />
        </div>
        <div
          className={
            slide === 7
              ? `slideShow Slide${blocs[6].side}`
              : slide < 7 && blocs[6].side !== ""
                ? "slideSui"
                : blocs[6].side !== ""
                  ? "slidePre"
                  : "slideNone"
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
