import React from "react";
import NavBar from "./NavBar";
import "../styles/Header.css";

function Header() {
  return (
    <div id={"main-header"}>
      <NavBar />
      <div>
        <ul id="social" className="flex">
          <li>
            <a href="tel:+33.7.60.42.40.05">
              <span className="sr-only">07.60.42.40.05</span>
            </a>
          </li>
          <li>
            <a href="mailto:sacha.allardin06@gmail.com">
              <span className="sr-only">sacha.allardin06@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
