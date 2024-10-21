import { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './cards/CardPizza';
import './home.css';

const Home = ({ addToCart }) => {
  const [pizzas, setPizzas] = useState([]); // Estado para almacenar las pizzas
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos
  const [error, setError] = useState(null); // Estado para manejar errores

  // useEffect para consumir la API cuando el componente se monta
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas'); // URL de tu API
        if (!response.ok) {
          throw new Error('Error al obtener las pizzas');
        }
        const data = await response.json();
        setPizzas(data); // Guardamos los datos en el estado
        setLoading(false); // Quitamos el estado de carga una vez obtenemos los datos
      } catch (error) {
        console.error('Error al obtener las pizzas:', error);
        setError(error.message);
        setLoading(false); // Dejamos de cargar aunque haya un error
      }
    };

    fetchPizzas();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Header />
      <div className="row">
        {/* Recorre el array de pizzas y renderiza una tarjeta por cada pizza */}
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index} // La prop "key" es importante para ayudar a React a identificar los elementos únicos
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.image} // Asegúrate de usar el campo correcto de la API para la imagen
            addToCart={() => addToCart(pizza)} // Pasamos la función como prop
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
