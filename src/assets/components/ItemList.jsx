import React from 'react'
import Item from "./Item"

const ItemList = ({products}) => {

    
  return (
      <div className='containerCartas'>
        {products.map(prod => <Item key={prod.id} {...prod} />)}
      </div>
  )
}

export default ItemList

