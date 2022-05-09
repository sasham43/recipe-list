export async function getRecipes(){
    let recipeData = await fetch('http://localhost:3000/recipes')

    console.log('recipes', recipeData)

    let recipes = await recipeData.json()

    return recipes.map(recipe => {
        let cookingTime = recipe.timers.reduce((prev, current) => {
            return prev + current
        })
        
        return {
            ...recipe,
            cookingTime
        }
    })
}