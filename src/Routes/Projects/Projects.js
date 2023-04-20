import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import ProjectComponent2 from '../../Components/ProjectComponent/ProjectComponent2'
import useDocumentTitle from '../../PageTitle'

const Projects = () => {
  useDocumentTitle("TRoo Solar | Projects")
  return (
    <div>
    <Header/>
    <HeroGlobal/>
    <ProjectComponent2/>
    <Footer/>
  </div>
  )
}

export default Projects