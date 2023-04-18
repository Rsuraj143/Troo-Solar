import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroGlobal from "../Components/HeroComponent/HeroGlobal";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import WorkingProcess from "../Components/WorkingProcess/WorkingProcess";
import ProjectListCompoenent from "../Components/ProjectComponent/ProjectListCompoenent";
import TeamComponent from "../Components/TeamComponent/TeamComponent";
import ReviewComponent from "../Components/ReviewComponent/ReviewComponent";

const About = () => {
  return (
    <div className="about">
      <Header />
      <HeroGlobal />
      <AboutComponent />
      <WorkingProcess />
      <ProjectListCompoenent />
      <TeamComponent />
      <ReviewComponent />
      <Footer />
    </div>
  );
};

export default About;
