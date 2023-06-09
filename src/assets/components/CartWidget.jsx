import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { CartProvider } from '../dataProvider/CartProvider'
import CartItem from './CartItem'
import nada from '../../../public/images/Aqui no hay nada.jpg'
import { Link } from 'react-router-dom';


const CartWidget = () => {
    //CONSIGO POR CONTEXTO EL ARRAY DE DATOS DEL USECONTEXT
    const {carritoItem, setCarrito} = useContext(CartProvider)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carritoItem));
      }, [carritoItem]);

    
    useEffect(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
          setCarrito(JSON.parse(carritoGuardado));
        } else {
          setCarrito([]);
        }
    }, []);

    //FUNCION PARA BORRAR TODO
    const handleRemoveAllFromCart = () => {
        setCarrito([]);
    };

    //FUNCION PARA BORRAR SOLO UN ELEMENTO
    const handleRemoveFromCart = (productId) => {
        // Creamos una nueva variable con el carrito actual sin el producto a eliminar
        const newCart = carritoItem.filter(item => item.id !== productId);
        // Actualizamos el estado del carrito con el nuevo array
        setCarrito(newCart);
    };

    //CALCULAR EL TOTAL
    let total = 0;
    carritoItem.forEach(producto => {
        total += producto.cantidad * producto.price;
    });

    //SI NO HAY NADA EN EL CARRITO:
    if (carritoItem.length === 0) {
        return (
            <div>
                <img className="d-block mx-auto w-50" src={nada} alt="First slide"/>
            </div>
        )
    }

    return (
        <div>
            <h1>CARRITO DE COMPRAS</h1>
            {carritoItem.map((producto) => (
                <CartItem
                    key={producto.id}
                    id={producto.id}
                    image={producto.image}
                    title={producto.title}
                    cantidad={producto.cantidad}
                    price={producto.price}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            ))}
            <h2>TOTAL: ${total}</h2>
            <Button onClick={handleRemoveAllFromCart} className='me-1' variant="outline-danger" size="lg">Eliminar carrito</Button>
            <Link to="/checkout">
            <Button variant="outline-primary" size="lg">Continuar compra</Button>
            </Link>
        </div>
    )
}

export default CartWidget