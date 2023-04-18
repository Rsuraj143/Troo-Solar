import React from "react";
import arrow from "../../Images/arrow.png";
import "./ContactComponent.css"

const ContactComponent = () => {
  return (
    <section class="troo-da-contact-section" id="troo-da-contact-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="contact-section">
              <h2>
                Do you have any questions?
                <br /> Contact Us!
              </h2>
              <div class="contact-call">
                <strong>+44 123 456 7890</strong>
                <strong>info@troothemes.com</strong>
                <span>
                  073 Briarwood Drive, Hopewell, New Jersey, 08525, United
                  States
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7">
            <div class="contcat-form-section">
              <h3>Let’s Get Started</h3>
              <h2>Request a Detailed Estimate</h2>
              <form class="row g-3">
                <div class="col-md-6">
                  <div class="field">
                    <label for="inputFullName" class="form-label">
                      Full Name
                    </label>
                    <input
                      type="FullName"
                      class="form-control"
                      id="inputFullName"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label for="inputCompanyName" class="form-label">
                      Company Name
                    </label>
                    <input
                      type="CompanyName"
                      class="form-control"
                      id="inputCompanyName"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="field">
                    <label for="inputYourEmail" class="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputYourEmail"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label for="inputPhoneNumber" class="form-label">
                      Phone Number
                    </label>
                    <input
                      type="PhoneNumber"
                      class="form-control"
                      id="inputPhoneNumber"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="field">
                    <label for="inputSubject" class="form-label">
                      How can we help you?
                    </label>
                    <select id="inputSubject" class="form-select">
                      <option selected="">Solar Power</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="field">
                    <label for="inputYourEmail" class="form-label">
                      Your Message
                    </label>
                    <textarea placeholder="">Message</textarea>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="read-cta green-btn">
                    Send Message <img src={arrow} alt="arrow" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-5">
            <div class="iframe-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8850349918985!2d72.49642611542339!3d23.027993021903114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b278e046fa5%3A0xd837def63555f791!2sTRooInbound%20Private%20Limited!5e0!3m2!1sen!2sin!4v1675687103879!5m2!1sen!2sin"
                title="Google Map"
                style={{border:"0"}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
