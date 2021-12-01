import "./App.css";
import { useState } from "react";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

const randomNum = () => Math.floor(Math.random() * 10000);

foods.forEach((food) => (food._id = randomNum()));

function App() {
  const [foodsList, setFoodsList] = useState(foods);
  const [filteredList, setFilteredList] = useState(foods);

  const addNewFood = (newFood) => setFoodsList([newFood, ...foodsList]);

  const filterFoodList = (query) =>
    setFilteredList(
      foodsList.filter((food) =>
        food.name.toLowerCase().includes(query.toLowerCase())
      )
    );

  const deleteFood = (id) => {
    const deletedFoodArr = foodsList.filter((food) => food._id !== id);

    setFoodsList(deletedFoodArr);
    setFilteredList(deletedFoodArr);
  };

  return (
    <div className="App">
      <AddFoodForm showForm={true} addFood={addNewFood} />
      <h2>Search</h2>
      <Search searchCb={filterFoodList} />
      <h2>Food List</h2>
      <main className="foods-list">
        {filteredList.length ? (
          filteredList.map((food, idx) => (
            <FoodBox
              key={randomNum()}
              index={idx}
              food={food}
              delete={deleteFood}
            />
          ))
        ) : (
          <p>no food!</p>
        )}
      </main>
    </div>
  );
}
export default App;
