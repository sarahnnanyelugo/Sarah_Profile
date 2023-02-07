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
        className={inView ? "animated visible" : "animated"}
        viewBox="0 0 127.237 53.457"
        {...props}
      >
        {/* <path
          ref={pathRef}
          d="M5.27 7.113l-1.7-4.158S3.475.593 4.23.215c.756-.378 3.78.567 4.158 3.118.378 2.552-.472 6.237-2.551 8.316-2.08 2.079-6.142.189-5.67-.567.472-.756 3.024-5.292 2.079-6.331C1.302 3.71.263 12.877.64 13.255c.378.378 5.009 1.323 6.426.284 1.417-1.04 0-1.323 1.323-1.323s3.969-1.89 4.158-5.386c.189-3.497 1.606.283 1.228 1.606-.378 1.323-.756 3.024.473 4.063 1.228 1.04 3.023-1.228 3.118-2.55.094-1.324 3.213-4.348 2.362-3.12-.85 1.23-2.646 3.12-2.362 4.725.283 1.607 2.646 1.134 2.835.19.189-.945 1.134-6.71 1.04-4.914-.095 1.795-.284 5.008.472 5.291.756.284 1.512.756 2.834-1.417 1.323-2.173 1.89-6.804 1.512-4.441-.378 2.362-1.7 5.291-.567 5.858 1.134.567 2.174-.283 2.646-2.362.473-2.079.945-7.181.662-3.874-.284 3.307-.756 5.953.472 6.33 1.229.379 1.701.095 1.701-1.794 0-1.89-.661-4.158.095-4.064.756.095 2.55.756 2.55.756"
          fill="none"
          stroke="#70F1D8"
          strokeWidth={0.265}
        /> */}
        <path
          ref={pathRef}
          fill="none"
          stroke="#70F1D8"
          strokeWidth={3.933}
          d="M-1.471-27.06c-7.433-2.464-13.242-5.978-13.242-8.01 0-.908.656-4.167 1.459-7.241l1.459-5.59 2.558 6.128c6.678 15.996 30.247 20.068 39.356 6.8 2.775-4.042 3.948-7.777 3.934-12.516-.037-11.635-2.318-13.884-20.429-20.15-6.732-2.329-13.97-5.537-16.083-7.129-4.04-3.044-8.076-12.278-8.067-18.46.009-6.484 5.499-17.016 10.435-20.02 6.247-3.802 9.479-3.632 4.58.241-4.432 3.503-6.657 8.773-6.657 15.766 0 9.556 3.983 13.478 18.907 18.616 17.42 5.996 21.205 8.477 23.712 15.538 4.802 13.528.872 27.404-9.752 34.433-6.237 4.126-22.154 4.915-32.17 1.594zm48.09 1.334c0-.508 1.46-3.05 3.244-5.648 1.783-2.598 6.585-12.69 10.67-22.427l7.426-17.702h23.417L86.25-85.716c-2.82-7.817-5.6-14.213-6.18-14.213-.578 0-1.837 2.761-2.796 6.135-.96 3.374-2.31 6.643-3 7.264-.69.622 1.076-5.728 3.923-14.11l5.177-15.24 13.776 37.925c7.577 20.858 15.646 41.35 17.93 45.537l4.155 7.614h-18.183l.791-5.76c.564-4.105-.703-10.52-4.41-22.334L92.23-69.472H68.14l-5.184 15.261c-5.815 17.118-6.18 20.378-2.878 25.694 2.21 3.556 1.973 3.713-5.575 3.713-4.336 0-7.883-.415-7.883-.922zm79.352-4.427c2.666-4.937 2.889-8.02 2.889-39.941 0-29.338-.35-35.155-2.307-38.304-2.225-3.582-1.536-3.713 19.56-3.713 23.211 0 28.832 1.686 35.348 10.603 8.286 11.338.119 29.795-13.314 30.086l-3.742.082 4.182 3.21c7.174 5.51 10.52 11.33 15.862 27.59l5.17 15.736h-11.37l-3.786-14.173c-2.082-7.796-3.786-14.934-3.786-15.864 0-.929-1.92-4.369-4.266-7.643-3.867-5.397-5.318-6.024-15.503-6.698-13.283-.878-13.633-.434-13.663 17.343-.022 13.031 1.742 22.797 4.596 25.44.91.843-2.938 1.547-8.552 1.564l-10.207.031zm45.527-50.092c1.849-3.134 3.361-7.99 3.361-10.793 0-13.814-6.877-19.043-25.045-19.043h-12.59v36.907l15.456-.687c14.948-.665 15.567-.875 18.818-6.384zm24.27 54.635c0-.444 1.56-3.413 3.467-6.599 1.906-3.186 6.454-12.784 10.105-21.33 7.208-16.868 10.707-24.503 9.397-20.502-.63 1.922 1.918 2.538 10.484 2.538h11.316l-5.275-14.05c-2.901-7.727-5.77-13.604-6.375-13.06-.604.545-2.357 4.583-3.895 8.974-1.538 4.391-3.104 7.984-3.48 7.984-.557 0 9.967-32.094 11.175-34.083.194-.32 6.237 16.098 13.429 36.483 7.191 20.386 15.11 40.977 17.596 45.758l4.521 8.693h-9.078c-9.015 0-9.071-.035-8.192-5.136.62-3.606-.684-10.265-4.376-22.335l-5.26-17.197h-24.211l-5.098 15.825c-5.779 17.937-6.004 19.96-2.792 25.13 2.21 3.556 1.973 3.713-5.576 3.713-4.335 0-7.882-.362-7.882-.806zm78.805-5.424c1.838-5.175 2.139-12.57 1.779-43.656l-.434-37.426 5.033.003 5.033.003-.693 19.289-.692 19.289h42.388l-.444-19.294-.444-19.293 3.833.005c2.108.003 4.244.233 4.747.512.502.28.796 17.41.652 38.07-.206 29.751.167 38.724 1.792 43.146l2.053 5.584h-16.72l2.17-4.513c1.564-3.252 2.17-9.49 2.17-22.334v-17.822h-20.063c-17.008 0-20.191.489-20.908 3.212-1.582 6.004-.854 27.347 1.173 34.416l2.02 7.04h-16.656zM35.84-102.595c-1.842-5.89-9.643-11.513-19.088-13.759-6.92-1.646-6.886-1.663 1.631-.782 14.182 1.466 21.27 4.747 21.245 9.834-.037 7.562-2.095 10.119-3.788 4.707z"
          transform="translate(-18.539 -130.892)"
        />
      </svg>
      {/* <svg
        width={66.33}
        height={65.139}
        viewBox="0 0 17.55 17.235"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        className={inView ? "animated visible" : "animated"}
        {...props}
      >
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#0e0e72",
            strokeWidth: 0.565,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          d="m29.264 132.515-2.398.033-1.632.716-1.725 1.043-1.351 2.303-.228 1.014 1.18 1.57.342.147.79.395 3.074-.442 1.783-.369 2.263-1.24 3.057-2.847 1.387-2.391-1.114-1.272-.901.97-1.798 1.664-.862 1.197-1.318 2.424-.18 2.306-1.096 3.378-2.21 3.093-3.549 1.637-3.85-1.426-.107-1.822.886-2.246 1.308-.115.971.156.546 1.595.128-.432"
          transform="translate(-18.539 -130.892)"
        />
      </svg> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .animated {
    max-width: 600px;
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
