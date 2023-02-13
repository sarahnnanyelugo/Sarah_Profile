import { Link } from "react-router-dom";
import "./_my-project.scss";
export const OtherProjects = (props) => {
  return (
    <>
      <div className="col-md-12 project2-body col-10">
        <a href={props.linkUrl}>
          <div className="flexed">
            <span>
              <a href={props.folderUrl} className="folder" target="_blank">
                <i class="icofont-folder"></i>
              </a>
            </span>
            <span className="offset-md-10 offset-10">
              <a href={props.linkUrl} className="ext-link" target="_blank">
                {" "}
                <i class="icofont-external-link"></i>
              </a>
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
        </a>
      </div>
    </>
  );
};
