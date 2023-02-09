import { Link } from "react-router-dom";
import "./_my-project.scss";
export const OtherProjects = () => {
  return (
    <>
      <div className="col-md-12 project2-body">
        <div className="flexed">
          <span>
            <Link to={"/#"} className="link-alteration">
              <i class="icofont-folder"></i>
            </Link>
          </span>
          <span>
            <Link to={"/#"} className="link-alteration">
              {" "}
              <i class="icofont-external-link"></i>
            </Link>
          </span>
        </div>
        <h6>Time to have more fum</h6>
        <p>
          A single page website for helping me choose where to travel, built
          with Reactjs and SCSS
        </p>
        <br />
        <ul className="list-inline ">
          <li className="list-inline-item">ReactJs</li>
          <li className="list-inline-item">HTML</li>
          <li className="list-inline-item">SASS</li>
          <li className="list-inline-item">Bootstrap</li>
        </ul>
      </div>
    </>
  );
};
