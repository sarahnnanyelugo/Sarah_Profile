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
        width={1600}
        height={506}
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
          d="M-78.603 204.762c-31.423-10.664-55.981-25.869-55.981-34.66 0-3.932 2.775-18.033 6.168-31.336l6.167-24.188 10.815 26.515c28.233 69.219 127.869 86.84 166.377 29.426 11.73-17.491 16.693-33.653 16.63-54.16-.155-50.345-9.797-60.08-86.361-87.191-28.46-10.078-59.057-23.96-67.993-30.85-17.082-13.171-34.14-53.13-34.103-79.886.039-28.054 23.247-73.63 44.114-86.629 26.409-16.452 40.073-15.714 19.36 1.045-18.734 15.158-28.14 37.961-28.14 68.221 0 41.355 16.839 58.325 79.93 80.556C72.022 7.574 88.025 18.308 98.623 48.865c20.302 58.537 3.687 118.584-41.229 149-26.365 17.853-93.654 21.266-135.997 6.897zm203.301 5.77c0-2.197 6.17-13.193 13.712-24.438 7.541-11.244 27.84-54.915 45.107-97.046l31.395-76.602h98.998l-21.676-61.502c-11.922-33.827-23.678-61.503-26.124-61.503-2.447 0-7.767 11.946-11.823 26.547-4.056 14.6-9.762 28.746-12.679 31.434-2.917 2.688 4.544-24.788 16.581-61.058l21.886-65.945 58.24 164.105c32.03 90.259 66.142 178.933 75.8 197.054l17.563 32.948H354.811l3.343-24.924c2.383-17.766-2.972-45.524-18.645-96.647l-21.99-71.723H215.675l-21.917 66.041c-24.583 74.075-26.126 88.182-12.164 111.185 9.339 15.386 8.339 16.068-23.571 16.068-18.328 0-33.324-1.797-33.324-3.994zm335.46-19.156c11.271-21.363 12.214-34.707 12.214-172.833 0-126.952-1.48-152.123-9.752-165.75-9.41-15.502-6.494-16.068 82.688-16.068 98.126 0 121.89 7.296 149.436 45.881 35.028 49.064.5 128.93-56.284 130.192l-15.822.352 17.678 13.895c30.332 23.842 44.479 49.028 67.06 119.389l21.854 68.092h-48.066l-16.004-61.333c-8.803-33.733-16.005-64.623-16.005-68.645 0-4.021-8.116-18.906-18.036-33.076-16.349-23.354-22.483-26.066-65.54-28.981-56.153-3.803-57.632-1.88-57.76 75.047-.094 56.389 7.365 98.646 19.43 110.085 3.848 3.648-12.42 6.694-36.153 6.768l-43.15.135zm192.466-216.76c7.815-13.559 14.21-34.576 14.21-46.705 0-59.774-29.074-82.4-105.88-82.4h-53.225V5.215l65.343-2.974c63.19-2.876 65.81-3.786 79.552-27.626zm102.601 236.42c0-1.92 6.595-14.769 14.656-28.555 8.06-13.785 27.286-55.32 42.723-92.3 30.47-72.993 45.263-106.03 39.724-88.717-2.66 8.314 8.108 10.982 44.322 10.982h47.835l-22.3-60.796c-12.264-33.438-24.39-58.869-26.946-56.513-2.557 2.355-9.968 19.83-16.47 38.83-6.5 19.002-13.122 34.549-14.713 34.549-2.351 0 42.137-138.88 47.245-147.485.82-1.384 26.367 69.658 56.77 157.871 30.401 88.213 63.877 177.315 74.389 198.005l19.112 37.619h-38.376c-38.114 0-38.351-.153-34.635-22.229 2.626-15.6-2.89-44.417-18.498-96.646l-22.24-74.419H845.476l-21.554 68.482c-24.429 77.616-25.38 86.375-11.802 108.744 9.339 15.386 8.34 16.068-23.57 16.068-18.329 0-33.325-1.57-33.325-3.49zm333.151-23.47c7.767-22.394 9.04-54.397 7.518-188.912l-1.834-161.95 21.277.013 21.277.014-2.928 83.468-2.928 83.468h179.198l-1.878-83.488-1.878-83.487 16.205.023c8.913.014 17.943 1.008 20.066 2.216 2.123 1.208 3.365 75.34 2.76 164.739-.873 128.739.702 167.567 7.575 186.704l8.677 24.161H1290.8l9.172-19.53c6.612-14.073 9.174-41.067 9.174-96.647v-77.12h-84.815c-71.904 0-85.36 2.115-88.392 13.898-6.687 25.982-3.61 118.338 4.962 148.926l8.538 30.47h-70.414zM79.13-122.098c-7.788-25.488-40.765-49.82-80.693-59.539-29.258-7.122-29.111-7.194 6.896-3.385 59.953 6.343 89.918 20.542 89.812 42.557-.158 32.72-8.858 43.785-16.015 20.367z"
          transform="translate(35.46 113.48)"
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .animated {
    min-width: 400px;
    width: 80%;
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
