import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import ErrorComponent from '../../Components/ErrorComponent/ErrorComponent'
import useDocumentTitle from '../../PageTitle'

const Error404 = () => {
  useDocumentTitle("TRoo Solar | ErrorPage ")
  return (
    <div>
      <Header/>
      <HeroGlobal/>
      <ErrorComponent/>
    </div>
  )
}

export default Error404