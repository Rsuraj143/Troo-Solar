import React from 'react'
import "./ReviewComponent.css";
import { ReviewData } from './ReviewData';

const ReviewComponent2 = () => {
  return (
    <section class="troo-da-testimonial-section" id="troo-da-testimonial-section"> 
    <div class="bg-reviw">
      <span>TESTIMONIAL</span>
    </div>
    <div class="container">
       <div class="row">
          <div class="col-md-6">
            <div class="sub-txt"><span>For Us Review Matter</span><h2> Our Valueable Client’s Review</h2> </div>
             </div>
          <div class="col-md-6">
            <div class="revi-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus necullamcorper mattis, pulvina.</p>
            </div>
          </div>
      </div>
      <div class="row clinet-section">
      {ReviewData.slice(0, 3).map((e, i) => (
            <div class="col-md-4">
              <div class="client-col">
                <div class="client-img">
                  <img src={e.img} alt="client1" />
                  <div class="cli-text">”</div>
                </div>
                <div class="client-text">
                  <h4>{e.name} </h4>
                  <span>{e.title} </span>
                  <strong>“ {e.comment} ”</strong>
                  <p>{e.para}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div class="row clinet-section">
      {ReviewData.slice(3,6).map((e, i) => (
            <div class="col-md-4">
              <div class="client-col">
                <div class="client-img">
                  <img src={e.img} alt="client1" />
                  <div class="cli-text">”</div>
                </div>
                <div class="client-text">
                  <h4>{e.name} </h4>
                  <span>{e.title} </span>
                  <strong>“ {e.comment} ”</strong>
                  <p>{e.para}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </section>
  )
}

export default ReviewComponent2