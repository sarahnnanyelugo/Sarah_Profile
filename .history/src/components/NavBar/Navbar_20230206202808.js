import { Menu } from "./Menu";
import "./_navbar.scss";
export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <h1>Logo</h1>
        <Menu />
      </div>
    </>
  );
};