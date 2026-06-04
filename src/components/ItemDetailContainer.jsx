import React from 'react'
import {useState, useEffect} from "react"
import {getProductoById} from "../mock/asyncData"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [detail, setDetail] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!id) return

        getProductoById(id)
            .then((producto) => {
                setDetail(producto)
            })
            .catch((error) => {
                setError(error)
                console.error('Error al obtener el producto:', error)
            })
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <p>Cargando detalle...</p>
    if (error) return <p>Error al cargar producto: {error.message}</p>
    if (!detail) return <p>Producto no encontrado</p>

  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  )
}

export default ItemDetailContainer