import React from "react";
import "./CommingSoonComponent.css";
import commingCall from "../../Images/coming-call.png";
import commingImg from "../../Images/coming-img.png";

const CommingCoonComponent = () => {
  return (
    <section class="troo-da-coming-section" id="troo-da-coming-section">
      <div class="coming-col">
        <div class="coming-text">
          <span>Hello There!</span>
          <div class="coming-title">
            We Are <span>Lounching</span> Our <span>Website</span> Very Soon
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>
          <div class="search-container">
            <strong>Notify Me When It Lounch</strong>
            <form>
              <input type="text" name="Email" placeholder="Email" />
              <button type="submit">Notify Me</button>
            </form>
          </div>
          <div class="call-us">
            <div class="cll-img">
              <img src={commingCall} alt="commingCall" />
            </div>
            <div class="call-text">
              <strong>Call Us on</strong>
              <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
            </div>
          </div>
        </div>
        <div class="coming-img">
          <img src={commingImg} alt="commingImg" />
        </div>
      </div>
    </section>
  );
};

export default CommingCoonComponent;
