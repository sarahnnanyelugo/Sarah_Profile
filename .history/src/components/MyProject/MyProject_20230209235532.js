import "./_my-project.scss";
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Screen from "../../assets/num1.svg";

export const MyProject = ({ className, cls, ...props }) => {
  const [indexOfImages, setIndexOfImages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {" "}
      <div className="project-body col-md-12 flexed">
        <div
          className={`preview col-md-6 offset-md-1 ${className}`}
          onClick={() => setShowModal(true)}
        >
          <img
            src={Screen}
            alt="web full view"
            onClick={() => setIndexOfImages(index)}
          />
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
