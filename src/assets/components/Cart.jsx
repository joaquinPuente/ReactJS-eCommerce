import React from 'react'
import Carrito from "../../assets/img/carrito.png"

const Cart = () => {
  return (
    <div className='carritoIcono'>
        <img src={Carrito} alt="" />
        <div>
          <p>5 unid.</p>
        </div>
    </div>
  )
}

export default Cart