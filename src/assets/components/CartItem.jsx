import React from 'react';

const CartItem = ({ id, image, title, cantidad, price, handleRemoveFromCart }) => {
  return (
    <div className='cartItem'>
      <img src={image} />
      <h3>{title}</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {price}</p>
      <button onClick={() => handleRemoveFromCart(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
