import { Menu } from "./Menu";
import Logo from "../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MobileAccordion from "./MobileAccordion/MobileAccordion";

import "./_navbar.scss";
export const Navbar = () => {
  const location = useLocation();

  const [showActive, setShowActive] = useState(false);
  const handleChange = (e) => {
    let isChecked = e.target.checked;
    // do whatever you want with isChecked value
    setShowActive(isChecked);
  };
  const setThisShowActive = () => {
    setShowActive(false);
  };
  useEffect(() => {
    // console.log(location.pathname);
    // setThisHome();
    setThisShowActive();
  }, [location]);

  return (
    <>
      <div className="navbar-container flexy col-12">
        <Link to={"/"}>
          {" "}
          <img className="col-md-1 col-2 logo" src={Logo} alt="Scholar" />
        </Link>

        <div className="col-md-7">&nbsp;</div>
        <div className="col-md-4">
          <ol className="list-unstyled list-inline">
            <li className="list-inline-item web">
              <a href="#about">
                <span>01.</span>About
              </a>
            </li>{" "}
            <li className="list-inline-item web">
              <a href="#experience">
                <span>02.</span>Experience
              </a>
            </li>
            <li className="list-inline-item web">
              <Menu />
            </li>
            <li className="list-inline-item web">
              <a href="#contact">
                <span>03.</span>Contact
              </a>
            </li>
            <li className="list-inline-item web">
              <button className="app-button">Resume</button>
            </li>{" "}
            <div className="mobile-menu col-md-12 ">
              {" "}
              <nav>
                <input
                  type="checkbox"
                  id="hamburger1"
                  checked={showActive}
                  onChange={(e) => handleChange(e)}
                />
                <label for="hamburger1" className="buga"></label>
              </nav>
            </div>
          </ol>
        </div>
      </div>
    </>
  );
};
