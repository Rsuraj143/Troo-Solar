import React from "react";
import "./ProjectComponent.css";
import pluse from "../../Images/pluse-icon.png";
import { Link, createSearchParams } from "react-router-dom";
import arrow from "../../Images/arrow.png";
import { ProjectData } from "./ProjectData";

const ProjectComponent = () => {
  return (
    <section class="troo-da-projects-section" id="troo-da-projects-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-txt">
              <span>Our Latest Projects</span>
              <h2>
                Latest Projects, Solutions
                <br /> and Energy Supplies
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {ProjectData.slice(0, 3).map((e, i) => (
              <div class="col-md-4">
                <Link to={`/Home/Our_Projects/Project_Details?${createSearchParams({id: e.id})}`}>
                <div class="project-col">
                  <img src={e.img} alt="project1" />
                  <div class="project-text">
                    <img src={pluse} alt="pluse" />
                    <div class="text-pr">
                      <p>{e.name} </p>
                      <span>{e.title} </span>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
          ))}
        </div>
        <div class="row">
          {ProjectData.slice(3, 6).map((e, i) => (
            <div class="col-md-4">
             <Link to={`/Home/Our_Projects/Project_Details?${createSearchParams({id: e.id})}`}>
             <div class="project-col">
                <img src={e.img} alt="project1" />
                <div class="project-text">
                  <img src={pluse} alt="pluse" />
                  <div class="text-pr">
                    <p>{e.name} </p>
                    <span>{e.title} </span>
                  </div>
                </div>
              </div>
             </Link>
            </div>
          ))}
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="view-pro">
              <h2>1826+ Projects Completed</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec
                <br />
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="read-cta green-btn">
              <Link href="#">
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
