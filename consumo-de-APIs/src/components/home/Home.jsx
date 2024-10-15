import Header from './Header';
import CardPizza from './cards/CardPizza';
import pizzas from './pizzas'; // Asegúrate de que la ruta sea correcta
import './home.css';

const Home = ({ addToCart }) => {
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
            img={pizza.img}
            addToCart={() => addToCart(pizza)} // Pasamos la función como prop
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
