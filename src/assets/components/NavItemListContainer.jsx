import React from 'react'
import '../../App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


const NavItemListContainer = () => {
  return (
    <div>
        <ul className='itemList'>
            <li>
            <Link to="/" className='linkTo'>Inicio</Link>    
            </li>
            <li>
            <Link to="/productos" className='linkTo'>Todo</Link>   
            </li>
            <Dropdown>

              <Dropdown.Toggle variant="light" id="dropdown-basic">
              Categorias
              </Dropdown.Toggle>

              <Dropdown.Menu>

                <Dropdown.Item>
                <Link to="/categoria/urbana" className='linkTo'>Urbanas</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                <Link to="/categoria/deportiva" className='linkTo'>Deportiva</Link>
                </Dropdown.Item>

              </Dropdown.Menu>

            </Dropdown>
        </ul>
       
    </div>
  )
}

export default NavItemListContainer