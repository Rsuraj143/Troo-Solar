import React from "react";
import "./CommingSoonComponent.css";
import commingCall from "../../Images/coming-call.png";
import commingImg from "../../Images/coming-img.png";

const CommingCoonComponent = () => {
  return (
    <section className="troo-da-coming-section" id="troo-da-coming-section">
      <div className="coming-col">
        <div className="coming-text">
          <span>Hello There!</span>
          <div className="coming-title">
            We Are <span>Lounching</span> Our <span>Website</span> Very Soon
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>
          <div className="search-container">
            <strong>Notify Me When It Lounch</strong>
            <form>
              <input type="text" name="Email" placeholder="Email" />
              <button type="submit">Notify Me</button>
            </form>
          </div>
          <div className="call-us">
            <div className="cll-img">
              <img src={commingCall} alt="commingCall" />
            </div>
            <div className="call-text">
              <strong>Call Us on</strong>
              <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
            </div>
          </div>
        </div>
        <div className="coming-img">
          <img src={commingImg} alt="commingImg" />
        </div>
      </div>
    </section>
  );
};

export default CommingCoonComponent;
