import "./_my-project.scss";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import Screen from "../../assets/num1.svg";

export const MyProject = ({ className, cls, ...props }) => {
  return (
    <>
      {" "}
      <div className="project-body col-md-12 flexed">
        <div className={`preview col-md-6 offset-md-1 ${className}`}>
          <Lightbox image="Screen" title="Image Title">

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
