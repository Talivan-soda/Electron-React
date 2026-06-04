import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <Card style={{ 
      width: '18rem',
      borderRadius: '10px',
      border: '2px solid #ddd',
      transition: 'transform 0.2s',
      margin: '20px'
      }}>
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver detalle</Link>
      </Card.Body>
    </Card>
  )
}

export default Item