import React from "react";
import "./TeamComponent.css";
import biArrow from "../../Images/bl-arrow.png";
import { Link } from "react-router-dom";
import { TeamData } from "./TeamData";

const TeamComponent = () => {
  return (
    <section class="troo-da-team-section" id="troo-da-team-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-txt">
              <span>Our Creative Team</span>
              <h2>
                Team Behind
                <br /> Our Successful Projects
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {TeamData.map((e, i) => (
            <div class="col-md-3" key={i}>
              <div class="team-col">
                <div class="team-img">
                  <img src={e.img} alt="team1" />
                </div>
                <div class="team-txt">
                  <h3>{e.name} </h3>
                  <p>{e.title} </p>
                </div>
                <div class="team-deatils">
                  <ul>
                    {e.social.map((ele, ind) => (
                      <li key={ind}>
                        <Link to={ele.path} >{ele.icon}</Link>
                      </li>
                    ))}
                    
                  </ul>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="read-cta">
              <Link href="#">
                See All Team Member
                <img src={biArrow} alt="biArrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
