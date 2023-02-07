import { Menu } from "./Menu";
import Logo from "../../assets/logo.jpeg";

import "./_navbar.scss";
export const Navbar = () => {
  return (
    <>
      <div className="navbar-container flexy">
        <img className="col-md-9 col-12" src={Logo} alt="Scholar" />

        <div className="col-md-9">&nbsp;</div>
        <Menu />
      </div>
    </>
  );
};
