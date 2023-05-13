import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartProvider } from '../dataProvider/CartProvider';

const ItemDetail = ({ id, title, price, image, category, cantidad }) => {
  // Agregando productos al carrito mediante el useContext(CartProvider)
  const { carritoItem, setCarrito} = useContext(CartProvider)

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    if (selectedQuantity <= cantidad) {
      const productIndex = carritoItem.findIndex(item => item.id === id);
    
      if (productIndex === -1) {
        setCarrito([...carritoItem, { id, title, price, cantidad: selectedQuantity }]);
      } else {
        const newCart = [...carritoItem];
        newCart[productIndex].cantidad += selectedQuantity;
        setCarrito(newCart);
      }
    } else {
      alert('No hay suficiente stock disponible');
    }
  };

  return (
    <div>
      <div className="card mb-3" key={id}>
        <img src={image} class="card-img-top" alt="Wild Landscape" />
        <div className="card-body">
          <h5 className="card-title"> {title} </h5>
          <p className="card-text">Esta es una breve descripcion del producto</p>
          <p className="card-text">
            <small className="text-muted">Precio: {price} </small>
          </p>
          <p className="card-text">
            <small className="text-muted">Stock disponible: {cantidad} </small>
          </p>
          <ItemCount
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
            stock={cantidad}
          />
          <Button className="me-2" 
          variant="primary" 
          onClick={handleAddToCart} 
          disabled={selectedQuantity > cantidad}>
            Comprar
          </Button>
          <Button className="me-2" variant="secondary">
            <Link to="/productos" className="linkTo1">
              Volver
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ItemDetail);
