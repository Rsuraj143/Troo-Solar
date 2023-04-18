import React, { useState } from "react";
import "./Header.css";
import Logo from "../../Images/Logo.png";
import arrow from "../../Images/arrow.png";
import phone from "../../Images/phone-call.svg";
import humburger from "../../Images/Humberg.png";
import logoblack from "../../Images/Logo-black.png";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaUsers,
  FaCog,
  FaBriefcase,
  FaRss,
  FaPhone,
} from "react-icons/fa";

import { HeaderData } from "./HeaderData";
import NavMenu from "./NavMenu";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <section class="troo-da-header-section" id="troo-da-header-section">
        <Navbar expand="lg" bg="light">
          <Navbar.Brand>
            <Link to="/Home">
              <img src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ">
              {HeaderData.slice(0, 7).map((item, i) => {
                return <NavMenu key={i} item={item} />;
              })}
            </ul>
            <div class="get-col">
              {HeaderData.slice(-1).map((e, i) => {
                return (
                  <Link className="btnn btn-lg" key={i} to={e.path}>
                    <span>{e.title}</span>
                    <img src={arrow} alt="arrow" />
                  </Link>
                );
              })}
            </div>

            <div class="call-us">
              <div class="cll-img">
                <img src={phone} alt="phone" />
              </div>
              <div class="call-text">
                <strong>Call Us on</strong>
                <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>

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
                <li>
                  <Link to="/Home">
                    <FaHome /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/Home/About">
                    <FaUsers /> About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Home/Our_Services">
                    <FaCog /> Services
                  </Link>
                </li>
                <li>
                  <Link to="/Home/Our_Projects">
                    <FaBriefcase /> Our Work
                  </Link>
                </li>
                <li>
                  <Link to="/Home/Blogs">
                    <FaRss /> Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/Home/Contact_Us">
                    <FaPhone /> Contact
                  </Link>
                </li>
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
                <li>
                  <Link to="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaYoutube />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </div>
  );
};

export default Header;
