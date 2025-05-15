import React from 'react';
import '../styles/MealList.css';

const MealList = ({ meals, onSelectMeal, hasSearched }) => {
    if (meals.length === 0 && hasSearched) {
      return (
        <div className="no-meals">
          <p>No meals found.</p>
        </div>
      );
    }
  
    if (meals.length === 0 && !hasSearched) {
      return null;
    }

  return (
    <div 
    className="meal-list">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="meal-item"
          onClick={() => onSelectMeal(meal)}
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <span>{meal.strMeal}</span>
        </div>
      ))}
    </div>
  );
};

export default MealList;