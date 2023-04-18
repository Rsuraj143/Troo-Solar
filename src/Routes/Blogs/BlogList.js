import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import BlogListComponent from '../../Components/BlogComponent/BlogListComponent'

const BlogList = () => {
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