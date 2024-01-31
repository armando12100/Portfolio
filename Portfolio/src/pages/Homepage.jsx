import { gsap } from "gsap"
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Header from "./Header";
import Skills from "./skills";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import Me from "../images/me.jpg"

export default function Homepage() {

  return (
    <>
      <Header />
      <div className="first-page-container" id="home">

          <div className="about-container">

            <h1>
              Front End Developer
            </h1>

            <p className="about-paragraph">
              Hello, I'm Armando Sanchez, a self taught front-end developer specializeing in building and designing exceptional
              web experiences.
            </p>
            <div className="about-btn-container">
              <a href="https://github.com/dashboard" className="link">
              <button className="about-btn">Explore My Github</button>
              </a>
            </div>
          </div>

          <div className="me-pic-container">
            <img src={Me} alt="" className="me" />
          </div>

      </div>
      <Skills />
      <SecondPage />
      <ThirdPage />

    </>
  )
}