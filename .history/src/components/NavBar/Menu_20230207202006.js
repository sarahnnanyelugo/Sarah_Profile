import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cursor from "../Cursor/Cursor";
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
          <Offcanvas.Title>Work</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some of my works</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
