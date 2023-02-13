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
        width={1200}
        height={306}
        className={inView ? "animated visible" : "animated"}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          ref={pathRef}
          stroke="#62F9D5"
          strokeWidth={3.933}
          fill="none"
          d="M-89.829 107.193c-25.122-8.011-44.755-19.435-44.755-26.04 0-2.954 2.219-13.548 4.93-23.542l4.932-18.172 8.646 19.92c22.571 52.003 102.228 65.242 133.014 22.107 9.378-13.14 13.346-25.282 13.295-40.69C30.11 2.953 22.401-4.36-38.81-24.729c-22.753-7.57-47.214-18-54.358-23.177-13.656-9.895-27.294-39.915-27.264-60.017.03-21.076 18.585-55.317 35.267-65.083 21.114-12.36 32.038-11.806 15.478.786-14.976 11.387-22.496 28.52-22.496 51.253 0 31.069 13.462 43.818 63.9 60.52C30.593-40.952 43.387-32.887 51.86-9.93c16.23 43.978 2.948 89.091-32.961 111.942-21.078 13.413-74.874 15.977-108.727 5.182Zm162.534 4.335c0-1.65 4.933-9.912 10.962-18.36 6.03-8.447 22.258-41.257 36.062-72.91l25.1-57.55h79.146l-17.33-46.205c-9.53-25.413-18.929-46.206-20.885-46.206-1.955 0-6.209 8.975-9.452 19.944-3.243 10.97-7.804 21.597-10.136 23.616-2.332 2.02 3.633-18.623 13.256-45.872l17.497-49.544 46.56 123.29c25.61 67.81 52.88 134.43 60.602 148.044l14.04 24.753h-61.452l2.673-18.725c1.905-13.347-2.377-34.201-14.907-72.61L226.86-30.69h-81.423l-17.522 49.615c-19.653 55.652-20.887 66.25-9.725 83.532 7.466 11.56 6.667 12.071-18.844 12.071-14.653 0-26.642-1.35-26.642-3zm268.193-14.392c9.01-16.05 9.764-26.075 9.764-129.847 0-95.377-1.184-114.288-7.797-124.526-7.522-11.646-5.192-12.071 66.107-12.071 78.449 0 97.447 5.481 119.47 34.47 28.004 36.86.4 96.863-44.998 97.811l-12.649.264 14.134 10.44c24.25 17.912 35.56 36.834 53.613 89.695l17.47 51.156h-38.427L504.79 68.45c-7.037-25.343-12.795-48.55-12.795-51.572 0-3.021-6.488-14.204-14.42-24.85-13.07-17.545-17.973-19.583-52.397-21.773-44.893-2.856-46.075-1.412-46.177 56.382-.075 42.364 5.888 74.112 15.533 82.705 3.077 2.741-9.93 5.03-28.903 5.085l-34.498.101zm153.87-162.849c6.249-10.186 11.36-25.976 11.36-35.088 0-44.908-23.243-61.906-84.648-61.906h-42.552v119.983l52.24-2.234c50.52-2.16 52.614-2.844 63.6-20.755zm82.028 177.62c0-1.442 5.272-11.096 11.716-21.453 6.445-10.357 21.815-41.562 34.156-69.344 24.36-54.839 36.187-79.659 31.759-66.652-2.127 6.246 6.482 8.25 35.434 8.25h38.243l-17.828-45.674c-9.805-25.122-19.5-44.228-21.543-42.458-2.044 1.77-7.969 14.897-13.167 29.173-5.198 14.276-10.49 25.956-11.763 25.956-1.88 0 33.687-104.339 37.77-110.804.657-1.04 21.081 52.334 45.387 118.607C771.265 3.78 798.028 70.722 806.432 86.266l15.28 28.262h-30.681c-30.47 0-30.66-.114-27.69-16.7 2.1-11.72-2.31-33.37-14.788-72.609l-17.78-55.91H648.947l-17.231 51.45c-19.53 58.312-20.29 64.892-9.435 81.698 7.466 11.56 6.666 12.071-18.845 12.071-14.653 0-26.641-1.18-26.641-2.621zM843.14 94.273c6.21-16.823 7.228-40.867 6.01-141.926l-1.466-121.671 17.01.01 17.011.01-2.341 62.709-2.341 62.708h143.264l-1.501-62.723-1.501-62.723 12.956.017c7.125.01 14.344.758 16.042 1.665 1.697.908 2.69 56.603 2.205 123.766-.697 96.72.562 125.89 6.057 140.268l6.937 18.153h-56.509l7.334-14.673c5.285-10.573 7.334-30.854 7.334-72.61v-57.939h-67.808c-57.485 0-68.242 1.59-70.667 10.441-5.346 19.52-2.886 88.906 3.967 111.887l6.826 22.89h-56.294ZM36.274-138.372c-6.227-19.149-32.59-37.428-64.512-44.73-23.391-5.351-23.274-5.405 5.513-2.543 47.931 4.765 71.887 15.432 71.803 31.972-.127 24.582-7.082 32.895-12.804 15.301z"
          transform="translate(136.55 189.504)"
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .animated {
    min-width: 400px;
    width: 90%;
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
