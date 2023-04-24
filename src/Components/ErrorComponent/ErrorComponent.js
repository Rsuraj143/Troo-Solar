import React from 'react'
import "./ErrorComponent.css"
import arrow from "../../Images/arrow.png"
import blArrow from "../../Images/bl-arrow.png"
import errorImg from "../../Images/404-img.png"
import { Link } from 'react-router-dom'

const ErrorComponent = () => {
  return (
    <section className="troo-da-error-section" id="troo-da-error-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="error-text">
           <span>We lost That Page</span>
           <div className="error-titlr"> 404 <strong>Error</strong> </div>
           <p>Sorry, the page you are looking for doesn't exist or
            has been moved. Try searching our site:</p>
            <div className="error-cta">
            <div className="read-cta green-btn"> <Link to="/Home"><img src={arrow} alt='arrow' />  Go Back </Link></div>
            <div className="read-cta"><Link to="/Home">Go to Home<img src={blArrow} alt='blArrow' /></Link></div>
          </div>
         </div>
      </div>
      <div className="col-md-6">
        <div className="error-img">
          <img src={errorImg} alt='errorImg' />
        </div>
      </div>
      </div>
    </div>
 </section>
  )
}

export default ErrorComponent