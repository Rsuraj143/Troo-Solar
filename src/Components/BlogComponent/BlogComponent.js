import React from "react";
import "./BlogComponent.css";
import arrow from "../../Images/arrow.png";
import { Link, createSearchParams } from "react-router-dom";
import { BlogData } from "./BlogData";

const BlogComponent = () => {
  return (
    <section className="troo-da-news-section" id="troo-da-news-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-txt">
              <span>Recent News</span>
              <h2>
                Recent News & Blogs About
                <br /> Controling Your Energy Production
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {BlogData.slice(0, 3).map((e, i) => (
              <div className="col-md-4">
                 <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id: e.id})}`}>
                <div className="news-col">
                  <div className="news-cont">
                    <img src={e.img} alt="new1" />
                    <div className="news-text">
                      <h4>{e.title1}</h4>
                      <p>{e.date} </p>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
          ))}
        </div>
        <div className="row">
          {BlogData.slice(3, 6).map((e, i) => (
            <div className="col-md-4">
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id}) }`}>
              <div className="news-col">
                <div className="news-cont">
                  <img src={e.img} alt="new1" />
                  <div className="news-text">
                    <h4>{e.title1}</h4>
                    <p>{e.date} </p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="read-cta green-btn">
              <Link to="/Home/Blogs">
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
