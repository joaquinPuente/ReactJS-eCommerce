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
                  Urbanas
                </Dropdown.Item>
                <Dropdown.Item>
                Deportivas
                </Dropdown.Item>

              </Dropdown.Menu>

            </Dropdown>
        </ul>
       
    </div>
  )
}

export default NavItemListContainer