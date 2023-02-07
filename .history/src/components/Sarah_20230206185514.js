import React, { useState, createRef, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Sarah = (props) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });
  const pathRef = createRef();
  const [pathLength, setPathLength] = useState();

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathRef]);

  return (
    <Wrapper ref={inViewRef} pathLength={pathLength}>
      <svg
        width={547.171}
        height={146.581}
        className={inView ? "animated visible" : "animated"}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          ref={pathRef}
          stroke="#ff15f2"
          strokeWidth={3.933}
          fill="none"
          d="M-13.166 27.668c-11.41-3.782-20.327-9.176-20.327-12.295 0-1.395 1.007-6.397 2.24-11.116l2.239-8.58 3.927 9.406c10.251 24.554 46.43 30.805 60.413 10.438 4.26-6.205 6.061-11.938 6.039-19.213-.057-17.86-3.558-21.312-31.36-30.93-10.333-3.575-21.443-8.5-24.688-10.944-6.203-4.672-12.397-18.847-12.383-28.338.014-9.952 8.441-26.12 16.018-30.731 9.59-5.837 14.55-5.575 7.03.37-6.802 5.378-10.218 13.467-10.218 24.201 0 14.67 6.114 20.69 29.023 28.577 26.74 9.205 32.551 13.013 36.4 23.852 7.372 20.766 1.338 42.067-14.97 52.857-9.574 6.333-34.008 7.544-49.383 2.446zm73.82 2.047c0-.779 2.241-4.68 4.98-8.669 2.738-3.988 10.109-19.48 16.379-34.426l11.4-27.174h35.947l-7.871-21.817c-4.33-12-8.598-21.818-9.486-21.818-.888 0-2.82 4.238-4.293 9.418-1.473 5.179-3.545 10.197-4.604 11.15-1.06.954 1.65-8.793 6.021-21.66l7.947-23.393 21.147 58.215c11.631 32.019 24.017 63.475 27.525 69.903l6.377 11.688H144.21l1.214-8.841c.866-6.303-1.079-16.15-6.77-34.285l-7.985-25.443H93.69L85.73-14.01c-8.926 26.278-9.487 31.282-4.417 39.442 3.391 5.458 3.028 5.7-8.559 5.7-6.655 0-12.1-.637-12.1-1.417zm121.81-6.795c4.093-7.578 4.435-12.312 4.435-61.311 0-45.035-.538-53.964-3.541-58.799-3.417-5.498-2.358-5.7 30.025-5.7 35.63 0 44.26 2.589 54.262 16.277 12.719 17.405.181 45.736-20.438 46.184l-5.745.125 6.42 4.93c11.013 8.457 16.15 17.391 24.35 42.351l7.935 24.155h-17.454l-5.81-21.757c-3.197-11.967-5.812-22.925-5.812-24.351 0-1.427-2.947-6.707-6.55-11.734-5.936-8.284-8.163-9.246-23.798-10.28-20.39-1.35-20.926-.668-20.973 26.622-.034 20.003 2.674 34.994 7.055 39.051 1.398 1.295-4.51 2.375-13.127 2.401l-15.668.048zm69.886-76.894c2.838-4.81 5.16-12.265 5.16-16.568 0-21.204-10.557-29.23-38.446-29.23h-19.327V-43.12l23.727-1.055c22.946-1.02 23.897-1.343 28.886-9.8zm37.256 83.868c0-.68 2.395-5.239 5.322-10.13 2.927-4.89 9.907-19.624 15.513-32.742 11.064-25.894 16.435-37.613 14.424-31.472-.966 2.95 2.944 3.896 16.094 3.896h17.37L350.23-62.12c-4.453-11.861-8.856-20.883-9.785-20.047-.928.835-3.619 7.034-5.98 13.775-2.36 6.74-4.765 12.255-5.342 12.255-.854 0 15.3-49.266 17.155-52.319.298-.49 9.574 24.711 20.613 56.004 11.04 31.292 23.195 62.9 27.012 70.24l6.94 13.345h-13.935c-13.84 0-13.926-.054-12.576-7.885.953-5.534-1.05-15.757-6.717-34.285l-8.076-26.399h-37.163l-7.827 24.293c-8.87 27.534-9.215 30.64-4.285 38.576 3.391 5.458 3.028 5.7-8.559 5.7-6.655 0-12.1-.557-12.1-1.238zm120.97-8.326c2.82-7.943 3.283-19.296 2.73-67.014l-.665-57.451 7.726.005 7.725.005-1.063 29.61-1.063 29.609H491.035l-.682-29.617-.682-29.616 5.884.008c3.237.005 6.515.358 7.286.786.771.429 1.222 26.727 1.002 58.44-.317 45.669.256 59.443 2.751 66.231l3.15 8.571H484.08l3.331-6.928c2.4-4.992 3.33-14.568 3.33-34.284v-27.358h-30.796c-26.11 0-30.995.75-32.096 4.93-2.428 9.217-1.311 41.98 1.801 52.83l3.1 10.81H407.182ZM44.109-88.282c-2.828-9.041-14.802-17.673-29.3-21.12-10.624-2.527-10.57-2.553 2.504-1.201 21.77 2.25 32.65 7.287 32.611 15.096-.057 11.607-3.216 15.533-5.815 7.225z"
          transform="translate(35.46 113.48)"
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .animated {
    min-width: 800px;
    width: 100%;
    height: 100%;
    stroke-dasharray: ${(props) => props.pathLength};
    stroke-dashoffset: ${(props) => props.pathLength};
  }
  .animated.visible {
    animation: draw 6s linear forwards;
  }
  @keyframes draw {
    from {
      stroke-dashoffset: ${(props) => props.pathLength};
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default Sarah;
