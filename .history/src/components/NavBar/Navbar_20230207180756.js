import { Menu } from "./Menu";
import Logo from "../../assets/logo.png";

import "./_navbar.scss";
export const Navbar = () => {
  return (
    <>
      <div className="navbar-container flexy">
        <img className="col-md-1 col-12 logo" src={Logo} alt="Scholar" />

        <div className="col-md-9">&nbsp;</div>
        <Menu />
      </div>
    </>
  );
};
