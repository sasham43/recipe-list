import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, Card, ActionIcon } from '@mantine/core'
import { Plus } from 'tabler-icons-react'

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
            <div className={`recipe-title`}>
                <h1>Sasha's Recipe List</h1>
                <div>
                    <Link to={`/create`}>
                        <ActionIcon>
                            <Plus></Plus>
                        </ActionIcon>
                    </Link>
                </div>
            </div>
            <Table highlightOnHover>
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