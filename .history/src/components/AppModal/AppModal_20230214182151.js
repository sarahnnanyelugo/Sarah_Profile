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
                <div class="patterns">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern
                        id="polka-dots"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                      </pattern>
                      <style>
                        @import url("https://fonts.googleapis.com/css?
                        family=Lora:400,400i,700,700i");
                      </style>
                    </defs>

                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      fill="url(#polka-dots)"
                    >
                      {" "}
                    </rect>

                    <text x="50%" y="60%" text-anchor="middle">
                      Sarah
                    </text>
                  </svg>
                </div>
              </div>
              <Sarah />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
