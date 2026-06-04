import { BsCart4 } from "react-icons/bs";
import {useContext} from "react"
import {CartContext} from "../context/CartContext"

const CartWidgetRI = ({ quantity = 0 }) => {
    const {cart} = useContext(CartContext)
    const total = cart.reduce((acc, item) => acc + (item.quantity || 0), 0)
    return (
        <div>
            <BsCart4 size={20} color="black" />
            {total > 0 && <span style={{color:'white', fontWeight:'bold'}}>{total}</span>}
        </div>
    )
}

export default CartWidgetRI;