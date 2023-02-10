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
              <button className="app-button">Resume</button>
            </li>{" "}
          </ol>
        </div>
      </div>
      <div class="card" tabindex="0">
        <span class="card__infoicon">
          <i class="fa fa-info"></i>
        </span>
        <h1 class="card__title">This is a title</h1>
        <p class="card__description">
          Lorem ipsum dolor sit amet and this is all the lorem ipsum text I
          remember
        </p>

        <p class="card__credits">
          Thanks{" "}
          <a
            class="card__reference"
            href="https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow"
          >
            Gary Simon
          </a>{" "}
          for the inspiration
        </p>
      </div>
    </>
  );
};
