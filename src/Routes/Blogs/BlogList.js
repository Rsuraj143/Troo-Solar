import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import BlogListComponent from '../../Components/BlogComponent/BlogListComponent'
import useDocumentTitle from '../../PageTitle'

const BlogList = () => {
  useDocumentTitle("TRoo Solar | Blog Lists")
  return ( 
    <div class="blogs-detail">
      <Header/>
      <HeroGlobal/>
      <BlogListComponent/>
      <Footer/>
    </div>
  )
}

export default BlogList