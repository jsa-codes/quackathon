import { useState } from "react";



export default function FavoritesList() {
    const faves = JSON.parse(localStorage.getItem('myCats'));
    const [favorites, setFavorites] = useState(faves);


    return (
        <ul>
            {
                favorites?.map((fave, index) => (
                    <li key={index}>{fave.name}</li>
                ))
            }
        </ul>
    )
}