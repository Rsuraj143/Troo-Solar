import React from "react";
import "./ProjectComponent.css";
import pluse from "../../Images/pluse-icon.png";
import { Link, createSearchParams } from "react-router-dom";
import arrow from "../../Images/arrow.png";
import { ProjectData } from "./ProjectData";

const ProjectComponent = () => {
  return (
    <section className="troo-da-projects-section" id="troo-da-projects-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-txt">
              <span>Our Latest Projects</span>
              <h2>
                Latest Projects, Solutions
                <br /> and Energy Supplies
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {ProjectData.slice(0, 3).map((e, i) => (
              <div className="col-md-4">
                <Link to={`/Home/Our_Projects/Project_Details?${createSearchParams({id: e.id})}`}>
                <div className="project-col">
                  <img src={e.img} alt="project1" />
                  <div className="project-text">
                    <img src={pluse} alt="pluse" />
                    <div className="text-pr">
                      <p>{e.name} </p>
                      <span>{e.title} </span>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
          ))}
        </div>
        <div className="row">
          {ProjectData.slice(3, 6).map((e, i) => (
            <div className="col-md-4">
             <Link to={`/Home/Our_Projects/Project_Details?${createSearchParams({id: e.id})}`}>
             <div className="project-col">
                <img src={e.img} alt="project1" />
                <div className="project-text">
                  <img src={pluse} alt="pluse" />
                  <div className="text-pr">
                    <p>{e.name} </p>
                    <span>{e.title} </span>
                  </div>
                </div>
              </div>
             </Link>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="view-pro">
              <h2>1826+ Projects Completed</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec
                <br />
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="read-cta green-btn">
              <Link to="/Home/Our_Projects">
                View All Project <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
