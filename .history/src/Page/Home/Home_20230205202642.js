import "./_home.scss";
import AnimatedText from "react-animated-text-content";
import LoadingOverlay from "react-loading-overlay";
import { AppModal } from "../../components/AppModal/AppModal";
// import BounceLoader from "react-spinners/BounceLoader";

export const Home = ({ active, children }) => {
  return (
    <>
      <div className="col-md-12 flexy">
        <div className="col-md-4">
          {" "}
          <h1>Home page</h1>
        </div>
        <div className="col-md-4">
          {" "}
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="lights"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            I AM SARAH
          </AnimatedText>
        </div>
        <div className="col-md-4">
          {" "}
          <h1>Home page</h1>
        </div>
      </div>
      {/* <LoadingOverlay
        active={active}
        styles={{
          wrapper: {
            width: "100%",
            height: "1000px",
            background: "purple",
            opacity: "1",
            overflow: active ? "hidden" : "no-scroll",
            "& svg circle": {
              stroke: "rgba(255, 0, 0, 1)",
            },
          },
        }}
        text="Loading your content..."
      >
        <center> Loading...</center>
      </LoadingOverlay> */}
      {/* <LoadingOverlay
        active={active}
        styles={{
          wrapper: {
            width: "100%",
            height: "1000px",
            background: "purple",
            opacity: "1",
            overflow: active ? "hidden" : "no-scroll",
            "& svg circle": {
              stroke: "rgba(255, 0, 0, 1)",
            },
          },
        }}
        text="Loading your content..."
      >
        <center> Loading...</center>
      </LoadingOverlay> */}
      <AppModal />
    </>
  );
};
