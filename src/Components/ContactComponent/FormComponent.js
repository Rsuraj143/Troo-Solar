import React from 'react'
import "./FormComponent.css"
import arrow from "../../Images/arrow.png"


const FormComponent = () => {
  return (
    <section className="troo-da-form-section" id="troo-da-form-section"> 
    <div className="bg-reviw">
      <span>CONTACT FORM</span>
    </div>
    <div className="container">
       <div className="row">
          <div className="col-md-12">
            <div className="sub-txt"><span>Request A Quote</span><h2>Have Question Feel Free to <br/>Contact Us?</h2> </div>
          </div>
       </div>
      <div className="row">
        <div className="col-md-12">
          <div className="contcat-form-section">
            <form className="row g-3">
              <div className="col-md-6">
                <div className="field">
                    <label for="inputFullName" className="form-label">Full Name</label>
                    <input type="FullName" className="form-control" id="inputFullName" placeholder="Full Name" />
                 </div>
              </div>
              <div className="col-md-6">
                <div className="field">
                  <label for="inputPhoneNumber" className="form-label">Phone Number</label>
                  <input type="PhoneNumber" className="form-control" id="inputPhoneNumber" placeholder="Phone Number"/>
                  </div>
              </div>
              <div className="col-md-6">
                <div className="field">
                <label for="inputYourEmail" className="form-label">Your Email</label>
                <input type="text" className="form-control" id="inputYourEmail" placeholder="Email"/>
              </div>
              </div>
              <div className="col-md-6">
                <div className="field">
                <label for="inputSubject" className="form-label">Subject</label>
                <select id="inputSubject" className="form-select">
                  <option selected>Subject</option>
                </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="field">
                <label for="inputYourEmail" className="form-label">Your Message</label>
                <textarea placeholder="">Message</textarea>
                </div>
              </div>
               <div className="col-12">
                <button type="submit" className="read-cta green-btn">Explore All Services <img src={arrow} alt='arrow' /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FormComponent