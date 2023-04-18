import React from 'react'
import "./ServiceComonent.css"
import greArrow from "../../Images/gr-arrow.png"
import service1 from "../../Images/services-normal-1.png"
import service2 from "../../Images/services-normal-2.png"
import service3 from "../../Images/services-normal-3.png"
import service4 from "../../Images/services-normal-4.png"
import service5 from "../../Images/services-normal-5.png"
import service6 from "../../Images/services-normal-6.png"
import { Link } from 'react-router-dom'
import arrow from "../../Images/bl-arrow.png"

const ServiceComponent2 = () => {
  return (
    <section class="troo-da-offer-section" id="troo-da-offer-section"> 
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <div class="sub-txt"><span>What We Are</span><h2> Renewable Energy for<br/>Srustainable development</h2> </div>
         </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="services-col">
             <div class="servi-img">
              <img src={service1} alt='service1' />
             </div>
             <div class="serv-text">
              <h3>Solar Eco-Power</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                it is Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="learn-btn">
                  <Link href="#">Learn More<img src={greArrow} alt='greArrow' /></Link>
                </div>
             </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-col wind-col">
             <div class="servi-img">
             <img src={service2} alt='service2' />
             </div>
             <div class="serv-text">
              <h3>Wind Turbines Services</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                it is Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="learn-btn">
                <Link href="#">Learn More<img src={greArrow} alt='greArrow' /></Link>
                </div>
             </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-col htdropower-col">
             <div class="servi-img">
             <img src={service3} alt='service3' />
             </div>
             <div class="serv-text">
              <h3>Htdropower Plants</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                it is Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="learn-btn">
                <Link href="#">Learn More<img src={greArrow} alt='greArrow' /></Link>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="services-col fossil-col">
             <div class="servi-img">
             <img src={service4} alt='service4' />
             </div>
             <div class="serv-text">
              <h3>Fossil Resources</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                it is Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="learn-btn">
                  <Link href="#">Learn More<img src={greArrow} alt='greArrow' /></Link>
                </div>
             </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-col battery-col">
             <div class="servi-img">
             <img src={service5} alt='service5' />
             </div>
             <div class="serv-text">
              <h3>Battery Materials</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                it is Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="learn-btn">
                  <Link href="#">Learn More<img src={greArrow} alt='greArrow' /></Link>
                </div>
             </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-col charge-col">
             <div class="servi-img">
             <img src={service6} alt='service6' />
             </div>
             <div class="serv-text">
              <h3>Charge Controllers</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                it is Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="learn-btn">
                  <Link href="#">Learn More<img src={greArrow} alt='greArrow' /></Link>
                </div>
             </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="read-cta"><Link href="#">Explore All Services<img src={arrow} alt='arrow' /></Link></div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ServiceComponent2