import React from "react";
import {NavLink, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Images/Manga-Multiplex.jpg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid _container">
          <div class="navbar-brand _logo col-1">
            <a class="navbar-brand" href="/">
              <img
                src={logo}
                width="37"
                height="36"
                className="d-inline-block align-middle logo-img"
                alt=""
              />
              <span className="logo-name d-inline-block align-middle">
                Manga Multiplex
              </span>
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            dataToggle="collapse"
            dataTarget="#navbarNav"
            ariaControls="navbarNav"
            ariaExpanded="false"
            ariaLabel="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end _nav-container"
            id="navbarNav"
          >
            <ul class="navbar-nav link-container">
              <li class="nav-item nav-link">
                <NavLink
                  to="/0"
                  className="ind-link"
                  activeClassName="ind-link-selected"
                >
                  Nav 0
                </NavLink>
              </li>
              <li class="nav-item nav-link">
                <NavLink
                  to="/1"
                  className="ind-link"
                  activeClassName="ind-link-selected"
                >
                  Nav 1
                </NavLink>
              </li>
              <li class="nav-item nav-link">
                <NavLink
                  to="/2"
                  className="ind-link"
                  activeClassName="ind-link-selected"
                >
                  Nav 2
                </NavLink>
              </li>
              <li class="nav-item nav-link">
                <NavLink
                  to="/3"
                  className="ind-link"
                  activeClassName="ind-link-selected"
                >
                  Nav 3
                </NavLink>
              </li>
              <li class="nav-item nav-link">
                <NavLink
                  to="/4"
                  className="ind-link"
                  activeClassName="ind-link-selected"
                >
                  Nav 4
                </NavLink>
              </li>
            </ul>
            {/* <span class="navbar-text">{logButt()}</span> */}
          </div>
        </div>
      </nav>
    </>
  );
}
