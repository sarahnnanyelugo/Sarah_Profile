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
              <div className="sarah">
                <svg viewBox="0 0 960 300">
                  <symbol id="s-text">
                    <text text-anchor="middle" x="50%" y="80%">
                      SARAH
                    </text>
                    <text text-anchor="middle" x="52%" y="80%">
                      SARAH
                    </text>
                  </symbol>

                  <g class="g-ants">
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                  </g>
                </svg>
              </div>
              <Sarah />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
