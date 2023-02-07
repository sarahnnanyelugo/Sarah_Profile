import "./_app-modal.scss";

// import ModalImg from "../../assets/read2.png";
// import SampleLogo from "../../assets/wellspring.png";

import React, { useEffect, useRef, useState } from "react";
import Sarah from "../Sarah";

export const AppModal = () => {
  const [showActive, setShowActive] = useState(false);
  const modalContainer = useRef(null);
  const bodyTag = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // modalContainer.addClass("two");
      // document.body.addClass("modal-active");
      setShowActive(true);
      // modalContainer.click(function () {
      // setShowActive(false);
      // this.addClass("out");
      // document.body.removeClass("modal-active");
      // });
    });
  }, []);
  const setThisShowActive = () => {
    setShowActive(!showActive);
  };
  useEffect(() => {
    const setThisShowActive = setTimeout(
      () => console.log("Initial timeout!"),
      1000
    );
  }, []);

  return (
    <>
      <div
        className={`col-md-2 my-app-modal-container ${
          showActive ? "modal-active" : ""
        }`}
      >
        <div
          ref={modalContainer}
          className={`col-md-12 ${showActive ? "two" : ""}`}
          id="modal-container"
        >
          <div className="modal-background col-md-12">
            <button onClick={setThisShowActive} className="close-btn">
              <i class="icofont-close"></i>
            </button>

            <div className="modal col-md-12">
              {/* <h1>SARAH</h1> */}
              <Sarah />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
