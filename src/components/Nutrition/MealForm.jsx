export default function MealForm({
  handleAddFood,
  form,
  handleFormChange,
  handleCancel,
}) {
  return (
    <form className="meal-form" onSubmit={handleAddFood}>
      <label>Food:</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleFormChange}
        required
        placeholder="Egg"
      />
      <label>Calories:</label>
      <input
        type="text"
        name="calories"
        value={form.calories}
        onChange={handleFormChange}
        required
        placeholder="100"
      />
      <label>Protein:</label>
      <input
        type="text"
        name="protein"
        value={form.protein}
        onChange={handleFormChange}
        required
        placeholder="5"
      />
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="submit">Add Food</button>
    </form>
  );
}
