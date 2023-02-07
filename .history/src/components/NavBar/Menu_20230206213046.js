import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./_menu.scss";
export const Menu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        Some Things I’ve Built
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Some things I have built</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some of my works</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
