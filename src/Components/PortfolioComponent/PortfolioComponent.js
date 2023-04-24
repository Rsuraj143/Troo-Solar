import React from 'react'
import "./PortfolioComponent.css"
import choseImg from "../../Images/chose-img.png"
import choseicon1 from "../../Images/choose-icon-1.png"
import choseicon2 from "../../Images/choose-icon-2.png"
import choseicon3 from "../../Images/choose-icon-3.png"


const PortfolioComponent = () => {
  return (
    <section className="troo-da-choose-section" id="troo-da-choose-section"> 
         <div className="container">
          <div className="row">
            <div className="col-md-5">
               <div className="chose-img">
                <img src={choseImg} alt='choseImg' />
                <div className="cls-ss">
                 <div className="chose-txt">
                    <div className="chos-icon">88k</div>
                    <div className="chicon-tt">Successful<br/>
                      Projects</div>
                    </div>
                 </div>
               </div>
            </div>
            <div className="col-md-7"> 
              <div className="chose-contetn">
                <div className="sub-txt"><span>Why Choose Us</span><h2>Offer Value To Our lients Through Ongoing Product & Innovation.</h2> </div>
                <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy</strong>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                  text ever is since the 1500s, when an unknown printer took a galley of type and it is  scrambled.</p>   
                  <div className="row">
                    <div className="col-md-4">
                       <div className="cos-icons">
                        <img src={choseicon1} alt='choseicon1'  />
                        <h4>Save Energy for World</h4>
                       </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cos-icons">
                       <img src={choseicon2} alt='choseicon2'  />
                       <h4>Save Energy for World</h4>
                      </div>
                   </div>
                   <div className="col-md-4">
                    <div className="cos-icons">
                     <img src={choseicon3} alt='choseicon3' />
                     <h4>Save Energy for World</h4>
                    </div>
                 </div>
                  </div>
              </div>
            </div>
          </div>
         </div>
</section>
  )
}

export default PortfolioComponent