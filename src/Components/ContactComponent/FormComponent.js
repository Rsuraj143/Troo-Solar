import React from 'react'
import "./FormComponent.css"
import arrow from "../../Images/arrow.png"


const FormComponent = () => {
  return (
    <section class="troo-da-form-section" id="troo-da-form-section"> 
    <div class="bg-reviw">
      <span>CONTACT FORM</span>
    </div>
    <div class="container">
       <div class="row">
          <div class="col-md-12">
            <div class="sub-txt"><span>Request A Quote</span><h2>Have Question Feel Free to <br/>Contact Us?</h2> </div>
          </div>
       </div>
      <div class="row">
        <div class="col-md-12">
          <div class="contcat-form-section">
            <form class="row g-3">
              <div class="col-md-6">
                <div class="field">
                    <label for="inputFullName" class="form-label">Full Name</label>
                    <input type="FullName" class="form-control" id="inputFullName" placeholder="Full Name" />
                 </div>
              </div>
              <div class="col-md-6">
                <div class="field">
                  <label for="inputPhoneNumber" class="form-label">Phone Number</label>
                  <input type="PhoneNumber" class="form-control" id="inputPhoneNumber" placeholder="Phone Number"/>
                  </div>
              </div>
              <div class="col-md-6">
                <div class="field">
                <label for="inputYourEmail" class="form-label">Your Email</label>
                <input type="text" class="form-control" id="inputYourEmail" placeholder="Email"/>
              </div>
              </div>
              <div class="col-md-6">
                <div class="field">
                <label for="inputSubject" class="form-label">Subject</label>
                <select id="inputSubject" class="form-select">
                  <option selected>Subject</option>
                </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="field">
                <label for="inputYourEmail" class="form-label">Your Message</label>
                <textarea placeholder="">Message</textarea>
                </div>
              </div>
               <div class="col-12">
                <button type="submit" class="read-cta green-btn">Explore All Services <img src={arrow} alt='arrow' /></button>
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