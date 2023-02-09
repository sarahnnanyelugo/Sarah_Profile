import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cursor from "../Cursor/Cursor";

import "./_menu.scss";
import MovingComponent from "react-moving-text";

const AnimationsForChaining = ["flipFromTop"];
export const Menu = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    // eslint-disable-next-line no-undef
    setAnimationType(selectedItems[animationIndex + 1]);
  };
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
          <Offcanvas.Title>Work</Offcanvas.Title>
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
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
