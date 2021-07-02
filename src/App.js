import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  
  const[toggle, setToggle] = useState(false);
  const[allFoods, setAllFoods] = useState(foods);
   //console.log(toggle)
  const handleSubmit = () => {
    
  }

  const handleChange = () => {
    
  }


  return (
    <div className="App">
      <FoodBox food = {foods}/>
      {toggle &&
      <form onSubmit = {handleSubmit} >
        <input onChange = {handleChange} type="text" name="name" placeholder="Food name"/>
        <input onChange = {handleChange} type="number" name="calories" placeholder="Calories count"/>
        <input onChange = {handleChange} type="text" name="image" placeholder="Image"/>
        <button>Submit</button>
      </form>
      }
     
      <button onClick = {()=> setToggle(!toggle)}>Add new food</button>
    </div>
  );
}

export default App;
