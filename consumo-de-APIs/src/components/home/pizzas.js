import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Esto es para obtener el id dinámico si lo necesitas más adelante

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Estado para almacenar los datos de la pizza
  const [loading, setLoading] = useState(true); // Estado para la carga
  const [error, setError] = useState(null); // Estado para los errores

  // useEffect para consumir la API de una pizza específica
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001'); // Cambia este ID según sea necesario
        if (!response.ok) {
          throw new Error('Error al obtener la pizza');
        }
        const data = await response.json();
        setPizza(data); // Guardamos la pizza en el estado
        setLoading(false); // Quitamos el estado de carga
      } catch (error) {
        console.error('Error al obtener la pizza:', error);
        setError(error.message);
        setLoading(false); // Dejamos de cargar aunque haya un error
      }
    };

    fetchPizza();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  if (loading) {
    return <p>Cargando la pizza...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pizza) {
    return <p>No se encontró la pizza</p>;
  }

  // Renderizamos los detalles de la pizza
  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.image} alt={pizza.name} />
      <p>Precio: ${pizza.price}</p>
      <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
      <p>{pizza.description}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
