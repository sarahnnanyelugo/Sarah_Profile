import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cursor from "../Cursor/Cursor";
import { MyProject } from "../MyProject/MyProject";

import "./_menu.scss";
import Num1 from "../../assets/num1.svg";
import Num2 from "../../assets/num2.svg";
import Num3 from "../../assets/num3.svg";
import Num4 from "../../assets/num4.svg";
import { OtherProjects } from "../MyProject/OtherProjects";

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
                className="switchapp "
                cls="link-alteration3"
                projectName="SwitchApp"
                projectUrl={"/"}
                projectNum={Num1}
              />
              <MyProject
                className="wellspring "
                cls="link-alteration1"
                projectName="Wellspring College"
                projectUrl={"/"}
                projectNum={Num2}
              />
              <MyProject
                className="clairemont "
                projectName="Clairemont School"
                cls="link-alteration2"
                projectUrl={"/"}
                projectNum={Num3}
              />

              <MyProject
                className="maryland"
                projectName="Maryland College"
                cls="link-alteration4"
                projectUrl={"/"}
                projectNum={Num4}
              />
            </div>
            <div className="col-md-8 offset-md-2 flexy">
              <div className="col-md-4">
                <div className="col-md-11">
                  <OtherProjects />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <OtherProjects />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  <OtherProjects />
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
