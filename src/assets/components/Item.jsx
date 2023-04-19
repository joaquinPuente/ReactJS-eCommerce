import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Item = ({id,title,price,image,category,cantidad}) => {
  
  
   return (
     <div className='items'>
        <Card id={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Precio:{price}</Card.Text>
            <Button className='me-2' variant="primary">Comprar</Button>       
            <Button className='me-2' variant="secondary">Detalles</Button>
            </Card.Body>
        </Card>
     </div>
   )
 }
export default Item