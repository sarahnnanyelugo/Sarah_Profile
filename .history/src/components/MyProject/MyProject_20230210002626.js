import "./_my-project.scss";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Switchapp from "../../assets/switchapp-fs.png";

export const MyProject = ({ className, cls, ...props }) => {
  const values = [true];
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
            // key={idx}
            onClick={() => handleShow(v)}
          >
            <Modal
              show={show}
              fullscreen={fullscreen}
              onHide={() => setShow(false)}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                {" "}
                <img
                  className="col-md-12 col-2 "
                  src={Switchapp}
                  alt="num"
                  width="100%"
                />
              </Modal.Body>
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
            {typeof v === "string" && `below ${v.split("-")[0]}`}
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
