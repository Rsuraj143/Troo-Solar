import React from 'react'
import "./ProjectComponent.css";
import { ProjectData } from './ProjectData';
import plus from "../../Images/pluse-icon.png"

const ProjectComponent2 = () => {
  return (
    <section class="troo-da-projects-section" id="troo-da-projects-section"> 
    <div class="container">
      
       <div class="row">
       {ProjectData.slice(0, 3).map((e, i) => (
            <div class="col-md-4">
              <div class="project-col">
                <img src={e.img} alt="project1" />
                <div class="project-text">
                  <img src={plus} alt="pluse" />
                  <div class="text-pr">
                    <p>{e.name} </p>
                    <span>{e.title} </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
         
       </div>
       <div class="row">
       {ProjectData.slice(3,6).map((e, i) => (
            <div class="col-md-4">
              <div class="project-col">
                <img src={e.img} alt="project1" />
                <div class="project-text">
                  <img src={plus} alt="pluse" />
                  <div class="text-pr">
                    <p>{e.name} </p>
                    <span>{e.title} </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        
      </div>
      <div class="row">
      {ProjectData.slice(6,9).map((e, i) => (
            <div class="col-md-4">
              <div class="project-col">
                <img src={e.img} alt="project1" />
                <div class="project-text">
                  <img src={plus} alt="pluse" />
                  <div class="text-pr">
                    <p>{e.name} </p>
                    <span>{e.title} </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        
      </div>
   </div>
  </section>
  )
}

export default ProjectComponent2