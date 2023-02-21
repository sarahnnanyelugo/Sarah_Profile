import "./_my-project.scss";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const MyProject = ({ className, cls, projectPreview, ...props }) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(!show);
  }
  return (
    <>
      {" "}
      <div className="project-body col-md-12 flexed">
        {values.map((v, idx) => (
          <div
            className={`preview col-md-6 col-7 offset-md-1 me-2 mb-2 ${className}`}
            // key={idx}
            onClick={() => handleShow(v)}
          >
            <Modal
              show={show}
              fullscreen={fullscreen}
              onClick={() => handleShow}
            >
              <Modal.Header closeButton> </Modal.Header>
              <Modal.Body>
                {" "}
                {/* <img
                  className="col-md-12 col-12 "
                  src={props.fullScreen}
                  alt="preview"
                  width="100%"
                /> */}
                <div className={`col-md-12 ${projectPreview}`}>
                  <h1 className={`col-md-12 ${projectPreview}`}>
                    bhcbhbhdbcuy udhuchuydcc jdhc bdccdgcyhdbc dchdgcyc hdcgd
                    cuudgc ydcgyud
                  </h1>
                </div>
              </Modal.Body>
            </Modal>
            <center>
              {" "}
              <div className="project-logo">
                {" "}
                <img
                  className="col-md-1"
                  src={props.projectLogo}
                  alt="num"
                  width="40%"
                />
              </div>
            </center>

            {typeof v === "string" && `below ${v.split("-")[0]}`}
          </div>
        ))}
        <div className="col-md-5 col-4 about">
          <center>
            {" "}
            <h4>{props.projectName}</h4>
            <br />
            <h6 style={{ marginTop: "30px" }}>Built with</h6>
            <ul
              className="list-unstyled list-inline"
              style={{ marginBottom: "40px" }}
            >
              <li className="list-inline-item">{props.FW1}</li>
              <li className="list-inline-item">{props.FW2}</li>
              <li className="list-inline-item">{props.FW3}</li>
              <li className="list-inline-item">{props.FW4}</li>
            </ul>
          </center>
          <center>
            <a
              href={props.projectUrl}
              target="_blank"
              className={`cool-link ${cls}`}
            >
              VISIT THE WEBSITE
            </a>
          </center>

          <a href={props.gitUrl} target="_blank">
            <i class="icofont-github"></i>
          </a>
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
