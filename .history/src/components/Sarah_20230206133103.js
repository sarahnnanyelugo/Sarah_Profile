import { useSpring, animated, config } from "react-spring";
import { useEffect, useState } from "react";
// import "./styles.css";

function useAnimatedPath({ toggle, delay }) {
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length,
    strokeDasharray: length,
    delay,
    config: config.slow,
  });

  return {
    style: animatedStyle,
    ref: (ref) => {
      if (ref) {
        setLength(ref.getTotalLength());
      }
    },
  };
}

function Checkmark({ toggle }) {
  const animatedProps = useAnimatedPath({ toggle, delay: 500 });

  return (
    <animated.path
      stroke="#4ADE80"
      strokeWidth="24"
      d="M75 153.5l68.081 77.5L235 97"
      {...animatedProps}
    />
  );
}

function ShieldPart({ toggle, d, color }) {
  const animatedStrokeProps = useAnimatedPath({ toggle });
  const animatedFillStyle = useSpring({
    fill: toggle ? color : "#fff",
    delay: 250,
  });

  return (
    <animated.path
      stroke="#A78BFA"
      strokeWidth="2"
      d={d}
      {...animatedStrokeProps}
      style={{ ...animatedStrokeProps.style, ...animatedFillStyle }}
    />
  );
}

function Sarah() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setImmediate(() => {
      setToggle(true);
    });
  }, []);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="286"
        height="334"
        fill="none"
        viewBox="0 0 286 334"
      >
        <ShieldPart
          toggle={toggle}
          color="#A78BFA"
          d="M 143, 333 C 31.09 261.823 1 73.61 1 73.61 L 143 1 v 332 z"
        />
        <ShieldPart
          toggle={toggle}
          color="#8B5CF6"
          d="M 143, 333 C 254.911 261.823 285 73.61 285 73.61 L 143 1 v 332 z"
        />
        <Checkmark toggle={toggle} />
      </svg>
    </div>
  );
}

export default Sarah;
