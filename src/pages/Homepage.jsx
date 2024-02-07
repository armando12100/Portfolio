import { gsap } from "gsap"
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Header from "./Header";
import Skills from "./skills";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import { Link } from "react-scroll"

export default function Homepage() {

  return (
    <>
      <Header />
      <div className="first-page-container" id="home">

        <div className="about-container">

          <p className="about-header">
            Front End Developer
          </p>

          <p className="about-paragraph">
            Hello, I'm Armando Sanchez, a self taught front-end developer specializing in building and designing exceptional
            web experiences.
          </p>
          <div className="about-btn-container">
            <a href="https://github.com/dashboard" className="link">
              <button className="about-btn">Explore My Github</button>
            </a>
            <Link to="projects" spy={true} smooth={true} offset={-19} duration={500}>
              <button className="projects-btn"> Explore My Projects </button>
            </Link>
          </div>
        </div>

        {/* <div className="me-pic-container">
            <img src={Me} alt="" className="me" />
          </div> */}

      </div>
      <Skills />
      <SecondPage />
      <ThirdPage />

    </>
  )
}