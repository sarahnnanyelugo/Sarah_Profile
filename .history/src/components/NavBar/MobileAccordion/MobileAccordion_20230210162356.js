import React, { useEffect, useState } from "react";
import "./_mobile-accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link, NavLink, useLocation } from "react-router-dom";

const MobileAccordion = () => {
  const location = useLocation(false);
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  // const setThisShowActive = () => {
  //   setShowActive(!showActive);
  // };
  // useEffect(() => {
  //   console.log(location.pathname);
  //   setThisShowActive();
  //   setThisShowActive();
  // }, [location]);
  return (
    <div className=" mobile-accordion ">
      <p>
        <a href="#">contacts</a>
      </p>
      <p>
        <a href="#">contacts</a>
      </p>
      <p>
        <a href="#">contacts</a>
      </p>
      <p>
        <a href="#">contacts</a>
      </p>
      <p>
        <a href="#">contacts</a>
      </p>
    </div>
  );
};
export default MobileAccordion;
