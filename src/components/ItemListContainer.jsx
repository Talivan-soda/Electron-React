import {useState, useEffect} from "react"
import {getProductos} from "../mock/asyncData"
import ItemList from "./ItemList"
import {withLogging} from "../hocs/withLogging"
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {type} = useParams()

    useEffect(() => {
        getProductos()
            .then((productos) => {
                if (type) {
                    const filteredProducts = productos.filter(
                        (producto) => producto.category.toLowerCase() === type.toLowerCase()
                    )
                    setData(filteredProducts)
                } else {
                    setData(productos)
                }
            })
            .catch((error) => {
                setError(error)
                console.error('Error al obtener los productos:', error)
            })
            .finally(() => setLoading(false))
    }, [type])

    const ItemListWithLogging = withLogging(ItemList)

    if (loading) return <p>Cargando productos...</p>
    if (error) return <p>Error al cargar productos: {error.message}</p>

    return (
        <div>
            <h2>Nuestros productos</h2>
            <ItemListWithLogging data={data}/>
        </div>
    )
}

export default ItemListContainer