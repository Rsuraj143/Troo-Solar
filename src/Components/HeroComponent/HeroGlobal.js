import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HeroComponent.css";
import { HeaderData } from "../Header/HeaderData";
import { useSearchParams } from "react-router-dom";
import { ProjectData } from "../ProjectComponent/ProjectData";
import { ServiceData } from "../ServiceComonent/ServiceData";
import { BlogData } from "../BlogComponent/BlogData";

const HeroGlobal = () => {
  const [heading, setHeading] = useState();
  const [details, setDetails] = useState();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  let pathName = location.pathname;

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      if (pathName.includes("Project_Details")) {
        const Pdata = ProjectData.find((d) => d.id == id);
        setHeading(Pdata.title);
      }
      
      if (pathName.includes("Service_Details")) {
        const Sdata = ServiceData.find((d) => d.id == id);
        setHeading(Sdata.name);
      }
      
      if (pathName.includes("Blog_Details")) {
      const Bdata = BlogData.find((d) => d.id == id);
      setHeading(Bdata.title1);
      }

    } else {
      const data = HeaderData.find((data) => {
        if (data?.subNav) {
          const subTitel = data?.subNav?.find((s) => s.path === pathName);
          if (subTitel) {
            return data;
          }
        } else if (data.path === pathName) {
          return data;
        }
      });

      if (data?.subNav) {
        const obj = data?.subNav.find((s) => s.path === pathName);
        setHeading(obj.heading);
        setDetails(obj.details);
      } else {
        setHeading(data.heading);
        setDetails(data.details);
      }
    }
  }, []);

  useEffect(() => {
    const pathnamee = location.pathname.split("/").filter((p) => !!p);
    const breadcrumbs = pathnamee.map((e, i) => ({
      title: e,
      path: `/${pathnamee.slice(0, i + 1).join("/")}`,
    }));
    setBreadcrumbs(breadcrumbs);
  }, [location]);

  return (
    <section
      className="troo-da-subpagebanner-section"
      id="troo-da-subpagebanner-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-page tile">
              <h2>{heading}</h2>
              <span>{details}</span>
            </div>
          </div>
          <div className="breadcrumb-ss">
            <nav>
              <ul className="breadcrumb">
                {breadcrumbs.map((breadcrumb, index) => (
                  <li
                    className={`breadcrumb-item${
                      index === breadcrumbs.length - 1 ? " current" : ""
                    }`}
                  >
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
  );
};

export default HeroGlobal;
