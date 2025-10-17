import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const { id, name, image, price } = plant;
  const inStock = plant.inStock !== false; // default to true if not specified

  function handleStockToggle() {
    const updatedPlant = {
      ...plant,
      inStock: !inStock
    };
    onUpdatePlant(updatedPlant);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
