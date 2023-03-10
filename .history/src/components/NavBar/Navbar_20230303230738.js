import { Menu } from "./Menu";
import Logo from "../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import CV from "../../assets/my_cv.pdf";

import "./_navbar.scss";
export const Navbar = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const [showActive, setShowActive] = useState(false);
  const [isActive, setActive] = useState("false");
  const HandleToggle = () => {
    setActive(!isActive);
    console.log("clicking !");
  };
  const handleChange = (e) => {
    let isChecked = e.target.checked;
    // do whatever you want with isChecked value
    setShowActive(isChecked);
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // console.log(scrollPosition);
  };
  const setThisShowActive = () => {
    setShowActive(false);
  };
  useEffect(() => {
    // console.log(location.pathname);
    // setThisHome();
    setThisShowActive();
  }, [location]);
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      // console.log("scrolling up");
      setScrollDirection(1);
    } else if (y < window.scrollY) {
      // console.log("scrolling down");
      setScrollDirection(-1);
    }
    setY(window.scrollY);
    handleScroll();
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since it's going to run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  return (
    <>
      <div
        className={`flexy col-md-12 navbar-container ${isHome ? "home" : ""} ${
          scrollPosition >= 400 && scrollDirection < 0 ? "hide" : ""
        }`}
      >
        <Link to={"/"}>
          {" "}
          <img className="col-md-1 col-2 logo" src={Logo} alt="Scholar" />
        </Link>

        <div className="col-md-7">&nbsp;</div>
        <div className="col-md-5">
          <ol className="list-unstyled list-inline">
            <li className="list-inline-item web">
              <a href="#about">
                <span>01.</span>About
              </a>
            </li>{" "}
            <li className="list-inline-item web">
              <a
                href="#experience"
                onClick={HandleToggle}
                className={` ${isActive ? "active" : ""}`}
              >
                <span>02.</span>Experience
              </a>
            </li>
            <li className="list-inline-item web">
              <a href="#">
                <span>03.</span>
                <Menu />
              </a>
            </li>
            <li className="list-inline-item web">
              <a href="#contact">
                <span>04.</span>Contact
              </a>
            </li>
            <li className="list-inline-item web">
              <button className="app-button">
                <a href={CV} target="_blank">
                  {" "}
                  Resume
                </a>
              </button>
            </li>{" "}
            <button
              className={`list-inline-item web ${isActive ? "active" : ""}`}
              onClick={HandleToggle}
            >
              click
            </button>
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

                <ul className="nav-links col-md-12 list-unstyled">
                  <li>
                    <div className=" mobile-links ">
                      <center>
                        {" "}
                        <ul>
                          {" "}
                          <li className="list-inline-item ">
                            <a href="#about">
                              <span>01.</span>About
                            </a>
                          </li>
                          <li className="list-inline-item ">
                            <a href="#experience">
                              <span>02.</span>Experience
                            </a>
                          </li>
                          <li className="list-inline-item ">
                            <a href="#">
                              <span>03.</span>
                              <Menu />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#contact">
                              <span>04.</span>Contact
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href={CV} className="app-button" target="_blank">
                              Resume
                            </a>
                          </li>{" "}
                        </ul>
                      </center>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </ol>
        </div>
      </div>
    </>
  );
};
