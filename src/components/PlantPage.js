import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantsData) => setPlants(plantsData));
  }, []);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function updatePlant(updatedPlant) {
    setPlants(plants.map((plant) => 
      plant.id === updatedPlant.id ? updatedPlant : plant
    ));
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={plants} searchTerm={searchTerm} onUpdatePlant={updatePlant} />
    </main>
  );
}

export default PlantPage;
