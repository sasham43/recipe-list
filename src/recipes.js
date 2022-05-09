export async function getRecipes(){
    let recipes = await fetch('/recipes')

    return recipes
}