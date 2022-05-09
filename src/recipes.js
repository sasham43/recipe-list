export async function getRecipes(params){
    let recipeData = await fetch('http://localhost:3000/recipes')

    // console.log('recipes', recipeData)

    let recipes = await recipeData.json()

    return recipes.map(recipe => {
        let cookingMins = recipe.timers.reduce((prev, current) => {
            return prev + current
        })
        // console.log('minutes', cookingMins)
        let cookingHours = cookingMins / 60
        // console.log('hours', cookingHours)
        let cookingTime = cookingHours.toFixed(2)
        // console.log('time', cookingTime)
        
        return {
            ...recipe,
            cookingTime
        }
    }).filter((recipe, index) => {
        // simulates get single recipe function
        // in a real app, I would store the main array in some sort of Redux state or Context API and access the individual recipe using an ID
        if(params?.index !== undefined){
            return index == params.index
        } else {
            return true
        }
    })
}