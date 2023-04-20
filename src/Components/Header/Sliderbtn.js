import React, { useState } from 'react'
import {FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaHome, FaUsers, FaCog, FaBriefcase, FaRss, FaPhone,} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import humburger from "../../Images/Humberg.png";
import logoblack from "../../Images/Logo-black.png";
import { Link } from "react-router-dom";
import arrow from "../../Images/arrow.png";

const Sliderbtn = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='drawer'>
        <Button onClick={handleShow} className="hum-btn">
          <img src={humburger} alt="humburger" />
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <div class="canva-logo">
              <img src={logoblack} alt="logoblack" />
            </div>
            <div class="menu-col">
              <h4>Menu</h4>
              <ul>
                <li><Link to="/Home"><FaHome /> Home </Link> </li>
                <li><Link to="/Home/About"><FaUsers /> About Us </Link></li>
                <li><Link to="/Home/Our_Services"><FaCog /> Services</Link></li>
                <li><Link to="/Home/Our_Projects"><FaBriefcase /> Our Work</Link></li>
                <li><Link to="/Home/Blogs"><FaRss /> Blogs</Link></li>
                <li><Link to="/Home/Contact_Us"><FaPhone /> Contact</Link></li>
              </ul>
            </div>
            <div class="read-cta">
              <Link to="/Home/Get_Qoute">
                Get a Qoute <img src={arrow} alt="arrow" />
              </Link>
            </div>
            <div class="socail-icon">
              <h4>Connect</h4>
              <ul>
                <li><Link to="#"><FaFacebookF /></Link></li>
                <li><Link to="#"><FaTwitter /></Link></li>
                <li><Link to="#"><FaInstagram /></Link></li>
                <li><Link to="#"><FaYoutube /></Link></li>
                <li><Link to="#"><FaLinkedinIn /></Link></li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default Sliderbtn