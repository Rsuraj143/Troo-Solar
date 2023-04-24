import React, { useState } from "react";
import "./HeroComponent.css";
import arrow from "../../Images/arrow.png";
import play from "../../Images/Play.png";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const HeroComponent = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    if (!modal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    setModal(!modal);
  };

  return (
    <section className="troo-da-hero-section" id="troo-da-hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="hero-text">
              <div className="sub-tile">
                Commercial, Residential & Industrial Solar Systems
              </div>
              <h1 className="first">Sustainable, Reliable & Affordable Energy! </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make.
              </p>
              <div className="read-cta green-btn">
                <Link to="/Home/Get_Qoute">
                  Get a Qoute <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <button className="videobtn" onClick={openModal}>
              <div class="bg"></div>
              <img src={play} alt="play" />
              {modal ? (
                <section className="modal__bg">
                  <div className="modal__align">
                    <div className="modal__content" modal={modal}>
                      <IoCloseOutline
                        className="modal__close"
                        arial-label="Close modal"
                        onClick={setModal}
                      />
                      <div className="modal__video-align">
                        <iframe
                          className="modal__video-style"
                          width="800"
                          height="500"
                          src="https://www.youtube.com/embed/pXxsZtcbKdw?start=96"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </section>
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
