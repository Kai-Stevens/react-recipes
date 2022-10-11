import { useState } from 'react'
import './App.css'
import { Header } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header 
        headerNum={1}
        headerText={"Welcome to React Recipes"}
      />

      <Header
        headerNum={2}
        headerText={"Recipes: "}
      />

    </div>
  )
}

export default App
