import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
const root = ReactDOM.createRoot(document.getElementById("root"));
// eslint-disable-next-line react-hooks/rules-of-hooks
const containerRef = useRef(null);

root.render(
  <React.StrictMode>
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <App />
      </main>
    </LocomotiveScrollProvider>
  </React.StrictMode>
);

reportWebVitals();
