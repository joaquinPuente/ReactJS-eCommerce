import React, { useState, useEffect} from 'react'
import { getProductById } from '../../asyncMock';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductById(4)
    .then(response => {setProduct(response)})
    .catch(error => {console.log(error)})
  }, []);
      
  return (
  <div className='itemDetalle'>
      <ItemDetail {...product} />
  </div>
  )
}
