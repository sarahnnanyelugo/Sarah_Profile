import "./_my-project.scss";
import Preview1 from "../../assets/well.png";

export const MyProject = () => {
  return (
    <>
      <div className="project-body col-md-12 flexed">
        <div className="preview col-md-6 offset-md-1 glass glass--2">
          <p className="hide">text</p>
          <img className="col-md-12 col-12" src={Preview1} alt="Scholar" />
        </div>
      </div>
    </>
  );
};
