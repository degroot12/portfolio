import React from 'react'

export default function Home() {
    return (
        <div>
            <h1>Thomas de Groot</h1>
            <a id='my-projects'>
            <h2>My Projects:</h2>
            </a>
            <div className='game-summary'>
            <h3>Super-Max</h3>
            <img src='./supermax-game-normal.png'></img>
            <p>Super-Max is a Canvas game where you have to avoid obstacles and collect points.
                If your score is higher than Lewis Hamilton's you win!
                The game has argualy the greatest soundtrack of all time</p>
            </div>
            <div className='game-summary'>
            <h3>Click-n-Meal</h3>
            <img src='./Click-n-meal-preview.png'/>
            <p>Click-n-Meal is an easy way to find the recipes to your liking. You can filter the recipes 
                based on the price, prepare time or wether it is vegan or not.
                You can also add you own recipes to the database</p>
            </div>
        </div>
    )
}
