import React from 'react'
import '../App.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
    <div>
        <h2>{title}</h2>
        <ol>
            {ingredients.map(ingredient => (
                <li className="erku">{ingredient.text}</li>
            ))}
        </ol>
        <p>{calories}</p>
        <img src={image} />
    </div>
    );
}

export default Recipe