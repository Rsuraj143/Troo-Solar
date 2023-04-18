import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./HeroComponent.css";

const HeroGlobal = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const location = useLocation()
  useEffect(() => {
    const pathnamee = location.pathname.split("/").filter((p) => !!p);
    const breadcrumbs = pathnamee.map((e, i) => ({
      title: e,
      path: `/${pathnamee.slice(0, i + 1).join("/")}`,
    }));
    console.log(breadcrumbs);
    setBreadcrumbs(breadcrumbs);
  }, [location]);
  console.log(breadcrumbs);
  return (
    <section class="troo-da-subpagebanner-section" id="troo-da-subpagebanner-section">
       <div class="container">
        <div class="row">
         <div class="col-md-12">
           <div class="sub-page tile">
            <h2>About Us</h2>
           <span>Lorem Ipsum is simply dummy text of the printing <br/ >and typesetting industry.</span>
           </div>
          </div>
          <div class="breadcrumb-ss">
            <nav>
              <ul class="breadcrumb">
                 {breadcrumbs.map((breadcrumb, index) => (
                    <li className={`breadcrumb-item${index === breadcrumbs.length - 1 ? ' current' : ''}`}>
                    <Link key={index} to={breadcrumb.path}>
                      {breadcrumb.title.replace(/_/g, " ")}
                    </Link>
                  </li>
                  ))}
          
              </ul>
            </nav>
          </div>
         </div>
       </div>
  </section>
  )
}

export default HeroGlobal