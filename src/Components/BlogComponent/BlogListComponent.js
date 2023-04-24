import React from "react";
import { Link, createSearchParams } from "react-router-dom";
import scarch from "../../Images/search.png";
import call from "../../Images/phone-call.svg";
import { BlogData } from "./BlogData";
import blImg from "../../Images/bl-arrow.png";

const BlogListComponent = () => {
  return (
    <section
      className="troo-da-service-deails-section"
      id="troo-da-service-deails-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {BlogData.slice(0, 4).map((e, i) => (
              <div className="service-detils blog-ss">
                <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id: e.id})}`}>
                  <strong>{e.date}</strong>
                  <img src={e.img2} alt="blog1" />
                  <h2>
                    {e.title1}
                    {e.title2}
                  </h2>
                  <p>{e.para}</p>
                  <span>
                    Learn More <img src={blImg} alt="blImg" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="sidebar">
              <div className="search-container">
                <strong>Search</strong>
                <form action="/action_page.php">
                  <input type="text" name="search" />
                  <button type="submit">
                    <img src={scarch} alt="scarch" />
                  </button>
                </form>
              </div>
              <h3>Categories</h3>
              <div className="cat-list">
                <ul>
                  <li>
                    <strong>Solar Power</strong>
                    <span>( 10 )</span>
                  </li>
                  <li>
                    <strong>WindMill</strong>
                    <span>( 10 )</span>
                  </li>
                  <li>
                    <strong>Green Energy</strong>
                    <span>( 10 )</span>
                  </li>
                  <li>
                    <strong>Electricity</strong>
                    <span>( 10 )</span>
                  </li>
                  <li>
                    <strong>Solar Energy</strong>
                    <span>( 10 )</span>
                  </li>
                  <li>
                    <strong>Power System</strong>
                    <span>( 10 )</span>
                  </li>
                </ul>
              </div>
              <div className="tag-col">
                <ul>
                  <li>
                    <Link href="#">Solar Power</Link>
                  </li>
                  <li>
                    <Link href="#">WindMill</Link>
                  </li>
                  <li>
                    <Link href="#">Green Energy</Link>
                  </li>
                  <li>
                    <Link href="#">Electricity </Link>
                  </li>
                  <li>
                    <Link href="#"> Solar Energy</Link>
                  </li>
                  <li>
                    <Link href="#">Power System</Link>{" "}
                  </li>
                </ul>
              </div>
              <div className="emergency-col">
                <span>Need Emergency?</span>
                <h4>Don’t Be Hesitate To Contact Us</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing typesetting.
                </p>
                <div className="call-us">
                  <div className="cll-img">
                    <img src={call} alt="call" />
                  </div>
                  <div className="call-text">
                    <strong>Call Us on</strong>
                    <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogListComponent;
