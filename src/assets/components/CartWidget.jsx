import React, { useContext } from 'react'
import { CartProvider } from '../dataProvider/CartProvider'
import CartItem from './CartItem'

const CartWidget = () => {
    //CONSIGO POR CONTEXTO EL ARRAY DE DATOS DEL USECONTEXT
    const {carritoItem, setCarrito} = useContext(CartProvider)
    const {id,title} = carritoItem

    //FUNCION PARA CONTINUAR COMPRA
    const handleContinuarCompra = () => {
        alert("gracias por su compra")
    }

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
                <h1>NO HAY NADA EN EL CARRITO</h1>
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
            <button onClick={handleRemoveAllFromCart}>Eliminar carrito</button>
            <button onClick={handleContinuarCompra}>Continuar compra</button>
        </div>
    )
}

export default CartWidget