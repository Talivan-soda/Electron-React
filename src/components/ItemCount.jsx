import {useState, useEffect} from "react"

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(stock > 0 ? 1 : 0)

    useEffect(() => {
        setCount(stock > 0 ? 1 : 0)
    }, [stock])

    const purchase = () => {
        if (count > 0 && stock > 0) onAdd(count)
    }

    return (
        <div>
            <button
                className="btn btn-danger"
                disabled={stock <= 0 || count <= 1}
                onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
            >
                -
            </button>
            <span className="btn">{count}</span>
            <button
                className="btn btn-success"
                disabled={stock <= 0 || count >= stock}
                onClick={() => setCount((prev) => Math.min(prev + 1, stock))}
            >
                +
            </button>
            <button className='btn btn-primary' disabled={stock <= 0} onClick={purchase}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount;

