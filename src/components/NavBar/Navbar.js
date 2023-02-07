import { Menu } from "./Menu";
import "./_navbar.scss";
export const Navbar = () => {
  return (
    <>
      <div className="navbar-container flexy">
        <h1>Logo</h1>
        <div className="col-md-9">&nbsp;</div>
        <Menu />
      </div>
    </>
  );
};
