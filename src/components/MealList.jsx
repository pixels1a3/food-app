import React from 'react';

const MealList = ({ meals, onSelectMeal }) => {
  if (!meals || meals.length === 0) {
    return <p>No meals found.</p>;
  }

  return (
    <div style={{ flex: 1, marginRight: '20px' }}>
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
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