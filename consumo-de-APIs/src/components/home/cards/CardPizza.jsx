import React from 'react';

const CardPizza = ({ name, price, ingredients, img, addToCart }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ingredientes:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <button onClick={addToCart} className="btn btn-success">Añadir</button> {/* Ejecuta la función cuando se haga clic */}
      </div>
    </div>
  );
};

export default CardPizza;
