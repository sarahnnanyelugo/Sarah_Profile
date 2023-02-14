import "./_home.scss";
import AnimatedText from "react-animated-text-content";
import LoadingOverlay from "react-loading-overlay";
import { AppModal } from "../../components/AppModal/AppModal";
import Screen from "../../assets/screenn.png";
import MovingComponent from "react-moving-text";
import React, { useState, useEffect } from "react";
import { Profile } from "./Avatar";
import Dp from "../../assets/dp1.png";
import { ExpTab } from "./ExpTab/ExpTab";
import Icofont from "react-icofont";
import ReactDOM from "react-dom";

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
      {" "}
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
        <div className="col-md-6 intro-container" id="src">
          <MovingComponent
            onAnimationEnd={handleChainAnimation}
            type={animationType}
            duration="4000ms"
            timing="linear"
            fillMode="forwards"
            iteration={1}
          >
            <button className="intro-btn">
              <span className="sha">
                <i class="icofont-hand "></i>
              </span>
              Hi There! I'm Sarah
            </button>

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
      <div className="col-md-12 ">
        <span style={{ height: "20px" }} id="about"></span>
        <div className="col-md-12 about-me ">
          <div className="col-md-6 offset-md-2 flexy">
            <div className="col-md-8 col-12">
              <div style={{ display: "flex" }}>
                <h4>
                  <span>01.</span>About Me
                </h4>
                <div className="col-md-6 col-3">
                  <hr />
                </div>
              </div>
              <p>
                {" "}
                Hello! my name is Sarah Nnanyelugo. I am a frontend developer
                and I enjoy creating things that live on the internet. This
                overtime has made me passionate about digital products that help
                people experience everyday life, not endure it.
              </p>{" "}
              <p>
                I started software development in 2020 after I took in for my
                fiirst baby. I never really liked anything that has to do with
                computer and it was a known fact by my husband. That still
                didn't stop him from engaing me in computer talks being a
                Software Engineer himself. Overtime, I began to fancy then
                concept of turning ideas into real life products
              </p>
            </div>
            <div className="col-md-4 dp-container offset-md-1 col-10">
              <center>
                {" "}
                <img
                  className="col-md-12 col-8"
                  src={Dp}
                  alt="Scholar"
                  width="100%"
                />
              </center>
            </div>
          </div>
          <p className="col-md-6 offset-md-2">
            {" "}
            Hello! My name is Sarah and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>

          <p className="col-md-6 offset-md-2">
            {" "}
            Hello! My name is Sarah and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!{" "}
            <a
              className="link-alteration"
              href="https://www.linkedin.com/post/edit/6740319122741174272/"
              target="_blank"
            >
              Continue from my linkedIn page
            </a>
          </p>
          <p className="col-md-6 offset-md-2">
            {" "}
            Here are a few technologies I’ve been working with recently:
          </p>
          <div style={{ display: "flex" }} className="col-md-6 offset-md-3">
            <ul className="list-unstyled" style={{ marginRight: "50px" }}>
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>Boostrap</li>
              <li>React Carbon Design System</li>
              <li> React Testing</li>
            </ul>
            <ol className="list-unstyled">
              <li>ReactJs</li>
              <li>Typescript</li>
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
        <div
          className="col-md-12 about-me flexed"
          data-scroll
          data-scroll-speed="3"
        >
          <span style={{ height: "50px" }} id="contact"></span>
          <div className="socials col-1">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/sarahnnanyelugo"
                  className="socials"
                  target="_blank"
                >
                  <i class="icofont-github"></i>
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://web.facebook.com/ukoha.sarah/?_rdc=1&_rdr"
                  className="socials"
                  target="_blank"
                >
                  <i class="icofont-facebook"></i>
                </a>
              </li>{" "}
              <li>
                <a href="#" className="socials" target="_blank">
                  <i class="icofont-instagram"></i>
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://www.linkedin.com/in/sarah-u
koha-16a04b147"
                  className="socials"
                  target="_blank"
                >
                  <i class="icofont-linkedin"></i>
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://vercel.com/dashboard"
                  className="socials"
                  target="_blank"
                >
                  <i class="icofont-caret-up"></i>{" "}
                </a>
              </li>
            </ul>
            <div className="vr"></div>
          </div>
          <div className="col-md-6 offset-md-2 contact col-10">
            <div style={{ display: "flex" }}>
              <h4>
                <span>03.</span>What’s Next?
              </h4>
              <div className="col-md-6 col-3">
                <hr />
              </div>
            </div>
            <center>
              {" "}
              <h2>Get In Touch</h2>
              <p>
                Thanks for stopping by, I’m currently looking to join a new team
                of creative designers and developers. If you think we might be a
                good fit for one another, give me a call 🇳🇬 or send me an email
                📧.
              </p>
              <a
                href="sarahnnanyelugo@gmail.com"
                target="_blank"
                className="app-button"
              >
                Say Hello
              </a>
            </center>
          </div>
          <div className="flip col-1 dn">
            {" "}
            <a href="sarahnnanyelugo@gmail.com" target="_blank">
              sarahnnanyelugo@gmail.com
            </a>
            {/* <div className="vr1"></div> */}
          </div>
        </div>
        <div className=" col-1 dn2">
          {" "}
          <a href="sarahnnanyelugo@gmail.com" target="_blank">
            sarahnnanyelugo@gmail.com
          </a>
        </div>
        <div className="quote col-md-8 offset-md-2">
          <center>
            {" "}
            <p>
              <em>
                {" "}
                Even in moments of obscurity and anonymity, strive however for
                excellence without compromise, for when the opportunities you so
                desire will come by, all you would have to present would be your
                works, and by then, there may be little or no time for editing.
              </em>
            </p>
            <p className=" offset-md-9 quoter">Sarah Nnanyelugo</p>
          </center>
        </div>
        <div className="col-md-12 footer flexy">
          <div className="col-md-12 flexy">
            {" "}
            <p> Built From Scratch With </p>
            <p class="zoom-in-out-box">
              {" "}
              <i class="icofont-heart-alt"></i>
            </p>
            <p> © Copyright 2023, Sarah.Nnanyelugo All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <AppModal />
    </>
  );
};
