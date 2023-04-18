import React from "react";
import service1 from "../../Images/service-details-1.png";
import service2 from "../../Images/service-details-2.png";
import service3 from "../../Images/service-details-3.png";
import call from "../../Images/phone-call.svg";
import { Link } from "react-router-dom";

const ServiceDetailsComponent = () => {
  return (
    <section
      class="troo-da-service-deails-section"
      id="troo-da-service-deails-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="service-detils">
              <h2>Service Overview</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribu ssfr4 and tion of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, it is and a
                search for 'lorem anf ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years
              </p>
              <div class="row">
                <div class="col-md-6">
                  <img src={service1} alt="service1" />
                </div>
                <div class="col-md-6">
                  <img src={service2} alt="service2" />
                </div>
              </div>
              <div class="row">
                <div class="servic-overview">
                  <p>
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribu ssfr4 and tion of letters, as
                    opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                  <div class="row">
                    <div class="col-md-6">
                      <ul>
                        <li>
                          <span>01</span>
                          <p>Streamer fish California halibut Pacif </p>
                        </li>
                        <li>
                          <span>02</span>
                          <p>Brown trout loach summer flounder</p>{" "}
                        </li>
                        <li>
                          <span>03</span>
                          <p>European minnow black dragonfish </p>
                        </li>
                        <li>
                          <span>04</span>
                          <p>Garpike cardinalfish shortnose chimaera. </p>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul>
                        <li>
                          <span>05</span>
                          <p>Streamer fish California halibut Pacif </p>
                        </li>
                        <li>
                          <span>06</span>
                          <p>Brown trout loach summer flounder </p>
                        </li>
                        <li>
                          <span>07</span>
                          <p>European minnow black dragonfish </p>
                        </li>
                        <li>
                          <span>08</span>
                          <p>Garpike cardinalfish shortnose chimaera.</p>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribu ssfr4 and tion of letters, as
                    opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="planing-section">
                  <h3>Planning the environment</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribu ssfr4 and tion of letters, as
                    opposed to using 'Content here, content here', making it
                    look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default
                    model text.
                  </p>
                  <img src={service3} alt="service3" />
                  <div class="arch-col">
                    <h3>Architectural Planning</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribu ssfr4 and tion of
                      letters, as opposed to using 'Content here, content here',
                      making it look like readable English. Many desktop
                      publishing packages and web page editors now use Lorem
                      Ipsum as their default model text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="sidebar">
              <h3>All Services</h3>
              <div class="ser-list">
                <ul>
                  <li>
                    <Link href="#">Solar Panels</Link>
                  </li>
                  <li>
                    <Link href="#">Windmill Installation </Link>
                  </li>
                  <li>
                    <Link href="#">Elctricity Station</Link>
                  </li>
                  <li>
                    <Link href="#">Inspection and Repair</Link>
                  </li>
                  <li>
                    <Link href="#">Construction Consultancy</Link>
                  </li>
                  <li>
                    <Link href="#">Research Solar Batteries</Link>
                  </li>
                </ul>
              </div>
              <div class="emergency-col">
                <span>Need Emergency?</span>
                <h4>Don’t Be Hesitate To Contact Us</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing typesetting.
                </p>
                <div class="call-us">
                  <div class="cll-img">
                    <img src={call} alt="call" />
                  </div>
                  <div class="call-text">
                    <strong>Call Us on</strong>
                    <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsComponent;
