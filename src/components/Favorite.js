
import { useState, useEffect } from 'react'

export default function Favorite(props) {
    const [isFavorite, setIsFavorite] = useState(false)
    function toggleFavorite(){
        let favoritesJSON = window.localStorage.getItem('favorites')
        let favorites = JSON.parse(favoritesJSON)
        let index = Number(props.index)

        // console.log('favorites', favorites)

        if(favorites.includes(index)){
            favorites = favorites.filter(item => item != index)
        } else {
            favorites.push(index)
        }
        window.localStorage.setItem('favorites', JSON.stringify(favorites))
        checkFavorite()
        // window.dispatchEvent('storage')
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