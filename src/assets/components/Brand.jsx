import React from 'react'
import Logo from "../../assets/img/sneaker.png"
import { Link } from 'react-router-dom'

const Brand = () => {

  return (
    <Link to="/" className='linkTo'>
    <div className='brandLogo'>  
      <img src={Logo} alt="" />
      <h2>Sneakers Top</h2>    
    </div>
    </Link>
  )
}

export default Brand