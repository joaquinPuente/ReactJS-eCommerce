import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from './ItemList'



const ItemListContainer = () => {

    const [products,setProducts] = useState([])
    const { categoryId } = useParams()
    
    useEffect ( ()=> {
      
      const asynFunc = categoryId ? getProductsByCategory : getProducts
  
      
      asynFunc()
        .then(response =>{
          setProducts(response)
        })
        .catch(error => {
          console.error(error)
        })
    }, [categoryId] )
    console.log(products)
  return (
    <div>
        <h1>Productos:</h1>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer