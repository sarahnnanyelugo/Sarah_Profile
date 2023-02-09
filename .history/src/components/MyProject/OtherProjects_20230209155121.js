import { Link } from "react-router-dom";
import "./_my-project.scss";
export const OtherProjects = () => {
  return (
    <>
      <div className="col-md-12 project2-body">
        <div className="flexed">
          <span>
            <Link to={"/#"} className="folder">
              <i class="icofont-folder"></i>
            </Link>
          </span>
          <span className="offset-md-10 ">
            <Link to={"/#"} className="ext-link">
              {" "}
              <i class="icofont-external-link"></i>
            </Link>
          </span>
        </div>
        <h5>Time to have more fum</h5>
        <p>
          A single page website for helping me choose where to travel, built
          with Reactjs and SCSS
        </p>
        <br />
        <center>
          {" "}
          <ul className="list-inline ">
            <li className="list-inline-item">ReactJs</li>
            <li className="list-inline-item">HTML</li>
            <li className="list-inline-item">SASS</li>
            <li className="list-inline-item">Bootstrap</li>
          </ul>
        </center>
      </div>
    </>
  );
};
