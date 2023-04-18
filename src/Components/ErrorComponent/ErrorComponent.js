import React from 'react'
import "./ErrorComponent.css"
import arrow from "../../Images/arrow.png"
import blArrow from "../../Images/bl-arrow.png"
import errorImg from "../../Images/404-img.png"
import { Link } from 'react-router-dom'

const ErrorComponent = () => {
  return (
    <section class="troo-da-error-section" id="troo-da-error-section">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="error-text">
           <span>We lost That Page</span>
           <div class="error-titlr"> 404 <strong>Error</strong> </div>
           <p>Sorry, the page you are looking for doesn't exist or
            has been moved. Try searching our site:</p>
            <div class="error-cta">
            <div class="read-cta green-btn"> <Link to="/Home"><img src={arrow} alt='arrow' />  Go Back </Link></div>
            <div class="read-cta"><a href="index.html">Go to Home<img src={blArrow} alt='blArrow' /></a></div>
          </div>
         </div>
      </div>
      <div class="col-md-6">
        <div class="error-img">
          <img src={errorImg} alt='errorImg' />
        </div>
      </div>
      </div>
    </div>
 </section>
  )
}

export default ErrorComponent