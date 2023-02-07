import React from "react";
// import { useContext } from "react"; used later
import useMousePosition from "./useMousePosition";
// import { MouseContext } from "../../context/mouse-context"; used from step6
const Cursor = () => {
  // const { cursorType } = useContext(MouseContext); used from step6
const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={"ring"}
        // className={`ring ${cursorType}`} used from step6
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={"dot"}
        // className={`dot ${cursorType}`} used from step6
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;
3. Create “_cursor.scss” file and write code like below.(Comment outed area would be used to add hover action of elements). You can customize whatever you want.

_cursor.scss
.ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: rgba(31, 30, 30, 0.4);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;
}
.dot {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
}
below code is used from step6
// .ring.hovered {
//   width: 50px;
//   height: 50px;
//   border-width: 3px;
//   background-color: rgba(31, 30, 30, 0.4);
// }
// .dot.hovered {
//   display: none;
// }
4. Using cursor inside rendering place which you want(Basically it’s app.tsx or somewhere). In my case, as I want to render AppRouter in my app.tsx, I put cursor in AppRouter. (Comment outed area for app.tsx would be used to add hover action of elements).

AppRouter.tsx
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HomePage from "../components/pages/HomePage";
import ProjectContainer from "../components/project/ProjectContainer";
import ProjectDetail from "../components/project/ProjectDetail";
import ResumePage from "../components/pages/ResumePage";
import NotFoundPage from "../components/pages/NotFoundPage";
import Cursor from "../components/feature/Cursor";
import data from "../resource/data";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Cursor /> // I put cursor here because I want to use this Cursor for whole app.
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/project" exact={true}>
            <ProjectContainer data={data} />
          </Route>
          <Route path="/project/:title">
            <ProjectDetail data={data} />
          </Route>
          <Route path="/resume" component={ResumePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
};
export default AppRouter;
This is app.tsx

app.tsx
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
// import MouseContextProvider from "./context/mouse-context";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
ReactDOM.render(
  // <MouseContextProvider>
  <AppRouter />,
  //* </MouseContextProvider>, */}
  document.getElementById("app")
);
5. Add base.scss to “cursor: none”(if you use create-react-app, you need to use index.css ). Because we don’t use basic cursor anymore.(margin:0 is optional)

base.scss
* {
  margin: 0;
  cursor: none;
}
We’ve created “custom cursor”, but we can’t use hover action to element in this moment.

I mean, like below gif


This is my portfolio website(no onHover)
So we are gonna create hover action from now on.

6. Create MouseContext.tsx and write code below. If you want to use typescript, you should add cursorType type inside cursorChangeHandler in createContext. You need to createContext to use your customChangeHandler everywhere inside your app.

MouseContext.tsx
import React, { createContext, useState } from "react";
export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: (_cursorType // you can add cursorType here if you want to use typescript) => {},
});
const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState("");
const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };
return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};
export default MouseContextProvider;
7. You need to add “MouseContextProvider” which you want to render. In my case, app.tsx but if you use create-react-app, that’s index.js.

app.tsx
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import MouseContextProvider from "./context/mouse-context";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
ReactDOM.render(
  <MouseContextProvider>
    <AppRouter />
  </MouseContextProvider>,
  document.getElementById("app")
);
8. You need to uncomment step2’s Cursor.tsx file(and remove duplicated className about ring, dot respectively). We add “useContext” and “MouseContext”, and add cursorType as well.

Cursor.tsx
import React from "react";
import { useContext } from "react";
import useMousePosition from "./useMousePosition";
import { MouseContext } from "../../context/mouse-context";
const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={`ring ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;
9. You need to uncomment step3’s _cursor.scss about hover action.

_cursor.scss
.ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: rgba(31, 30, 30, 0.4);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;
}
.dot {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
}
.ring.hovered {
  width: 50px;
  height: 50px;
  border-width: 3px;
  background-color: rgba(31, 30, 30, 0.4);
}
.dot.hovered {
  display: none;
}
10. You need to add “useContext”, “MouseContext”, and “cursorChangeHander” with onMouseEnter and n nMouseLeave where you want to add hover a. In my case, I want to add this hover action different element in header, so I added three CursorChangeHandler’s div set.Don’t forget to import useContext and MouseContext.

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { MouseContext } from "../../context/mouse-context";
const Header = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <header className="header">
      <div className="logo">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div>
        <div className="header-links">
          <div className="home-link">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <NavLink to="/" activeClassName="is-active" exact={true}>
                Home
              </NavLink>
            </div>
          </div>
          <div className="project-link">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <NavLink to="/project" activeClassName="is-active" exact={true}>
                Projects
              </NavLink>
            </div>
          </div>
          <div className="resume-link">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <NavLink to="/resume" activeClassName="is-active" exact={true}>
                Resume
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
11. Done! You can use wherever you want to add hover function. Your element must be added hover action like below’s gif


my portfolio site
Conclusion

We need to add custom cursor step by step. But if we create once, it’s much reusable.

Reference

React: Custom Cursor (No Extra dependencies!): https://dev.to/holdmypotion/react-custom-cursor-no-extra-dependencies-25ki

How to Create a Custom Cursor in React — Part 1: https://javascript.plainenglish.io/how-to-create-a-custom-cursor-in-react-272314682285

My github repo : https://github.com/aujourdui/portfolio

Thank you for reading!!

React
Custom Cursor
85





