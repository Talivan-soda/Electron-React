import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import NavBarRB from "./components/NavBarRB";
import {withLogging} from './hocs/withLogging';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from "./components/Error";
import {NavLink} from "react-router-dom";

function App() {
  const ItemListContainerWithLogging = withLogging(ItemListContainer)

  return (
    <BrowserRouter>
      <NavBarRB />
      <Routes>
        <Route path="/" element={<ItemListContainerWithLogging />} />
        <Route path="/category/:type" element={<ItemListContainerWithLogging />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
