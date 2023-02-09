import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from "./Page/Home/Home";
import { Navbar } from "./components/NavBar/Navbar";
import Cursor from "./components/Cursor/Cursor";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
