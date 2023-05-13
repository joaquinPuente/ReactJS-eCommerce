import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBars from './assets/components/NavBars';
import Carrusel from './assets/components/Carrusel';
import Footer from './assets/components/Footer';
import ItemListContainer from './assets/components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './assets/components/ItemDetailContainer';
import { CartProvider } from './assets/dataProvider/CartProvider';
import { useState } from 'react';
import CartWidget from './assets/components/CartWidget';
import Checkout from './assets/components/Checkout';


function App() {
  const [carritoItem, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) || []);

  return (
    <CartProvider.Provider value={{carritoItem, setCarrito}}>
    <div className="App">
      
      <BrowserRouter>
      <NavBars/>

      <Routes>
        <Route path='/' element={<Carrusel/>} />
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/productos/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartWidget/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
      
    </div>
    </CartProvider.Provider>
  )
}

export default App
