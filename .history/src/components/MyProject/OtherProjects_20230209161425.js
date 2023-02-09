import { Link } from "react-router-dom";
import "./_my-project.scss";
export const OtherProjects = (props) => {
  return (
    <>
      <div className="col-md-12 project2-body">
        <div className="flexed">
          <span>
            <Link to={props.folderUrl} className="folder">
              <i class="icofont-folder"></i>
            </Link>
          </span>
          <span className="offset-md-10 ">
            <Link to={props.linkUrl} className="ext-link">
              {" "}
              <i class="icofont-external-link"></i>
            </Link>
          </span>
        </div>
        <h5>{props.projectName}</h5>
        <p>{props.projectDescription}</p>
        <br />
        <center>
          {" "}
          <ul className="list-inline ">
            <li className="list-inline-item">{props.FW1}</li>
            <li className="list-inline-item">{props.FW2}</li>
            <li className="list-inline-item">{props.FW3}</li>
            <li className="list-inline-item">{props.FW4}</li>
          </ul>
        </center>
      </div>
    </>
  );
};
