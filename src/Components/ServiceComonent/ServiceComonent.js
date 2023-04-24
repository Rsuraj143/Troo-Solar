import React from "react";
import "./ServiceComonent.css";
import { Link , createSearchParams } from "react-router-dom";
import arrow from "../../Images/gr-arrow.png";
import blArrow from "../../Images/bl-arrow.png";
import { ServiceData } from "./ServiceData";

const ServiceComonent = () => {
  return (
    <section className="troo-da-offer-section" id="troo-da-offer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-txt">
              <span>What We Are</span>
              <h2>
                Renewable Energy for
                <br />
                Srustainable development
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {ServiceData.slice(0, 3).map((e, i) => (
            <div className="col-md-4" key={i}>
              <div className={e.className}>
                <div className="servi-img">
                  <img src={e.img} alt="service1" />
                </div>
                <div className="serv-text">
                  <h3>{e.name}</h3>
                  <p>{e.para} </p>
                  <div className="learn-btn">
                    <Link to={`/Home/Our_Services/Service_Details?${createSearchParams({id : e.id})}`}>
                      Learn More
                      <img src={arrow} alt="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="read-cta">
              <Link to="/Home/Our_Services">
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
