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
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      setMeals([]);
      setHasSearched(false);
      setSelectedMeal(null); // clear selected meal
      return;
    }
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        setSelectedMeal(null); // clear selected meal if no results
      }
      setHasSearched(true);
    } catch (error) {
      console.error('Error fetching meals:', error);
      setMeals([]);
      setSelectedMeal(null); // clear selected meal on error
    }
  };

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="app-container">
      <h1>Food Recipe Finder</h1>
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="main-layout">
        <MealList meals={meals} onSelectMeal={handleSelectMeal} hasSearched={hasSearched} />
        <MealDetails meal={selectedMeal} meals={meals} />
      </div>
    </div>
  );
}

export default App;