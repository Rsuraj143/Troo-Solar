import React from "react";
import blog1 from "../../Images/blog-1.png";
import servicedetails from "../../Images/service-details-3.png";
import scarch from "../../Images/search.png";
import { Link, createSearchParams } from "react-router-dom";
import phonecall from "../../Images/phone-call.svg";
import { BlogData } from "./BlogData";

const BlogDetailsComponent = () => {
  return (
    <section
      class="troo-da-service-deails-section"
      id="troo-da-service-deails-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="service-detils blog-ss blog-detal">
              <strong>December 8, 2020- By: Admin</strong>
              <img src={blog1} alt="blog1" />
              <h2>Newly Built Customized Hydro Plants</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribu ssfr4 and tion of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text.
              </p>
              <div class="row">
                <div class="col-md-6">
                  <div class="servic-overview">
                    <ul>
                      <li>
                        <span>01</span>
                        <p>Streamer fish California halibut Pacif </p>
                      </li>
                      <li>
                        <span>02</span>
                        <p>Brown trout loach summer flounder</p>{" "}
                      </li>
                      <li>
                        <span>03</span>
                        <p>European minnow black dragonfish </p>
                      </li>
                      <li>
                        <span>04</span>
                        <p>Garpike cardinalfish shortnose chimaera. </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="servic-overview">
                    <ul>
                      <li>
                        <span>05</span>
                        <p>Streamer fish California halibut Pacif </p>
                      </li>
                      <li>
                        <span>06</span>
                        <p>Brown trout loach summer flounder </p>
                      </li>
                      <li>
                        <span>07</span>
                        <p>European minnow black dragonfish </p>
                      </li>
                      <li>
                        <span>08</span>
                        <p>Garpike cardinalfish shortnose chimaera.</p>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribu ssfr4 and tion of letters, as opposed to using
                'Content here, content here', making it look like readable
                English.
              </p>
            </div>
            <div class="row">
              <div class="planing-section">
                <h3>Planning the environment</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribu ssfr4 and tion of letters, as opposed to using
                  'Content here, content here', making it look like readable
                  English. Many desktop publishing packages and web page editors
                  now use Lorem Ipsum as their default model text.
                </p>
                <img src={servicedetails} alt="servicedetails" />
                <div class="arch-col">
                  <h3>Architectural Planning</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribu ssfr4 and tion of letters, as
                    opposed to using 'Content here, content here', making it
                    look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default
                    model text.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sidebar">
              <div class="search-container">
                <strong>Search</strong>
                <form action="/action_page.php">
                  <input type="text" name="search" />
                  <button type="submit">
                    <img src={scarch} alt="scarch" />
                  </button>
                </form>
              </div>
              <h3>Categories</h3>
              <div class="cat-list">
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
              <div class="tag-col">
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
                    <Link href="#">Power System</Link>
                  </li>
                </ul>
              </div>
              <div class="emergency-col">
                <span>Need Emergency?</span>
                <h4>Don’t Be Hesitate To Contact Us</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing typesetting.
                </p>
                <div class="call-us">
                  <div class="cll-img">
                    <img src={phonecall} alt="phonecall" />
                  </div>
                  <div class="call-text">
                    <strong>Call Us on</strong>
                    <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="resent-tile">Related Blogs and News</div>
          {BlogData.slice(0, 3).map((e, i) => (
            <div class="col-md-4">
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id: e.id,})}`}>
                <div class="news-col">
                  <div class="news-cont">
                    <img src={e.img} alt="news" />
                    <div class="news-text">
                      <h4>
                        {e.title1}
                        <br /> {e.title2}
                      </h4>
                      <p>{e.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsComponent;
