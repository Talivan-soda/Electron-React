import React from 'react'
import { PropagateLoader } from 'react-spinners'

const Loader = ({text}) => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        flexDirection: 'column',
    }}>
        <PropagateLoader />
    </div>
  )
}

export default Loader