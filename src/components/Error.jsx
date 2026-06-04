import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
        <img src="/img/Page-not-found.jpg" alt="Error 404" width="100%" />
        <Link to="/" className="btn btn-dark">Volver al inicio</Link>
    </div>
  )
}

export default Error