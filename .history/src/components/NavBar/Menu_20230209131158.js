import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cursor from "../Cursor/Cursor";
import { MyProject } from "../MyProject/MyProject";

import "./_menu.scss";
import Num1 from "../../assets/num1.svg";

export const Menu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        Work
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Cursor />
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="menu-body">
            <div className="col-md-6 offset-md-3">
              <h1>
                Yeah, I work hard{" "}
                <span>
                  <i class="icofont-briefcase"></i>
                </span>
              </h1>
              <small>Each project is unique. Here are some of my works.</small>

              <MyProject
                className="wellspring "
                cls="link-alteration1"
                projectName="Wellspring College"
                projectUrl={"/"}
                projectNum={Num1}
              />
              <MyProject />
              <MyProject />
              <MyProject />
              <MyProject />
              <MyProject />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
