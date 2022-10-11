import { useState } from 'react'
import './App.css'
import { Header, RecipeList } from './components'

function App() {
  // Define the base recipes
  const recipesInit = [
    {
      key: 0,
      name: "Carbonara",
      description: "Roman pasta dish",
      ingredients: ["350g of spaghetti",
        "200g Guanciale", 
        "2 Whole eggs", 
        "2 Egg yolks", 
        "100g of grated pecorino romano cheese", 
        "Ground black pepper"],
      likes: false,
      dislikes: false
    },
    {
      key: 1,
      name: "Another recipe",
      description: "Tastes great",
      ingredients: ["25g of testing",
        "Sprinkle of praying", 
        "Tears"],
      likes: false,
      dislikes: false
    },
  ]
  // Initialise a state, containing our base recipes (setRecipes to alter the likes)
  const [recipes, setRecipes] = useState(recipesInit);

  return (
    <div className="App">
      <Header 
        headerNum={1}
        headerText={"Welcome to React Recipes"}
      />

      <Header
        headerNum={2}
        headerText={"Recipes:"}
      />

      <RecipeList
        recipes={recipes}
        setRecipes={setRecipes}  
      />

    </div>
  )
}

export default App
