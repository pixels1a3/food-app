import React from 'react';
import '../styles/MealList.css';

const MealList = ({ meals, onSelectMeal }) => {
  if (!meals || meals.length === 0) {
    return <p style={{ padding: '20px' }}>No meals found.</p>;
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