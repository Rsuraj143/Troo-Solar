import React from "react";
import "./ServiceComonent.css";
import { Link } from "react-router-dom";
import arrow from "../../Images/gr-arrow.png";
import blArrow from "../../Images/bl-arrow.png";
import { ServiceData } from "./ServiceData";

const ServiceComonent = () => {
  return (
    <section class="troo-da-offer-section" id="troo-da-offer-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-txt">
              <span>What We Are</span>
              <h2>
                Renewable Energy for
                <br />
                Srustainable development
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {ServiceData.slice(0, 3).map((e, i) => (
            <div class="col-md-4" key={i}>
              <div className={e.className}>
                <div class="servi-img">
                  <img src={e.img} alt="service1" />
                </div>
                <div class="serv-text">
                  <h3>{e.name}</h3>
                  <p>{e.para} </p>
                  <div class="learn-btn">
                    <Link href="#">
                      Learn More
                      <img src={arrow} alt="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="read-cta">
              <Link href="#">
                Explore All Services
                <img src={blArrow} alt="blArrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComonent;
