
import { useState, useEffect } from 'react'
import { ActionIcon } from '@mantine/core'
import { Heart } from 'tabler-icons-react'

export default function Favorite(props) {
    const [isFavorite, setIsFavorite] = useState(false)
    function toggleFavorite(){
        let favoritesJSON = window.localStorage.getItem('favorites')
        let favorites = JSON.parse(favoritesJSON)
        let index = Number(props.index)

        if(favorites.includes(index)){
            favorites = favorites.filter(item => item != index)
        } else {
            favorites.push(index)
        }
        window.localStorage.setItem('favorites', JSON.stringify(favorites))
        checkFavorite()

        // dispatch event so the favorite counter can update itself
        window.dispatchEvent( new Event('storage') ) 
    }

    function checkFavorite(){
        let favoritesJSON = window.localStorage.getItem('favorites')
        let favorites = JSON.parse(favoritesJSON)
        let index = Number(props.index)

        if(favorites.includes(index)){
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }

    useEffect(() => {
        // when the index changes, check to see if this recipe is favorited
        checkFavorite()
    }, [props?.index])
    

    return (
        <>
            <ActionIcon onClick={() => toggleFavorite()} title={'Favorite This Recipe'}>
                <Heart fill={isFavorite ? 'currentColor' : 'rgba(0,0,0,0)'}></Heart>
            </ActionIcon>
        </>
    )
}