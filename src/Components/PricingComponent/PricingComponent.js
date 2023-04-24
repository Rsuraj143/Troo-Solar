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
      className="troo-da-pricing-tabble-section"
      id="troo-da-pricing-tabble-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="sub-txt">
              <span>Pricing Tabble</span>
              <h2>We Have Affordable price For Your Next Project</h2>{" "}
            </div>
          </div>
          <div className="col-md-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever is since the 1500s, when an unknown printer took a galley of
              type and it is scrambled.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="pricing-col">
              <div className="pricing-tile">
                <div className="pri-tt">
                  <h4>Residential Area</h4> <strong>$15.00 </strong>
                  <span> / Per Watt</span>
                </div>
                <div className="pric-img">
                  <img src={pricingcon1} alt="pricingcon1" />
                </div>
              </div>
              <div className="pri-txt">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="pricing-vale">
                <ul>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Eco-Packing Systems</span>
                  </li>
                  <li>
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Minimal Energy Waste</span>
                  </li>
                  <li className="disable">
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>High Density Cells</span>
                  </li>
                  <li className="disable">
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span>Environmental Friendly</span>
                  </li>
                  <li className="disable">
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span> Monitoring & Maintainance</span>
                  </li>
                </ul>
              </div>
              <div className="princing-btn">
                <button>Purchase plan</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pricing-col">
              <div className="pricing-tile">
                <div className="pri-tt">
                  <h4>Commercial Area</h4> <strong>$30.00 </strong>
                  <span> / Per Watt</span>
                </div>
                <div className="pric-img">
                  <img src={pricingcon2} alt="pricingcon2" />
                </div>
              </div>
              <div className="pri-txt">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="pricing-vale">
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
                  <li className="disable">
                    <img src={pricingCheck} alt="pricingCheck" />
                    <span> Monitoring & Maintainance</span>
                  </li>
                </ul>
              </div>
              <div className="princing-btn">
                <button>Purchase plan</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pricing-col">
              <div className="pricing-tile">
                <div className="pri-tt">
                  <h4>Agricultral Area</h4> <strong>$50.00 </strong>
                  <span> / Per Watt</span>
                </div>
                <div className="pric-img">
                  <img src={pricingcon3} alt="pricingcon3" />
                </div>
              </div>
              <div className="pri-txt">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>{" "}
              </div>
              <div className="pricing-vale">
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
              <div className="princing-btn">
                <button>Purchase plan</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="all-prcinng">
            <Link to="/Home/Pricing_Table">See All Our Pricing Plan</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
