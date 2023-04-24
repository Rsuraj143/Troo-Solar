import React from "react";
import "./TeamComponent.css";
import { Link } from "react-router-dom";
import { TeamData } from "./TeamData";

const TeamComponent2 = () => {
  return (
    <section className="troo-da-meet-team-section" id="troo-da-meet-team-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-txt">
              <span>Our Creative Team</span>
              <h2>
                Team Behind
                <br /> Our Successful Projects
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {TeamData.map((e, i) => (
            <div className="col-md-3" key={i}>
              <div className="team-col">
                <div className="team-img">
                  <img src={e.img} alt="team1" />
                </div>
                <div className="team-txt">
                  <h3>{e.name} </h3>
                  <p>{e.title} </p>
                </div>
                <div className="team-deatils">
                  <ul>
                    {e.social.map((ele, ind) => (
                      <li key={ind}>
                        <Link to={ele.path}>{ele.icon}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {TeamData.map((e, i) => (
            <div className="col-md-3" key={i}>
              <div className="team-col">
                <div className="team-img">
                  <img src={e.img} alt="team1" />
                </div>
                <div className="team-txt">
                  <h3>{e.name} </h3>
                  <p>{e.title} </p>
                </div>
                <div className="team-deatils">
                  <ul>
                    {e.social.map((ele, ind) => (
                      <li key={ind}>
                        <Link to={ele.path}>{ele.icon}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamComponent2;
