
import { useState, useEffect } from 'react'

export default function Favorite(props) {
    const [isFavorite, setIsFavorite] = useState(false)
    function toggleFavorite(){
        let favoritesJSON = window.localStorage.getItem('favorites')
        let favorites = JSON.parse(favoritesJSON)

        console.log('favorites', favorites)

        if(favorites.includes(props.index)){
            favorites = favorites.filter(item => item != props.index)
        } else {
            favorites.push(props.index)
        }
        window.localStorage.setItem('favorites', JSON.stringify(favorites))
        checkFavorite()
    }

    function checkFavorite(){
        let favoritesJSON = window.localStorage.getItem('favorites')
        let favorites = JSON.parse(favoritesJSON)
        let index = Number(props.index)
        // favorites.forEach(f => {
        //     console.log(typeof f)
        // })

        if(favorites.includes(index)){
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
        // console.log('okay', favorites,typeof props.index, index, favorites.includes(index))
    }

    useEffect(() => {
        checkFavorite()
    }, [props?.index])
    

    return (
        <>
            <button onClick={toggleFavorite}>
                Favorite { isFavorite ? 'y' : 'n'}
            </button>
        </>
    )
}