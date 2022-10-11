import thumbsUp from '../../assets/thumbsUp.svg'
import IngredientList from '../IngredientList'

const Recipe = ({recipe, recipes, setRecipes}) => {
    
    // Add like/unlike functionality
    const handleLikes = () => {
        setRecipes(recipes.map(recItem => {
            if (recItem === recipe) {
                return {
                    ...recItem,
                    dislikes: false,
                    likes: !recItem.likes // Return the opposite of what it currently is 
                }
            }
            return recItem;
        }));
    }

    // Add dislike/undislike functionality
    const handleDislikes = () => {
        setRecipes(recipes.map(recItem => {
            if (recItem === recipe) {
                return {
                    ...recItem,
                    likes: false,
                    dislikes: !recItem.dislikes // Return the opposite of what it currently is 
                }
            }
            return recItem;
        }));
    }
    
    return (
        <div className="recipe-item">
            <li className='recipe-cont-list'>
                <div>{"Dish Name: " + recipe.name}</div>
                <div>{"Dish Description: " + recipe.description}</div>
                <ul className='ingredients-list'>
                    {<IngredientList ingredients={recipe.ingredients}/>}
                </ul>
            </li>
            <div className='btn-container'>
                <button className={`like-btn ${recipe.likes ? "liked" : ""}`} onClick={handleLikes}>
                    <img src={thumbsUp}></img>
                </button>
                <button className={`dislike-btn ${recipe.dislikes ? "disliked" : ""}`} onClick={handleDislikes}>
                    <img className="dislike-thumb" src={thumbsUp}></img>
                </button>
            </div>
        </div>
    )
}

export default Recipe