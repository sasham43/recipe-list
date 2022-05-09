import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getRecipes } from '../recipes'

export default function Details(){
    let params = useParams()

    const [recipe, setRecipe] = useState()

    // console.log('what do we have', params)
    useEffect(() => {
        async function getRecipe(){
            let data = await getRecipes({index: params.index})
console.log('ddata', data)
            setRecipe(data[0])
        }

        getRecipe()
    }, [params])


    return (
        <>
            <h1>Details</h1>
            {recipe ? <div>
                <h2 className={`recipe-item`}>{recipe.name}</h2>
                <div className={`recipe-item`}>
                    <span>Cooking Time: </span> <span>{recipe.cookingTime} hours</span>
                </div>
                <div className={`recipe-item`}>
                    {recipe.creator}
                </div>
                <div className={`recipe-item`}>
                    <button>
                        Favorite
                    </button>
                </div>
                <div className={`recipe-item`}>
                    <h3>Ingredients</h3>
                    <ul>
                        {
                            recipe.ingredients.map((ingredient, index) => {
                                return  (
                                    <li key={`ingredient-${index}`}>
                                        <span className={`ingredient-quantity`}>{ingredient.quantity}</span>
                                        <span>{ingredient.name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={`recipe-item`}>
                    <h3>Steps</h3>
                    <ol>
                        {
                            recipe.steps.map((step, index) => {
                                return  (
                                    <li key={`step-${index}`}>
                                        {step}
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div> : null}
        </>
    )
}