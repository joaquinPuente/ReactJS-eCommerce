import React from 'react'
import Button from 'react-bootstrap/Button'


const ItemDetail = ({id,title,price,image,category,cantidad}) => {

  return (
    <div>
        <div class="card mb-3" key={id}>
        <img src={image} class="card-img-top" alt="Wild Landscape"/>
        <div class="card-body">
            <h5 class="card-title"> {title} </h5>
            <p class="card-text">
            Esta es una zapatilla de clase 
            </p>
            <p class="card-text">
            <small class="text-muted">Precio: {price} </small>
            </p>
            <p class="card-text">
            <small class="text-muted">Stock disponible: {cantidad} </small>
            </p>
            <Button className='me-2' variant="primary">Comprar</Button>       
            <Button className='me-2' variant="secondary">Detalles</Button>
        </div>
        </div>
    </div>
  )
}

export default ItemDetail