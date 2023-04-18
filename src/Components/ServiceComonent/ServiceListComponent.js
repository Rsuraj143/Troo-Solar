import React from "react";
import green from "../../Images/green.png";
import green2 from "../../Images/green-2.png";
import green3 from "../../Images/green-3.png";
import green4 from "../../Images/green-4.png";
import green5 from "../../Images/green-5.png";
import green6 from "../../Images/green-6.png";

import grArrow from "../../Images/gr-arrow.png";
import { Link } from "react-router-dom";

const ServiceListComponent = () => {
  return (
    <section
      class="troo-da-service-list-section"
      id="troo-da-service-list-section"
    >
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
          <div class="col-md-6">
            <div class="servic-list-img">
              <img src={green} alt="green" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="servic-list-text">
              <h3>Solar Eco Power</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but it is a also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <Link href="#">
                Read More <img src={grArrow} alt="grArrow" />
              </Link>
            </div>
          </div>
        </div>

        <div class="row wide-row">
          <div class="col-md-6">
            <div class="servic-list-text left-txt">
              <h3>Wind Turbines Services</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but it is a also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <Link href="#">
                Read More <img src={grArrow} alt="grArrow" />
              </Link>
            </div>
          </div>
          <div class="col-md-6">
            <div class="servic-list-img">
              <img src={green2} alt="green2" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="servic-list-img">
              <img src={green3} alt="green3" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="servic-list-text">
              <h3>Htdropower Plants</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but it is a also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <Link href="#">
                Read More <img src={grArrow} alt="grArrow" />
              </Link>
            </div>
          </div>
        </div>

        <div class="row fossil-row">
          <div class="col-md-6">
            <div class="servic-list-text left-txt">
              <h3>Fossil Resources</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but it is a also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <Link href="#">
                Read More <img src={grArrow} alt="grArrow" />
              </Link>
            </div>
          </div>
          <div class="col-md-6">
            <div class="servic-list-img">
              <img src={green4} alt="green4" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="servic-list-img">
              <img src={green5} alt="green5" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="servic-list-text">
              <h3>Battery Materials</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but it is a also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <Link href="#">
                Read More <img src={grArrow} alt="grArrow" />
              </Link>
            </div>
          </div>
        </div>
        <div class="row charge-row">
          <div class="col-md-6">
            <div class="servic-list-text left-txt">
              <h3>Charge Controllers</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but it is a also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <Link href="#">
                Read More <img src={grArrow} alt="grArrow" />
              </Link>
            </div>
          </div>
          <div class="col-md-6">
            <div class="servic-list-img">
              <img src={green6} alt="green6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceListComponent;
