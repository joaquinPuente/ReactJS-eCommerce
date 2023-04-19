import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../asyncMock';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(3)
    .then(response => {setProduct(response)})
    .catch(error => {console.log(error)})
  }, []);
      
  return (
  <div className='itemDetalle'>
      <ItemDetail {...product} />
  </div>
  )
}
