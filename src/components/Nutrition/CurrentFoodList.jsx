export default function CurrentFoodList({
  foods,
  handleDelete,
  handleSubmitMeal,
}) {
  return (
    <section className="meal-display-form">
      {foods.length > 0 && (
        <ul>
          {foods.map((food) => (
            <li key={food.id}>
              <span>{food.name}</span>
              <span>{food.calories} cal / </span>
              <span>{food.protein}g protein</span>
              <button onClick={() => handleDelete(food.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleSubmitMeal}>Submit Meal</button>
    </section>
  );
}
