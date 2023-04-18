import React from "react";
import "./PricingComponent.css";
import pricingcon1 from "../../Images/pricicon-1.png";
import pricingcon2 from "../../Images/pricicon-2.png";
import pricingcon3 from "../../Images/pricicon-3.png";

import pricingCheck from "../../Images/pricung-check.png";
import { Link } from "react-router-dom";

const PricingComponent = () => {
  return (
    <section
      class="troo-da-pricing-tabble-section"
      id="troo-da-pricing-tabble-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="sub-txt">
              <span>Pricing Tabble</span>
              <h2>We Have Affordable price For Your Next Project</h2>{" "}
            </div>
          </div>
          <div class="col-md-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever is since the 1500s, when an unknown printer took a galley of
              type and it is scrambled.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="pricing-col">
              <div class="pricing-tile">
                <div class="pri-tt">
                  <h4>Residential Area</h4> <strong>$15.00 </strong>
                  <span> / Per Watt</span>
                </div>
                <div class="pric-img">
                  <img src={pricingcon1} alt="pricingcon1" />
                </div>
              </div>
              <div class="pri-txt">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>{" "}
              </div>
              <div class="pricing-vale">
                <ul>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Eco-Packing Systems</span>
                  </li>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Minimal Energy Waste</span>
                  </li>
                  <li class="disable">
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>High Density Cells</span>
                  </li>
                  <li class="disable">
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Environmental Friendly</span>
                  </li>
                  <li class="disable">
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span> Monitoring & Maintainance</span>
                  </li>
                </ul>
              </div>
              <div class="princing-btn">
                <button>Purchase plan</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="pricing-col">
              <div class="pricing-tile">
                <div class="pri-tt">
                  <h4>Commercial Area</h4> <strong>$30.00 </strong>
                  <span> / Per Watt</span>
                </div>
                <div class="pric-img">
                  <img src={pricingcon2} alt="pricingcon2" />
                </div>
              </div>
              <div class="pri-txt">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>{" "}
              </div>
              <div class="pricing-vale">
                <ul>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Eco-Packing Systems</span>
                  </li>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Minimal Energy Waste</span>
                  </li>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>High Density Cells</span>
                  </li>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Environmental Friendly</span>
                  </li>
                  <li class="disable">
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span> Monitoring & Maintainance</span>
                  </li>
                </ul>
              </div>
              <div class="princing-btn">
                <button>Purchase plan</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="pricing-col">
              <div class="pricing-tile">
                <div class="pri-tt">
                  <h4>Agricultral Area</h4> <strong>$50.00 </strong>
                  <span> / Per Watt</span>
                </div>
                <div class="pric-img">
                  <img src={pricingcon3} alt="pricingcon3" />
                </div>
              </div>
              <div class="pri-txt">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>{" "}
              </div>
              <div class="pricing-vale">
                <ul>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Eco-Packing Systems</span>
                  </li>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Minimal Energy Waste</span>
                  </li>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>High Density Cells</span>
                  </li>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Environmental Friendly</span>
                  </li>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span> Monitoring & Maintainance</span>
                  </li>
                </ul>
              </div>
              <div class="princing-btn">
                <button>Purchase plan</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="all-prcinng">
            <Link href="#">See All Our Pricing Plan</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
