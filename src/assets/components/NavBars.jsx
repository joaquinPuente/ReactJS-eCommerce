import React from 'react'
import Brand from './Brand'
import Carrito from './Cart'
import NavItemListContainer from './NavItemListContainer'



const NavBars = () => {
  return (
    <div className='navBar'>
      
        <Brand/>
        <NavItemListContainer/>
        <Carrito/>
        
    </div>
  )
}

export default NavBars