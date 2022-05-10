import { useState, useEffect } from 'react'

export default function FavoriteCounter(props) {
    const [numFavorites, setNumFavorites] = useState(0)

    function checkNumFavorites(){
        let favoritesJSON = window.localStorage.getItem('favorites')
        let favorites = JSON.parse(favoritesJSON)
        // console.log('setting', favorites)

        if(favorites){
            setNumFavorites(favorites.length)
        }
    }

    useEffect(() => {
        window.addEventListener('storage', checkNumFavorites)

        checkNumFavorites() // run initially

        return () => window.removeEventListener('storage', checkNumFavorites)
    }, [])

    return (
        <>
            <div className={`favorite-counter`}>
                {numFavorites} Favorites
            </div>
        </>
    )
}