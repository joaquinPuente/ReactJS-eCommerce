import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import agregarPedido from '../../service/crud'
import { CartProvider } from '../dataProvider/CartProvider';


const Checkout = () => {
  const {carritoItem, setCarrito} = useContext(CartProvider)
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const pedido = {
      nombre,
      direccion,
      telefono,
      email,
      carritoItem
    };
    agregarPedido(pedido, 'pedido');
    setCarrito([])
    alert('Muchas gracias por su compra en breve nos estaremos contactando')
    setNombre('')
    setDireccion('')
    setTelefono('')
    setEmail('')
    }

    
    

  return (
    <form className='formCheckout'  onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <label>
        Dirección:
        <input type="text" value={direccion} onChange={handleDireccionChange} />
      </label>
      <label>
        Teléfono:
        <input type="number" value={telefono} onChange={handleTelefonoChange} />
      </label>
      <label>
        Correo:
        <input type="email" value={email} onChange={handleEmail} />
      </label>
      <Button type="submit" variant="outline-primary" size="lg" onClick={handleSubmit}>Realizar pedido</Button>
    </form>
  );
};

export default Checkout;
