import { gsap } from "gsap"
import React from "react";
const { useLayoutEffect, useRef, useEffect } = React;
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Header from "./Header";
import CardInfo from "./CardInfo";
import Card from "./card";
import ThirdPage from "./thirdPage";

export default function Homepage() {
  // Code for name animations //
  const component = useRef();

  useLayoutEffect(() => {
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: .1
    }, component);
  }, []);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#008080", y: -30, duration: .001 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#FFFFFF", y: 0, duration: .003 });
  };


  // Card For Projects //
  const cards = CardInfo.map(item => {
    return (
      <Card
        title={item.title}
        key={item.id}
        paragraph={item.paragraph}
        website={item.websiteLink}
        github={item.githubLink}
        video={item.video}
      />
    )
  })


  return (
    <>
      <Header />
      <div className="first-page-container" id="home">

        <div className="home-page-second-container">
          <div className="my-text">
            <div className="tag">
              <p className="hi">Hello, my name is</p>
            </div>
            <div className="line">
              <div className="word">
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>A</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>R</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>M</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>A</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>N</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>D</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>O</div>
                <div className="char">.</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>S</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>A</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>N</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>C</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>H</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>E</div>
                <div className="char" onMouseEnter={onEnter} onMouseLeave={onLeave}>Z</div>
              </div>
              <div>

                <p className="about-paragraph">
                  I'm a self taught front-end developer specializeing in building and designing exceptional
                  web experiences.
                </p>
              </div>

              <div className="about-btn">Scroll to see more about me</div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-page-container" id="projects">

        <div className="projects-header">
          <div className="cards-header">P</div>
          <div className="cards-header">R</div>
          <div className="cards-header">O</div>
          <div className="cards-header">J</div>
          <div className="cards-header">E</div>
          <div className="cards-header">C</div>
          <div className="cards-header">T</div>
          <div className="cards-header">S</div>
        </div>

        <div className="cards-container">
          {cards}
        </div>
      </div>

      <ThirdPage />

    </>
  )
}