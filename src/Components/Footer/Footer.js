import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import Logo from "../../Images/Logo.png"
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import {HiMailOpen} from "react-icons/hi"

const Footer = () => {
  return (
    <div className='footer'>
        <section className="troo-da-footer-section" id="troo-da-foooter-section">
    <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo-ss">
              <Link to="/"><img src={Logo} alt='Logo' /></Link>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <ul>
                <li><Link to="#"><FaFacebookF/> </Link></li>
                <li><Link to="#"><FaTwitter/> </Link></li>
                <li><Link to="#"><FaInstagram/> </Link></li>
                <li><Link to="#"><FaLinkedinIn/> </Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="start-col">
            <h4>Start a project now.</h4>
            <div className="cll-ss">
              <div className="col-detals">
                <div className="call-deails">
                 <div className="icon-cal"><FaPhoneAlt/> </div>
                  <div className="cal-te"><Link to="#"><span>Call Us on</span> <strong>+44 123 456 7890</strong></Link></div>
                </div>
                <div className="call-deails">
                  <div className="icon-cal"><HiMailOpen/> </div>
                  <div className="cal-te"><Link to="#"><span>Email Us on</span> <strong>trooenergy@email.com</strong></Link></div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="foter-link">
               <div className="fot-tile">Pages</div>
               <div className="fflinks">
                <ul>
                  <li><Link to="#"> Home it work</Link></li>
                  <li><Link to="#"> Pricing</Link></li>
                  <li><Link to="#"> Blog</Link></li>
                  <li><Link to="#">Career</Link></li>
                </ul>
               </div>
            </div>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="bottm-footer">
               <div className="copy-ss"><span>Copyright © 2022. <strong>troothemes. All rights reserved.</strong></span></div>
          
            <div className="bottom-link">
              <ul>
                <li><Link to="#">Terms & Conditions</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        </div>
        </section>
    </div>
  )
}

export default Footer