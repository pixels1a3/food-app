import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MealList from './components/MealList';
import MealDetails from './components/MealDetails';

function App() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      setMeals([]);
      return;
    }
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  /* user's selected meal */
  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div>
      <h1>Food Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <div style={{ display: 'flex' }}>
        <MealList meals={meals} onSelectMeal={handleSelectMeal} />
        <MealDetails meal={selectedMeal} />
      </div>
    </div>
  );
}

export default App;