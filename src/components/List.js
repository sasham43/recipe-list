import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getRecipes } from '../recipes'

export default function List() {

    const [recipeList, setRecipeList] = useState([])

    useEffect(() => {
        async function loadRecipes(){
            let recipeData = await getRecipes()

            setRecipeList(recipeData)
        }

        loadRecipes()
    }, [])

    return (
        <div>
            <h1>Recipe List</h1>
            <div className={`recipe-list-headers`}>
                <div>Title</div>
                <div>Year Created</div>
                <div>Creator</div>
                <div>Cooking Time</div>
                <div>Favorite</div>
            </div>
            <div>
                {
                    recipeList.map((recipe, index) => {
                        return (
                            <Link to={`/details/${index}`}>
                                <div key={`recipe-list-item-${index}`} className={`recipe-list-item`}>
                                    <div>{recipe.name}</div>
                                    <div>{recipe.creation_year}</div>
                                    <div>{recipe.creator}</div>
                                    <div>{recipe.cookingTime}</div>
                                    <div>
                                        <button>
                                            Favorite
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}