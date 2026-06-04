import {useState, createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const getQuantityInCart = (id) => {
        const product = cart.find((prod) => prod.id === id)
        return product ? product.quantity : 0
    }

    const addToCart = (item, quantity) => {
        const currentQuantity = getQuantityInCart(item.id)
        const availableStock = Math.max(item.stock - currentQuantity, 0)
        const quantityToAdd = Math.min(quantity, availableStock)

        if (quantityToAdd <= 0) return

        setCart((prevCart) => {
            if (prevCart.some((prod) => prod.id === item.id)) {
                return prevCart.map((prod) => {
                    if (prod.id === item.id) {
                        return {
                            ...prod,
                            quantity: Math.min(prod.quantity + quantityToAdd, prod.stock),
                        }
                    }
                    return prod
                })
            }
            return [...prevCart, { ...item, quantity: quantityToAdd }]
        })
    }

    const updateItemQuantity = (id, newQuantity) => {
        setCart((prevCart) =>
            prevCart.reduce((acc, prod) => {
                if (prod.id !== id) return [...acc, prod]
                const clampedQuantity = Math.max(0, Math.min(newQuantity, prod.stock))
                if (clampedQuantity === 0) return acc
                return [...acc, { ...prod, quantity: clampedQuantity }]
            }, [])
        )
    }

    const increaseItemQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((prod) => {
                if (prod.id !== id) return prod
                return {
                    ...prod,
                    quantity: Math.min(prod.quantity + 1, prod.stock),
                }
            })
        )
    }

    const decreaseItemQuantity = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((prod) => {
                    if (prod.id !== id) return prod
                    return {
                        ...prod,
                        quantity: Math.max(prod.quantity - 1, 0),
                    }
                })
                .filter((prod) => prod.quantity > 0)
        )
    }

    const clearCart = () => setCart([])

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }
    
    const isInCart = (id) => cart.some((prod) => prod.id === id)

    const total = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0)
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }


    return (
        <CartContext.Provider value={{cart, clearCart, addToCart, removeItem, isInCart, total, totalQuantity, updateItemQuantity, increaseItemQuantity, decreaseItemQuantity, getQuantityInCart}}>
            {children}
        </CartContext.Provider>
    )
}