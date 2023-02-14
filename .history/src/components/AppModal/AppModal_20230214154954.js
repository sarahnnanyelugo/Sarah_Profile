import "./_app-modal.scss";

// import ModalImg from "../../assets/read2.png";
// import SampleLogo from "../../assets/wellspring.png";

import React, { useEffect, useRef, useState } from "react";
import Sarah from "./Sarah";

export const AppModal = () => {
  const [showActive, setShowActive] = useState(false);
  const modalContainer = useRef(null);
  const bodyTag = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowActive(true);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowActive(false);
    }, 3000);
  }, []);
  const setThisShowActive = () => {
    setShowActive(!showActive);
  };

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
            {/* <button onClick={setThisShowActive} className="close-btn">
              <i class="icofont-close"></i>
            </button> */}

            <div className="modal col-md-12">
              <h4 className="sarah">SARAH</h4>
              <Sarah />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
