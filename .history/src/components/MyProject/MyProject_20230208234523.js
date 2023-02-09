import "./_my-project.scss";
import Preview1 from "../../assets/well.png";

export const MyProject = () => {
  return (
    <>
      <div className="project-body col-md-12 flexed">
        <div className="preview col-md-6 offset-md-1 "></div>

        <div className="col-md-5 about">
          <center>
            {" "}
            <h4>Wellspring College</h4>
            <br />
            <h6>
              <a href="#" target="_blank" className="cool-link">
                VISIT THE WEBSITE
              </a>
            </h6>
            <br />
            <h3>
              <i class="icofont-github"></i>
            </h3>
          </center>
        </div>
      </div>
    </>
  );
};
