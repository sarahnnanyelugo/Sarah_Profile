import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cursor from "../Cursor/Cursor";
import { MyProject } from "../MyProject/MyProject";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import "./_menu.scss";

export const Menu = () => {
  const { scroll } = useLocomotiveScroll();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div data-scroll-section>
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
                <small>
                  Each project is unique. Here are some of my works.
                </small>

                <MyProject />
                <MyProject />
                <MyProject />
                <MyProject />
                <MyProject />
                <MyProject />
                <MyProject />
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};
