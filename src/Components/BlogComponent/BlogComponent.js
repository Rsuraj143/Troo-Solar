import React from "react";
import "./BlogComponent.css";
import arrow from "../../Images/arrow.png";
import { Link, createSearchParams } from "react-router-dom";
import { BlogData } from "./BlogData";

const BlogComponent = () => {
  return (
    <section class="troo-da-news-section" id="troo-da-news-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-txt">
              <span>Recent News</span>
              <h2>
                Recent News & Blogs About
                <br /> Controling Your Energy Production
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {BlogData.slice(0, 3).map((e, i) => (
              <div class="col-md-4">
                 <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id: e.id})}`}>
                <div class="news-col">
                  <div class="news-cont">
                    <img src={e.img} alt="new1" />
                    <div class="news-text">
                      <h4>
                        {e.title1}
                        <br /> {e.title2}
                      </h4>
                      <p>{e.date} </p>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
          ))}
        </div>
        <div class="row">
          {BlogData.slice(3, 6).map((e, i) => (
            <div class="col-md-4">
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id}) }`}>
              <div class="news-col">
                <div class="news-cont">
                  <img src={e.img} alt="new1" />
                  <div class="news-text">
                    <h4>
                      {e.title1}
                      <br /> {e.title2}
                    </h4>
                    <p>{e.date} </p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="read-cta green-btn">
              <Link href="#">
                Read All Blogs <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
