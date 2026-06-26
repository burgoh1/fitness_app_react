export default function DailyGoals({
  totals,
  goals,
  caloriesLeft,
  caloriesPct,
  proteinsLeft,
  proteinsPct,
}) {
  return (
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
  );
}
