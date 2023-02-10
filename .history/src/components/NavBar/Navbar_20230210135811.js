import { Menu } from "./Menu";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import "./_navbar.scss";
export const Navbar = () => {
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
                <Link to={"/"} className={`  ${isHome ? "hide-logo" : ""}`}>
                  {" "}
                  <img
                    className="col-md-2 col-2 ml2 mobile-logo"
                    src={Logo}
                    alt="Scholar"
                  />
                </Link>
                <input
                  type="checkbox"
                  id="hamburger1"
                  checked={showActive}
                  onChange={(e) => handleChange(e)}
                />
                <label for="hamburger1" className="buga"></label>

                <ul className="nav-links col-md-12 list-unstyled">
                  <li>
                    {/* <MobileAccordion /> */}
                    <h1>mobile menu</h1>
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
