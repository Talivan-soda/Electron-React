import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import {withLogging} from "../hocs/withLogging"
import {useParams} from "react-router-dom"
import Loader from "./Loader"
import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from "../service/firebase"
import { productos, getProductos } from "../mock/asyncData"


const ItemListContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {type} = useParams()

    useEffect(() => {
        setLoading(true)
        const prodColl = collection(db, 'electronsm')
        getDocs(prodColl)
            .then((res) => {
                const list = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                const filtered = type
                    ? list.filter((producto) => producto.category?.toString().toLowerCase() === type.toLowerCase())
                    : list
                setData(filtered)
            })
            .catch((error) => {
                setError(error)
                console.error(error)
            })
            .finally(() => setLoading(false))
    }, [type])

    // useEffect(() => {
    //     setLoading(true)
    //     getProductos()
    //         .then((productos) => {
    //             if (type) {
    //                 const filteredProducts = productos.filter(
    //                     (producto) => producto.category.toLowerCase() === type.toLowerCase()
    //                 )
    //                 setData(filteredProducts)
    //             } else {
    //                 setData(productos)
    //             }
    //         })
    //         .catch((error) => {
    //             setError(error)
    //             console.error('Error al obtener los productos:', error)
    //         })
    //         .finally(() => setLoading(false))
    // }, [type])

    const ItemListWithLogging = withLogging(ItemList)

    if (loading) return <Loader />
    if (error) return <p>Error al cargar productos: {error.message}</p>

    const subirData = async () => {
        console.log('Subiendo data a Firebase...')
        const prodCollection = collection(db, 'electronsm')
        try {
            await Promise.all(productos.map((prod) => addDoc(prodCollection, prod)))
            console.log('Data subida correctamente')
        } catch (error) {
            console.error('Error al subir data:', error)
        }
    }

    return (
        <>{
            loading
            ? <Loader text={type ?'Cargando detalles...' : 'Cargando productos...'}/>
            : <><div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <img src='/img/logo-marca.webp' alt='Logo Marca' style={{ maxWidth: '100%', marginBottom: '20px' }} />
                    <h2>¡Elige el producto que buscas, con la mejor calidad y garantía!</h2>
                    <ItemListWithLogging data={data} />
                </div><button onClick={subirData}>Subir data</button></>
        }</>
    )
}

export default ItemListContainer