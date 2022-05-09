import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table } from '@mantine/core'

import { getRecipes } from '../recipes'
import Favorite from './Favorite'

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
            {/* <div className={`recipe-list-headers`}>
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
                                <div className={`recipe-list-item`}key={`recipe-list-item-${index}`}>
                                    <Link to={`/details/${index}`} >
                                        <div>{recipe.name}</div>
                                    </Link>
                                    <div>{recipe.creation_year}</div>
                                    <div>{recipe.creator}</div>
                                    <div>{recipe.cookingTime}</div>
                                    <div>
                                        <Favorite index={index} />
                                    </div>
                                </div>
                        )
                    })
                }
            </div> */}
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year Created</th>
                        <th>Creator</th>
                        <th>Cooking Time</th>
                        <th>Favorite</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipeList.map((recipe, index) => {
                            return (
                                <tr key={`recipe-list-item-${index}`}>
                                    <td>
                                        <Link to={`/details/${index}`} >
                                            <div>{recipe.name}</div>
                                        </Link>
                                    </td>
                                    <td>{recipe.creation_year}</td>
                                    <td>{recipe.creator}</td>
                                    <td>{recipe.cookingTime}</td>
                                    <td>
                                        <Favorite index={index} /> 
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}