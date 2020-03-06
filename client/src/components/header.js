import React from "react";
import Logo from "../assets/Logo/Logo-instock.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={Logo} alt="Logo" />
      </NavLink>
      <nav className="header__nav">
        <NavLink
          to="/news"
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          News
        </NavLink>
        <NavLink
          to="/post"
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          Post
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
