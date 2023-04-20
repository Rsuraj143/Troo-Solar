import React, { useState } from "react";
import "./AboutComponent.css";
import greendot from "../../Images/green-dots.png";
import aboutImg from "../../Images/about.png";
import biArrow from "../../Images/bl-arrow.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AboutComponent = () => {
  const [counter, setCounter] = useState(false);
  return (
    <section class="troo-da-who-we-are-section" id="troo-da-who-we-are-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="dot-img">
              {" "}
              <img src={greendot} alt="greendot" />{" "}
            </div>
            <div class="who-img">
              {" "}
              <img src={aboutImg} alt="aboutImg" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="who-text">
              <div class="sub-txt">
                <span>Who We Are</span>
                <h2>
                  Powering Your Businessfor
                  <br /> Over 25 Years
                </h2>{" "}
              </div>
              <strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </strong>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever is since the 1500s, when an unknown printer took a
                galley of type and it is scrambled it to make a type specimen
                book. It has survived type specimen book. It has survived.
              </p>
              <div class="expert-team">
                <div class="ex-tm">
                  <ScrollTrigger
                    onEnter={() => setCounter(true)}
                    onExit={() => setCounter(false)}
                    className="strong"
                  >
                    {counter && (
                      <CountUp start={0} end={30} duration={2} delay={0} className="counternum" />
                    )}
                    +
                  </ScrollTrigger>
                  <span>Expert In Team</span>
                </div>
                <div class="ex-dest">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </div>
              </div>
              <h4>Our Mission</h4>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever is since the 1500s, when an unknown printer took a
                galley of type and it is scrambled.
              </p>
              <div class="read-cta">
                <Link to="#">
                  Learn More <img src={biArrow} alt="biArrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
