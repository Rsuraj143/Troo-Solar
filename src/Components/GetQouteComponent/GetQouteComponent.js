import React from 'react'
import "./GetQouteComponent.css"
import arrow from "../../Images/arrow.png"
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const GetQouteComponent = () => {
  return (
    <section class="troo-da-contact-section" id="troo-da-contact-section">
    <div class="container">
   <div class="row">
   
      <div class="col-md-5">
           <div class="work-together">
              <span>Need a Help?</span>
              <h2>Let’s Work Together</h2>
                <div class="get-mail">
                  <div class="get-img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.744 2.63358L21.272 7.52679C21.538 7.69969 21.671 7.78615 21.7674 7.90146C21.8527 8.00354 21.9167 8.12162 21.9558 8.24877C22 8.39241 22 8.55104 22 8.8683V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V8.8683C2 8.55104 2 8.39241 2.04417 8.24877C2.08327 8.12162 2.14735 8.00354 2.23265 7.90146C2.32901 7.78615 2.46201 7.69969 2.72802 7.52679L10.256 2.63358M13.744 2.63358C13.1127 2.22327 12.7971 2.01812 12.457 1.93829C12.1564 1.86774 11.8436 1.86774 11.543 1.93829C11.2029 2.01812 10.8873 2.22327 10.256 2.63358M13.744 2.63358L20.9681 7.32925C21.312 7.5528 21.484 7.66458 21.5435 7.80632C21.5956 7.9302 21.5956 8.06981 21.5435 8.19368C21.484 8.33543 21.312 8.44721 20.9681 8.67076L13.744 13.3664C13.1127 13.7767 12.7971 13.9819 12.457 14.0617C12.1564 14.1323 11.8436 14.1323 11.543 14.0617C11.2029 13.9819 10.8873 13.7767 10.256 13.3664L3.03193 8.67076C2.68801 8.44721 2.51604 8.33543 2.45649 8.19368C2.40444 8.06981 2.40444 7.9302 2.45649 7.80632C2.51604 7.66458 2.68801 7.5528 3.03193 7.32925L10.256 2.63358" stroke="url(#paint0_linear_240_1047)" stroke-linecap="round" stroke-linejoin="round"/>
                      <defs><linearGradient id="paint0_linear_240_1047" x1="12" y1="1.88538" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#79F1A6"/>
                      <stop offset="1" stop-color="#4BD2C7"/>
                      </linearGradient>
                      </defs>
                      </svg>
                  </div>
                    <div class="get-text">
                      <h3>Email Me</h3>
                      <span><a href="mailto:alexajems125@email.com">alexajems125@email.com</a>
                      </span>
                    </div>
                </div>
                <div class="get-mail">
                  <div class="get-img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.38028 8.85323C9.07627 10.3028 10.0251 11.6615 11.2266 12.8631C12.4282 14.0646 13.7869 15.0134 15.2365 15.7094C15.3612 15.7693 15.4235 15.7992 15.5024 15.8222C15.7828 15.904 16.127 15.8453 16.3644 15.6752C16.4313 15.6274 16.4884 15.5702 16.6027 15.4559C16.9523 15.1063 17.1271 14.9315 17.3029 14.8172C17.9658 14.3862 18.8204 14.3862 19.4833 14.8172C19.6591 14.9315 19.8339 15.1063 20.1835 15.4559L20.3783 15.6508C20.9098 16.1822 21.1755 16.448 21.3198 16.7333C21.6069 17.3009 21.6069 17.9712 21.3198 18.5387C21.1755 18.8241 20.9098 19.0898 20.3783 19.6213L20.2207 19.7789C19.6911 20.3085 19.4263 20.5733 19.0662 20.7756C18.6667 21 18.0462 21.1614 17.588 21.16C17.1751 21.1588 16.8928 21.0787 16.3284 20.9185C13.295 20.0575 10.4326 18.433 8.04466 16.045C5.65668 13.6571 4.03221 10.7947 3.17124 7.76131C3.01103 7.19687 2.93092 6.91464 2.9297 6.5017C2.92833 6.04347 3.08969 5.42298 3.31411 5.02348C3.51636 4.66345 3.78117 4.39863 4.3108 3.86901L4.46843 3.71138C4.99987 3.17993 5.2656 2.91421 5.55098 2.76987C6.11854 2.4828 6.7888 2.4828 7.35636 2.76987C7.64174 2.91421 7.90747 3.17993 8.43891 3.71138L8.63378 3.90625C8.98338 4.25585 9.15819 4.43065 9.27247 4.60643C9.70347 5.26932 9.70347 6.1239 9.27247 6.78679C9.15819 6.96257 8.98338 7.13738 8.63378 7.48698C8.51947 7.60129 8.46231 7.65845 8.41447 7.72526C8.24446 7.96269 8.18576 8.30695 8.26748 8.5873C8.29048 8.6662 8.32041 8.72854 8.38028 8.85323Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                   </div>
                    <div class="get-text">
                      <h3>Call Me</h3>
                      <span><a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                      </span>
                    </div>
                </div>
                <div class="get-mail">
                  <div class="get-img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                   </div>
                    <div class="get-text">
                      <h3>Address</h3>
                      <span>Warnwe Park Streetperrine, 
                        FL 33157 New York City
                      </span>
                    </div>
                </div>
           </div>
           <div class="get-socail">
              <div class="socail-tile">Follow Me on Social Media</div>
              <ul>
                <li><Link to="#"><FaFacebookF/> </Link></li>
                <li><Link to="#"><FaTwitter/> </Link></li>
                <li><Link to="#"><FaInstagram/> </Link></li>
                <li><Link to="#"><FaLinkedinIn/> </Link></li>
              </ul>
           </div>
        </div>
        <div class="col-md-7">
          <div class="contcat-form-section">
            <h3>Let’s Get Started</h3>
            <h2>Request a Detailed Estimate</h2>
            <form class="row g-3">
              <div class="col-md-6">
                <div class="field">
                    <label for="inputFullName" class="form-label">Full Name</label>
                    <input type="FullName" class="form-control" id="inputFullName" placeholder="Full Name"/>
                 </div>
              </div>
              <div class="col-md-6">
                <div class="field">
                    <label for="inputCompanyName" class="form-label">Company Name</label>
                    <input type="CompanyName" class="form-control" id="inputCompanyName" placeholder="Company Name"/>
                 </div>
              </div>
              
              <div class="col-md-6">
                <div class="field">
                <label for="inputYourEmail" class="form-label">Email Address</label>
                <input type="text" class="form-control" id="inputYourEmail" placeholder="Email Address"/>
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
                <label for="inputSubject" class="form-label">What Services Are You Interested In?</label>
                <select id="inputSubject" class="form-select">
                  <option selected="">Solar Power</option>
                </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="field">
                <label for="inputSubject" class="form-label">Rate Your Urgency <small>(0 not urgent / 10 emergency)</small></label>
                <select id="inputSubject" class="form-select">
                  <option selected="">05</option>
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
                <button type="submit" class="read-cta green-btn">Send Message <img src={arrow} alt='arrow' /></button>
              </div>
            </form>
          </div>
        </div>
     
      </div>
    </div>
    
    </section>
  )
}

export default GetQouteComponent