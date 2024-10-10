import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Cart from './components/home/Cart';
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  const [cart, setCart] = useState([]); // Estado para el carrito

  // Función para añadir pizzas al carrito
  const addToCart = (pizza) => {
    const pizzaExists = cart.find(item => item.name === pizza.name);

    if (pizzaExists) {
      // Si la pizza ya está en el carrito, aumenta la cantidad
      setCart(
        cart.map(item =>
          item.name === pizza.name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Si la pizza no está en el carrito, la añade con cantidad 1
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  return (
    <>
      <Navbar />
      <Cart cart={cart} setCart={setCart} />
      <Home addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default App;
