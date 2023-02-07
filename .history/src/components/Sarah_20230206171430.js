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
          strokeWidth={0.265}
          d="M15.055-10.823c-7.11-1.618-12.667-3.925-12.667-5.26 0-.596.628-2.736
        1.395-4.755l1.396-3.67 2.447 4.023C14.014-9.98 36.558-7.306
        45.271-16.019c2.655-2.654 3.777-5.107
        3.763-8.22-.035-7.64-2.217-9.117-19.54-13.23-6.44-1.53-13.363-3.637-15.385-4.683-3.865-1.998-7.725-8.062-7.716-12.123.009-4.257
        5.26-11.173 9.981-13.146 5.976-2.497 9.067-2.385 4.38.159-4.238
        2.3-6.366 5.76-6.366 10.352 0 6.276 3.81 8.851 18.085 12.225 16.663
        3.938 20.284 5.567 22.682 10.204 4.593 8.883.834 17.996-9.329
        22.612-5.965 2.71-21.19 3.227-30.771 1.046zm46 .876c0-.333 1.396-2.002
        3.102-3.708 1.706-1.707 6.3-8.334
        10.206-14.728l7.104-11.625h22.4l-4.905-9.333c-2.697-5.133-5.357-9.333-5.91-9.333-.554
        0-1.758 1.813-2.676 4.028-.918 2.216-2.209 4.363-2.869 4.77-.66.409
        1.029-3.761 3.752-9.265l4.952-10.008 13.178 24.904c7.247 13.697 14.965
        27.154 17.15 29.904l3.975
        5H113.12l.757-3.782c.539-2.696-.673-6.909-4.22-14.667l-4.975-10.884H81.64L76.68-28.652C71.118-17.411
        70.77-15.27 73.928-11.78c2.113 2.335 1.887 2.438-5.333 2.438-4.147
        0-7.54-.273-7.54-.606zm75.903-2.907c2.55-3.242 2.763-5.267 2.763-26.228
        0-19.266-.335-23.086-2.206-25.154-2.13-2.352-1.47-2.438 18.71-2.438
        22.202 0 27.578 1.107 33.811 6.963 7.926 7.445.114 19.565-12.735
        19.757l-3.58.053 4 2.109c6.863 3.618 10.064 7.44 15.174 18.118l4.944
        10.333h-10.875l-3.622-9.307c-1.991-5.12-3.62-9.807-3.62-10.418
        0-.61-1.837-2.869-4.082-5.02-3.699-3.543-5.087-3.955-14.83-4.397-12.705-.577-13.04-.286-13.068
        11.389-.022 8.557 1.666 14.97 4.396 16.706.87.553-2.81 1.015-8.18
        1.027l-9.764.02zm43.548-32.895c1.768-2.057 3.215-5.247 3.215-7.087
        0-9.071-6.578-12.505-23.957-12.505h-12.043v24.236l14.785-.451c14.298-.437
        14.89-.575 18-4.193zM203.721-9.87c0-.292 1.492-2.242 3.316-4.334
        1.824-2.092 6.174-8.395 9.667-14.007 6.894-11.077 10.242-16.09
        8.988-13.463-.602 1.262 1.835 1.666 10.029
        1.666h10.823l-5.045-9.226c-2.775-5.074-5.52-8.933-6.098-8.576-.578.358-2.255
        3.01-3.726 5.893-1.471 2.884-2.97 5.243-3.33 5.243-.531 0 9.535-21.076
        10.69-22.382.187-.21 5.967 10.571 12.846 23.958 6.879 13.387 14.453
        26.908 16.831 30.048l4.325 5.71h-8.683c-8.624
        0-8.678-.024-7.837-3.374.594-2.368-.654-6.74-4.185-14.667l-5.033-11.293h-23.158l-4.876
        10.392c-5.528 11.779-5.743 13.108-2.67 16.503 2.113 2.335 1.886
        2.438-5.334 2.438-4.147 0-7.54-.238-7.54-.53zm75.38-3.562c1.758-3.398
        2.046-8.255 1.702-28.669l-.415-24.576 4.814.001 4.814.002-.662
        12.666-.663 12.667h40.547l-.425-12.67-.425-12.67 3.667.004c2.016.001
        4.06.153 4.54.336.48.183.761 11.433.624 25-.197 19.537.16 25.43 1.714
        28.333l1.963 3.667h-15.993l2.076-2.963c1.496-2.136 2.076-6.233
        2.076-14.667v-11.703h-19.191c-16.27 0-19.314.32-20 2.109-1.513
        3.943-.817 17.958 1.123 22.6l1.932
        4.624h-15.933zM50.745-60.425c-1.762-3.868-9.224-7.56-18.258-9.036-6.62-1.08-6.587-1.091
        1.56-.513 13.565.962 20.345 3.117 20.321 6.458-.035 4.965-2.004
        6.645-3.623 3.09z"
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
    max-width: 300px;
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
