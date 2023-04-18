import React from "react";
import "./HeroComponent.css";
import arrow from "../../Images/arrow.png";
import play from "../../Images/Play.png";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <section class="troo-da-hero-section" id="troo-da-hero-section">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="hero-text">
              <div class="sub-tile">
                Commercial, Residential & Industrial Solar Systems
              </div>
              <h1 class="first">Sustainable, Reliable & Affordable Energy! </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make.
              </p>
              <div class="read-cta green-btn">
                <Link to=" ">
                  Get a Qoute <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <button
              type="button"
              class="videobtn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="bg"></div>
              <img src={play} alt="play" />
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <video controls>
                      <source src="movie.mp4" type="video/mp4" />
                    </video>
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

export default HeroComponent;
