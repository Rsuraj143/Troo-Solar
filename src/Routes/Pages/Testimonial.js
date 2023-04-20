import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import ReviewComponent2 from '../../Components/ReviewComponent/ReviewComponent2'
import useDocumentTitle from '../../PageTitle'

const Testimonial = () => {
  useDocumentTitle("TRoo Solar | Testimonial")
  return (
    <div class="testimonial">
      <Header/>
      <HeroGlobal/>
      <ReviewComponent2/>
      <Footer/>
    </div>
  )
}

export default Testimonial