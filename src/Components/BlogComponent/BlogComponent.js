import React from 'react'
import "./BlogComponent.css"
import news1 from "../../Images/news-1.png"
import news2 from "../../Images/news-2.png"
import news3 from "../../Images/news-3.png"
import news4 from "../../Images/news-4.png"
import news5 from "../../Images/news-5.png"
import news6 from "../../Images/news-6.png"
import arrow from "../../Images/arrow.png"
import { Link } from 'react-router-dom'

const BlogComponent = () => {
  return (
    <section class="troo-da-news-section" id="troo-da-news-section">
  <div class="container">
      <div class="row">
        <div class="col-md-12">
            <div class="sub-txt"><span>Recent News</span><h2> Recent News & Blogs About<br/> Controling Your Energy Production</h2> </div>
        </div>
      </div>
      <div class="row">
         <div class="col-md-4">
          <div class="news-col">
             <div class="news-cont">
              <img src={news1} alt='new1' />
              <div class="news-text">
                <h4>Newly Built Customized<br/> Hydro Plants</h4>
                <p>December 8, 2020
                  - By: Admin</p>
              </div>
             </div>
          </div>
         </div>
         <div class="col-md-4">
          <div class="news-col">
             <div class="news-cont">
              <img src={news2} alt='new2' />
              <div class="news-text">
                <h4>Home Windmill, Reuse <br/>& Maintenance</h4>
                <p>December 8, 2020
                  - By: Admin</p>
              </div>
             </div>
          </div>
         </div>
         <div class="col-md-4">
          <div class="news-col">
             <div class="news-cont">
              <img src={news3} alt='new3' />
              <div class="news-text">
                <h4>Avoid Solar Panels<br/>
                  Damage Your Top Roof</h4>
                <p>December 8, 2020
                  - By: Admin</p>
              </div>
             </div>
          </div>
         </div>
      </div>
      <div class="row">
        <div class="col-md-4">
         <div class="news-col">
            <div class="news-cont">
             <img src={news4} alt='new4' />
             <div class="news-text">
               <h4>The Emergence of New<br/> Tech for a Green Future</h4>
               <p>December 8, 2020
                 - By: Admin</p>
             </div>
            </div>
         </div>
        </div>
        <div class="col-md-4">
         <div class="news-col">
            <div class="news-cont">
             <img src={news5} alt='new5' />
             <div class="news-text">
               <h4>Mead Before And After<br/> The Epic Etars</h4>
               <p>December 8, 2020
                 - By: Admin</p>
             </div>
            </div>
         </div>
        </div>
        <div class="col-md-4">
         <div class="news-col">
            <div class="news-cont">
             <img src={news6} alt='new6' />
             <div class="news-text">
               <h4>We Re-shaping Energy<br/>
                For a Better Quality</h4>
               <p>December 8, 2020
                 - By: Admin</p>
             </div>
            </div>
         </div>
        </div>
     </div>
     <div class="row">
      <div class="col-md-12">
        <div class="read-cta green-btn"><Link href="#">Read All Blogs <img src={arrow} alt='arrow'  /></Link></div>
      </div>
     </div>
   </div>
</section>
  )
}

export default BlogComponent