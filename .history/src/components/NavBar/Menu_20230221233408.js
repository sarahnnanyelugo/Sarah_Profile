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
import Logo from "../../assets/switchapp-logo.png";
import Maryland from "../../assets/MaryLandlogo.png";
import Wellspring from "../../assets/wellspring.png";
import Clairemont from "../../assets/clairemont-logo.png";
import { OtherProjects } from "../MyProject/OtherProjects";
import Switchapp from "../../assets/switchapp-fs.png";
import ClairemontFS from "../../assets/clairemont-fs.png";
import WellspringFS from "../../assets/wellspring-fs.png";
import MarylandFS from "../../assets/maryland-fs.png";

export const Menu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        Projects
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
                projectUrl={"https://switchappgo.com/"}
                projectNum={Num1}
                projectLogo={Logo}
                fullScreen={Switchapp}
                FW1="Reactjs"
                FW2="Html"
                FW3="SASS"
                FW4="React Carbon Design System"
                projectPreview=" mobile-switch"
              />
              <MyProject
                className="wellspring "
                cls="link-alteration1"
                projectName="Wellspring College"
                projectUrl={"https://wellspring.vercel.app/"}
                gitUrl={"https://github.com/sarahnnanyelugo/wellspring"}
                projectNum={Num2}
                projectLogo={Wellspring}
                fullScreen={WellspringFS}
                FW1="Reactjs"
                FW2="Html"
                FW3="SASS"
                FW4="Bootstrap"
              />
              <MyProject
                className="clairemont "
                projectName="Clairemont School"
                cls="link-alteration2"
                projectUrl={"https://clairemontschool.vercel.app/"}
                gitUrl={"https://github.com/sarahnnanyelugo/ClairemontSchool"}
                projectNum={Num3}
                projectLogo={Clairemont}
                fullScreen={ClairemontFS}
                FW1="HTML"
                FW2="CSS"
                FW3="Bootstrap"
              />

              <MyProject
                className="maryland"
                projectName="Maryland College"
                cls="link-alteration4"
                projectUrl={"https://maryland-school.vercel.app/"}
                gitUrl={"https://github.com/sarahnnanyelugo/marylandSchool"}
                projectNum={Num4}
                projectLogo={Maryland}
                fullScreen={MarylandFS}
                FW1="Reactjs"
                FW2="Html"
                FW3="CSS"
                FW4="Bootstrap"
                projectPreview=" maryland-mobile"
              />
            </div>
            <div
              className="col-md-8 offset-md-2 flexy"
              style={{ marginBottom: "30px" }}
            >
              <div className="col-md-4">
                <div className="col-md-11">
                  <OtherProjects
                    projectName="Expense Tracker"
                    projectDescription="A single paged application built for helping me keep track of my expenses which can be filtered by year and month"
                    FW1="Reactjs"
                    FW2="Html"
                    FW3="CSS"
                    FW4=""
                  />
                </div>
                <div className="col-md-11">
                  <OtherProjects
                    projectName="Mater Ecclesiae College"
                    projectDescription="Mater Ecclesiae College is a Catholic Secondary school located in Lagos State, Nigeria. This is their official website billt to fit their requirements"
                    FW1="Reactjs"
                    FW2="Html"
                    FW3="CSS"
                    FW4="Bootstrap"
                    linkUrl={"https://materecclesiae.vercel.app/"}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  {" "}
                  <OtherProjects
                    projectName="To-Do list"
                    projectDescription="A single paged application built with the intention of keeping a list of my daily goals"
                    FW1="Reactjs"
                    FW2="Html"
                    FW3="CSS"
                    FW4="Bootstrap"
                  />
                </div>
                <div className="col-md-11">
                  {" "}
                  <OtherProjects
                    projectName="Lagoon Schools"
                    projectDescription="Lagoon Schools is an all-girls secondary school situated in the heart of Lagos State Nigeria. This is their official website and I hope you like it"
                    FW1="Reactjs"
                    FW2="Html"
                    FW3="CSS"
                    FW4="Bootstrap"
                    linkUrl={"https://lagoon-alpha.vercel.app/"}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  {" "}
                  <OtherProjects
                    projectName="Bloombreed Academy"
                    projectDescription="Bloombreed Academy is a school located in the heart of Portharcourt Nigeria. This is their official website I built to their direct specifications"
                    FW2="Html"
                    FW3="CSS"
                    FW4="Bootstrap"
                    linkUrl={"https://bloombreedschool.vercel.app/"}
                  />
                </div>
                <div className="col-md-11">
                  {" "}
                  <OtherProjects
                    projectName="Evergreen Schools"
                    projectDescription="Evegreen Schools is a private school located in Enugu State, Nigeria. They wanted a calmly themed website and this won their satisfaction"
                    FW1="Reactjs"
                    FW2="Html"
                    FW3="CSS"
                    FW4="Bootstrap"
                    linkUrl={"https://materecclesiae.vercel.app/"}
                  />
                </div>
              </div>
            </div>
            <a
              href="https://vercel.com/dashboard"
              className="offset-md-2 more"
              target="_blank"
            >
              And lots more...
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
