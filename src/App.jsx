import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import ItemListContainer from "./components/ItemListContainer";
import NavBarRB from "./components/NavBarRB";
import {withLogging} from './hocs/withLogging';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from "./components/Error";
import {CartProvider} from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";



function App() {
  const ItemListContainerWithLogging = withLogging(ItemListContainer)
  const [quantity, setQuantity] = useState(0)

  return (
    <BrowserRouter>
    <CartProvider>
      <NavBarRB quantity={quantity}/>
      <Routes>
        <Route path="/" element={<ItemListContainerWithLogging />} />
        <Route path="/category/:type" element={<ItemListContainerWithLogging />} />
        <Route path="/item/:id" element={<ItemDetailContainer setQuantity={setQuantity}/>} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
