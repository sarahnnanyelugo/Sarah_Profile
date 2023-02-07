import "./_home.scss";
import AnimatedText from "react-animated-text-content";
import LoadingOverlay from "react-loading-overlay";
import { AppModal } from "../../components/AppModal/AppModal";
import Avatar from "../../assets/pa4.png";
import Screen from "../../assets/screenn.png";

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
            tag="div"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            Hi There! I'm Sarah
          </AnimatedText>
        </div>
        <div className="col-md-6 intro-container">
          <button className="intro-btn">Hi There! I'm Sarah</button>
          <h1>
            A <span>Frontend Developer</span>. I Help Startups{" "}
            <span>Launch</span> And <span>Grow</span> Their Products
          </h1>
          <small>
            I am a software developer with more than three years of experience.
            recognized as a practical and effective developer, experienced in
            leading cross-functional teams in a time-pressured setting to
            complete projects on schedule and within budget.
          </small>
        </div>
        <div className="col-md-5  offset-md-1 intro-container fley">
          <img className="col-md-9 col-12" src={Avatar} alt="Scholar" />
          {/* <img className="col-md-2 col-12 screen" src={Screen} alt="Scholar" /> */}
        </div>
        <div className="screen col-md-1">
          <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>{" "}
          <div class="center2">
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
            <div class="wave2"></div>
          </div>{" "}
          <div class="center3">
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
          </div>{" "}
        </div>
      </div>

      <AppModal />
    </>
  );
};
