import React from 'react';

const MealDetails = ({ meal }) => {
  if (!meal) {
    return <p>Select a meal to see details.</p>;
  }

  // extract ingredients etc
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(`${measure} ${ingredient}`.trim());
    }
  }

  return (
    <div style={{ flex: 2, padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{meal.strMeal}</h2>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
      />
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p style={{ whiteSpace: 'pre-wrap' }}>{meal.strInstructions}</p>
    </div>
  );
};

export default MealDetails;