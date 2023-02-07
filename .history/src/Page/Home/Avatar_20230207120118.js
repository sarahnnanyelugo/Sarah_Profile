import React, { useState } from "react";
import MovingComponent from "react-moving-text";
import Avatar from "../../assets/pa4.png";

const AnimationsForChaining = ["slideInFromLeft"];

export const Profile = () => {
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
          <img className="col-md-9 col-12" src={Avatar} alt="Scholar" />
        </MovingComponent>
      </div>
    </>
  );
};
