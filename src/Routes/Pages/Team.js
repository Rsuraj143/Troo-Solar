import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import TeamComponent2 from '../../Components/TeamComponent/TeamComponent2'
import useDocumentTitle from '../../PageTitle'

const Team = () => {
  useDocumentTitle("TRoo Solar | Teams")
  return (
    <div class="team">
      <Header/>
      <HeroGlobal/>
      <TeamComponent2/>
      <Footer/>
    </div>
  )
}

export default Team