import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import ProjectDetailsComponent from '../../Components/ProjectComponent/ProjectDetailsComponent'
import useDocumentTitle from '../../PageTitle'

const ProjectDetails = () => {
  useDocumentTitle("TRoo Solar | project Details")
  return (
    <div>
      <Header/>
      <HeroGlobal/>
      <ProjectDetailsComponent/>
      <Footer/>
    </div>
  )
}

export default ProjectDetails