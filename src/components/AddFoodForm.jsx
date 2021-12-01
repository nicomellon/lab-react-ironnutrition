import { Input } from "antd";
import { useState } from "react";

function AddFoodForm(props) {
  // control state of form
  const [formState, setFormState] = useState({});
  const [showForm, setShowForm] = useState(true);

  // handle state changes
  function handleInput(event) {
    const { name, value } = event.target;
    setFormState(Object.assign({}, formState, { [name]: value }));
  }

  // handle submit of the form
  function handleSubmit(event) {
    event.preventDefault();
    props.addFood(formState);
    setFormState({});
  }

  function toggleShow() {
    setShowForm(!showForm);
  }

  return showForm ? (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input
        name="name"
        placeholder="Type the name of the food"
        value={formState.name}
        type="text"
        onChange={handleInput}
      />

      <label htmlFor="image">Image</label>
      <Input
        name="image"
        placeholder="A link to the image of your food"
        value={formState.image}
        type="text"
        onChange={handleInput}
      />

      <label htmlFor="calories">Calories</label>
      <Input
        name="calories"
        placeholder="How many calories does your food contain?"
        value={formState.calories}
        type="number"
        onChange={handleInput}
      />

      <label htmlFor="servings">Servings</label>
      <Input
        name="servings"
        placeholder="How many servings?"
        value={formState.servings}
        type="number"
        onChange={handleInput}
      />

      <button>Create</button>
      <button onClick={toggleShow}>Hide Form</button>
    </form>
  ) : (
    <button onClick={toggleShow}>Add New Food</button>
  );
}

export default AddFoodForm;
