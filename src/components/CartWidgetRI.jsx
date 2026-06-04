import { BsCart4 } from "react-icons/bs";


const CartWidgetRI = () => {
    return (
        <div>
            <BsCart4 size={20} color="black" />
            <span style={{color:'white', fontWeight:'bold'}}>0</span>
        </div>
    )
}

export default CartWidgetRI;