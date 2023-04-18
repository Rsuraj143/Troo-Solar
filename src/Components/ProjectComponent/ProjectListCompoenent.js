import React from "react";
import "./ProjectComponent.css";
import green from "../../Images/green.png";
import green2 from "../../Images/green-2.png";
import blArrow from "../../Images/bl-arrow.png";
import grArrow from "../../Images/gr-arrow.png";
import { Link } from "react-router-dom";
import arrow from "../../Images/arrow.png";

const ProjectListCompoenent = () => {
  return (
    <section
      class="troo-da-about-latest-projects-section"
      id="troo-da-about-latest-projects-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-txt">
              <span>Our Latest Projects</span>
              <h2>
                Latest Projects, Solutions
                <br /> and Energy Supplies
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7">
            <div class="latest-img">
              <img src={green} alt="green" />
            </div>
          </div>
          <div class="col-md-5">
            <div class="latest-txt">
              <span>Green energy</span>
              <h3>Expanding The Solar Supply Chain Finance Program</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but it is a also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <Link to="#">
                Read More <img class="normal-im" src={blArrow} alt="blArrow" />
                <img class="hover-im" src={grArrow} alt="grArrow" />
              </Link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="latest-txt smater-text">
              <span>Green energy</span>
              <h3>
                Smarter Ways to Manage
                <br />
                EV Charging Infrastructures
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but it is a also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <Link to="#">
                Read More <img class="normal-im" src={blArrow} alt="blArrow" />
                <img class="hover-im" src={grArrow} alt="grArrow" />
              </Link>
            </div>
          </div>
          <div class="col-md-7">
            <div class="latest-img smart-ss">
              <img src={green2} alt="green2" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="peoject-com">
              <h2>1826+ Projects Completed</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div class="col-md-7">
            <div class="all-project">
              <div class="read-cta green-btn">
                <Link to="#">
                  View All Project <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectListCompoenent;
