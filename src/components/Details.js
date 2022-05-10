import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '@mantine/core'

import { getRecipes } from '../recipes'
import Favorite from './Favorite'

export default function Details(){
    let params = useParams()

    const [recipe, setRecipe] = useState()

    // console.log('what do we have', params)
    useEffect(() => {
        async function getRecipe(){
            let data = await getRecipes({index: params.index})
            
            setRecipe(data[0])
        }

        getRecipe()
    }, [params])


    return (
        <>
            <Card shadow="sm" className={`page-card`}>
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
                        {recipe.createdDate.format('MMMM D YYYY h a')}
                    </div>
                    <div className={`recipe-item`}>
                        {/* <button>
                            Favorite
                        </button> */}
                        <Favorite index={params.index} />
                    </div>
                    <div className={`recipe-card recipe-item`}>
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
                    <div className={`recipe-card recipe-item`}>
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
            </Card>
        </>
    )
}