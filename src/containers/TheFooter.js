import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>

        <a >INSTA AQAR</a>
        <span className="ml-1">&copy; 2022 INSTA AQAR Realestate Comp.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a >INSTA AQAR</a>

      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
