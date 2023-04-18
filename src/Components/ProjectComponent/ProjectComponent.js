import React from "react";
import "./ProjectComponent.css";
import project1 from "../../Images/project-1.png"
import pluse from "../../Images/pluse-icon.png"
import project2 from "../../Images/project-2.png"
import project3 from "../../Images/project-3.png"
import project4 from "../../Images/project-4.png"
import project5 from "../../Images/project-5.png"
import project6 from "../../Images/project-6.png"
import { Link } from "react-router-dom";
import arrow from "../../Images/arrow.png"

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
          <div class="col-md-4">
            <div class="project-col">
              <img src={project1} alt="project1" />
              <div class="project-text">
                <img src={pluse} alt="pluse" />
                <div class="text-pr">
                  <p>Solar</p>
                  <span>Solar Heaters On Roof Top</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-col">
              <img src={project2} alt="project2" />
              <div class="project-text">
                <img src={pluse} alt="pluse" />
                <div class="text-pr">
                  <p>Solar</p>
                  <span>Solar Heaters On Roof Top</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-col">
              <img src={project3} alt="project3" />
              <div class="project-text">
                <img src={pluse} alt="pluse" />
                <div class="text-pr">
                  <p>Solar</p>
                  <span>Solar Heaters On Roof Top</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="project-col">
              <img src={project4} alt="project4" />
              <div class="project-text">
                <img src={pluse} alt="pluse" />
                <div class="text-pr">
                  <p>Solar</p>
                  <span>Solar Heaters On Roof Top</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-col">
              <img src={project5} alt="project5" />
              <div class="project-text">
                <img src={pluse} alt="pluse" />
                <div class="text-pr">
                  <p>Solar</p>
                  <span>Solar Heaters On Roof Top</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-col">
              <img src={project6} alt="project6" />
              <div class="project-text">
                <img src={pluse} alt="pluse" />
                <div class="text-pr">
                  <p>Solar</p>
                  <span>Solar Heaters On Roof Top</span>
                </div>
              </div>
            </div>
          </div>
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
