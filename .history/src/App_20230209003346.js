import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from "./Page/Home/Home";
import { Navbar } from "./components/NavBar/Navbar";
import Cursor from "./components/Cursor/Cursor";
import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const containerRef = useRef(null);

  return (
    <BrowserRouter>
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
          {" "}
          <Cursor />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </LocomotiveScrollProvider>
      ;
    </BrowserRouter>
  );
}

export default App;
