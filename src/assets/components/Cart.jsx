import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Carrito from "../../assets/img/carrito.png"
import { CartProvider } from '../dataProvider/CartProvider'

const Cart = () => {
  const { carritoItem } = useContext(CartProvider)
  let carrito = carritoItem.length

  return (
    <Link to="/cart" className='linkTo'>
    <div className='carritoIcono'>
        <img src={Carrito} alt="" />
        <div>
          <p> {carrito} </p>
        </div>
    </div>
    </Link>
  )
}

export default Cart