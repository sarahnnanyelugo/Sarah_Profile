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
      {/* <svg
        className={inView ? "animated visible" : "animated"}
        viewBox="0 0 127.237 53.457"
        {...props}
      >
        <path
          ref={pathRef}
          d="M5.27 7.113l-1.7-4.158S3.475.593 4.23.215c.756-.378 3.78.567 4.158 3.118.378 2.552-.472 6.237-2.551 8.316-2.08 2.079-6.142.189-5.67-.567.472-.756 3.024-5.292 2.079-6.331C1.302 3.71.263 12.877.64 13.255c.378.378 5.009 1.323 6.426.284 1.417-1.04 0-1.323 1.323-1.323s3.969-1.89 4.158-5.386c.189-3.497 1.606.283 1.228 1.606-.378 1.323-.756 3.024.473 4.063 1.228 1.04 3.023-1.228 3.118-2.55.094-1.324 3.213-4.348 2.362-3.12-.85 1.23-2.646 3.12-2.362 4.725.283 1.607 2.646 1.134 2.835.19.189-.945 1.134-6.71 1.04-4.914-.095 1.795-.284 5.008.472 5.291.756.284 1.512.756 2.834-1.417 1.323-2.173 1.89-6.804 1.512-4.441-.378 2.362-1.7 5.291-.567 5.858 1.134.567 2.174-.283 2.646-2.362.473-2.079.945-7.181.662-3.874-.284 3.307-.756 5.953.472 6.33 1.229.379 1.701.095 1.701-1.794 0-1.89-.661-4.158.095-4.064.756.095 2.55.756 2.55.756"
          fill="none"
          stroke="#70F1D8"
          strokeWidth={0.265}
        />
      </svg> */}
      <svg
        width={66.33}
        height={65.139}
        xmlSpace="preserve"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        className={inView ? "animated visible" : "animated"}
        viewBox="0 0 127.237 53.457"
        {...props}
      >
        <g transform="translate(-18.539 -130.892)">
          <image
            width={47.625}
            height={22.578}
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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 rkJggg=="
            x={9.307}
            y={107.181}
            style={{
              mixBlendMode: "multiply",
              strokeWidth: 4.02004,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeDasharray: "none",
              paintOrder: "markers stroke fill",
            }}
          />
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
          />
        </g>
      </svg>
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
