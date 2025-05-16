import React from 'react';
import '../styles/MealDetails.css';

const MealDetails = ({ meal }) => { 
    if (!meal) {
      return null;
    }

  // extract ingredients etc
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {   // if it's not empty
      ingredients.push(`${measure} ${ingredient}`.trim());  // e.g. 1 cup + sugar = 1 cup sugar
    }
  }

  return (
    <div className="meal-details">
      <h2>{meal.strMeal}</h2>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h3>Instructions</h3>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealDetails;