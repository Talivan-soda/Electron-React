import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from "../context/CartContext"

const CartView = () => {
    const {cart, clearCart, removeItem, total, increaseItemQuantity, decreaseItemQuantity} = useContext(CartContext)
    return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Tus productos seleccionados:</h2>
        <div>
            {cart.map((compra) => (
                <div key={compra.id} style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', width:'100%', padding:'1.5rem', borderBottom:'1px solid #ddd', gap:'1rem'}}>
                        <img src={compra.image} alt={compra.title} style={{width:'10rem', borderRadius:'8px'}}/>
                        <div style={{flex: '2', minWidth:'200px', padding:'0 1rem'}}>
                            <h5>{compra.title}</h5>
                            <p style={{margin: '0.5rem 0', color: '#555'}}>{compra.description}</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', gap:'0.75rem', minWidth:'180px'}}>
                            <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                <button className='btn btn-secondary' disabled={compra.quantity <= 1} onClick={() => decreaseItemQuantity(compra.id)}>-</button>
                                <span style={{minWidth:'2rem', textAlign:'center'}}>{compra.quantity}</span>
                                <button className='btn btn-secondary' disabled={compra.quantity >= compra.stock} onClick={() => increaseItemQuantity(compra.id)}>+</button>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', gap:'0.25rem', padding:'0.5rem', background:'#f8f9fa', borderRadius:'8px'}}>
                                <span style={{fontWeight:'600'}}>Precio unidad:</span>
                                <span>${compra.price},00</span>
                                <span style={{fontWeight:'600'}}>Subtotal:</span>
                                <span>${compra.quantity * compra.price},00</span>
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', gap:'0.75rem', minWidth:'160px'}}>
                            <span style={{display:'block', marginBottom:'0.25rem'}}>Stock restante: <strong>{compra.stock - compra.quantity}</strong></span>
                            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>Eliminar</button>
                        </div>
                </div>
            ))}
        </div>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem 0', gap:'1rem'}}>
            <span style={{fontSize:'1.2rem', fontWeight:'bold'}}>Total a pagar: ${total()},00</span>
            <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
                <Link to='/' className='btn btn-outline-primary'>Seguir comprando</Link>
                <button className='btn btn-danger' onClick={clearCart}>Vaciar carrito</button>
                <Link to='/checkout' className='btn btn-success'>Terminar compra</Link>
            </div>
        </div>
    </div>
    )
}

export default CartView
