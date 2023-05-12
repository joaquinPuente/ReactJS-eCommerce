import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../asyncMock';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const { itemId } = useParams();

  useEffect(() => {

    getProductById(itemId)
    .then(response => {setProduct(response)})
    .catch(error => {console.log(error)})
  }, [itemId]);
      
  return (
  <div className='itemDetalle'>
      <ItemDetail
        id={product.id} 
        title={product.title}
        price={product.price}
        image={product.image}
        category={product.category}
        cantidad={product.cantidad}
      />
  </div>
  )
}
