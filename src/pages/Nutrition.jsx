import { useState } from 'react';
import './Nutrition.css';
import DailyGoals from '../components/Nutrition/DailyGoals';
import AddMealButton from '../components/Nutrition/AddMealButton';
import MealForm from '../components/Nutrition/MealForm';
import CurrentFoodList from '../components/Nutrition/CurrentFoodList';
import MealList from '../components/Nutrition/MealList';

const DEFAULT_GOALS = {
  calories: 3000,
  protein: 180,
};

const EMPTY_FORM = { name: '', calories: '', protein: '' };

export default function Nutrition() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [meals, setMeals] = useState([]);
  const [foods, setFoods] = useState([]);
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

  function handleAddFood(e) {
    e.preventDefault();
    setFoods((prev) => [...prev, { ...form, id: Date.now() }]);
    setForm(EMPTY_FORM);
  }

  function handleSubmitMeal() {
    setMeals((prev) => [
      ...prev,
      {
        id: Date.now(),
        foods: foods,
      },
    ]);
    setFoods([]);
    setForm(EMPTY_FORM);
    setShowForm(false);
  }

  return (
    <div className="nutrition-page">
      <DailyGoals
        totals={totals}
        goals={goals}
        caloriesLeft={caloriesLeft}
        caloriesPct={caloriesPct}
        proteinsLeft={proteinsLeft}
        proteinsPct={proteinsPct}
      />
      <AddMealButton
        onClick={() => {
          setShowForm(true);
          setFoods([]);
          setForm(EMPTY_FORM);
        }}
      />
      {showForm && (
        <div className="form-overlay">
          <div className="meal-popup">
            <MealForm
              handleAddFood={handleAddFood}
              form={form}
              handleFormChange={handleFormChange}
              handleCancel={handleCancel}
            />
            <CurrentFoodList
              foods={foods}
              handleDelete={handleDelete}
              handleSubmitMeal={handleSubmitMeal}
            />
          </div>
        </div>
      )}
      <MealList meals={meals} handleDelete={handleDelete} />
    </div>
  );
}
