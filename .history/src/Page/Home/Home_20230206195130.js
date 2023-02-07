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
            <button>Hi There! I'm Sarah</button>
          </AnimatedText>
        </div>
      </div>

      <AppModal />
    </>
  );
};
