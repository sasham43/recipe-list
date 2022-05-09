export async function getRecipes(params){
    let recipeData = await fetch('http://localhost:3000/recipes')

    // console.log('recipes', recipeData)

    let recipes = await recipeData.json()

    return recipes.map(recipe => {
        let cookingTime = recipe.timers.reduce((prev, current) => {
            return prev + current
        })
        
        return {
            ...recipe,
            cookingTime
        }
    }).filter((recipe, index) => {
        // simulates get single recipe function
        // in a real app, I would store the main array in some sort of Redux state or Context API and access the individual recipe using an ID
        console.log('index', index, params.index)
        if(params?.index !== undefined){
            return index == params.index
        } else {
            return true
        }
    })
}