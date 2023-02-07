import React, { useState } from "react";
import MovingComponent from "react-moving-text";

const AnimationsForChaining = ["slideInFromLeft"];

export const MyScreen = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    // eslint-disable-next-line no-undef
    setAnimationType(selectedItems[animationIndex + 1]);
  };

  return (
    <>
      {" "}
      <div className="col-md-12">
        {" "}
        <MovingComponent
          onAnimationEnd={handleChainAnimation}
          type={animationType}
          duration="4000ms"
          timing="linear"
          fillMode="forwards"
          iteration={1}
        >
          <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>{" "}
          <div class="center2">
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
          </div>{" "}
          <div class="center3">
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
          </div>{" "}
        </MovingComponent>
      </div>
    </>
  );
};
