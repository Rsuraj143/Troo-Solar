import React from 'react'
import CommingCoonComponent from '../../Components/CommingSoonComponent/CommingCoonComponent'
import useDocumentTitle from '../../PageTitle'

const Commingsoon = () => {
  useDocumentTitle("TRoo Solar | Comming Soon")
  return (
    <div class="coming-soon">
      <CommingCoonComponent/>
    </div>
  )
}

export default Commingsoon