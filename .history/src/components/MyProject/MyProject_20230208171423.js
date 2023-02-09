import "./_my-project.scss";
import Preview1 from "../../assets/well.png";

export const MyProject = () => {
  return (
    <>
      <div className="project-body col-md-12 flexed">
        <div className="preview col-md-6 offset-md-1 glass glass--2">
          <img className="col-md-12 col-12" src={Preview1} alt="Scholar" />
        </div>
        <div class="bg-items">
          <div
            class="items"
            style="background-image : url('https://picsum.photos/240/160/?image=1011');"
          >
            <div class="ten i"></div>
            <div class="ten ii"></div>
            <div class="ten iii"></div>
            <div class="ten iv"></div>
            <div class="details">
              <h3>#10</h3>
              <p>this is a description for your photo in your gallery.</p>
              <h6>time &amp; date</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
