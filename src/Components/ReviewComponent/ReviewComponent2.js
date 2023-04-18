import React from 'react'
import "./ReviewComponent.css";
import client1 from "../../Images/client-1.png"
import client2 from "../../Images/client-2.png"
import client3 from "../../Images/client-3.png"
import client4 from "../../Images/client-4.png"
import client5 from "../../Images/client-5.png"
import client6 from "../../Images/client-6.png"

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
        <div class="col-md-4">
          <div class="client-col">
             <div class="client-img">
               <img src={client1} alt='client1' />
               <div class="cli-text">”</div>
             </div>
             <div class="client-text">
               <h4>Alexzander White</h4>
               <span>XYZ Company CEO</span>
               <strong>“ Awesome Services ”</strong>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida
                a in ipsum Lorem ipsum dolor sit amet</p>
             </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="client-col">
             <div class="client-img">
             <img src={client2} alt='client2' />
               <div class="cli-text">”</div>
             </div>
             <div class="client-text">
               <h4>Aleaha Annaday</h4>
               <span>XYZ Company CEO</span>
               <strong>“ Smart Team Work ”</strong>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida
                a in ipsum Lorem ipsum dolor sit amet</p>
             </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="client-col">
             <div class="client-img">
             <img src={client3} alt='client3' />
               <div class="cli-text">”</div>
             </div>
             <div class="client-text">
               <h4>Rodrick O’Brien</h4>
               <span>XYZ Company CEO</span>
               <strong>“ Very Fast Work Delivery ”</strong>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida
                a in ipsum Lorem ipsum dolor sit amet</p>
             </div>
          </div>
        </div>
      </div>
      <div class="row clinet-section">
        <div class="col-md-4">
          <div class="client-col">
             <div class="client-img">
             <img src={client4} alt='client4' />
               <div class="cli-text">”</div>
             </div>
             <div class="client-text">
               <h4>Alexzander White</h4>
               <span>XYZ Company CEO</span>
               <strong>“ Awesome Services ”</strong>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida
                a in ipsum Lorem ipsum dolor sit amet</p>
             </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="client-col">
             <div class="client-img">
             <img src={client5} alt='client5' />
               <div class="cli-text">”</div>
             </div>
             <div class="client-text">
               <h4>Aleaha Annaday</h4>
               <span>XYZ Company CEO</span>
               <strong>“ Smart Team Work ”</strong>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida
                a in ipsum Lorem ipsum dolor sit amet</p>
             </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="client-col">
             <div class="client-img">
             <img src={client6} alt='client6' />
               <div class="cli-text">”</div>
             </div>
             <div class="client-text">
               <h4>Rodrick O’Brien</h4>
               <span>XYZ Company CEO</span>
               <strong>“ Very Fast Work Delivery ”</strong>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida
                a in ipsum Lorem ipsum dolor sit amet</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ReviewComponent2