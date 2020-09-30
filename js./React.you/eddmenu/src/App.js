import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './component/Recipe';

const App = () => {

   const API_ID = "72ef9002";
   const API_KEY = "d705fef1af30349d8077193ffe13aee6";

  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState("chicken");


   useEffect(() => {
    GetRecipes()
  }, [query])


   const GetRecipes =  async () => {
    
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
   }

   const updateSearch = e => {
    setSearch(e.target.value)
   }

   const getSearch = e => {
     e.preventDefault();
     setQuery(search)
     setSearch("")
   }

  return (
    <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      <button className="search-button" type="submit">Search</button>
    </form>
    {recipes.map(recipe => (

      <Recipe
      key={recipe.recipe.label} 
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories} 
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       />
    ))}
    </div>
  );
}

export default App;