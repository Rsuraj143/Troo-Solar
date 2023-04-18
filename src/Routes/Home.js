import React from 'react'
import Header from '../Components/Header/Header'
import HeroComponent from '../Components/HeroComponent/HeroComponent'
import Footer from '../Components/Footer/Footer'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import ServiceComonent from '../Components/ServiceComonent/ServiceComonent'
import WorkingProcess from '../Components/WorkingProcess/WorkingProcess'
import ProjectComponent from '../Components/ProjectComponent/ProjectComponent'
import TeamComponent from '../Components/TeamComponent/TeamComponent'
import ReviewComponent from '../Components/ReviewComponent/ReviewComponent'
import FAQcomponent from '../Components/FAQComponent/FAQcomponent'
import PortfolioComponent from '../Components/PortfolioComponent/PortfolioComponent'
import FormComponent from '../Components/ContactComponent/FormComponent'
import PricingComponent from '../Components/PricingComponent/PricingComponent'
import BlogComponent from '../Components/BlogComponent/BlogComponent'

const Home = () => {
  return (
    <div>
      <Header/>
      <HeroComponent/>
      <AboutComponent/>
      <ServiceComonent/>
      <WorkingProcess/>
      <ProjectComponent/>
      <TeamComponent/>
      <ReviewComponent/>
      <FAQcomponent/>
      <PortfolioComponent/>
      <FormComponent/>
      <PricingComponent/>
      <BlogComponent/>
      <Footer/>
    </div>
  )
}

export default Home