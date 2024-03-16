import React from 'react'
import { IMG_URL } from '../constant'

const Cards = ({name,cuisines,avgRating,cloudinaryImageId})=>{
    return(
        <div className="cards">
            
            <img src={ IMG_URL + cloudinaryImageId} alt="" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>Ratings : {avgRating} ⭐</h4>
        </div>
        
    )
}

export default Cards