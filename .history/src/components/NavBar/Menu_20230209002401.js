import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cursor from "../Cursor/Cursor";
import { MyProject } from "../MyProject/MyProject";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import "./_menu.scss";

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
          <div data-scroll-section>
            <div className="menu-body">
              <div className="col-md-6 offset-md-3">
                <h1>
                  Yeah, I work hard{" "}
                  <span>
                    <i class="icofont-briefcase"></i>
                  </span>
                </h1>
                <small>
                  Each project is unique. Here are some of my works.
                </small>

                <MyProject />
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
