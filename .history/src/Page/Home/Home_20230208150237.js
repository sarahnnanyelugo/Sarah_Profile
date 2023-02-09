import "./_home.scss";
import AnimatedText from "react-animated-text-content";
import LoadingOverlay from "react-loading-overlay";
import { AppModal } from "../../components/AppModal/AppModal";
import Screen from "../../assets/screenn.png";
import MovingComponent from "react-moving-text";
import React, { useState } from "react";
import { Profile } from "./Avatar";
import Dp from "../../assets/dp1.png";
import { ExpTab } from "./ExpTab/ExpTab";
import Icofont from "react-icofont";

const AnimationsForChaining = ["slideInFromRight"];

export const Home = ({ active, children }) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    // eslint-disable-next-line no-undef
    setAnimationType(selectedItems[animationIndex + 1]);
  };
  return (
    <>
      <div className="col-md-12 flexy">
        {/* <div className="col-md-4">
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
            tag="a"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            Hi There! I'm Sarah
          </AnimatedText>
        </div> */}
        <div className="col-md-6 intro-container">
          <MovingComponent
            onAnimationEnd={handleChainAnimation}
            type={animationType}
            duration="4000ms"
            timing="linear"
            fillMode="forwards"
            iteration={1}
          >
            <button className="intro-btn">Hi There! I'm Sarah</button>
            <h1>
              A <span>Frontend Developer</span>. I Help Startups{" "}
              <span>Launch</span> And <span>Grow</span> Their Products
            </h1>
            <p>
              I am a software developer with more than three years of
              experience. recognized as a practical and effective developer,
              experienced in leading cross-functional teams in a time-pressured
              setting to complete projects on schedule and within budget.
            </p>
          </MovingComponent>
        </div>

        <div className="col-md-5  offset-md-1 intro-container fley">
          <Profile />
        </div>
      </div>
      <span style={{ height: "20px" }} id="about"></span>
      <div className="col-md-12 about-me">
        <div className="col-md-6 offset-md-3 flexy">
          <div className="col-md-8">
            <div style={{ display: "flex" }}>
              <h4>
                <span>01.</span>About Me
              </h4>
              <div className="col-md-6">
                <hr />
              </div>
            </div>
            <p>
              {" "}
              Hello! My name is Sarah and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>{" "}
            <p>
              {" "}
              Hello! My name is Sarah and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
          </div>
          <div className="col-md-3 dp-container offset-md-1">
            <center>
              {" "}
              <img className="col-md-12 col-12" src={Dp} alt="Scholar" />
            </center>
          </div>
        </div>
        <p className="col-md-6 offset-md-3">
          {" "}
          Hello! My name is Sarah and I enjoy creating things that live on the
          internet. My interest in web development started back in 2012 when I
          decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>

        <p className="col-md-6 offset-md-3">
          {" "}
          Hello! My name is Sarah and I enjoy creating things that live on the
          internet. My interest in web development started back in 2012 when I
          decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!{" "}
          <a className="link-alteration" href="#" target="_blank">
            Continue from my linkedIn page
          </a>
        </p>
        <p className="col-md-6 offset-md-3">
          {" "}
          Here are a few technologies I’ve been working with recently:
        </p>
        <div style={{ display: "flex" }} className="col-md-6 offset-md-3">
          <ul className="list-unstyled" style={{ marginRight: "50px" }}>
            <li>HTML</li>
            <li>CSS/SASS</li>
            <li>Boostrap</li>
            <li>React Carbon Design System</li>
          </ul>
          <ol className="list-unstyled">
            <li>ReactJs</li>
            <li>Javascript</li>
            <li>Adobe XD</li>
            <li>Chakra ui</li>
          </ol>
        </div>
      </div>
      <span style={{ height: "20px" }} id="experience"></span>
      <div className="col-md-12 about-me">
        <div className="col-md-6 offset-md-3">
          <div style={{ display: "flex" }}>
            <h4>
              <span>02.</span>Where I’ve Worked
            </h4>
            <div className="col-md-6">
              <hr />
            </div>
          </div>

          <div className="col-md-12 expe-container">
            <div>
              <ExpTab />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 about-me flexy">
        <span style={{ height: "50px" }} id="contact"></span>
        <div className="socials">
          <ul className="list-unstyled">
            <li>
              <a href="#" className="socials" target="_blank">
                <i class="icofont-github"></i>
              </a>
            </li>{" "}
            <li>
              <a href="#" className="socials" target="_blank">
                <i class="icofont-facebook"></i>
              </a>
            </li>{" "}
            <li>
              <a href="#" className="socials" target="_blank">
                <i class="icofont-instagram"></i>
              </a>
            </li>{" "}
            <li>
              <a href="#" className="socials" target="_blank">
                <i class="icofont-linkedin"></i>
              </a>
            </li>{" "}
            <li>
              <a href="#" className="socials" target="_blank">
                <i class="icofont-caret-up"></i>{" "}
              </a>
            </li>
          </ul>
          <div className="vr"></div>
        </div>
        <div className="col-md-6 offset-md-3">
          <div style={{ display: "flex" }}>
            <h4>
              <span>03.</span>What’s Next?
            </h4>
            <div className="col-md-6">
              <hr />
            </div>
          </div>
          <center>
            {" "}
            <h2>Get In Touch</h2>
            <p>
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
            <button>Say Hello</button>
          </center>
        </div>
        <div className="flip">
          {" "}
          <a href="#">sarahnnanyelugo@gmail.com</a>
          <div className="vr1"></div>
        </div>
      </div>
      <div className="col-md-12 footer flexy">
        <center>
          <div>
            {" "}
            Built From Scratch With © Copyright 2023, Sarah.Nnanyelugo All
            Rights Reserved.
          </div>
        </center>
      </div>

      <AppModal />
    </>
  );
};
