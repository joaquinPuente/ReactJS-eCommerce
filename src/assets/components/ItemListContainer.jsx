import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from './ItemList'



const ItemListContainer = () => {

    const [products,setProducts] = useState([])
    const { categoryId } = useParams()
    
    useEffect(() => {
      const asyncFunc = categoryId ? getProductsByCategory(categoryId) : getProducts();
      
      asyncFunc
        .then(response => {
          setProducts(response);
          console.log("response de set product es:", response);
        })
        .catch(error => {
          console.error(error);
        });
    }, [categoryId]);
    
    
  return (
    <div>
        <h1>{categoryId}</h1>
        <ItemList products={products}/>
        
    </div>
  )
}

export default ItemListContainer