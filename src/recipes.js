import dayjs from 'dayjs'

export async function getRecipes(params){
    let recipeData = await fetch('http://localhost:3000/recipes')

    let recipes = await recipeData.json()

    return recipes.map(recipe => {
        let createdDate = dayjs(recipe.created)
        
        return {
            ...recipe,
            createdDate
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

export async function saveRecipe(recipe) {
    let response = await fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    })
}