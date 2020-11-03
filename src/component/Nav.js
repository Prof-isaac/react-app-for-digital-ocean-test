import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const router = useHistory();
  console.log("router", router.location.search);
  const isActive = (route) => {
    if (route === router.location.pathname) {
      return "active";
    }
    return "";
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className={isActive("/")}>
              <Link to="/">Home</Link>
            </li>
            <li className={isActive("/about")}>
              <Link to="/about">about</Link>
            </li>
            <li className={isActive("/fixtures")}>
              <Link to="/fixtures">contact us</Link>
            </li>

            <li>
              <a to="">
                sass <span className="new badge">4</span>
              </a>
            </li>
            <li className={isActive("/login")}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
