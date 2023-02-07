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
        width={357.822}
        height={96.87}
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
          d="M7.618 116.644c-7.433-2.464-13.242-5.978-13.242-8.01 0-.908.656-4.167 1.459-7.24l1.459-5.59 2.558 6.127c6.678 15.996 30.247 20.068 39.356 6.8 2.775-4.042 3.949-7.777 3.934-12.516-.037-11.634-2.318-13.884-20.429-20.15-6.732-2.328-13.97-5.536-16.083-7.129-4.04-3.043-8.076-12.278-8.067-18.46.01-6.484 5.499-17.016 10.435-20.02 6.247-3.802 9.479-3.632 4.58.242C9.145 34.2 6.92 39.47 6.92 46.463c0 9.557 3.983 13.478 18.907 18.616 17.42 5.996 21.205 8.477 23.712 15.539 4.803 13.527.872 27.404-9.752 34.432-6.237 4.126-22.154 4.915-32.17 1.594zm48.09 1.334c0-.508 1.46-3.05 3.244-5.648 1.783-2.598 6.585-12.69 10.67-22.426L77.047 72.2h23.417L95.338 57.99c-2.82-7.817-5.6-14.213-6.18-14.213-.578 0-1.837 2.76-2.796 6.135-.96 3.374-2.31 6.643-3 7.264-.69.621 1.076-5.729 3.923-14.11l5.177-15.24 13.776 37.924c7.577 20.858 15.646 41.35 17.93 45.538l4.155 7.614h-18.182l.79-5.76c.564-4.106-.703-10.52-4.41-22.334l-5.202-16.575H77.228l-5.184 15.261c-5.815 17.119-6.18 20.379-2.878 25.695 2.21 3.555 1.973 3.713-5.575 3.713-4.336 0-7.883-.416-7.883-.923zm79.352-4.427c2.666-4.937 2.89-8.02 2.89-39.94 0-29.338-.351-35.155-2.308-38.305-2.225-3.582-1.536-3.713 19.56-3.713 23.211 0 28.832 1.686 35.348 10.603 8.286 11.339.119 29.795-13.314 30.087l-3.742.081 4.182 3.211c7.174 5.51 10.52 11.33 15.862 27.59l5.17 15.736h-11.37l-3.786-14.174c-2.082-7.795-3.785-14.934-3.785-15.863 0-.93-1.92-4.37-4.267-7.644-3.867-5.397-5.318-6.024-15.503-6.697-13.283-.879-13.633-.435-13.663 17.343-.022 13.03 1.742 22.796 4.596 25.44.91.843-2.938 1.547-8.552 1.564l-10.207.03zm45.527-50.092c1.849-3.133 3.361-7.99 3.361-10.793 0-13.814-6.877-19.042-25.045-19.042h-12.59V70.53l15.456-.687c14.948-.665 15.567-.875 18.818-6.384zm24.27 54.635c0-.443 1.56-3.413 3.467-6.598 1.906-3.186 6.454-12.785 10.106-21.33 7.207-16.869 10.706-24.503 9.396-20.503-.629 1.922 1.918 2.538 10.484 2.538h11.316l-5.275-14.05c-2.901-7.726-5.77-13.603-6.374-13.059-.605.544-2.358 4.582-3.896 8.974-1.538 4.39-3.104 7.983-3.48 7.983-.557 0 9.967-32.094 11.175-34.083.194-.32 6.237 16.098 13.429 36.484 7.191 20.385 15.11 40.976 17.596 45.757l4.521 8.694h-9.078c-9.015 0-9.071-.035-8.192-5.137.62-3.605-.684-10.265-4.376-22.335l-5.26-17.197h-24.211l-5.098 15.826c-5.779 17.936-6.004 19.96-2.792 25.13 2.21 3.555 1.973 3.713-5.575 3.713-4.336 0-7.883-.363-7.883-.807zm78.806-5.424c1.837-5.174 2.138-12.57 1.778-43.656l-.434-37.426 5.033.003 5.033.003-.693 19.29-.692 19.288h42.388l-.444-19.293-.444-19.294 3.833.005c2.109.003 4.244.233 4.747.512.502.28.796 17.411.652 38.07-.206 29.751.167 38.724 1.792 43.147l2.053 5.583h-16.72l2.17-4.512c1.564-3.253 2.17-9.49 2.17-22.335V74.233h-20.063c-17.008 0-20.191.489-20.908 3.212-1.582 6.004-.854 27.347 1.173 34.416l2.02 7.041h-16.656zM44.929 41.11c-1.842-5.89-9.643-11.514-19.088-13.76-6.92-1.646-6.886-1.662 1.632-.782 14.181 1.466 21.27 4.747 21.244 9.835-.037 7.561-2.095 10.118-3.788 4.706z"
          transform="translate(7.59 -23.998)"
        />
      </svg>
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
