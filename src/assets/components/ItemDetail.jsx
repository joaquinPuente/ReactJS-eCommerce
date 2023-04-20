import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, title, price, image, category, cantidad }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    // Aquí puedes hacer algo con el producto y la cantidad seleccionada
    console.log(`Agregando ${selectedQuantity} unidades de ${title} al carrito.`);
  };

  return (
    <div>
      <div class="card mb-3" key={id}>
        <img src={image} class="card-img-top" alt="Wild Landscape" />
        <div class="card-body">
          <h5 class="card-title"> {title} </h5>
          <p class="card-text">Esta es una breve descripcion del producto</p>
          <p class="card-text">
            <small class="text-muted">Precio: {price} </small>
          </p>
          <p class="card-text">
            <small class="text-muted">Stock disponible: {cantidad} </small>
          </p>
          <ItemCount
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
            stock={cantidad}
          />
          <Button className="me-2" variant="primary" onClick={handleAddToCart}>
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

export default ItemDetail;