const IngredientList = ({ingredients}) => {
    console.log(ingredients);
    return (
        <>
        <p>Ingredients: </p>
        {ingredients.map(ingredient => <li>{ingredient}</li>)}
        </>
    );

}

export default IngredientList;