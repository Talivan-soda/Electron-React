import {useState} from "react"

const ItemCount = () => {
    const [count, setCount] = useState(0)
    const [compra, setCompra] = useState(false)

    const purchase = () => {
        setCompra(!compra)
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={() => setCount(count + 1)}>+</button>
            <button className='btn btn-primary' onClick={purchase}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;

