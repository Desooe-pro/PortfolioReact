import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import LOGO from "../img/LogoSACarre150.png";

function NavBar() {
  return (
    <nav className="navigation" style={{ display: "flex" }}>
      <div>
        <a href={"/"} className={"logo"}>
          <img src={LOGO} alt={""} width={70} height={70} />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
