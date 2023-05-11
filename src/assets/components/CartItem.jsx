import React from 'react';
import Button from 'react-bootstrap/Button';

const CartItem = ({ id, image, title, cantidad, price, handleRemoveFromCart }) => {
  return (
    <div className='cartItem'>
      <img src={image} />
      <h3>{title}</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {price}</p>
      <Button onClick={() => handleRemoveFromCart(id)} variant="outline-danger">Eliminar</Button>
    </div>
  );
};

export default CartItem;
