import "./_my-project.scss";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Screen from "../../assets/num1.svg";

export const MyProject = ({ className, cls, ...props }) => {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      {" "}
      <div className="project-body col-md-12 flexed">
        {values.map((v, idx) => (
          <div
            className={`preview col-md-6 offset-md-1 me-2 mb-2 ${className}`}
          >
            <Modal
              show={show}
              fullscreen={fullscreen}
              onHide={() => setShow(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>Modal body content</Modal.Body>
            </Modal>
            <div className="logo">
              {" "}
              <center>
                <img
                  className="col-md-1"
                  src={props.projectLogo}
                  alt="num"
                  width="40%"
                />
              </center>
            </div>
          </div>
        ))}
        <div className="col-md-5 about">
          <center>
            {" "}
            <h4>{props.projectName}</h4>
            <br />
            <a
              href={props.projectUrl}
              target="_blank"
              className={`cool-link ${cls}`}
            >
              VISIT THE WEBSITE
            </a>
            <br />
            <h3>
              <i class="icofont-github"></i>
            </h3>
          </center>
        </div>
        <div className="col-md-2 col-2 numbers">
          <img
            className="col-md-12 col-2 "
            src={props.projectNum}
            alt="num"
            width="100%"
          />
        </div>
      </div>
    </>
  );
};
