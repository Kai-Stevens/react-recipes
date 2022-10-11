import Recipe from '../Recipe'

const RecipeList = ({recipes, setRecipes}) => {
    console.log(recipes);
    return (
        <div className='recipe-container'>
            <ul className='recipe-list'>
                {recipes.map(recipe => <Recipe recipe={recipe} recipes={recipes} setRecipes={setRecipes}/>)}
            </ul>
        </div>
    )
}

export default RecipeList;