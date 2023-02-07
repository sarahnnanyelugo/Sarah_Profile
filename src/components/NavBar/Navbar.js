import { Menu } from "./Menu";
import Logo from "../../assets/logo.png";

import "./_navbar.scss";
export const Navbar = () => {
  return (
    <>
      <div className="navbar-container flexy">
        <img className="col-md-1 col-12 logo" src={Logo} alt="Scholar" />

        <div className="col-md-7">&nbsp;</div>
        <div className="col-md-4">
          <ol className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="#about">
                <span>01.</span>About
              </a>
            </li>{" "}
            <li className="list-inline-item">
              <a href="#experience">
                <span>02.</span>Experience
              </a>
            </li>
            <li className="list-inline-item">
              <Menu />
            </li>
            <li className="list-inline-item">
              <a href="#contact">
                <span>03.</span>Contact
              </a>
            </li>
            <li className="list-inline-item">
              <button>Resume</button>
            </li>{" "}
          </ol>
        </div>
      </div>
    </>
  );
};
