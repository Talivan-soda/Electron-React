import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import {CartContext} from "../context/CartContext"


const ItemDetail = ({ detail, setQuantity }) => {
  const {addToCart, getQuantityInCart} = useContext(CartContext)
  const [purchase, setPurchase] = useState(false)
  const currentQuantity = detail ? getQuantityInCart(detail.id) : 0
  const availableStock = detail ? Math.max(detail.stock - currentQuantity, 0) : 0

  const onAdd = (cantidad) => {
    if (!cantidad || cantidad <= 0 || cantidad > availableStock) return
    addToCart(detail, cantidad)
    if (typeof setQuantity === 'function') {
      setQuantity((prev) => (prev || 0) + cantidad)
    }
    setPurchase(true)
  }
  if (!detail) {
    return <p>No hay información de producto disponible.</p>
  }

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '800px', 
      margin: '0 auto',
      textAlign: 'center',
      flexDirection: 'column',
      display: 'flex',
      gap: '20px',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)'
      }}>
      <h2>{detail.title}</h2>
      <img src={detail.image} alt={detail.title} style={{ maxWidth: '50%', display: 'block', margin: '0 auto' }} />
      <p>{detail.description}</p>
      <p><strong>Precio:</strong> ${detail.price}</p>
      <p><strong>Stock disponible:</strong> {availableStock}</p>
      <p><strong>Categoría:</strong> {detail.category}</p>
      {purchase ? (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
          <Link className="btn btn-outline-primary" to="/">Seguir comprando</Link>
          <Link className="btn btn-primary" to="/cart">Ir al carrito</Link>
        </div>
      ) : availableStock > 0 ? (
        <ItemCount stock={availableStock} onAdd={onAdd} />
      ) : (
        <p style={{ color: 'red' }}>No hay stock disponible para este producto.</p>
      )}
    </div>
  )
}

export default ItemDetail