import React from 'react'
import {useState, useEffect} from "react"
import {getProductoById} from "../mock/asyncData"
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"
import {useParams} from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../service/firebase"



const ItemDetailContainer = ({ setQuantity }) => {
    const {id} = useParams()
    const [detail, setDetail] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [invalid, setInvalid] = useState(null)

      useEffect(() => {
        const docRef = doc(db, 'electronsm', id)
        getDoc(docRef)
        .then((res)=>{
          if(res.data()){
            setDetail({id:res.id, ...res.data()})
          }else{
            setInvalid(true)
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
      }, [id])

    // useEffect(() => {
    //     if (!id) return

    //     getProductoById(id)
    //         .then((producto) => {
    //             setDetail(producto)
    //         })
    //         .catch((error) => {
    //             setError(error)
    //             console.error('Error al obtener el producto:', error)
    //         })
    //         .finally(() => setLoading(false))
    // }, [id])

    if (invalid) return <p>Producto no encontrado</p>

    if (loading) return <Loader />
    if (error) return <p>Error al cargar producto: {error.message}</p>
    if (!detail) return <p>Producto no encontrado</p>

  return (
    <div>
      {loading ? <Loader text='Cargando detalles...'/> : <ItemDetail detail={detail} setQuantity={setQuantity}/>}
    </div>
  )
}

export default ItemDetailContainer