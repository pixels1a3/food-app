import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MealList from './components/MealList';
import MealDetails from './components/MealDetails';
import './styles/App.css';
import './styles/SearchBar.css';
import './styles/MealList.css';
import './styles/MealDetails.css';

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

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="app-container">
      <h1>Food Finder</h1>
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="main-layout">
        <MealList meals={meals} onSelectMeal={handleSelectMeal} />
        <MealDetails meal={selectedMeal} /> {/* Moved back inside main-layout */}
      </div>
    </div>
  );
}

export default App;