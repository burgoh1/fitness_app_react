import { useState } from 'react';
import './Nutrition.css';

export default function Nutrition() {
  const [showForm, setShowForm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <div className="nutrition-page">
      <h1 className="nutrition-title">Nutrition</h1>
      <section className="nutrition-card">
        <h2>Daily Goals</h2>

        <h3 className="goal-label-text">Calories</h3>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill calories"
            style={{ width: `${5}%` }}
          />
        </div>
        <div className="goal-labels">
          <span className="goal-stat">
            <strong>{0} cal</strong> / {3000}
          </span>
          <span className="goal-remaining">{3000} left</span>
        </div>

        <h3 className="goal-label-text protein">Protein</h3>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill protein"
            style={{ width: `${5}%` }}
          />
        </div>
        <div className="goal-labels">
          <span className="goal-stat">
            <strong>{0} g</strong> / {160}
          </span>
          <span className="goal-remaining">{160} left</span>
        </div>
      </section>

      <button className="add-meal-btn" onClick={() => setShowForm(true)}>
        + Add Meal
      </button>

      {showForm && (
        <div className="form-overlay">
          <form className="meal-form" onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <input type="text" name="calories" />
            <input type="text" name="protein" />
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
            <button type="submit">Log Meal</button>
          </form>
        </div>
      )}
    </div>
  );
}
