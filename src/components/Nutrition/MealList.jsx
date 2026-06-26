export default function MealList({ meals, handleDelete }) {
  return (
    <section className="meal-display-form">
      <h1 className="nutrition-title">Meal Log</h1>

      {meals.map((meal) => (
        <div key={meal.id}>
          <h3>Meal</h3>

          <ul>
            {meal.foods.map((food) => (
              <li key={food.id}>
                <span>{food.name}</span>
                <span>{food.calories} cal / </span>
                <span>{food.protein}g protein</span>
              </li>
            ))}
          </ul>
          <button onClick={() => handleDelete(meal.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
}
