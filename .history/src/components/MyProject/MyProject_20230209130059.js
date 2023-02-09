import "./_my-project.scss";
import Num1 from "../../assets/num1.svg";

export const MyProject = ({ className, cls }) => {
  return (
    <>
      {" "}
      <div className="project-body col-md-12 flexed">
        <div className={`preview col-md-6 offset-md-1 ${className}`}></div>

        <div className="col-md-5 about">
          <center>
            {" "}
            <h4>Wellspring College</h4>
            <br />
            <a
              href="#"
              target="_blank"
              className="cool-link link-alteration"
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
            src={Num1}
            alt="Scholar"
            width="100%"
          />
        </div>
      </div>
    </>
  );
};
