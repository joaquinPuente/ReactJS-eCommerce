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


function App() {
      
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBars/>

      <Routes>
        <Route path='/' element={<Carrusel/>} />
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/productos/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
    
  )
}

export default App
