import React, { useState, useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { serverTimestamp, collection, addDoc } from 'firebase/firestore'
import { db } from "../service/firebase"
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [secondMail, setSecondMail] = useState('')
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const {cart, total, clearCart} = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const terminarCompra = (e) => {
        e.preventDefault()
        if(!buyer.name || !buyer.lastname || !buyer.address || !buyer.mail || !secondMail){
            setErrors('Por favor completa todos los campos')
            return
        }else if(buyer.mail !== secondMail){
            setErrors('Los emails no coinciden')
            return
        }

        setErrors(null)
        setLoading(true)
        const order = {
            comprador: buyer,
            carrito: cart,
            total: total(),
            fecha: serverTimestamp()
        }

        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then((res)=>{
            setOrderId(res.id)
            clearCart()
        })
        .catch((error) => {
            console.error(error)
            setErrors('Ocurrió un error al finalizar la compra. Intenta nuevamente.')
        })
        .finally(() => setLoading(false))
    }

    if(!cart.length && !orderId){
        return <EmptyCart />
    }

    return (
    <>
    {
        orderId
        ? <div>
            <h2>¡Gracias por tu compra!</h2>
            <p>Tu número de orden es: <strong>{orderId}</strong></p>
            <Link className='btn btn-primary' to='/' onClick={clearCart}>Volver al inicio</Link>
        </div>
        :    <div>
        <h2>Completa tus datos</h2>
        {errors && <p style={{color:'red'}}>{errors}</p>}
        <form className='p-4 border rounded shadow-sm bg-light' onSubmit={terminarCompra}>
            <input className='form-control' name='name' type="text" placeholder='Ingresa tu nombre' onChange={buyerData} />
            <input className='form-control' name='lastname' type="text" placeholder='Ingresa tu apellido' onChange={buyerData} />
            <input className='form-control' name='address' type="text" placeholder='Ingresa tu dirección' onChange={buyerData} />
            <input className='form-control' name='mail' type="email" placeholder='Ingresa tu email' onChange={buyerData} />
            <input className='form-control' name='secondmail' type="email" placeholder='Ingresa tu email nuevamente' onChange={(e)=> setSecondMail(e.target.value)} />
            <button type='submit' className='btn btn-success' disabled={loading}>{loading ? 'Finalizando compra...' : 'Finalizar compra'}</button>
        </form>
    </div>
    }
    </>
    )
}

export default Checkout