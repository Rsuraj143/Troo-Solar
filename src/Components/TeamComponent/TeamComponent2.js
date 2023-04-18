import React from "react";
import "./TeamComponent.css";
import team1 from "../../Images/team-1.png";
import team2 from "../../Images/team-2.png";
import team3 from "../../Images/team-3.png";
import team4 from "../../Images/team-4.png";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamComponent2 = () => {
  return (
    <section class="troo-da-meet-team-section" id="troo-da-meet-team-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-txt">
              <span>Our Creative Team</span>
              <h2>
                {" "}
                Team Behind
                <br /> Our Successful Projects
              </h2>{" "}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="team-col">
              <div class="team-img">
                <img src={team1} alt="team1" />
              </div>
              <div class="team-txt">
                <h3>Hackson Willi</h3>
                <p>CEO and Founder</p>
              </div>
              <div class="team-deatils">
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
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="team-col">
              <div class="team-img">
                <img src={team2} alt="team2" />
              </div>
              <div class="team-txt">
                <h3>Alexa Boss</h3>
                <p>Project Manager</p>
              </div>
              <div class="team-deatils">
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
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="team-col">
              <div class="team-img">
                <img src={team3} alt="team3" />
              </div>
              <div class="team-txt">
                <h3>Adam Spears</h3>
                <p>Techician</p>
              </div>
              <div class="team-deatils">
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
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="team-col">
              <div class="team-img">
                <img src={team4} alt="team4" />
              </div>
              <div class="team-txt">
                <h3>Diana Watson</h3>
                <p>Marketing Manager</p>
              </div>
              <div class="team-deatils">
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
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="team-col">
              <div class="team-img">
                <img src={team1} alt="team1" />
              </div>
              <div class="team-txt">
                <h3>Hackson Willi</h3>
                <p>CEO and Founder</p>
              </div>
              <div class="team-deatils">
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
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="team-col">
              <div class="team-img">
                <img src={team2} alt="team2" />
              </div>
              <div class="team-txt">
                <h3>Alexa Boss</h3>
                <p>Project Manager</p>
              </div>
              <div class="team-deatils">
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
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="team-col">
              <div class="team-img">
                <img src={team3} alt="team3" />
              </div>
              <div class="team-txt">
                <h3>Adam Spears</h3>
                <p>Techician</p>
              </div>
              <div class="team-deatils">
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
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="team-col">
              <div class="team-img">
                <img src={team4} alt="team4" />
              </div>
              <div class="team-txt">
                <h3>Diana Watson</h3>
                <p>Marketing Manager</p>
              </div>
              <div class="team-deatils">
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
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent2;
