import React from 'react'
import "./ProjectComponent.css";
import { ProjectData } from './ProjectData';
import plus from "../../Images/pluse-icon.png"
import { Link, createSearchParams } from "react-router-dom";

const ProjectComponent2 = () => {
  return (
    <section className="troo-da-projects-section" id="troo-da-projects-section"> 
    <div className="container">
      
       <div className="row">
       {ProjectData.slice(0, 3).map((e, i) => (
            <div className="col-md-4">
             <Link to={`/Home/Our_Projects/Project_Details?${createSearchParams({id: e.id})}`}>
             <div className="project-col">
                <img src={e.img} alt="project1" />
                <div className="project-text">
                  <img src={plus} alt="pluse" />
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
       {ProjectData.slice(3,6).map((e, i) => (
            <div className="col-md-4">
              <Link to={`/Home/Our_Projects/Project_Details?${createSearchParams({id: e.id})}`}>
              <div className="project-col">
                <img src={e.img} alt="project1" />
                <div className="project-text">
                  <img src={plus} alt="pluse" />
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
      {ProjectData.slice(6,9).map((e, i) => (
            <div className="col-md-4">
             <Link to={`/Home/Our_Projects/Project_Details?${createSearchParams({id: e.id})}`}>
             <div className="project-col">
                <img src={e.img} alt="project1" />
                <div className="project-text">
                  <img src={plus} alt="pluse" />
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
   </div>
  </section>
  )
}

export default ProjectComponent2