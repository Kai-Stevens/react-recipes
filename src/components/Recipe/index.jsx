import thumbsUp from '../../assets/thumbsUp.svg'

const Recipe = ({recipe, recipes, setRecipes}) => {
    
    // Add like/unlike functionality
    const handleLikes = () => {
        setRecipes(recipes.map(recItem => {
            if (recItem === recipe) {
                return {
                    ...recItem,
                    likes: !recItem.likes // Return the opposite of what it currently is 
                }
            }
            return recItem;
        }));
    }
    
    return (
        <div className="recipe-item">
            <li>
                <div>{recipe.name}</div>
                <div>{recipe.description}</div>
                <div>{recipe.ingredients}</div>
            </li>
            <button className={`like-btn ${recipe.likes ? "liked" : ""}`} onClick={handleLikes}>
                <img src={thumbsUp}></img>
            </button>
        </div>
    )
}

export default Recipe