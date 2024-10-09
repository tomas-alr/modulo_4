// Cart.jsx
import React, { useState } from 'react';
import pizzaCart from './pizzas'; // Asegúrate de que la ruta es correcta y que estás importando correctamente

const Cart = () => {
  // Establecemos el estado del carrito usando pizzaCart
  const [cart, setCart] = useState(pizzaCart.map(pizza => ({ ...pizza, quantity: 0 })));

  // Función para aumentar la cantidad de una pizza
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1; // Aumenta la cantidad
    setCart(updatedCart); // Actualiza el estado
  };

  // Función para disminuir la cantidad de una pizza
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1; // Disminuye la cantidad
    } else {
      updatedCart.splice(index, 1); // Elimina la pizza si la cantidad es 0
    }
    setCart(updatedCart); // Actualiza el estado
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <div className="row">
        {cart.filter(pizza => pizza.quantity > 0).map((pizza, index) => (
          <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
            <img src={pizza.img} className="card-img-top" alt={pizza.name} />
            <div className="card-body">
              <h5 className="card-title">{pizza.name}</h5>
              <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
              <p className="card-text">Cantidad: {pizza.quantity}</p>
              <button onClick={() => increaseQuantity(index)} className="btn btn-success">+</button>
              <button onClick={() => decreaseQuantity(index)} className="btn btn-danger">-</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${calculateTotal().toLocaleString()}</h3>
      <button className="btn btn-primary">Pagar</button>
    </div>
  );
};

export default Cart;
