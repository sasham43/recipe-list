import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, Card } from '@mantine/core'

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
        <Card shadow="sm">
            <h1>Recipe List</h1>
            <div>
                <Link to={`/create`}>
                    Add
                </Link>
            </div>
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
                        <th className={`center-table-cell`}>Year Created</th>
                        <th>Creator</th>
                        <th className={`center-table-cell`}>Cooking Time</th>
                        <th className={`center-table-cell`}>Favorite</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipeList.map((recipe, index) => {
                            return (
                                <tr key={`recipe-list-item-${index}`} className={`recipe-list-item`}>
                                    <td>
                                        <Link to={`/details/${index}`} >
                                            <div>{recipe.name}</div>
                                        </Link>
                                    </td>
                                    <td className={`center-table-cell`}>{recipe.createdDate.format('YYYY')}</td>
                                    <td>{recipe.creator}</td>
                                    <td className={`center-table-cell`}>{recipe.cookingTime}</td>
                                    <td className={`favorite-table-cell`}>
                                        <Favorite index={index} /> 
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Card>
    )
}