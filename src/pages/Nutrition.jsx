import { useState } from 'react';
import './Nutrition.css';

const DEFAULT_GOALS = {
  calories: 3000,
  protein: 180,
};

const EMPTY_FORM = { name: '', calories: '', protein: '' };

export default function Nutrition() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [meals, setMeals] = useState([]);
  // const [foods, setFoods] = useState([]);
  const [goals] = useState(DEFAULT_GOALS);

  const totals = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + Number(meal.calories),
      protein: acc.protein + Number(meal.protein),
    }),
    { calories: 0, protein: 0 }
  );

  const caloriesLeft = Math.max(goals.calories - totals.calories, 0);
  const caloriesPct = Math.min((totals.calories / goals.calories) * 100, 100);
  const proteinsLeft = Math.max(goals.protein - totals.protein, 0);
  const proteinsPct = Math.min((totals.protein / goals.protein) * 100, 100);

  function handleSubmit(e) {
    e.preventDefault();
    setMeals((prev) => [...prev, { ...form, id: Date.now() }]);
    setForm(EMPTY_FORM);
    setShowForm(true);
  }

  function handleCancel() {
    setForm(EMPTY_FORM);
    setShowForm(false);
  }

  function handleFormChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleDelete(id) {
    setMeals((prev) => prev.filter((meal) => meal.id !== id));
  }

  function handleAddFood() {
    setForm(EMPTY_FORM);
    setMeals((prev) => [...prev, { ...form, id: Date.now() }]);
  }

  return (
    <div className="nutrition-page">
      <section className="nutrition-card">
        <h2>Daily Goals</h2>

        <h3 className="goal-label-text">Calories</h3>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill calories"
            style={{ width: `${caloriesPct}%` }}
          />
        </div>
        <div className="goal-labels">
          <span className="goal-stat">
            <strong>{totals.calories} cal</strong> / {goals.calories}
          </span>
          <span className="goal-remaining">{caloriesLeft} left</span>
        </div>

        <h3 className="goal-label-text protein">Protein</h3>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill protein"
            style={{ width: `${proteinsPct}%` }}
          />
        </div>
        <div className="goal-labels">
          <span className="goal-stat">
            <strong>{totals.protein} g</strong> / {goals.protein}
          </span>
          <span className="goal-remaining">{proteinsLeft} left</span>
        </div>
      </section>

      <button className="add-meal-btn" onClick={() => setShowForm(true)}>
        + Add Meal
      </button>

      {showForm && (
        <div className="form-overlay">
          <div className="meal-popup">
            <form className="meal-form" onSubmit={handleSubmit}>
              <label style={{ color: 'white' }}>Food:</label>
              <input type="text" name="name" onChange={handleFormChange} />
              <label style={{ color: 'white' }}>Calories:</label>
              <input type="text" name="calories" onChange={handleFormChange} />
              <label style={{ color: 'white' }}>Protein:</label>
              <input type="text" name="protein" onChange={handleFormChange} />
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button type="buttom" onClick={handleAddFood}>
                Add Food
              </button>
              <button type="submit">Submit Meal</button>
            </form>
            <section className="meal-display-form">
              {meals.length > 0 && (
                <ul>
                  {meals.map((meal) => (
                    <li key={meal.id}>
                      <span>{meal.name}</span>
                      <span>{meal.calories} cal / </span>
                      <span>{meal.protein}g protein</span>
                      <button onClick={() => handleDelete(meal.id)}>
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>
      )}

      <h1 className="nutrition-title">Meal Log</h1>
    </div>
  );
}
