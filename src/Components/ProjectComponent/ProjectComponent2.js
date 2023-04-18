import React from 'react'
import "./ProjectComponent.css";
import project1 from "../../Images/project-1.png"
import project2 from "../../Images/project-2.png"
import project3 from "../../Images/project-3.png"
import project4 from "../../Images/project-4.png"
import project5 from "../../Images/project-5.png"
import project6 from "../../Images/project-6.png"
import project7 from "../../Images/project-7.png"
import project8 from "../../Images/project-8.png"
import project9 from "../../Images/project-9.png"

import plus from "../../Images/pluse-icon.png"

const ProjectComponent2 = () => {
  return (
    <section class="troo-da-projects-section" id="troo-da-projects-section"> 
    <div class="container">
      
       <div class="row">
         <div class="col-md-4">
          <div class="project-col">
            <img src={project1} alt='project1' />
            <div class="project-text">
              <img src={plus} alt='plus' />
              <div class="text-pr">
                <p>Solar</p> 
                <span>Solar Heaters On Roof Top</span>   
              </div>   
            </div>
          </div>
         </div>
         <div class="col-md-4">
          <div class="project-col">
          <img src={project2} alt='project2' />
            <div class="project-text">
              <img src={plus} alt='plus' />
              <div class="text-pr">
                <p>Solar</p> 
                <span>Solar Heaters On Roof Top</span>   
              </div>   
            </div>
          </div>
         </div>
         <div class="col-md-4">
          <div class="project-col">
          <img src={project3} alt='project3' />
            <div class="project-text">
              <img src={plus} alt='plus' />
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
         <img src={project4} alt='project4' />
           <div class="project-text">
             <img src={plus} alt='plus' />
             <div class="text-pr">
               <p>Solar</p> 
               <span>Solar Heaters On Roof Top</span>   
             </div>   
           </div>
         </div>
        </div>
        <div class="col-md-4">
         <div class="project-col">
         <img src={project5} alt='project5' />
           <div class="project-text">
             <img src={plus} alt='plus' />
             <div class="text-pr">
               <p>Solar</p> 
               <span>Solar Heaters On Roof Top</span>   
             </div>   
           </div>
         </div>
        </div>
        <div class="col-md-4">
         <div class="project-col">
         <img src={project6} alt='project6' />
           <div class="project-text">
             <img src={plus} alt='plus' />
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
         <img src={project7} alt='project7' />
           <div class="project-text">
             <img src={plus} alt='plus' />
             <div class="text-pr">
               <p>Solar</p> 
               <span>Solar Heaters On Roof Top</span>   
             </div>   
           </div>
         </div>
        </div>
        <div class="col-md-4">
         <div class="project-col">
         <img src={project8} alt='project8' />
           <div class="project-text">
             <img src={plus} alt='plus' />
             <div class="text-pr">
               <p>Solar</p> 
               <span>Solar Heaters On Roof Top</span>   
             </div>   
           </div>
         </div>
        </div>
        <div class="col-md-4">
         <div class="project-col">
         <img src={project9} alt='project9' />
           <div class="project-text">
             <img src={plus} alt='plus' />
             <div class="text-pr">
               <p>Solar</p> 
               <span>Solar Heaters On Roof Top</span>   
             </div>   
           </div>
         </div>
        </div>
      </div>
   </div>
  </section>
  )
}

export default ProjectComponent2