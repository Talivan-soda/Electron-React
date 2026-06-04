import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ detail }) => {
  if (!detail) {
    return <p>No hay información de producto disponible.</p>
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>{detail.title}</h2>
      <img src={detail.image} alt={detail.title} style={{ maxWidth: '100%', marginBottom: '20px' }} />
      <p>{detail.description}</p>
      <p><strong>Precio:</strong> ${detail.price}</p>
      <p><strong>Stock:</strong> {detail.stock}</p>
      <p><strong>Categoría:</strong> {detail.category}</p>
      <ItemCount />
    </div>
  )
}

export default ItemDetail