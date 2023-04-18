import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../Images/blog-1.png";
import blog2 from "../../Images/blog-2.png";
import blog3 from "../../Images/blog-3.png";
import blog4 from "../../Images/blog-4.png";
import scarch from "../../Images/search.png";
import call from "../../Images/phone-call.svg";

import blImg from "../../Images/bl-arrow.png";

const BlogListComponent = () => {
  return (
    <section
      class="troo-da-service-deails-section"
      id="troo-da-service-deails-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="service-detils blog-ss">
              <Link href="#">
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
                <span>
                  Learn More <img src={blImg} alt="blImg" />
                </span>
              </Link>
            </div>
            <div class="service-detils blog-ss">
              <Link href="#">
                <strong>December 8, 2020- By: Admin</strong>
                <img src={blog2} alt="blog2" />
                <h2>Home Windmill, Reuse & Maintenance</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribu ssfr4 and tion of letters, as opposed to using
                  'Content here, content here', making it look like readable
                  English. Many desktop publishing packages and web page editors
                  now use Lorem Ipsum as their default model text.
                </p>
                <span>
                  Learn More <img src={blImg} alt="blImg" />
                </span>
              </Link>
            </div>
            <div class="service-detils blog-ss">
              <Link href="#">
                <strong>December 8, 2020- By: Admin</strong>
                <img src={blog3} alt="blog3" />
                <h2>We Re-shaping Energy For a Better Quality</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribu ssfr4 and tion of letters, as opposed to using
                  'Content here, content here', making it look like readable
                  English. Many desktop publishing packages and web page editors
                  now use Lorem Ipsum as their default model text.
                </p>
                <span>
                  Learn More <img src={blImg} alt="blImg" />
                </span>
              </Link>
            </div>
            <div class="service-detils blog-ss">
              <Link href="#">
                <strong>December 8, 2020- By: Admin</strong>
                <img src={blog4} alt="blog4" />
                <h2>Avoid Solar Panels Damage Your Top Roof</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribu ssfr4 and tion of letters, as opposed to using
                  'Content here, content here', making it look like readable
                  English. Many desktop publishing packages and web page editors
                  now use Lorem Ipsum as their default model text.
                </p>
                <span>
                  Learn More <img src={blImg} alt="blImg" />
                </span>
              </Link>
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
                    <Link href="#">Power System</Link>{" "}
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
                    <img src={call} alt="call" />
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
      </div>
    </section>
  );
};

export default BlogListComponent;
