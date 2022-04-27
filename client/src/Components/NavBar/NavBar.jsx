import React from "react";
import {NavLink, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Images/Manga-Multiplex.jpg";
import "./NavBar.css";
import { useHistory } from "react-router-dom";

export default function NavBar() {
    const history = useHistory();
    const id = localStorage.getItem('userId');

    const logButt = () => {
      if(id != undefined){
        return (
          <div onClick={()=>{
            localStorage.removeItem('userId');
            history.push('/');
          }}>
            Logout
          </div>
        );
      }else{
        return (
          <div onClick={()=>{
            history.push('/login');
          }}>
            Login
          </div>
        );
      }
    };

    
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
                View Staff
                </NavLink>
              </li>
              <li class="nav-item nav-link">
                <NavLink
                  to="/1"
                  className="ind-link"
                  activeClassName="ind-link-selected"
                >
                Book Show
                </NavLink>
              </li>
              <li class="nav-item nav-link">
                <NavLink
                  to="/2"
                  className="ind-link"
                  activeClassName="ind-link-selected"
                >
                Edit Profile
                </NavLink>
              </li>
              <li class="nav-item nav-link">
                <NavLink
                  to="/profile"
                  className="ind-link"
                  activeClassName="ind-link-selected"
                >
                  <div>Profile</div>
                </NavLink>
              </li>
              <li class="nav-item nav-link">
                <NavLink
                  to="/login"
                  className="ind-link"
                  activeClassName="ind-link-selected"
                >
                    {logButt()}
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
